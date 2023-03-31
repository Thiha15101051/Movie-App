import React from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../content/StateContent";
import CarouselUi from "./Carousel";
import '../css/img.css'
import SmallCarousel from "./SmallCarousel";

const Home = () => {
   const {state: { popular,movies,series }} = Context();
  return (
    <>
      <CarouselUi popular={popular} ratio={16 / 9} />
      <div className=" flex flex-col p-5">
        <h1 className=" text-center lg:text-start my-5">Popular Movies</h1>
        <div className="lg:hidden w-1/2 mx-auto">
          <SmallCarousel pathName='poster_path' popular={popular} detailType={"movie"} ratio={9 / 14} />
        </div>
        <div className=" hidden lg:flex w-full">
          <SmallCarousel pathName='poster_path' popular={popular} detailType={"movie"} ratio={16 / 4} />
        </div>
      </div>
      <div className=" flex flex-col p-5">
        <h1 className=" text-center lg:text-start my-5">Top Rated Movies</h1>
        <div className="lg:hidden w-1/2 mx-auto">
          <SmallCarousel pathName='poster_path' popular={movies} ratio={9 / 14} detailType={"movie"} />
        </div>
        <div className=" hidden lg:flex w-full">
          <SmallCarousel pathName='poster_path' popular={movies} ratio={16 / 4} detailType={"movie"} />
        </div>
      </div>
      <div className=" flex flex-col p-5 mb-10">
        <h1 className=" text-center lg:text-start my-5">Top Rated Series</h1>
        <div className="lg:hidden w-1/2 mx-auto">
          <SmallCarousel pathName='poster_path' popular={series} ratio={9 / 14} detailType={"tv"} />
        </div>
        <div className=" hidden lg:flex w-full">
          <SmallCarousel pathName='poster_path' popular={series} ratio={16 / 4} detailType={"tv"} />
        </div>
      </div>
    </>
  );
};

export default Home;
