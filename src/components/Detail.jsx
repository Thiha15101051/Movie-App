import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../content/StateContent';
import SmallCarousel from './SmallCarousel';
import '../css/img.css'


const Detail = () => {
  const {state:{popular,series,movies,fav},dispatch,ACTION}=Context();
  const {movie,id}=useParams();
  const [detail,setDetail]=useState({});
  console.log(fav.length)
  let image = {
    backgroundPosition: "",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "url(" + `https://image.tmdb.org/t/p/w500${detail.backdrop_path}` + ")",
  };
  useEffect(()=>{
    FetchDetail();
  },[id])
  const FetchDetail=async()=>{
    const api = await fetch(
      `https://api.themoviedb.org/3/${movie}/${id}?api_key=cc85ecf8f7e08ca1990c4910f56ad4af&language=en-US`
    );
    const data=await api.json();
    setDetail(data);
  }
  const name=(movie==='tv'? series:movies);
  const SeasonsQty = Object(detail.seasons).length;
  return (
    <>
      <div className="flex w-full h-full" style={image}>
        <div className="w-1/2 h-full flex flex-col justify-end detailImgClip">
          <h1 className=" mx-5 text-white text-border text-4xl font-bold">
            Related {movie === "tv" ? "Series" : "Movies"}
          </h1>
          <div className="mt-10 mb-5 mx-5">
            <SmallCarousel
              popular={name}
              detailType={movie}
              ratio={16 / 3}
              pathName={"backdrop_path"}
            />
          </div>
        </div>
        <div className="w-1/2 h-full detailImgBg">
          <img
            className="mx-auto w-[300px] mt-10 lg:mt-20  rounded-lg shadow-lg shadow-black"
            src={`https://image.tmdb.org/t/p/w500${detail.backdrop_path}`}
            alt=""
          />
          <h1 className="text-center text-black my-5">
            {movie === "movie" ? detail.original_title : detail.original_name}
          </h1>
          <div className="border mb-8 overflow-hidden p-5 w-4/6 rounded text-black h-40  hover:overflow-y-scroll mx-auto">
            {detail.overview}
          </div>
          <div className="text-xl flex text-black lg:items-center justify-center">
            {
              movie==='tv'? <span className='mx-40 text-black p-2'>
              {movie === "tv" ? SeasonsQty : null} Season
              {SeasonsQty > 1 ? "s" : null}
            </span>:null
            }
            <button onClick={()=>{dispatch({type:ACTION.FAV,payload:detail})}} className='border p-2 bg-black text-white rounded'>Add to Fav</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail