import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import Gif from "./Gif";
import Spinner from "./Spinner";

const GifGid = ({ category }) => {
  const { loading, data:images } = useFetchGifs(category);

  return (
    <div>
      <h3 className="text-uppercase font-weight-bold py-3">
        {category === "" ? "" : "ha buscado:"} {category}
      </h3>
      {loading && <Spinner />}

      <div className="row d-flex" style={{ justifyContent: "center" }}>
        {images.map((img) => {
          return <Gif key={img.id} {...img} />;
        })}
      </div>
    </div>
  );
};

export default GifGid;
