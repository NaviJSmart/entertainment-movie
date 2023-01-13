import Image from "next/image";
import React from "react";
import { convertImage, toBase64 } from "../utils/imageBlur";

const CardImage = ({ data }: any) => {
  return (
    <div className="max-w-[700px] h-[300px] w-full  relative">
      <Image
      width={700}
      height={300}
      src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        className="w-full h-full rounded-2xl "
       alt="name"
       placeholder="blur"
       blurDataURL={`data:image/svg+xml;base64,${toBase64(convertImage(700, 300))} `}
      />
    </div>
  );
};

export default CardImage;
