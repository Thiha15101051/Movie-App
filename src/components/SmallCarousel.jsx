import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { AspectRatio } from "@mantine/core";
import { Context } from "../content/StateContent";
import "../css/img.css";
import { NavLink } from "react-router-dom";

function SmallCarousel({ popular, ratio,detailType,path }) {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  return (
    <div className="w-full">
      <AspectRatio ratio={ratio}>
        <Carousel
          className=" bg-transparent"
          slideSize="17%"
          slideGap="md"
          loop
          align="start"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          breakpoints={[
            { maxWidth: "md", slideSize: "50%" },
            { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
          ]}
        >
          {popular.map((movieImg) => {
            return (
              <Carousel.Slide
                key={movieImg.id}
                className="rounded-lg shadow-lg hover" //→
              >
                <NavLink key={movieImg.id} to={`/detail/${detailType}/${movieImg.id}`}>
                  <img
                    className="img rounded-lg shadow-lg"
                    src={`https://image.tmdb.org/t/p/w500${movieImg.poster_path}`}
                    alt=""
                  />
                </NavLink>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </AspectRatio>
    </div>
  );
}
export default SmallCarousel;
