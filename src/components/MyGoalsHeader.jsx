import React from 'react';

const Header = () => {
  return (
    <div className="mt-5 flex justify-between items-center w-full h-20">
      <div className="flex items-center space-x-4">
        <span className="w-2.5 h-10 bg-c-base-02 block rounded"></span>
        <h3 className="text-white font-poppins font-semibold text-4xl">
          My Goals
        </h3>
      </div>
      <button className="bg-c-base-01 text-base text-c-gray-0 font-poppins font-semibold p-10 py-3 mr-20 rounded-full transition duration-200 ease hover:bg-c-base-01-hover hover:text-c-black">
        Create personalized goals
      </button>
    </div>
  );
};

export default Header;
