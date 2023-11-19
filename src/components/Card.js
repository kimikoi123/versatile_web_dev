import React from "react"

const Card = ({ title, restaurants }) => {
  return (
    <div className="mx-auto sm:mx-0">
      <div className="text-xl font-semibold bg-black text-white text-center mb-3">{title}</div>
      <ul className="pl-5">
        {restaurants.map((restaurant, index) => (
          <li key={`${restaurant.restaurant_name + index}`} className="list-disc">{restaurant.restaurant_name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Card
