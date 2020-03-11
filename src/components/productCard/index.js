import React, { Component } from "react"
import "./style.css"

function ProductCard(props) {
    return (
        <div className="page-wrapper animated fadeIn slow">
            <div className="page-inner">
                <div className="row">
                    <div className="el-wrapper">
                        <div className="box-up">
                            <img className="img" src={props.image} alt="" />
                            <div className="img-info">
                                <div className="info-inner">
                                    <span className="p-name">{props.brand}</span>
                                    <span className="p-company"></span>
                                </div>
                                <div className="a-size"><span className="size">{props.name}</span></div>
                            </div>
                        </div>

                        <div className="box-down">
                            <div className="h-bg">
                                <div className="h-bg-inner"></div>
                            </div>

                            <a className="cart" href={props.link}>
                                <span className="regprice">{props.regprice}</span>
                                <span className="saleprice">{props.sale}</span>
                                <span className="add-to-cart">
                                    <span className="txt">Sizes and Colors</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
