import React from "react";
import { InferdTrendingProps } from "../pages";
import CardImage from "./CardImage";
import CardTrending from "./CardTrending";

const Trending = ({ data }: InferdTrendingProps) => {
  return (
    <section className="w-full h-full overflow-hidden">
      <section className="flex gap-x-4 overflow-x-scroll w-full h-full">
        {data.results.map((item) => (
          <CardTrending data={item} key={item.id}/>
        ))}
      </section>
    </section>
  );
};

export default Trending;
