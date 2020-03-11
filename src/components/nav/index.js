import React from "react"
import "./style.css"

function Nav() {
    return (
        <ul className="nav nav-bar mb-5 sticky-top">
            <li className="nav-item">
                <a className="nav-link name" href="/">SALES CATALOG</a>
            </li>
            <li className="nav-item my-2">
                <a className="nav-link sub-link" href="/browse">MEN</a>
            </li>
            <li className="nav-item my-2">
                <span className="nav-link sub-link" uk-tooltip="title: Coming Soon; pos: right"  >WOMEN</span>
            </li>
        </ul>
    )
};

export default Nav;