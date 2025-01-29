import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from './BookingForm';
import '../styles/CarDetail.css';

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/cars/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [id]);

  if (!car) return <p>Loading...</p>;

  return (
    <div className="car-detail">
      <h1>{car.model}</h1>
      <p>{car.description}</p>
      <p>Type: {car.type}</p>
      <p>Price per day: ${car.pricePerDay}</p>
      <BookingForm carId={car.id} availability={car.availability} />
    </div>
  );
};

export default CarDetail;
