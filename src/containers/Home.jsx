import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import AddTask from '../components/AddTask/AddTask';
import Tasks from '../components/Tasks/Tasks';

const Home = () => {
  const [name, setName] = useState('');
  const [tasks, setTasks] = useState([])

  const updateName = (name) => setName(name)
  const updateTasks = (task) => setTasks([...tasks, task])
  

  return (
    <>
      <Navbar />
      <Header getName={updateName} name={name}/>
      { name ?
        <>
          <AddTask getTask={updateTasks} />
          <Tasks tasks={tasks} />
        </>
        : null
      }
      
     
    </>
  )
}

export default Home;
