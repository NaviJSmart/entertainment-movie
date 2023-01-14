import React from "react";
import { MovieDetailType } from "../types/movieTypes";
import { ShowDetailsType } from "../types/tvTypes";
import CardImage from "./CardImage";

type combineTypes = MovieDetailType & ShowDetailsType;
const CardDetails = ({ data }: { data: combineTypes }) => {
  return (
    <>
      {data && (
        <section className="flex justify-center px-12">
          <div className="pr-6 lg:min-w-[400px]">
            <CardImage srcPath={data.poster_path} w={300} h={500} />
          </div>
          <div className="flex flex-col gap-5 px-12">
            <h1 className="text-4xl ">
              {data.original_title || data.original_name}
            </h1>
            <p className="text-[#c8c8c8] text-lg">{data.tagline}</p>
            <p className="text-4xl">{data.vote_average}</p>
            <div className="flex">
              <div>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="flex">{data.genres &&data.genres.map((item) => item.name)}</div>
            <div>{data.overview}</div>
          </div>
        </section>
      )}
    </>
  );
};

export default CardDetails;
