import React, { useState, useEffect } from "react"
import axios from "axios"
import Jumbotron from "../jumbotron"
import ProductCard from "../productCard"
import "./style.css"
import brandsJson from "../../brands.json"
import { SideForm, Input } from "../sideForm"
import SmoothRender from 'react-smooth-render';


function Page() {
    const [brands, setBrands] = useState([...brandsJson])
    const [items, setItems] = useState([])

    useEffect(async () => {
        let updatedItems = []
        let promise = []
        let cancel
        brands.forEach((brand) => {
            // promise.push(axios.get("https://enigmatic-tundra-66827.herokuapp.com/api/" + brand.name))
            promise.push(axios({
                method: 'GET',
                url: ("https://enigmatic-tundra-66827.herokuapp.com/api/" + brand.name),
                cancelToken: new axios.CancelToken(c => cancel = c)
            }))
        })
        let resources = await Promise.all(promise)
        resources.forEach((resource) => {
            updatedItems.push(resource.data)
        })
        // items = items.flat(1)
        setItems(updatedItems)
        return () => cancel()
    }, []);


    let handleBrandOption = (option) => {
        let update = [...brands]
        update[option]["checked"] = !update[option]["checked"]
        setBrands(update)
    }

    return (
        <div className="display-page">

            {/* <Jumbotron></Jumbotron> */}
            <div className="row">
                <div className="col-2">
                    <SideForm>
                        {
                            brands.map((brand, i) => {
                                return (
                                    <Input
                                        name={brand.name}
                                        key={i}
                                        num={i}
                                        check={brand.checked}
                                        handleBrandClick={handleBrandOption}
                                    />
                                )
                            })
                        }

                    </SideForm>
                </div>
                <div className="col-10 center product-display">
                    {
                        items.map((list, i) => {
                            let hidden = !brands[i].checked
                            if (brands[i].checked) {
                                return (

                                    list.map((item, j) => {
                                        return (
                                            <SmoothRender hidden={hidden} timing={750}>

                                                <ProductCard
                                                    name={item.name}
                                                    link={item.link}
                                                    image={item.image}
                                                    regprice={item.regprice}
                                                    sale={item.salesprice}
                                                    brand={item.brand}
                                                    key={j}
                                                />
                                            </SmoothRender>

                                        )
                                    })

                                )
                            }
                        })

                    }
                </div>
            </div>

        </div>
    )
}


export default Page;