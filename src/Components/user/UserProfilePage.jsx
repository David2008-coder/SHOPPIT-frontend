import UserInfo from "./UserInfo"
import OrderHistoryItemContainer from "./OrderHistoryItemContainer"
import { useEffect, useState } from "react"
import api from "../../api"

const UserProfilePage = () => {
  const [userInfo, setUserInfo] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(function() {
    setLoading(true)
    api.get("user_info")
    .then(res => {
      console.log(res.data)
      setUserInfo(res.data)
      setLoading(false)
    })

    .catch(err => {
      console.log(err.message)
      setLoading(false)
    })
    
  }, [])
  

  return (
    <div className="container my-5">
      
      <UserInfo userInfo={userInfo}/>

      <OrderHistoryItemContainer/>
    </div>
  )
}

export default UserProfilePage