import { useEffect, useState } from 'react'
import CartSummary from './CartSummary'
import CartItem from './CartItem'
import api from "../../api"

const CartPage = () => {

  const cart_code = localStorage.getItem("cart_code")
  const [cartitems, setCartItems] = useState([])

  useEffect(function() {
    api.get(`get_cart?cart_code=${cart_code}`)
    .then(res => {
      console.log(res.data)
    })
    
    .catch(err => {
      console.log(err.message)
    })
  }, [])
  
  return (
    <div className='container my-3 py-3' style={{height: "80vh"}}>
      <h5 className="mb-4">Shopping Cart</h5>  
      <div className="row">
        <div className="col-md-8">
          <CartItem/>
          
          </div>
          <CartSummary/>
      </div>    
    
    </div>
  )
}

export default CartPage