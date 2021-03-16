import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './Bikes.css';
import Bike from '../../components/Bike/Bike';
import Search from '../../components/Search/Search';
import Layout from '../../components/Shared/Layout/Layout';
import Filter from '../../components/Filter/Filter';
import { getBikes } from '../../services/bikes';
import { priceLow, priceMed, priceHigh, brandName, bikeCategory } from "../../utils/filters";

const Bikes = (props) => {
  const [allBikes, setAllBikes] = useState([])
  const [queriedBikes, setQueriedBikes] = useState([])
  const [sortType, setSortType] = useState([])

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

  const handleSort = type => {
    setSortType(type)
    switch (type) {
      case "below-200":
        setQueriedBikes(priceLow(queriedBikes))
        break
      case "200-400":
        setQueriedBikes(priceMed(queriedBikes))
        break
      case "over-400":
        setQueriedBikes(priceHigh(queriedBikes))
        break
      case "Huffy": case "Schwinn": case "Trek":
        setQueriedBikes(brandName(type, queriedBikes))
        break
      case "Commuter": case "Mountain": case "Hybrid":
        console.log(type)
        setQueriedBikes(bikeCategory(type, queriedBikes))
        break
      default:
        setQueriedBikes(allBikes)
    }
}

  const handleSubmit = event => event.preventDefault()

  const handleClear = event => {
    document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
    setQueriedBikes(allBikes);
  }

  const bikesJSX = queriedBikes.map((bike, index) =>
    <Bike _id={bike._id} make={bike.make} model={bike.model} imageURL={bike.imageURL} price={bike.price} key={index} />
  )

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <Filter onSubmit={handleSubmit} bikes={allBikes} onChange={handleSort} setQueriedBikes={setQueriedBikes}/>
      <button className="filter-button" onClick={handleClear}>Clear All Filters</button>
      <div className="bikes">
        {bikesJSX}
      </div>
    </Layout>
  )
}


export default Bikes