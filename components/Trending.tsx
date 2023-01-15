import React from "react";
import useSWR from "swr";
import { RootTrendingType } from "../types/movieTypes";
import { fetcher } from "../utils/fetcher";
import CardTitle from "./CardTitle";
import CardTrending from "./CardTrending";
import Spinner from "./Spinner";

const Trending = () => {
  const { data, error, isLoading } = useSWR<RootTrendingType>(
    "/api/tvmovie",
    fetcher
  );

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="mb-10">
    <CardTitle title="Trending"/>
    <section className="w-full h-full overflow-hidden">
      <section className="flex gap-x-4 overflow-x-scroll w-full h-full">
        {data &&
          data.results.map((item) => (
            <CardTrending data={item} key={item.id} />
          ))}
      </section>
    </section>
    </div>
  );
};

export default Trending;
