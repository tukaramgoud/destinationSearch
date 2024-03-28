// Write your code here
import './index.css'

const DestinationItem = props => {
  const {itemDetails} = props
  const {imgUrl, name} = itemDetails
  return (
    <li className="item-sizing">
      <img src={imgUrl} alt={name} className="image-sizing" />
      <p className="item-para">{name}</p>
    </li>
  )
}

export default DestinationItem
