import React from 'react';
import ProfileBadge from './ProfileBadge';

const Item = ({ title, description }) => {
  return (
    <li className="mt-5 px-6 py-4 flex justify-between items-center w-full bg-c-gray-0 rounded-3xl transition duration-200 ease hover:bg-c-gray-1">
      <div className="content flex items-center">
        <img
          src="../../public/img/grabme.svg"
          className="mr-6 h-12 hover:cursor-grab"
        />
        <div>
          <h3 className="text-white font-poppins font-semibold text-xl">
            {title}
          </h3>
          <p className="text-base font-roboto text-c-gray-2 mt-4">
            {description}
          </p>
        </div>
      </div>
      <div className="min-w-7 h-7 bg-white rounded-full border-4 border-c-gray-2 transition duration-200 ease cursor-pointer hover:scale-110"></div>
    </li>
  );
};

export default Item;
