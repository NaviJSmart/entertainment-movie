import Link from "next/link";
import React from "react";
import { ShowOrMovieType } from "../types/combineTypes";
import CardImage from "./CardImage";
import CardInfo from "./CardInfo";

const CardCommon = ({ data, type }: { data: ShowOrMovieType, type: string }) => {
  return (
    <Link href={`/details/${data.id}?type=${type}`} className="w-full">
      
      <CardImage srcPath={data.backdrop_path} w={300} h={200} />
      <CardInfo data={data} />
    </Link>
  );
};

export default CardCommon;
