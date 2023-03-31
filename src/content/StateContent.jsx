import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Modal, Group, Pagination } from "@mantine/core";

const Content = createContext();
export function Context() {
  return useContext(Content);
}

//pagination
export const Paginate = (pageId) => {
  return (
    <Pagination.Root
      total={10}
      size="lg"
      styles={(theme) => ({
        control: {
          "&[data-active]": {
            backgroundImage: theme.fn.gradient({ from: "blue", to: "green" }),
          },
        },
      })}
    >
      <Group
        spacing={5}
        position="center"
        onClick={(e) => {
          if ("button" == e.target.localName) {
            pageId(e.target.innerText);
          }
        }}
      >
        <Pagination.Items />
      </Group>
    </Pagination.Root>
  );
};

const initialState = {
  popular: [],
  movies: [],
  series: [],
  genres: [],
  fav:[]
};
const ACTION = {
  POPULAR: "POPULAR",
  MOVIES: "MOVIES",
  SERIES: "SERIES",
  GENRES: "GENRES",
  FAV:'FAV'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.POPULAR:
      return { ...state, popular: action.payload };
      break;
    case ACTION.MOVIES:
      return { ...state, movies: action.payload };
      break;
    case ACTION.SERIES:
      return { ...state, series: action.payload };
      break;
    case ACTION.GENRES:
      return { ...state, genres: action.payload };
      break;
    case ACTION.FAV:
      return { ...state, fav:[...state.fav, action.payload] };
      break;
    default:
      return state;
      break;
  }
}

export const StateContent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [popular, setPopular] = useState([]);
  const [Movies, setMovies] = useState([]);
  const [Series, setSeries] = useState([]);
  const [Genres, setGenres] = useState([]);
  const [MvId, setMvId] = useState(0);
  const [TvId, setTvId] = useState(0);
  const [GenresMvId, setGenresMvId] = useState(0);
  const [GenresTvId, setGenresTvId] = useState(0);
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);
  const [slowSearchBar, setSlowSearchBar] = useState(false);

  useEffect(() => {
    fetchData();
    fetchMoviesData();
    fetchTvData();
    fetchGenres();
  }, [MvId, TvId, GenresMvId, GenresTvId]);
  const fetchData = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=cc85ecf8f7e08ca1990c4910f56ad4af&language=en-US`
    );
    const { results } = await api.json();
    setPopular(results);
  };
  const fetchMoviesData = async () => {
    const api = await fetch(
      GenresMvId === 0
        ? `https://api.themoviedb.org/3/movie/top_rated?api_key=cc85ecf8f7e08ca1990c4910f56ad4af&language=en-US&page=${
            MvId === 0 ? null : MvId
          }`
        : `https://api.themoviedb.org/3/discover/movie?api_key=cc85ecf8f7e08ca1990c4910f56ad4af&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${GenresMvId}&with_watch_monetization_types=flatrate}`
    );
    const { results } = await api.json();
    setMovies(results);
  };
  const fetchTvData = async () => {
    const api = await fetch(
      GenresTvId === 0
        ? (`https://api.themoviedb.org/3/tv/top_rated?api_key=cc85ecf8f7e08ca1990c4910f56ad4af&language=en-US&page=${TvId === 0 ? null : TvId}`)
        : (`https://api.themoviedb.org/3/discover/tv?api_key=cc85ecf8f7e08ca1990c4910f56ad4af&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${GenresTvId}&with_watch_monetization_types=flatrate}`)
    );
    const { results } = await api.json();
    setSeries(results);
  };
  const fetchGenres = async () => {
    const api = await fetch(
      ` https://api.themoviedb.org/3/genre/movie/list?api_key=cc85ecf8f7e08ca1990c4910f56ad4af&language=en-US`
    );
    const { genres } = await api.json();
    setGenres(genres);
  };

  useEffect(() => {
    dispatch({ type: ACTION.POPULAR, payload: popular });
    dispatch({ type: ACTION.MOVIES, payload: Movies });
    dispatch({ type: ACTION.SERIES, payload: Series });
    dispatch({ type: ACTION.GENRES, payload: Genres });
  }, [popular, Movies, Series, MvId, TvId]);
  const data = {
    state,
    setMvId,
    setTvId,
    slowTransitionOpened,
    setSlowTransitionOpened,
    slowSearchBar,
    setSlowSearchBar,
    GenresMvId,
    setGenresMvId,
    GenresTvId,
    setGenresTvId,
    dispatch,
    ACTION
  };
  return <Content.Provider value={data}>{children}</Content.Provider>;
};
