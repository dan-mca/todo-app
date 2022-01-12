import React, { useState, useContext } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import AddTask from '../components/AddTask/AddTask';
import Tasks from '../components/Tasks/Tasks';
import Footer from '../components/Footer/Footer';
import { TaskContext } from '../context/TasksProvider';

const Home = () => {
  const [name, setName] = useState('');

  const taskContext = useContext(TaskContext)

  const updateName = (name) => setName(name)

  return (
    <>
      <Navbar />
      <Header getName={updateName} name={name}/>
      { name && 
        <>
          <AddTask />
          <Tasks />
        </>
      }
      { taskContext.checkedTasks.length > 0 &&
        <Footer />
      }
     
    </>
  )
}

export default Home;
