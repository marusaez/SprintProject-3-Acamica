import React from "react";
import GifCard from "./GifCard";
import InitialGifCard from "./InitialGifCard";
import LoadingIcon from "../images/three-dots.svg";
import NotFound from "./NotFound";

const Results = ({ loading, gifs, initialGifs, notFound }) => {
  return (
    <main className="Results">
      {/* LOADING */}
      {loading ? (
        <div className="loading">
          <img width="55px" height="55px" src={LoadingIcon} alt="loading" />
        </div>
      ) : // RESULTADOS DE LA BÚSQUEDA
      gifs.length > 0 ? (
        <>
          <h1>Resultados de tu búsqueda: </h1>
          <div className="gallery-container">
            {gifs.map((gif, i) => {
              return <GifCard key={i} gif={gif} />;
            })}
          </div>
        </>
      ) : // RESULTADO NO ENCONTRADO
      notFound ? (
        <NotFound />
      ) : (
        // RESULTADOS PREDETERMINADOS / TRENDING
        <>
          <h1>Estos son los GIFs mas populares del día:</h1>
          <div className="gallery-container">
            {initialGifs.map((initialGif, i) => {
              return <InitialGifCard key={i} initialGif={initialGif} />;
            })}
          </div>
        </>
      )}
    </main>
  );
};

export default Results;
