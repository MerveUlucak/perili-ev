import './styles.css'
import housesForSale from './data/housesForSale'
import HouseCard from './HouseCard.jsx'

export default function App() {
  const houseCards = housesForSale.map((houseData, index, array) => {
    return (
      <HouseCard
        key={houseData.id}
        data={houseData}
        total={array.length}
        index={index + 1}
      />
    )
  })

  return (
    <div className="wrapper">
      <header>
        <img className="logo" src="images/logo.png" alt="Logo" />
      </header>
      <div className="house-cards-container">{houseCards}</div>
    </div>
  )
}
