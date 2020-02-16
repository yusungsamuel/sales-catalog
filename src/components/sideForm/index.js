import React, { Component } from "react"
import "./style.scss"

export function SideForm(props) {
    return (
        <form className="form" >
            {props.children}
        </form>
    )

}


export class Input extends Component {
    state = {
        checked: false
    }

    handleChange = (event) => {

        this.setState({ checked: !this.state.checked })
        console.log(event.target.checked)
    }

    render() {
        return (
            <div className="inputGroup">
                <input id={"option" + this.props.num} name={"option" + this.props.num} type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
                <label for={"option" + this.props.num}>{this.props.name}</label>
            </div>
        )
    }
}


