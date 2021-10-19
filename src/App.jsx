import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Results from "./components/Results";

export default function App() {
  const [showGifs, setShowGifs] = useState(false);
  const [gifs, setGifs] = useState([]); // bandera
  const [searchGif, setSearchGif] = useState(""); // bandera
  const [initialGifs, setInitialGifs] = useState([]); // bandera
  const [sugerencias, setSugerencias] = useState([]);
  const [autocomplete, setAutocomplete] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  /// BÚSQUEDA DE GIFS ///
  useEffect(() => {
    if (showGifs) {
      setLoading(true);
      let peticion = fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=Q0nFNRkt16lgFlCho6MP1OOk3lMnu0tB&q=${searchGif}&limit=15&offset=0&rating=g&lang=es`
      );
      peticion
        .then((respuesta) => {
          return respuesta.json();
        })
        .then((data) => {
          data.data.length === 0 ? setNotFound(true) : setNotFound(false);
          setLoading(false);
          setGifs(data.data);
          setShowGifs(false);
          setAutocomplete(false);
          setLoading(true);
        });
    }
  }, [showGifs]);

  /// TRENDING GIFS ///
  useEffect(() => {
    if (!showGifs) {
      setLoading(true);
      let peticion = fetch(
        "https://api.giphy.com/v1/gifs/trending?api_key=Q0nFNRkt16lgFlCho6MP1OOk3lMnu0tB&limit=15&rating=g"
      );
      peticion
        .then((respuesta) => {
          return respuesta.json();
        })
        .then((data) => {
          setLoading(false);
          setInitialGifs(data.data);
          setShowGifs(false);
          setAutocomplete(false);
        });
    }
  }, [showGifs]);

  /// GIFS SUGERIDOS ///
  useEffect(() => {
    if (searchGif.length > -1) {
      let peticion = fetch(
        `https://api.giphy.com/v1/gifs/search/tags?api_key=Q0nFNRkt16lgFlCho6MP1OOk3lMnu0tB&limit=5&q=${searchGif}`
      );
      peticion
        .then((respuesta) => {
          return respuesta.json();
        })
        .then((data) => {
          setSugerencias(data.data);
          setAutocomplete(true);
        });
    }
  }, [searchGif]);

  return (
    <div className={`${darkMode ? "AppDark" : "AppLight"}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Searchbar
        showGifs={showGifs}
        setShowGifs={setShowGifs}
        searchGif={searchGif}
        setSearchGif={setSearchGif}
        setGifs={setGifs}
        autocomplete={autocomplete}
        setAutocomplete={setAutocomplete}
        sugerencias={sugerencias}
        darkMode={darkMode}
        setLoading={setLoading}
        setNotFound={setNotFound}
      />
      <Results
        showGifs={showGifs}
        gifs={gifs}
        initialGifs={initialGifs}
        loading={loading}
        setSearchGif={setSearchGif}
        searchGif={searchGif}
        notFound={notFound}
      />
    </div>
  );
}
