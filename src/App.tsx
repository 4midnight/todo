import React from 'react';
import './App.scss';
import ToDo from './components/ToDo/ToDo';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <ToDo />
      </div>
    </div>
  );
}

export default App;
