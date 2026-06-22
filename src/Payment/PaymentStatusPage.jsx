import { Link, useLocation } from "react-router-dom"
import api from '.././api'
import { useEffect, useState } from "react"

const PaymentStatusPage = ({setNumberCartItems}) => {

  const [statusMessage, setStatusMessage ] = useState("verifying your paymenet");
  const [statusSubMessage, setStatusSubMessage ] = useState("Wait a moment, your payment is being verified")
  const location = useLocation();

  useEffect(function() {
    const queryParams = new URLSearchParams(location.search);
    const payment_id = queryParams.get("payment_id")
    const payId = queryParams.get("Payer_ID")
    const ref = queryParams.get("ref")
    if(payment && payid && ref) {
      api.post(`paypal_payment_callback/?paymentId=${paymentId}&PayerID=${payId}&ref=$`)
      .then(res => {
          setStatusMessage(res.data.message);
        setStatusSubMessage(res.data.subMessge)
        localStorage.removeItem("cart_code")
        setNumberCartItems(0)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
  }, [])

  useEffect(function() {
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get('status');
    const txRef = queryParams.get("tx_ref")
    const transactionId = queryParams.get("transaction_id");

    if(status && txRef && transactionId){
      api.post(`payment_callback/?status=${status}&tx_ref=${tx_ref}&transaction_id=${transactionId}`)
      .then(res => {
          setStatusMessage(res.data.message);
        setStatusSubMessage(res.data.subMessge)
        localStorage.removeItem("cart_code")
        setNumberCartItems(0)
      })
      .catch(err => {
        console.log(err.message)
      })
    }

  },[])


  return (
    <header>
      <div className="py-5" style={{backgroundColor: "#6050DC"}}>
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h2 className="display-4 fw-bold">{statusMessage}</h2>
            <p className="lead fw-normal text-white-75 mb-4">{statusSubMessage}</p>
            <span>
              <Link to="/profile" className="btn btn-light btn-lg px-4 py-2 mx-3">View Order Details</Link>
              <Link to="/" className="btn btn-light btn-lg px-4 py-2">Continue Shopping</Link>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PaymentStatusPage