import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MyGoalsHeader from './components/MyGoalsHeader';
import GoalBox from './components/GoalBox';

const App = () => {
  return (
    <div className="flex space-x-20">
      <Sidebar />
      <main className="lg:w-calc-100vw-minus-400px w-full">
        <Header />
        <MyGoalsHeader />
        <section className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-10 mr-20">
          <GoalBox />
          <GoalBox />
          <GoalBox />
        </section>
      </main>
    </div>
  );
};

export default App;
