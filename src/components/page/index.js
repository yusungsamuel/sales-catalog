import React, { Component } from "react"
import axios from "axios"
import ProductCard from "../productCard"
import "./style.css"
import brands from "../../brands.json"
import {SideForm, Input} from "../sideForm"

class Page extends Component {
    state = {
        brands: [...brands],
        items: []
    }
    componentDidMount() {
        axios.get("https://enigmatic-tundra-66827.herokuapp.com/api/uniqlo")
            .then(res => {
                this.setState({ items: res.data })
            })
            .catch(err => console.log(err));
    }

    handleBrandOption = (option) => {
        let update = [...this.state.brands]
        update[option]["checked"] = ! update[option]["checked"]
        this.setState({brands: update})
        
    }

    render() {
        console.log(this.state.brands)
        return (

            <div className="row">
                <div className="col-3">
                    <SideForm>
                        {
                            brands.map((brand, i) => {
                                return (
                                    <Input
                                        name={brand.name}
                                        key={i}
                                        num={i}
                                        handleBrandClick = {this.handleBrandOption}
                                    />
                                )
                            })
                        }
                    </SideForm>
                </div>
                <div className="col-9 center product-display">
                    {this.state.items.map((item, i) => {
                        return (
                            <ProductCard
                                name={item.name}
                                link={item.link}
                                image={item.image}
                                regprice={item.regprice}
                                sale={item.salesprice}
                                brand={item.brand}
                                key = {i}
                            />
                        )
                    }
                    )}
                </div>
            </div>




        )
    }

}

export default Page;