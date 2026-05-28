import OrderHisotryItem from "./OrderHisotryItem"


const OrderHistoryItemContainer = () => {
  return (
    <div className="row" style={{height: "300px", overflow: "auto"}}>
      <div className="col-nd-12">
        <div className="card">
          <div className="card-header" style={{ backgroundColor: '#6050DC', color: 'white'}}>
            <h5>Order History</h5>
          </div>

          <OrderHisotryItem/>
          <OrderHisotryItem/>
          <OrderHisotryItem/>
          <OrderHisotryItem/>

          <OrderHisotryItem/>
        </div>
      </div>
    </div>
  )
}


export default OrderHistoryItemContainer