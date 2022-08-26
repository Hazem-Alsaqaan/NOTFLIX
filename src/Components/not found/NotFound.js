import React, { Fragment } from "react";
import "./NotFound.css"

const NotFound = ()=>{
    return(
        <Fragment>
            <div className="not-found">
                <div className="container not-found-container">
                    <div className="box-not-found">404<h4>This Page Is Not Found</h4></div>
                </div>
            </div>
        </Fragment>
    )
}
export default NotFound;