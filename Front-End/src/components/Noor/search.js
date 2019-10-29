import React, { Component } from "react";

export class Search extends Component {
  state = {};

  render() {
    return (
      <div className="">
        {/* <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select City
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu2"  >
    <button className="dropdown-item" type="button">Amman</button>
    <button className="dropdown-item" type="button">Irbid</button>
    <button className="dropdown-item" type="button">Zarqa</button>
  </div>
</div>  */}

        {/* <div className="dropdown">
  <button  onClick={this.props.filterdata}  className="btn btn-secondary dropdown-toggle ml-4" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
    Select Field
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu1"   >
    <button className="dropdown-item" type="button" name='Engineering'>Engineering</button>
    <button className="dropdown-item" type="button" name='IT'>IT</button>
    <button className="dropdown-item" type="button" name='Economy' >Economy</button>
  </div>
</div>  */}
        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col">
            <label class="form-check-label">
              {" "}
              <h4 style={{ fontWeight: "bold" }}>Select Field</h4>
            </label>
            <select
              className=" form-control sm-control"
              name=" field"
              onChange={this.props.filterdata}
            >
              <option value="DEFAULT" disabled hidden selected>
                Select Field
              </option>
              <option value="Engineering">Engineering</option>
              <option value="IT">IT</option>
              <option value="Economy">Economy</option>
            </select>
          </div>
          <div style={{ marginTop: "39px" }} className="col">
            <form style={{ display: "flex", border: "none" }}>
              <div style={{ width: "90%" }}>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search for a job "
                  aria-label="Search"
                />
              </div>
              <div className="left">
                <button
                  className="btn btn-success my-2 my-sm-0"
                  style={{ marginLeft: "7px" }}
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
