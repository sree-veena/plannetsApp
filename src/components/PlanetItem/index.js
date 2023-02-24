// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, description, imageUrl} = planetDetails

  return (
    <div className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="planet-name">{name}</h1>
      <p className="desc">{description}</p>
    </div>
  )
}

export default PlanetItem
