import React from "react"
import "./style.css"

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid jumbo">
            <div className="container">
                <h1 className="animated flipInX" id="home-title">Sales Catalog</h1>
                {/* <p class="lead">An one-stop-shop for shopping sales items from your favorite brand</p> */}
            </div>
        </div>
    )
}

export default Jumbotron;