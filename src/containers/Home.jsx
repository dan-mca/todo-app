import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import AddTask from '../components/AddTask/AddTask';

const Home = () => {
  const [name, setName] = useState('');
  const [tasks, setTasks] = useState([])

  const updateName = (name) => setName(name) 
  
  return (
    <>
      <Navbar />
      <Header getName={updateName} name={name}/>
      { name ?
         <AddTask />
        : null
      }
      
     
    </>
  )
}

export default Home;
