import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './employee.css'

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=2');
        setEmployees(response.data.data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search by first name" onChange={handleSearch} className='search' />
      <div className='employeeList'>
      {filteredEmployees.map((employee) => (
        <div key={employee.id} className='employeeItem'>
           <p className='id'>ID: {employee.id}</p>
          <img src={employee.avatar} alt={employee.first_name} className='image' />
          <p className='first_name'>{employee.first_name}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default EmployeeList;
