import React, {Component} from "react"
import axios from "axios"

class Page extends Component {
    state = {
        items: [] 
    }
    componentDidMount(){
        axios.get("http://localhost:3000/uniqlo")
        .then( res => {
            this.setState({items:res})
        })
    }
    render(){
        return (
            this.state.items.map((item, i)=> {
                return (
                <h5>{item.name}</h5>
                )
            }
            )
        )
    }

}

export default Page;