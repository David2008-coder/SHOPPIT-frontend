import React from 'react'
import UserInfo from "./UserInfo"
import OrderHistoryItemContainer from "./OrderHistoryItemContainer"

const UserProfilePage = () => {
  return (
    <div className="container my-5">
      
      <UserInfo/>

      <OrderHistoryItemContainer/>
    </div>
  )
}

export default UserProfilePage