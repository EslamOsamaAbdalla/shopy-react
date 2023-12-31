import React, { useEffect, useReducer, useState } from 'react'
import "./productPage.css"
import { useParams } from 'react-router-dom';
function ProductPage({product, cart, setCart}) {
    const [data, setData] = useState()
    const [quantaty, dispatch] = useReducer(reducer, 1);
    useEffect(() => {
        productFilter()
        return () =>{
            setData()
        }
    }, [product])
    let {id} = useParams()
    let productFilter = async ()=>{
        await fetch('https://fakestoreapi.com/products/'+id)
            .then(res=>res.json()).then(json=>setData(json)).catch(error => console.error(error))
    }
    function reducer(state, action){
        switch (action.type) {
            case "increase":
                return state = state + 1
            case "deincrease":
                return state = state - 1
            default:
                return state
        }
    }
    const increase = ()=>{ if (data.rating.count > quantaty) {dispatch({type: "increase"})} }
    const deincrease = ()=>{ if (quantaty > 0) {dispatch({type: "deincrease"})} }
    const addToCart = ()=>{
        if (cart != undefined) {
            setCart((prev)=>{ return [...prev, {
                product: data,
                quantaty : quantaty
            }]})
        } else {
            setCart([{
                product: data,
                quantaty : quantaty
            }])
        }
        
    }
    return (
        <>
            {data ?
                <div className='single-product'>
                    <img src={data.image} alt="image" />
                    <div className='single-product-data'>
                        <h2>{data.title}</h2>
                        <p className='single-product-data-category'>{data.category}</p>
                        <p className='single-product-data-description'>{data.description}</p>
                        <div className='single-product-data-extra'>
                            <div className='single-product-data-price'>price : {data.price} $</div>
                            <div className='single-product-data-rate'>rating : {data.rating.rate}</div>
                            <div className='single-product-data-count'>item left : {data.rating.count}</div>
                        </div>
                        <div className='single-product-functions'>
                            <button onClick={addToCart}>add to cart</button>
                            <div className='single-product-function-quantity'>
                                <button onClick={increase}>+</button>
                                <div>{quantaty}</div>
                                <button onClick={deincrease}>-</button>
                            </div>
                            
                        </div>
                    </div>
                </div> : "no product"
            }
        </>
    )
}
export default ProductPage