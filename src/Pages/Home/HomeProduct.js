import React from "react";

const HomeProduct = ({ product }) => {
  const { title, price, description, image, rating } = product;
  return (
    <div className="card border-2 p-5 w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-[200px]" src={image} alt="product pic" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-gray-600 my-5">{description.slice(0, 100)}...</p>
        <p className="flex justify-between">
          <span className="font-semibold text-red-400">${price}</span>{" "}
          <span>Ratings: {rating.rate}</span>
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
