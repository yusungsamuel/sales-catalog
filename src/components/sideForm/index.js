import React, { useState } from "react"
import "./style.scss"

export function SideForm(props) {
    return (
        <form className="form">
            {props.children}
        </form>
    )
}


export function Input(props) {

    const [checked, setChecked] = useState(props.check);


    const handleChange = (event) => {

        setChecked(!checked)
        props.handleBrandClick(props.num)
    }


    return (
        <div className="inputGroup">
            <input id={"option" + props.num} name={"option" + props.num} type="checkbox" checked={checked} onChange={handleChange} />
            <label for={"option" + props.num}>{props.name}</label>
        </div>
    )

}


