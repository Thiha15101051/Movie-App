import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { AspectRatio } from "@mantine/core";
import { Context } from "../content/StateContent";
import "../css/img.css"

function CarouselUi({popular,ratio}) {
  const autoplay = useRef(Autoplay({ delay: 6000 }));
  return (
    <div className=" w-full shadow-xl">
      <AspectRatio ratio={ratio} mx="auto">
        <Carousel
          // className=""  
          mx="auto"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {popular.map((movieImg) => {
            return (
              <Carousel.Slide
                key={movieImg.id}
                className="flex h-full items-center carouselBg " //→
              >
                <div className=" w-1/2 h-[400px] my-auto flex flex-col justify-evenly p-10 items-center">
                  <h1 className=" font-mono text-[22px] lg:mb-4 lg:text-[40px] font-bold">
                    {movieImg.original_title}
                  </h1>
                  <p className="mx-auto text-sm lg:text-lg hover:overflow-y-scroll p-2 lg:p-5 overflow-hidden rounded-md shadow-xl lg:hover:overflow-hidden w-[250px] h-max-[150px] lg:w-auto lg:h-auto">
                    {movieImg.overview}
                  </p>
                </div>
                <img
                  className="carouselImg w-1/2 ml-auto"
                  src={`https://image.tmdb.org/t/p/w500${movieImg.poster_path}`}
                  alt=""
                />
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </AspectRatio>
    </div>
  );
}
export default CarouselUi;