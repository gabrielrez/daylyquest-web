import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const App = () => {
  return (
    <div className="flex space-x-20">
      <Sidebar />
      <Header />
    </div>
  );
};

export default App;
