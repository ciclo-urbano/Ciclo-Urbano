import React, { useState, useEffect } from 'react'
import './Bikes.css'
import Bike from '../../components/Bike/Bike'
import Search from '../../components/Search/Search'
import Layout from '../../components/Shared/Layout/Layout'
import { getBikes } from '../../services/bikes'

const Bikes = (props) => {
  const [allBikes, setAllBikes] = useState([])
  const [queriedBikes, setQueriedBikes] = useState([])

  useEffect(() => {
    const fetchBikes = async () => {
      const bikes = await getBikes()
      setAllBikes(bikes)
      setQueriedBikes(bikes)
    }
    fetchBikes()
  }, [])

  const handleSearch = event => {
    const newQueriedBikes = allBikes.filter(bike => bike.model.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedBikes(newQueriedBikes)
  }

  const handleSubmit = event => event.preventDefault()

  const bikesJSX = queriedBikes.map((bike, index) =>
    <Bike _id={bike._id} model={bike.model} image_url={bike.image_url} price={bike.price} key={index} />
  )

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <div className="bikes">
        {bikesJSX}
      </div>
    </Layout>
  )
}


export default Bikes