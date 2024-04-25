import React, { useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className="w-full h-screen bg-neutral-950">
      <Navbar setSidebar={setSidebar} />
      <Home sidebar={sidebar} />
    </div>
  );
}

export default App;
