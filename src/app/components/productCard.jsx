import React from 'react';

const ProductCard = ({ product }) => {
  const {
    name,
    category,
    description,
    rating,
    difficulty,
  } = product;

  return (
    <div className='felx  mx-auto '>
        <div className="card bg-base-100 border border-base-300 shadow-md">
      <div className="card-body">

        {/* Content */}
        <h2 className="card-title mt-3">
          {name}
        </h2>

        <p className="text-sm text-base-content/70">
          {description}
        </p>

        {/* Category & Difficulty */}
        <div className="flex justify-between items-center mt-4">
          <span className="badge badge-outline">
            {category}
          </span>

          <span className="text-sm">
            {difficulty}
          </span>
        </div>

        {/* Rating */}
        <div className="mt-3">
          <span>⭐ {rating}</span>
        </div>

        {/* Button */}
        <div className="card-actions mt-4">
          <button className="btn btn-primary w-full">
            Add to Stack
          </button>
        </div>

      </div>
    </div>
    </div>
  );
};

export default ProductCard;