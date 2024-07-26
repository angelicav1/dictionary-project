import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results"
import Photos from "./Photos";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    //documentation: https://www.shecodes.io/learn/apis/images
    let apiKey = 'fct488b6f5355e5e50b3a1a472eo74dd';
    let apiSheCodesUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(apiSheCodesUrl).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

if (loaded) {
  return (
    <div className='Dictionary'>
      <section>
        <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
          <input type='search' onChange={handleKeywordChange}
          defaultValue={props.defaultKeyword} />
        </form>
        <div className="hint">
          suggested words: trees, soil, forest...
        </div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
} else {
  load();
  return "Loading";
}
}