import React, { Fragment, useEffect, useState } from "react";
import BodyTv from "./body/BodyTv";


const TvShow = ()=>{
    let [tv, setTv] = useState([]);

    let myTvShow = async ()=>{
        let respose = await fetch(
            `https://api.themoviedb.org/3/tv/popular?api_key=73f27dc0c04c2c076c793f422df03221&language=en-US`
            )
        let tvData = await respose.json();
        setTv(tvData.results)
    }
    useEffect(()=>{
        myTvShow()
    },[])

    return(
        <Fragment>
                <BodyTv  tv = {tv} setTv = {setTv}/> 
        </Fragment>
    )
}

export default TvShow;