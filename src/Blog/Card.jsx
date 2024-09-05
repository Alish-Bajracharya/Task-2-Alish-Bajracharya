import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg overflow-hidden m-4 bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
        <button className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
