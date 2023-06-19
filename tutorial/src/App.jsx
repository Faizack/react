import React from 'react';
import Header from "./compontent/Header";
import Movies from "./compontent/Movies";
import movies from "./movie.json";

function App() {
  return (
    <div>
      <div id="header">
        <Header />
      </div>
      <div className="main">
        {movies.map((element,index) => {
          return (
            <Movies
              key={index}
              title={element.Title}
              poster={element.Poster}
              year={element.Year}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
