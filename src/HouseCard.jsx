import React from 'react'

const HouseCard = ({ data, total, index }) => {
  return (
    <div className="house-card">
      <p>
        {total} / {index}
      </p>
      <img src={data.image} alt={`House ${index}`} />
      <div>
        <ul>
          <li>
            <span>Fiyat:</span>
            {data.price}
          </li>
          <li>
            <span>Lokasyon:</span>
            {data.location}
          </li>
          <li>
            <span>Metrekare:</span>
            {data.squareFeet}
          </li>
          <li>
            <span>Dönüm:</span>
            {data.acres}
          </li>
          <li>
            <span>Yapım Yılı:</span>
            {data.yearBuilt}
          </li>
          <li>
            <span>Yatak Odası:</span>
            {data.bedrooms}
          </li>
          <li>
            <span>Banyo:</span>
            {data.bathrooms}
          </li>
          <li>
            <span>Diğer Odalar:</span>
            {data.otherRooms}
          </li>
          <li>
            <span>Garaj:</span>
            {data.garage ? 'Evet' : 'Hayır'}
          </li>
          <li>
            <span>Klima:</span>
            {data.airConditioning ? 'Evet' : 'Hayır'}
          </li>
          <li>
            <span>Isıtma Sistemi:</span>
            {data.heating ? 'Evet' : 'Hayır'}
          </li>
          <li>
            <span>Lanetli:</span>
            {data.haunted ? 'Evet' : 'Hayır'}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HouseCard
