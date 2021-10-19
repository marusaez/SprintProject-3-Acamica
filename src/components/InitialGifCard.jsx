import React from "react";

const InitialGifCard = (props) => {
  return (
    <div className="gifStyle">
      <a href={props.initialGif.url} target="_blank" rel="noreferrer">
        <img
          width="100%"
          height="100%"
          src={props.initialGif.images.original.url}
          alt={props.initialGif.title}
        />
      </a>
    </div>
  );
};

export default InitialGifCard;
