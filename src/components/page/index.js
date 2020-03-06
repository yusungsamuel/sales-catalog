import React, { Component } from "react"
import axios from "axios"
import ProductCard from "../productCard"
import "./style.css"
import brands from "../../brands.json"
import { SideForm, Input } from "../sideForm"

class Page extends Component {
    state = {
        brands: [...brands],
        items: []
    }
    async componentDidMount() {
        let items = []
        let promise = []
        this.state.brands.forEach((brand) => {
            promise.push(axios.get("https://enigmatic-tundra-66827.herokuapp.com/api/" + brand.name))
        })
        let resources = await Promise.all(promise)
        resources.forEach((resource) => {
            items.push(resource.data)
        })
        // items = items.flat(1)
        this.setState({ items: items })
    }

    handleBrandOption = (option) => {
        let update = [...this.state.brands]
        update[option]["checked"] = !update[option]["checked"]
        this.setState({ brands: update })

    }

    render() {
        let brands =this.state.brands
        return (

            <div className="row">
                <div className="col-3">
                    <SideForm>
                        {
                            this.state.brands.map((brand, i) => {
                                return (
                                    <Input
                                        name={brand.name}
                                        key={i}
                                        num={i}
                                        check={brand.checked}
                                        handleBrandClick={this.handleBrandOption}
                                    />
                                )
                            })
                        }
                    </SideForm>
                </div>
                <div className="col-9 center product-display">
                    {

                        this.state.items.map((list, i)=>{
                            if(brands[i].checked){
                                return (
                                    list.map((item, j)=>{
                                        return (
                                            <ProductCard
                                                name={item.name}
                                                link={item.link}
                                                image={item.image}
                                                regprice={item.regprice}
                                                sale={item.salesprice}
                                                brand={item.brand}
                                                key={j}
                                            />
                                        )
                                    })
                                )
                            }
                        })

                        

                        


                    }
                </div>
            </div>




        )
    }

}

export default Page;