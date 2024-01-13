import React from 'react'
import HeaderCheckout from '../../Components/Header/HeaderCheckout';

import "./Checkout.css"

const Checkout=()=>{
    return(
        <div className='main'>
           <HeaderCheckout />
           <div className='checkoutItems'>
            <div className='checkoutItemUnits'>
                <img src="Assets/main/nonVeg.png" />
                <p className='itemName'>Chicken Sandwich</p>
                <p className='itemQuantity'>1</p>
                <p className='itemPrice'>Rs 92</p>
            </div>
            <div className='checkoutItemUnits'>
                <img src="Assets/main/nonVeg.png" />
                <p className='itemName'>Chicken Tikka</p>
                <p className='itemQuantity'>5</p>
                <p className='itemPrice'>Rs 400</p>
            </div>
           </div>
           <div className='billTitle'>
            <p>Bill</p>
           </div>
           <div className='bill'>
              <div className='total'>
                <div className='totalDesc'>
                   <p>Total</p>
                </div>
                <div className='totalValue'>
                    Rs 100
                </div>
              </div>
              <div className='total'>
                <div className='totalDesc'>
                   <p>Delivery Fee</p>
                </div>
                <div className='totalValue'>
                    Rs 25
                </div>
              </div>
              <div className='total'>
                <div className='totalDesc'>
                   <p>GST Charge</p>
                </div>
                <div className='totalValue'>
                    Rs 15
                </div>
              </div>
              <div className='totalFinal'>
                <div className='totalFinalDesc'>
                   <p>To Pay</p>
                </div>
                <div className='totalValue'>
                    <p>Rs 140</p>
                </div>
              </div>
           </div>
           <div className='confirmOrder'>
            <button>Confirm Order</button>
           </div>
        </div>
    )
}

export default Checkout;