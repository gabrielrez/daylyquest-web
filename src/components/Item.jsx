import React, { useState } from 'react';
import ProfileBadge from './ProfileBadge';

const Item = ({ title, description }) => {
  // status false -> done
  // status true -> pending
  const [status, setStatus] = useState(true);

  const handleStatus = () => {
    setStatus(!status);
  };

  return (
    <li className="mt-5 px-6 py-6 flex justify-between items-center w-full bg-c-gray-0 rounded-3xl transition duration-100 ease hover:bg-c-gray-1">
      <div className="content flex items-center">
        <img
          src="../../public/img/grabme.svg"
          className="mr-6 h-12 hover:cursor-grab"
        />
        <div>
          <h3 className="text-white font-poppins font-semibold leading-3 text-xl">
            {title}
          </h3>
          <p className="text-base font-roboto text-c-gray-2 leading-3 mt-4">
            {description}
          </p>
        </div>
      </div>
      <div
        className={`min-w-7 h-7 rounded-full border-4 transition duration-100 ease cursor-pointer hover:scale-110 ${
          status ? 'bg-white border-c-gray-2' : 'bg-c-base-02 border-c-base-02'
        }`}
        onClick={handleStatus}
      >
        {!status && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#FFFFFF"
            class="bi bi-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
          </svg>
        )}
      </div>
    </li>
  );
};

export default Item;
