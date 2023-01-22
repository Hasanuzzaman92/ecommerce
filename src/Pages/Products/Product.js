import React from "react";

const Product = ({ product }) => {
  const { title, price, description, image, rating } = product;
  return (
    <div className="card border-2 p-5 w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-[200px]" src={image} alt="product pic" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="tex-gray-600 my-5">{description.slice(0, 120)}...</p>
        <p className="flex justify-between">
          <span>${price}</span> <span>Ratings: {rating.rate}</span>
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
