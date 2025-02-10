import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarCard from "./CarCard";
import BookingForm from "./BookingForm";
import "../styles/CarDetail.css";

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
    <div className="car-detail-container">
      <div className="car-detail">
        <CarCard car={car} />
        <BookingForm carId={car.id} setCar={setCar} />
      </div>
    </div>
  );
};

export default CarDetail;
