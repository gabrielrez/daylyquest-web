import React from 'react';

const ProfileBadge = ({ name, offensive }) => {
  return (
    <a
      href="#"
      className="flex items-center space-x-3 mr-20 transition duration-200 ease hover:bg-c-gray-0 pl-5 rounded-3xl"
    >
      <span className="text-white text-xl font-poppins font-semibold">
        {name}
      </span>
      <div className="relative">
        <img
          src="../../public/img/profile-img.jpg"
          alt="Profile"
          className="min-w-14 h-14 rounded-full object-cover"
        />
        <span className="absolute top-0 right-0 bg-c-red text-white text-base font-poppins font-semibold w-8 h-8 rounded-full transform translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          {offensive}
        </span>
      </div>
    </a>
  );
};

export default ProfileBadge;
