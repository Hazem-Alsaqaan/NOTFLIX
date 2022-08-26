import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./header/Header";
import Body from "./body/Body";
import DetailsMovie from "./body/DetailsMovie";
import TvShow from "../tv show/TvShow";
import NotFound from "../not found/NotFound";



const Movies = () => {
   
    let [movies, setMovies] = useState([]);
  const getData = async () => {
  let respose = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=73f27dc0c04c2c076c793f422df03221&language=en-US"
  );
  let data = await respose.json();
  setMovies(data.results);
  };
  useEffect(() => {
  getData();
  }, []);

  const searchMovies = async (word) => {
      if (word === "") {
      getData();
      } else {
      let res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=73f27dc0c04c2c076c793f422df03221&query=${word}&language=en-US&page=1&include_adult=false`
      );
      let searchData = await res.json();
      setMovies(searchData.results);
      }
  };

    

    return (
      <Fragment>
        <BrowserRouter>
            <Header searchMovies={searchMovies} />
            <Routes>
                <Route path="/NOTFLIX/" element = {<Body movies={movies} setMovies = {setMovies}/>} />
                <Route path="/movie/:id" element = {<DetailsMovie/>} />
                <Route path="/TvShow" element = {<TvShow />}  /> 
                <Route path="*" element = {<NotFound />}  /> 
            </Routes>
        </BrowserRouter>
        </Fragment>
    );
    };

export default Movies;
