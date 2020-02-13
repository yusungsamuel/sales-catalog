import React, {Component} from "react"
import axios from "axios"
import ProductCard from "../productCard"
import "./style.css"

class Page extends Component {
    state = {
        items: [] 
    }
    componentDidMount(){
        axios.get("https://enigmatic-tundra-66827.herokuapp.com/api/uniqlo")
        .then( res => {
            this.setState({items:res.data})
        })
        .catch(err => console.log(err));
    }

    render(){
        console.log(this.state.items)
        return (
             
            <div className="product-display">
            {this.state.items.map((item, i)=> {
                return (
                <ProductCard
                    name = {item.name}
                    link = {item.link}
                    image = {item.image}
                    regprice = {item.regprice}
                    sale = {item.salesprice}
                    brand = {item.brand}
                />
                )
            }
            )}
            </div>
            
        )
    }

}

export default Page;