import React from 'react'
import "./shop.css"
import Products from '../components/products';
function Shop({storeProducts, setProduct}) {
    return (
        <div className='products-container'>
            {storeProducts ? storeProducts.map((products)=>{
                return (<Products
                    key={products.id}
                    param={products.id}
                    image={products.image}
                    title={products.title}
                    price={products.price}
                    rating={products.rating.rate}
                    setProduct={setProduct}
                    />)}) :"no products"}
        </div>
    )
}
export default Shop