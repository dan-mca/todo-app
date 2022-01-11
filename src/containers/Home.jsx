import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import AddTask from '../components/AddTask/AddTask';
import Tasks from '../components/Tasks/Tasks';
import Footer from '../components/Footer/Footer';

const Home = () => {
  const [name, setName] = useState('');
  const [tasks, setTasks] = useState([])
  const [tasksToDelete, setTasksToDelete] = useState([])

  const updateName = (name) => setName(name)
  const updateTasks = (task) => setTasks([...tasks, task])
  
  const checkedTasks = (task) => {
    if (task.action === 'add') {
      setTasksToDelete([...tasksToDelete, task])
    } else if (task.action === 'delete') {
      let index = tasksToDelete.findIndex(el => el.id === task.id)
      setTasksToDelete(tasksToDelete.filter(item => item.id !== task.id))
    }
  }

  console.log(tasksToDelete)
  console.log(tasksToDelete.length)

  return (
    <>
      <Navbar />
      <Header getName={updateName} name={name}/>
      { name ?
        <>
          <AddTask getTask={updateTasks} />
          <Tasks tasks={tasks} checkedTasks={checkedTasks}/>
        </>
        : null
      }
      { tasks.length > 0 ?
        <Footer selectedTasks={tasksToDelete.length} />
        :
        null
      }
      
      
     
    </>
  )
}

export default Home;
