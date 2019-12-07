import React, {Component} from "react"
import axios from "axios"

class Page extends Component {
    state = {
        items: [] 
    }
    componentDidMount(){
        axios.get("http://localhost:8080/uniqlo/")
        .then( res => {
            this.setState({items:res.data})
        })
        .catch(err => console.log(err));
    }
    render(){
        console.log(this.state.items)
        return (
            this.state.items.length ? 
            <div>
            {this.state.items.map((item, i)=> {
                return (
                <h5>Hi{item.name}</h5>
                )
            }
            )}
            </div>
            :
            <div></div>
        )
    }

}

export default Page;