import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MyGoalsHeader from './components/MyGoalsHeader';

const App = () => {
  return (
    <div className="flex space-x-20">
      <Sidebar />
      <main className="w-calc-100vw-minus-400px">
        <Header />
        <MyGoalsHeader />
      </main>
    </div>
  );
};

export default App;
