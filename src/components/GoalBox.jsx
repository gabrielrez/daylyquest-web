import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const GoalBox = ({ name }) => {
  const [status, setStatus] = useState(true);

  const handleStatus = () => {
    setStatus(!status);
  };

  return (
    <div
      onClick={handleStatus}
      className="relative flex-grow px-6 py-5 bg-c-gray-0 inline-block rounded-3xl cursor-pointer transition duration-100 ease hover:bg-c-gray-1"
    >
      <h3 className="text-white font-poppins font-semibold text-xl">
        {name} Goals
      </h3>
      <p className="text-base font-roboto text-c-gray-2 mt-4">
        Access your {name.toLowerCase()} goals
      </p>
      <NavLink
        to={`/tasks`}
        className="mt-10 text-base font-roboto text-white inline-block underline"
      >
        See More
      </NavLink>
      {status && (
        <span className="absolute top-0 right-0 bg-c-yellow text-white text-base font-poppins font-semibold w-8 h-8 rounded-full transform translate-x-1/2 -translate-y-1/4 flex justify-center items-center">
          !
        </span>
      )}
    </div>
  );
};

export default GoalBox;
