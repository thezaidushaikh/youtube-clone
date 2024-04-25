import React from 'react'
import Sidebar from './Sidebar';

function Home({sidebar}) {
  return (
    <>
    <Sidebar sidebar={sidebar}/>
    </>
  );
}

export default Home