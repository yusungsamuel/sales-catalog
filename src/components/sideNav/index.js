import React from "react"
import "./style.css"

function SideNav() {

    return (

        <div id="offcanvas-usage" data-uk-offcanvas="">
            <div class="uk-offcanvas-bar">

                <button class="uk-offcanvas-close" type="button" data-uk-close></button>


                <div className="side-list">
                <a className="nav-link name" href="/">SALES CATALOG</a>

                <a className="nav-link sub-link" href="/browse">MEN</a>

                <a className="nav-link sub-link" uk-tooltip="title: Coming Soon; pos: right"  >WOMEN</a>

                <a className="nav-link sub-link" href="/about">About</a>

                
                </div>

            </div>
        </div>
    )
}

export default SideNav;