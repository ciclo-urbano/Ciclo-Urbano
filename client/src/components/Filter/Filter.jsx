import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Filter.css";

function Filter(props) {
  const [results, setResults] = useState("");
  const [priceLow, setPriceLow] = useState(false);
  const [priceMedium, setPriceMedium] = useState(false);
  const [priceHigh, setPriceHigh] = useState(false);

  useEffect(() => {
    if (priceLow && priceMedium) {
      const lowHalf = props.bikes.filter((bike) => {
        return bike.price < 250;
      });
      setResults(lowHalf);
    } else if (priceMedium && priceHigh) {
      const highHalf = props.bikes.filter((bike) => {
        return bike.price > 250;
      });
      setResults(highHalf);
    } else if (priceLow && priceHigh) {
      const lowHigh = props.bikes.filter((bike) => {
        return bike.price < 200 || bike.price > 400;
      });
      setResults(lowHigh);
    } else if (priceLow) {
      const lowest = props.bikes.filter((bike) => {
        return bike.price < 200;
      });
      setResults(lowest);
    } else if (priceMedium) {
      const middlest = props.bikes.filter((bike) => {
        return bike.price >= 200 && bike.price <= 400;
      });
      setResults(middlest);
    } else if (priceHigh) {
      const highest = props.bikes.filter((bike) => {
        return bike.price > 400;
      });
      setResults(highest);
    }
  }, [priceLow, priceMedium, priceHigh]);

  return (
    <>
      <div className="filter-form">
        <p className="price-header">Filter by price:</p>
        <form className="search-filter" onSubmit={props.handleSubmit}>
          <div className="check">
            <label htmlFor="lowest-price">Below $200</label>
            <input
              type="checkbox"
              value={priceLow}
              onChange={(event) => setPriceLow(event.target.checked)}
            />
          </div>
          <div className="check">
            <label htmlFor="medium-price">$200 to $400</label>
            <input
              type="checkbox"
              className="check"
              value={priceMedium}
              onChange={(event) => setPriceMedium(event.target.checked)}
            />
          </div>
          <div className="check">
            <label htmlFor="lowest-price">Above $400</label>
            <input
              type="checkbox"
              className="check"
              value={priceHigh}
              onChange={(event) => setPriceHigh(event.target.checked)}
            />
          </div>
        </form>
      </div>
      {results.length ? (
        <div className="results-container">
          {results.map((result) => (
            <Link key={result.id} to={`/bikes/${result.id}`}>
              <img src={result.imageURL} />
              <p>{result.model}</p>
              <p>{result.price}</p>
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default Filter;
