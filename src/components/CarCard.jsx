import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CarCard.css';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img className="car-image" src={car.image} alt={car.model} />
      <div className="car-details">
        <h3 className="car-model">{car.model}</h3>
        <p className="car-type">Type: {car.type}</p>
        <p className="car-price">Price per day: ${car.pricePerDay}</p>
        <button className="view-details-btn">
          <Link to={`/cars/${car.id}`} className="link-btn">View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default CarCard;
