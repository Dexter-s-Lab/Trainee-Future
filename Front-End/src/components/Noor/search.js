import React, { Component } from 'react'

export class Search extends Component {
    state = {
      word:''
     }

     handleChange= event => {
      this.setState({
        word: event.target.value
      })
    }


    handleSubmit= event =>{
     
      this.props.handleFormSubmit(this.state.word)
      event.preventDefault()
    }


    render() {
        return (
            <div className='btn-group'>


<label class="form-check-label"> Select Field</label>
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

<form className="form-inline" onSubmit={this.handleSubmit} >
    <input onChange={this.handleChange} value={this.state.word}  className="form-control mr-sm-2 ml-4"  type="search" placeholder="Search for a job " aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>

            </div>
        )
    }
}

export default Search





