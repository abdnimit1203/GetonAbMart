

const SearchBar = () => {
    return (
        <div className="">
              
        <div className="join text-slate-800">
          <select className="select select-bordered join-item focus:outline-none">
            <option disabled >
              All category
            </option>
            <option>Electronics</option>
            <option>Mobile</option>
            <option>Laptops</option>
          </select>
          <div>
            <div>
              <input
                className="input input-bordered join-item focus:outline-none w-auto "
                placeholder="Search"
              />
            </div>
          </div>

          <div className="indicator">
            <button className="btn join-item btn-primary">Search</button>
          </div>
        </div>
      </div>
    );
};

export default SearchBar;