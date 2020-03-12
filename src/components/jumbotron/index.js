import React from "react"
import "./style.css"
import About from "../about"


function Jumbotron() {



    return (
        
        <div className="jumbo-outer">
            <div className="trigger uk-margin-small-right" data-uk-toggle="target: #offcanvas-usage">
                <i className="fas fa-caret-right"></i>
            </div>
            <div className=" mx-auto text-center jumbo">
                <a className="btn btn-dark pulse animated infinite" href="/browse" role="button"><span className="btn-text">GET STARTED</span></a>
            </div>
        </div>
    )
}

export default Jumbotron;