import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Details from "../components/Details";

const Carddetails = () => {
  const { id } = useParams();
  const { data } = useFetch("http://157.245.61.32:7979/vehicles/" + id);
  return <div>{data && <Details data={data} />}</div>;
};

export default Carddetails;
