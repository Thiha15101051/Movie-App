import React from "react";
import { NavLink } from "react-router-dom";
import { Context, Paginate } from "../content/StateContent";
import "../css/img.css";

export const TvSeries = () => {
  const {
    state: { series, genres },
    setTvId,
    setGenresTvId,
    GenresTvId
  } = Context();
  return (
    <>
      <div className="flex mt-24 mx-14 my-10 items-center justify-between flex-col lg:flex-row ">
        <h1 className=" font-bold text-6xl mb-10 lg:mb-0">Top Series</h1>
        <div className="flex items-center">
          <div className="mr-3 text-xl">Categories : </div>
          <select
            onChange={(e) => {
              setGenresTvId(+e.target.value);
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
        {series.map((series) => {
          return (
            <NavLink key={series.id} to={`/detail/${'tv'}/${series.id}`}>
              <div className="w-[200px] shadow-lg hover rounded-lg">
                <div>
                  <img
                    className="img rounded-lg shadow-lg h-[300px]"
                    src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                    alt=""
                  />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
      <div className=" my-10">
        {series.length === 0 && (
          <h1 className="text-center text-2xl">
            We haven't this type of series
          </h1>
        )}
        {GenresTvId === 0 ? Paginate(setTvId) : null}
      </div>
    </>
  );
};

export default TvSeries;
