import React from "react";
import { Link } from "react-router-dom";
import "./Body.css";
import Footer from "../footer/Footer";


const Body =({movies, setMovies})=> {
    const paginateHandle = async (page)=>{
        let res = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=73f27dc0c04c2c076c793f422df03221&language=en-US&page=${page}`
        )
        let pageNum = await res.json()
        setMovies(pageNum.results)
    }

    return(
        <div className="body-boxes">
            <section className="container all-movies">
                {
                    movies.map((movie)=>{
                        return(
                            <Link  key={movie.id} to ={`/movie/${movie.id}`}>
                                <div key={movie.id} className="box-movie">
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                                    <div className="text-box">
                                        <h5>{movie.title}</h5>
                                        <p>produce date <br/>({movie.release_date})</p>
                                        <p>vote count: {movie.vote_count}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </section>
            <Footer paginateHandle = {paginateHandle} />
        </div>
    )
}
export default Body;