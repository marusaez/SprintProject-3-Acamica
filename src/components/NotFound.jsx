import React from "react";
import imgNotFound from "../images/notfound.jpg";

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>
        Lo sentimos, no encontramos ningún GIF para la palabra que buscabas, por
        favor intenta nuevamente.
      </h2>
      <img src={imgNotFound} alt="not found" />
    </div>
  );
};

export default NotFound;
