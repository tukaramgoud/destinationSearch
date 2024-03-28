// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {listItems: ''}

  componentDidMount = () => {
    const {destinationsList} = this.props
    this.setState({listItems: destinationsList})
  }

  render() {
    const {destinationsList} = this.props
    console.log(destinationsList)
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
        <ul className="list-styling">
          {destinationsList.map(eachItem => (
            <DestinationItem itemDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
