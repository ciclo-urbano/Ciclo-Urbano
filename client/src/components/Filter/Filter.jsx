import "./Filter.css";

function Filter(props) {
  const handleChange = (e) => {
    e.target.checked ? 
      props.onChange(e.target.value) :
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
              value="below-200"
              onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <label htmlFor="medium-price">$200 to $400</label>
            <input
              type="checkbox"
              value="200-400"
              onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <label htmlFor="lowest-price">Above $400</label>
            <input
              type="checkbox"
              value="over-400"
              onChange={handleChange}
            />
          </div>
        </form>
        </div>
        <div className="filter-type">
        <p className="filter-header">Category:</p>
        <form className="search-filter" onSubmit={props.handleSubmit}>
            <div className="checkbox">
            <label htmlFor="Commuter">Commuter</label>
            <input
              type="checkbox"
              value="Commuter"
              onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <label htmlFor="Mountain">Mountain</label>
            <input
              type="checkbox"
              value="Mountain"
              onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <label htmlFor="Hybrid">Hybrid</label>
            <input
              type="checkbox"
              value="Hybrid"
              onChange={handleChange}
            />
          </div>
          </form>
          </div>
        <div className='filter-type'>
        <p className="filter-header">Popular brands:</p>
        <form className="search-filter" onSubmit={props.handleSubmit}>
          <div className="checkbox">
            <label htmlFor="Huffy">Huffy</label>
            <input
              type="checkbox"
              value="Huffy"
              onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <label htmlFor="Schwinn">Schwinn</label>
            <input
              type="checkbox"
              value="Schwinn"
              onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <label htmlFor="Trek">Trek</label>
            <input
              type="checkbox"
              value="Trek"
              onChange={handleChange}
            />
          </div>
          </form>
        </div>
        {/* <button
          className="clear-button"
          onClick={props.setQueriedBikes(props.bikes)}
        >Clear All</button> */}
    </div>
  );
}

export default Filter;
