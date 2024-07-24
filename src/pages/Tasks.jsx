import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MyGoalsHeader from './components/MyGoalsHeader';
import Item from './components/Item';

const App = () => {
  return (
    <div className="flex space-x-20">
      <Sidebar />
      <main className="lg:w-calc-100vw-minus-400px w-full">
        <Header />
        <MyGoalsHeader />
        <section className="mt-5 mr-20">
          <ul>
            <Item />
            <Item />
            <Item />
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
