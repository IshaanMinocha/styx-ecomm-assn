import React from "react";

const ProductCard = ({ name, id, countInStock, category, rating, price, handler, imgSrc }) => (
    <div className="bg-light w-80 m-8 rounded-lg p-8 transition-all duration-500 flex flex-col items-center hover:scale-105">
        <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
        <p className="mt-4 font-bold">{name}</p>
        <h4 className="mt-4">Price: Rs {price}</h4>
        <h4 className="mt-4">Quantity {countInStock}</h4>
        <h4 className="mt-4">Category - {category}</h4>
        <h4 className="mt-4">Rating: {rating} Stars</h4>
        <button
            onClick={() => handler({ name, price, id, rating, category, countInStock , quantity: 1, imgSrc })}
            className="cursor-pointer bg-primary border-none py-4 text-light rounded-lg transition-all duration-500 font-medium w-full mt-4 hover:bg-primary/90"
        >
            Add to Cart
        </button>
    </div>
);

export default ProductCard;
