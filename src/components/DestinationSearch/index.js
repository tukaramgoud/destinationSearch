// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {listItems: [], userInput: ''}

  // in the place listeitem if you use emptyQuote("") this will give error instead of use []array
  // when rendering time it will no show error

  componentDidMount = () => {
    const {destinationsList} = this.props
    this.setState({listItems: destinationsList})
  }

  userInputChanged = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {listItems, userInput} = this.state
    const filterUserDetails = listItems.filter(eachItem =>
      eachItem.name.toLowerCase().includes(userInput),
    )
    return (
      <div className="background-container">
        <h1 className="main-heading">Destination Search</h1>
        <div className="input-container">
          <input
            type="search"
            className="user-input"
            placeholder="search"
            onChange={this.userInputChanged}
            value={userInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="icon-sizing"
          />
        </div>
        <ul className="list-styling">
          {filterUserDetails.map(eachItem => (
            <DestinationItem itemDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
