// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationSearch extends Component {
  render() {
    return (
      <div className="background-container">
        <h1 className="main-heading">Destination Search</h1>
        <div className="input-container">
          <input type="search" className="user-input" placeholder="search" />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search-icon"
            className="icon-sizing"
          />
        </div>
      </div>
    )
  }
}

export default DestinationSearch
