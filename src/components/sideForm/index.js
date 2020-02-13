import React, { Component } from "react"
import "./style.scss"
export function SideForm(props) {
    return (
        <form className="form">
            {props.children}
        </form>
    )
}

export function Input(props) {
    return (
        <div className="inputGroup">
            <input id={"option" + props.num} name={"option" + props.num} type="checkbox" />
            <label for={"option" + props.num}>{props.name}</label>
        </div>
    )

}

