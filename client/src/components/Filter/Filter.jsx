import { useState, useEffect } from "react";

function Filter(props) {
  const [results, setResults] = useState("");
  const [priceLow, setPriceLow] = useState(false);
  const [priceMedium, setPriceMedium] = useState(false);
  const [priceHigh, setPriceHigh] = useState(false);

  useEffect(() => {
    if (priceLow && priceMedium) {
      const lowHalf = props.bikes.filter((bike) => {
        return (
          bike.price < 200 ||
          bike.price < 300
        )
      });
      setResults(lowHalf);
    } else if (priceMedium && priceHigh) {
      const highHalf = props.bikes.filter((bike) => {
        return bike.price > 300;
      });
      setResults(highHalf);
    } else {
      const lowHigh = props.bikes.filter((bike) => {
        return bike.price < '200' || bike.price > '400';
      });
      setResults(lowHigh);
    }
  }, [priceLow, priceMedium, priceHigh]);

  return (
    <div className="filter-form">
      <form className="search-filter" onSubmit={props.handleSubmit}>
          <label htmlFor="lowest-price">
            Under $50
          </label>
          <input
            type="checkbox"
            value={priceLow}
            className="check"
            onChange={(event) => setPriceLow(event.target.checked)}
          />
         <label htmlFor="medium-price">
            $50 to $150
          </label>
          <input
            type="checkbox"
            className="check"
            value={priceMedium}
            onChange={(event) => setPriceMedium(event.target.checked)}
          />
          <label htmlFor="lowest-price">
            $150 & over
          </label>
          <input
            type="checkbox"
            className="check"
            value={priceHigh}
            onChange={(event) => setPriceHigh(event.target.checked)}
        />
      </form>
    </div>
  )
}

  export default Filter