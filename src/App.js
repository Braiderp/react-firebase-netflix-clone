import React from "react";
import "./App.css";
import ROW from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <ROW
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <ROW title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <ROW title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <ROW title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <ROW title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <ROW title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <ROW title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <ROW title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
