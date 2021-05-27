import React from "react";

const Gif = ({ url, title, id }) => {
  return (
    <>
      <div className="card col-md-2 mb-4">
        <img className="card-img-top" src={url} alt={title} width="100%" />
        <div className="card-body">
          <p className="card-text text-center">{title} </p>
        </div>
      </div>
    </>
  );
};

export default Gif;
