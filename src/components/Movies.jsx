import React from "react";
import { NavLink } from "react-router-dom";
import { Context, Paginate } from "../content/StateContent";
import "../css/img.css";

export const Movies = () => {
  const {
    state: { movies, genres },
    setMvId,
    GenresMvId,
    setGenresMvId,
  } = Context();
  return (
    <>
      <div className="flex mt-24 mx-14 my-10 items-center flex-col lg:flex-row justify-between">
        <h1 className="text-center">Top Movies</h1>
        <div className="flex items-center">
          <div className="mr-3 text-xl">Categories : </div>
          <select
            name="category"
            onChange={(e) => {
              setGenresMvId(+e.target.value);
            }}
            className=" border p-2 rounded-md"
          >
            <option value={0}>All</option>
            {genres.map((genre) => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className=" flex flex-wrap gap-4 justify-center mb-10 px-2">
        {movies.map((movie) => {
          return (
            <NavLink key={movie.id} to={`/detail/${'movie'}/${movie.id}`}>
              <div className="w-[200px] shadow-lg hover rounded-lg">
                <div>
                  <img
                    className="img rounded-lg shadow-lg h-[300px]"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt=""
                  />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
      <div className=" my-10">
        <div className=" my-10">
          {movies.length === 0 && (
            <h1 className="text-center text-2xl">
              We haven't this type of Movies.
            </h1>
          )}
          {GenresMvId === 0 ? Paginate(setMvId) : null}
        </div>
      </div>
    </>
  );
};

export default Movies;
