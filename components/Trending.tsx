import React from "react";

import { getTrending } from "../services/data";
import CardImage from "./CardImage";

const Trending = ({ data }: any) => {
  return (
    <section className="w-full h-full">
      <section className=" ">
        {data.map((item: any) => (
          <CardImage data={item} key={item.id} />
        ))}
      </section>
    </section>
  );
};

export default Trending;
