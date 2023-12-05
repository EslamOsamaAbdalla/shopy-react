import React from 'react'
import "./cart.css"
function Cart({cart}) {
    return (
        <div className='cart-page'>
            {cart.map((Products)=>{
                return <div className='cart-item' key={Products.product.id}>
                        <img src={Products.product.image} alt="image" />
                        <div className='cart-item-info'>
                            <h3>{Products.product.title}</h3>
                            <p>quantaty : {Products.quantaty}</p>
                            <p>price : {Products.product.price * Products.quantaty} $</p>
                            <button>remove from cart</button>
                        </div>
                    </div>
            })}
            <div className='check-out'>
                <h3>check out</h3>
                <button>go to check out</button>
            </div>
        </div>
    )
}
export default Cart