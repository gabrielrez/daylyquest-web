import React from 'react';
import ProfileBadge from './ProfileBadge';

const ProfileHeader = () => {
  return (
    <div className="flex items-center w-full h-64">
      <img
        src="../../public/img/profile-img.jpg"
        alt="Profile"
        className="min-w-64 h-64 rounded-full border-4 border-c-base-02 object-cover"
      />
      <div className="ml-10 w-96">
        <h3 className="block text-white font-poppins font-semibold text-3xl">
          Cirilo
        </h3>
        <span className="block text-c-gray-2 font-poppins font-semibold text-xl my-2">
          Cirilo_123
        </span>
        <span className="block text-white font-roboto font-regular text-xl my-4">
          Joined Octuber 2023
        </span>
      </div>
    </div>
  );
};

export default ProfileHeader;
