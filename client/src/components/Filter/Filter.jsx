// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Bike from '../../components/Bike/Bike'
import "./Filter.css";

function Filter(props) {
  // const [results, setResults] = useState("");
  // const [priceLow, setPriceLow] = useState(false);
  // const [priceMedium, setPriceMedium] = useState(false);
  // const [priceHigh, setPriceHigh] = useState(false);

  // useEffect(() => {
  //   if (priceLow && priceMedium) {
  //     const lowHalf = props.bikes.filter((bike) => {
  //       return bike.price < 250;
  //     });
  //     setResults(lowHalf);
  //   } else if (priceMedium && priceHigh) {
  //     const highHalf = props.bikes.filter((bike) => {
  //       return bike.price > 250;
  //     });
  //     setResults(highHalf);
  //   } else if (priceLow && priceHigh) {
  //     const lowHigh = props.bikes.filter((bike) => {
  //       return bike.price < 200 || bike.price > 400;
  //     });
  //     setResults(lowHigh);
  //   } else if (priceLow) {
  //     const lowest = props.bikes.filter((bike) => {
  //       return bike.price < 200;
  //     });
  //     setResults(lowest);
  //   } else if (priceMedium) {
  //     const middlest = props.bikes.filter((bike) => {
  //       return bike.price >= 200 && bike.price <= 400;
  //     });
  //     setResults(middlest);
  //   } else if (priceHigh) {
  //     const highest = props.bikes.filter((bike) => {
  //       return bike.price > 400;
  //     });
  //     setResults(highest);
  //   }
  // }, [priceLow, priceMedium, priceHigh]);

  const handleChange = (e) => {
    props.onChange(e.target.value)
  }

  return (
    <>
      <div className="filter-form">
        <p className="price-header">Filter by price:</p>
        <form className="search-filter" onSubmit={props.handleSubmit}>
          <div className="check">
            <label htmlFor="lowest-price">Below $200</label>
            <input
              type="checkbox"
              value="below-200"
              onChange={handleChange}
            />
          </div>
          <div className="check">
            <label htmlFor="medium-price">$200 to $400</label>
            <input
              type="checkbox"
              className="check"
              value="200-400"
              onChange={handleChange}
            />
          </div>
          <div className="check">
            <label htmlFor="lowest-price">Above $400</label>
            <input
              type="checkbox"
              className="check"
              value="over-400"
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      {/* {results.length ? (
        <div className="results-container">
          {results.map((bike, index) => (
            <Bike _id={bike._id} model={bike.model} imageURL={bike.imageURL} price={bike.price} key={index}/>
          ))}
        </div>
      ) : null} */}
    </>
  );
}

export default Filter;
