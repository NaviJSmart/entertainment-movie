import Image from "next/image";
import React from "react";
import { shimmer, toBase64 } from "../utils/imageBlur";

type CardImageType = {
  srcPath: string,
  w: number,
  h: number,
}

const CardImage = ({ srcPath, w, h }: CardImageType) => {
  return (
    <div className="overflow-hidden  rounded-xl">
      <Image
        src={`https://image.tmdb.org/t/p/original/${srcPath}`}
        width={w}
        height={h}
        className="w-full h-full hover:scale-110 transition cursor-pointer"
        alt="name"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(w/2, h/2)
          
        )} `}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </div>
  );
};

export default CardImage;
