import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MyGoalsHeader from '../components/MyGoalsHeader';
import Item from '../components/Item';

const MyProfile = () => {
  return (
    <div className="flex space-x-20">
      <Sidebar />
      <main className="lg:w-calc-100vw-minus-400px w-full">
        <Header />
        <section className="mt-5 mr-20">MyProfile</section>
      </main>
    </div>
  );
};

export default MyProfile;
