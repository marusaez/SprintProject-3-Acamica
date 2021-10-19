import React from "react";
import ImgSearchBar from "../images/ilustra_header.svg";

const Searchbar = (props) => {
  let actualizaSearchGif = (e) => {
    e.preventDefault();
    props.setLoading(false);
    return props.setSearchGif(e.target.value);
  };
  function sugerenciaHandler(e) {
    e.preventDefault();
    props.setSearchGif(e.target.innerText);
    props.setAutocomplete(false);
    props.setShowGifs(true);
    props.setLoading(false);
  }

  return (
    <form className="SearchDiv">
      <div>
        <h1 className="SearchTitle">
          ¡Inspírate y busca los mejores
          <span className="SearchTitleBold"> GIFS!</span>
        </h1>
        <img src={ImgSearchBar} alt="header" />
      </div>

      {/* INPUT DE BÚSQUEDA */}
      <input
        className={`${props.darkMode ? "DarkInputSearch" : "LightInputSearch"}`}
        id="enterSearch"
        type="text"
        onChange={actualizaSearchGif}
        value={props.searchGif}
        placeholder="Buscar GIFS..."
      />

      {/* BOTÓN DE BÚQUEDA  */}
      <button
        onClick={(e) => {
          props.setShowGifs(true);
          props.setAutocomplete(false);
          e.preventDefault();
        }}
        className={`${
          props.darkMode ? "Darksearch-button" : "Lightsearch-button"
        }`}
      >
        <i className="fas fa-search"></i>
      </button>

      {/* BOTÓN DE BORRADO  */}
      <button
        onClick={(e) => {
          props.setAutocomplete(false);
          props.setShowGifs(false);
          props.setGifs([]);
          props.setSearchGif("");
          props.setLoading(false);
          props.setNotFound(false);
          e.preventDefault();
        }}
        className={`${
          props.darkMode ? "Darkclear-button" : "Lightclear-button"
        }`}
      >
        <i className="far fa-trash-alt"></i>
      </button>

      {/* AUTOCOMPLETADO */}
      {props.autocomplete === true ? (
        <div className="autocompletacion">
          {props.sugerencias.map((sugerencia, i) => {
            return (
              <p
                key={i}
                className={`${
                  props.darkMode ? "DarkSugerencias" : "LightSugerencias"
                }`}
                onClick={sugerenciaHandler}
              >
                {sugerencia.name}
              </p>
            );
          })}
        </div>
      ) : null}
    </form>
  );
};

export default Searchbar;
