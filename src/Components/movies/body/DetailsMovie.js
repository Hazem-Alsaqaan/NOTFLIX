import React, {Fragment, useEffect, useState} from "react";
import { useParams } from "react-router";
import "./DetailsMovie.css";

const DetailsMovie = ()=>{
    let params = useParams();
    let [movieD, setMovieD] = useState([])

    

    useEffect(()=>{
        const myMovie = async ()=>{
            let res = await fetch(
                `https://api.themoviedb.org/3/movie/${params.id}?api_key=73f27dc0c04c2c076c793f422df03221&language=en-US`
                );
            let detailsData = await res.json();
            setMovieD(detailsData);    
        }
        myMovie()
    },[params.id])

    return (
        <Fragment>
            <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieD.backdrop_path})`}} className="show-details">
                <div className="img-mov">
                    <img src={`https://image.tmdb.org/t/p/w500/${movieD.poster_path}`} alt=""/>
                </div>
                <div className="text-mov">
                    <h1>{movieD.title}</h1>
                    <div>
                        <h6>overview:</h6>
                        <p>{movieD.overview}</p>
                        <h5><span>produce:</span> ({movieD.release_date})</h5>
                    </div>
                </div>
            </div>
        </Fragment>
    )
} 

export default DetailsMovie;