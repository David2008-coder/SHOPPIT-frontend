import Header from "../home/Header.jsx"
import CardContainer from "../home/CardContainer.jsx"
import api from '../../api'
import { useEffect, useState } from "react"
import PlaceHolderContainer from "../ui/PlaceHolderContainer.jsx"
import { randomValue } from "../../GenerateCartCode.js"

const HomePage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

    useEffect(function(){
    if(localStorage.getItem("cart_code") === null) {
      localStorage.setItem("cart_code", randomValue)
    }
  }, [])

  

useEffect(function(){
  setLoading(true)

  api.get("products")
    .then(res => {
      console.log(res.data)
      setProducts(res.data)
      setLoading(false)
      setError("")
    })

    .catch((err) => { 
      setLoading(false)
      setError(err.message)
    })
    
}, [])
  


  return (
    <>
      <Header/>
      {error && <Error error={error} />}
      {loading && <PlaceHolderContainer/>}
      {loading || error !=""  || <CardContainer products={products}/>}      
    </>
  )
}

export default HomePage