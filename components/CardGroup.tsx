import React from "react";
import useSWR from "swr";
import { upcomingMovieType } from "../types/movieTypes";
import { fetcher } from "../utils/fetcher";
import CardCommon from "./CardCommon";
import CardTitle from "./CardTitle";

interface CardGroupType {
  url: string;
  type: string;
}

const CardGroup = ({ url, type }: CardGroupType) => {
  const { data, error, isLoading } = useSWR<upcomingMovieType>(url, fetcher);
  return (
    <>
    <CardTitle title="Upcoming" />
      <div className="container grid xl:grid-cols-4 lg:grid-cols-3  gap-6 mx-auto">
        {data &&
          data.results.map((item) => (
            <CardCommon data={item} key={item.id} type={type} />
          ))}
      </div>
    </>
  );
};

export default CardGroup;
