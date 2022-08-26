import React, { Fragment, useState } from "react";
import "./Header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



const Header = ({searchMovies})=> {
    let onWrite = (word)=>{
        searchMovies(word)
        }

    let [togel,setTogel] = useState(false);
    
    let handleTogel = ()=>{
        setTogel(!togel);
    }
    let myClass = togel ? "show" : null;
    
    return (
        <Fragment>
            <div className="header-container">
                <div className="header-logo">
                    <Link to="/NOTFLIX/"><h1>IT'S NOTFLIX</h1></Link>
                </div>
                <nav className="header-nav">
                    <h2 onClick={handleTogel}><FontAwesomeIcon icon={faBars}/></h2>
                    <ul className={`ul-nav ${myClass}`}>
                        <Link to ="/TvShow"><li>TV Shows</li></Link>
                        <Link to= "/NOTFLIX/"><li>Movies</li></Link>
                    </ul>
                </nav>
                <div className="header-search">
                    <input onChange={(e)=>onWrite(e.target.value)} className="header-search-input" type="search" placeholder="search"/>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;