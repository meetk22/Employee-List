import React from 'react';
import EmployeeList from './EmployeeList';
import './App.css';

const App = () => {
  return (
    <div>
      <h1 className='header'>Employee List</h1>
      <EmployeeList />
    </div>
  );
};

export default App;
