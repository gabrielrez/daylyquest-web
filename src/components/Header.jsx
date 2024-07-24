import React from 'react';
import ProfileBadge from './ProfileBadge';

const Header = () => {
  return (
    <div className="mt-5 flex justify-between items-center w-full h-20">
      <p className="text-c-gray-2 font-roboto text-base">
        Complete your goals within the set deadline to maintain your offensive!
      </p>
      <ProfileBadge />
    </div>
  );
};

export default Header;
