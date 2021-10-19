import React from "react";

const GifCard = (props) => {
  return (
    <div className="gifStyle">
      <a href={props.gif.url} target="_blank" rel="noreferrer">
        <img
          width="100%"
          height="100%"
          src={props.gif.images.original.url}
          alt={props.gif.title}
        />
      </a>
    </div>
  );
};

export default GifCard;
