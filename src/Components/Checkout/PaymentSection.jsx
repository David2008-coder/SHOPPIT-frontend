import styles from "./PaymentSection.module.css"
import { useState, useEffect } from "react"
import api from "../../api"

const PaymentSection = () => {

  const cart_code = localStorage.getItem("cart_code")
  const [loading, setLoading ] = useState(false)


  // function makePayment() {
  //   api.post("initiate_payment/", {cart_code})
  //   .then(res => {
  //     console.log(res.data)
  //     window.location.href = res.data.data.link
  //   })

  //   .catch(err => {
  //     console.log(err.message)
  //   })
  // }

  function makePayment() {
    setLoading(true); // Disable button immediately
    
    api.post("initiate_payment/", { cart_code })
      .then(res => {
        console.log(res.data);
        // Flutterwave responses return the URL inside data.link
        if (res.data?.data?.link) {
          window.location.href = res.data.data.link;
        } else {
          console.error("Link missing from response structure", res.data);
          setLoading(false);
        }
      })
      .catch(err => {
        console.error("Payment registration failed:", err.response?.data || err.message);
        setLoading(false);
      });
  }


    function paypalPayment() {
    setLoading(true); // Disable button immediately
    
    api.post("initiate_paypal_payment/", { cart_code })
      .then(res => {
        console.log(res.data);
        setLoading(false);
        // Flutterwave responses return the URL inside data.link
        // if (res.data.approval_url) {
        //   window.location.href = res.data.approval_url;
        // }
      })
      .catch(err => {
        console.error("Error initiating payment:", err.message);
        setLoading(false);
      });
  }


  return (
    <div className="col-md-4">
      <div className={`card ${styles.card}`}> 
        <div className="card-header" style={{ backgroundColor: '#6050DC', color: 'white' }}>
          <h5>Payment Options</h5>
        </div>
        <div className="card-body">
          {/* PayPal Button */}
          <button className={`btn btn-primary w-100 mb-3 ${styles.paypalButton}`} onClick={paypalPayment} id="paypal-button">
            <i className="bi bi-paypal"></i> Pay with PayPal
          </button>

          {/* Flutterwave Button */}
          <button className={`btn btn-warning w-100 ${styles.flutterwaveButton}`} onClick={makePayment} id="flutterwave-button">
            <i className="bi bi-credit-card"></i> Pay with Flutterwave
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;


// import styles from "./PaymentSection.module.css";
// import { useState } from "react";
// import api from "../../api";

// const PaymentSection = () => {
//   const cart_code = localStorage.getItem("cart_code");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   function makePayment() {
//     if (!cart_code) {
//       setError("No active shopping cart token found.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     api.post("initiate_payment/", { cart_code })
//       .then(res => {
//         console.log(res.data);
//         // Safely extract validation links generated from the api redirect endpoint response dict
//         if (res.data?.data?.link) {
//           window.location.href = res.data.data.link;
//         } else {
//           setError("Failed to generate payment redirect link.");
//           setLoading(false);
//         }
//       })
//       .catch(err => {
//         console.error(err.message);
//         setError("Payment authorization request failed. Please ensure you are logged in.");
//         setLoading(false);
//       });
//   }

//   return (
//     <div className="col-md-4">
//       <div className={`card ${styles.card}`}>
//         <div className="card-header" style={{ backgroundColor: '#6050DC', color: 'white' }}>
//           <h5>Payment Options</h5>
//         </div>
//         <div className="card-body">
//           {error && <div className="alert alert-danger py-2 small">{error}</div>}

//           {/* PayPal Button */}
//           <button 
//             className={`btn btn-primary w-100 mb-3 ${styles.paypalButton}`} 
//             id="paypal-button"
//             disabled={loading}
//           >
//             <i className="bi bi-paypal"></i> Pay with PayPal
//           </button>

//           {/* Flutterwave Button */}
//           <button 
//             className={`btn btn-warning w-100 ${styles.flutterwaveButton}`} 
//             onClick={makePayment} 
//             id="flutterwave-button"
//             disabled={loading}
//           >
//             <i className="bi bi-credit-card"></i> {loading ? "Processing..." : "Pay with Flutterwave"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentSection;