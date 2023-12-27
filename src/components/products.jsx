import React from 'react'
import "./products.css"
import { IoPricetags } from "react-icons/io5";
import { MdOutlineStarRate } from "react-icons/md";
import { Link } from 'react-router-dom';
function Products({image, title, price, rating, param, setProduct}) {
    const productPage = ()=>setProduct(true)
    return (
        <Link 
            to={"/product-page/" + param} className='products-parent' onClick={productPage}>
            <img src={image} alt="products"/>
            <div className="products-info">
                <h3>{title}</h3>
                <div className='products-buy-info'>
                    <span><IoPricetags /> {price} $</span>
                    <span><MdOutlineStarRate /> {rating}</span>
                </div>
            </div>
        </Link>
    )
}
export default Products