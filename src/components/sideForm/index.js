import React, { Component } from "react"
import "./style.scss"

export class SideForm extends Component {
    
    
    // handleChange = (event) => {
    //     console.log(this.props.children[0])
    // }
    
    
    render() {
        return (
            <form className="form">
                {this.props.children}
            </form>
        )
    }
}


export class Input extends Component {
    state = {
        checked: this.props.check
    }

    handleChange = (event) => {

        this.setState({ checked: !this.state.checked })
        this.props.handleBrandClick(this.props.num)
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


