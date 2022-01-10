import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';

const Home = () => {
  const [name, setName] = useState('');
  const updateName = (name) => setName(name) 
  
  return (
    <>
      <Navbar />
      <Header getName={updateName} name={name}/>
    </>
  )
}

export default Home;
