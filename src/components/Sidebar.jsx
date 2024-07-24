import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-c-gray-0 m-5 rounded-3xl text-center px-5 py-8 sidebar-custom-height hidden lg:block">
      <h1 className="text-2xl font-poppins font-bold mb-10 text-c-base-02">
        <span className="text-c-base-01">Dayly</span>Quest
      </h1>
      <span className="block w-full h-0.5 bg-c-gray-1 my-12"></span>
      <ul className="space-y-5">
        <li>
          <a
            href="#"
            className="font-roboto font-normal text-white text-lg block w-60 py-4 bg-c-gray-1 rounded-full"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-roboto font-normal text-white text-lg block w-60 py-4 rounded-full transition duration-200 ease hover:bg-c-gray-1 rounded-full"
          >
            My Profile
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-roboto font-normal text-white text-lg block w-60 py-4 rounded-full transition duration-200 ease hover:border-c-gray-1 hover:bg-c-gray-1 rounded-full"
          >
            Analytics
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-roboto font-normal text-white text-lg block w-60 py-4 rounded-full transition duration-200 ease hover:border-c-gray-1 hover:bg-c-gray-1 rounded-full"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-roboto font-normal text-white text-lg block w-60 py-4 rounded-full transition duration-200 ease hover:border-c-gray-1 hover:bg-c-gray-1 rounded-full"
          >
            Exit
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
