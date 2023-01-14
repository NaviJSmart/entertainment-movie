import React from "react";
import { ShowOrMovieType } from "../types/movieTypes";
import CardImage from "./CardImage";
import CardInfo from "./CardInfo";

const CardTrending = ({ data }: { data: ShowOrMovieType }) => {
  return (
    <div className="min-w-[500px] h-[300px] w-full relative">
      <div className="brightness-[.6]">
        <CardImage srcPath={data.backdrop_path} />
      </div>
      <div className="absolute bottom-6 left-3">
        <CardInfo data={data} />
      </div>
    </div>
  );
};

export default CardTrending;
