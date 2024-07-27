import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MyGoalsHeader from './components/MyGoalsHeader';
import Item from './components/Item';

const App = () => {
  const goals = [
    {
      title: 'Study mathematics',
      description: 'I need to study math every day for the entrance exam',
    },
    {
      title: 'Read 10 pages',
      description: 'Continue reading the book',
    },
    {
      title: 'Practice drums',
      description: 'Practice drums to be cool',
    },
  ];

  return (
    <div className="flex space-x-20">
      <Sidebar />
      <main className="lg:w-calc-100vw-minus-400px w-full">
        <Header />
        <MyGoalsHeader />
        <section className="mt-5 mr-20">
          {goals.map((goal, index) => (
            <Item
              key={index}
              title={goal.title}
              description={goal.description}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
