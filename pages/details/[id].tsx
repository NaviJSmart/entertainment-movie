import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import CardDetails from "../../components/CardDetails";
import { fetcher } from "../../utils/fetcher";
const Detail = () => {
  const { query } = useRouter();
  const { data, error } = useSWR(`/api/movie/${query.id}?type=${query.type}`, fetcher);
  return <div>
    <CardDetails data={data} />
  </div>;
};

export default Detail;
