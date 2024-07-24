import React from 'react';

const GoalBox = () => {
  return (
    <div className="flex-grow px-6 py-5 bg-c-gray-0 inline-block rounded-3xl cursor-pointer transition duration-200 ease hover:bg-c-gray-1">
      <h3 className="text-white font-poppins font-semibold text-xl">
        Dayly Goals
      </h3>
      <p className="text-base font-roboto text-c-gray-2 mt-4">
        Access your daily goals
      </p>
      <a
        href="#"
        className="mt-10 text-base font-roboto text-white inline-block underline"
      >
        See All
      </a>
    </div>
  );
};

export default GoalBox;
