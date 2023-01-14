import Image from "next/image";
import React from "react";
import { convertImage, toBase64 } from "../utils/imageBlur";

const CardImage = ({ srcPath }: any) => {
  return (
    <div className="w-full h-full overflow-hidden  rounded-xl">
      <Image
        width={500}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${srcPath}`}
        className="w-full h-full hover:scale-110 transition cursor-pointer"
        alt="name"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          convertImage(600, 300)
        )} `}
      />
    </div>
  );
};

export default CardImage;
