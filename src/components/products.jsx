import React from 'react'
import "./products.css"
import { IoPricetags } from "react-icons/io5";
import { MdOutlineStarRate } from "react-icons/md";
import { Link } from 'react-router-dom';
function Products({image, title, price, rating, products, setProduct}) {
    const productPage = ()=>{
        let container = [products]
        let product = container.filter((x)=>{return x.title == title;})
        let getPage =  ()=>{
            fetch(`https://fakestoreapi.com/products/${product[0].id}`)
                .then((res)=>{ return res.json()})
                .then((res)=>{ setProduct(res)})
                
        }
        getPage()
    }
    return (
        <Link 
            to={"/product-page"} 
            className='products-parent' 
            onClick={productPage}
        >
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