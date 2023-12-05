import React, { useEffect, useState } from 'react'
import "./cart.css"
function Cart({cart, setCart}) {
    const [totalPrice, setTotalPrice] = useState()
    useEffect(() => {
        calcPrice()
    }, [cart])
    
    const removeFromCart = (element)=>{
        let filter = cart.filter((x)=>{return x.product.id != element})
        if (filter.length != 0) {setCart(filter)} else{setCart(undefined)}
    }
    const calcPrice = ()=>{
        if (cart != undefined) {
            let totalPrice = cart.reduce((x, y)=>{
                return x + y.product.price * y.quantaty
            }, 0)
            setTotalPrice(totalPrice)
        }
    }
    return (
        <div className='cart-page'>
            {cart ? cart.map((Products)=>{
                return <div className='cart-item' key={Products.product.id}>
                        <img src={Products.product.image} alt="image" />
                        <div className='cart-item-info'>
                            <h3>{Products.product.title}</h3>
                            <p>quantaty : {Products.quantaty}</p>
                            <p>price : {Products.product.price * Products.quantaty} $</p>
                            <button
                                onClick={()=>{removeFromCart(Products.product.id)}}
                            >remove from cart</button>
                        </div>
                    </div>
            }): <div className='cart-page-empty'>cart empty</div>}
            <div className='check-out'>
                <h3>check out</h3>
                <p>total price : { cart != undefined ? totalPrice
                    : "no price"}
                </p>
                <button>go to check out</button>
            </div>
        </div>
    )
}
export default Cart