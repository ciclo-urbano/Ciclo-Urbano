import "./Filter.css";

function Filter(props) {
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
    </>
  );
}

export default Filter;
