import React from "react";
import "../../movies/body/Body.css";
import FooterTv from "../footer/FooterTv";
const BodyTv = ({tv, setTv})=> {

    let paginatTv = async (page)=>{
        let respose = await fetch(
            `https://api.themoviedb.org/3/tv/popular?api_key=73f27dc0c04c2c076c793f422df03221&language=en-US&page=${page}`
        )
        let pageData = await respose.json();
        setTv(pageData.results)
    }

    return(
        <div className="body-boxes">
        <section className="container all-movies">
            {
                tv.map((oneTv)=>{
                    return(
                            <div key={oneTv.id} className="box-movie">
                                <img src={`https://image.tmdb.org/t/p/w500/${oneTv.backdrop_path}`} alt=""/>
                                <div className="text-box">
                                    <h5 style={{fontSize: "16px"}}>{oneTv.name}</h5>
                                    <p  style={{fontSize: "14px"}}>produce date <br/>({oneTv.first_air_date})</p>
                                    <p  style={{fontSize: "12px"}}>vote average: {oneTv.vote_average}</p>
                                </div>
                            </div>
                    )
                })
            }
        </section>
        <FooterTv paginatTv = {paginatTv}/>
    </div>
    )
}
export default BodyTv;