import React from "react"
import "./style.css"

function Jumbotron() {
    return (
        <div className="container text-center landing align-middle">
            <header className="jumbo-title mt-5">SALES CATALOG</header>
            <p className="description">Browse on sale items from your favorite brands</p>
            <a className="btn btn-dark" href="/browse" role="button"><span className="btn-text">GET STARTED</span></a>
        </div>
    )
}

export default Jumbotron;