import styles from "././OrderHistoryItem.module.css"

const OrderHisotryItem = () => {
  return (
    <div className="card-body">
      <div className={`order-item mb-3 ${styles.orderItem}`}>
        <div className="row">
          <div className="col-md-2">
            <img 
              src="assets/laptop1.jpg"
              alt="Order Item"
              className="img-fluid"
              style={{borderRadius: "5px" }}
            />
          </div>
          <div className="col-md-6">
            <h6>Product Name</h6>
            <p>Order Date: June 5, 2026 </p>
            <p>Oder ID: 123456</p>
          </div>
          <div className="col-md-2 text-center">
            <h6 className="text-muted">Quantity </h6>
          </div>
          <div className="col-md-2 text-center">
            <h6 className="text-muted">$100.00 </h6>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OrderHisotryItem