import "./Filter.css";

function Filter(props) {
  const handleChange = (e) => {
    e.target.checked ? 
      props.onChange(e.target) :
      props.setQueriedBikes(props.bikes)
    // console.log(e.target)
  }

  return (
    <div className='form-parent'>
      <div className="filter-type">
        <p className="filter-header">Filter by price:</p>
        <form className="search-filter" onSubmit={props.handleSubmit}>
          <div className="checkbox">
            <label htmlFor="lowest-price">Below $200</label>
            <input
              type="checkbox"
              alt="price"
              value="below-200"
              onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <label htmlFor="medium-price">$200 to $400</label>
            <input
              type="checkbox"
              alt="price"
              value="200-400"
              onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <label htmlFor="lowest-price">Above $400</label>
            <input
              type="checkbox"
              alt="price"
              value="over-400"
              onChange={handleChange}
            />
          </div>
        </form>
        <br />
        <div className='filter-type'>
        <p className="filter-header">Popular brands:</p>
        <form className="search-filter" onSubmit={props.handleSubmit}>
          <div className="checkbox">
            <label htmlFor="Huffy">Huffy</label>
            <input
              type="checkbox"
              value="Huffy"
              alt="brand"
              onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <label htmlFor="Schwinn">Schwinn</label>
            <input
              type="checkbox"
              value="Schwinn"
              alt="brand"
              onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <label htmlFor="Trek">Trek</label>
            <input
              type="checkbox"
              value="Trek"
              alt="brand"
              onChange={handleChange}
            />
          </div>
          </form>
          </div>
      </div>
    </div>
  );
}

export default Filter;
