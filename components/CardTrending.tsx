import Link from "next/link";
import React from "react";
import { ShowOrMovieType } from "../types/combineTypes";
import CardImage from "./CardImage";
import CardInfo from "./CardInfo";

const CardTrending = ({ data }: { data: ShowOrMovieType }) => {
  return (
    <Link
      href={`/details/${data.id}?type=${data.media_type}`}
      className="min-w-[500px] h-[300px] w-full relative cursor-pointer"
    >
      <div className="brightness-[.6]">
        <CardImage srcPath={data.backdrop_path} w={500} h={300} />
      </div>
      <div className="absolute bottom-6 left-3">
        <CardInfo data={data} />
      </div>
    </Link>
  );
};

export default CardTrending;
