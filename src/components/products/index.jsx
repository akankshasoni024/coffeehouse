import React from "react";
import product from "../../data/productData";
import './style.css'


const Product = () => {
    return (
        <div className="product-tile-container">
            <div className="product-data">
                <div className="product-image"><img src={product.pimg} alt={product.ptitle} /></div>
                <div className="product-name">{product.ptitle}title</div>
                <div className="product-price">2</div>
                <div className="addons-option">
                    <input type="radio" name="addon" value="Milk"  />
                    <input type="radio" name="addon" value="Coffee" />
                    <input type="radio" name="addon" value="Latte"  />
                    </div>
                <div className="product-cart"><button className="product-add">Add</button></div>
            </div>
        </div>
    )
}

export default Product