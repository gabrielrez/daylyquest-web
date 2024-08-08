import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MyGoalsHeader from '../components/MyGoalsHeader';
import Item from '../components/Item';
import ProfileHeader from '../components/ProfileHeader';

const MyProfile = () => {
  return (
    <div className="flex space-x-20">
      <Sidebar />
      <div>
        <header className="mt-5">
          <ProfileHeader />
        </header>
        <div className="block h-px mt-16 bg-c-gray-1"></div>
        <main className="mt-16 lg:w-calc-100vw-minus-400px">
          <section>
            <h3 className="text-white font-poppins font-semibold text-4xl">
              Statistics
            </h3>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MyProfile;
