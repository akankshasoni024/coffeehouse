import React from "react";
import Header from "../../components/Header";
import Product from "../../components/products";
import product from "../../data/productData";
import './style.css'

const Home=()=>{
    return(
        <div className="home-container">
            <div className="header">
                <Header title="COFFEE HOUSE" />
            <div className="product-tile">
                {product.map((product,index)=>{
                    return(<div className="product-tile-inner" key={`product-${index}`} data={product}><Product /></div>)
                })}
                </div>

            </div>
        </div>
    )
}

export default Home