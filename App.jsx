import { puppyList } from './data.js';
import React, { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log("puppList: ", puppyList);

  return (
    <>
      <div className='App'>
        {
          puppies.map((puppy) => {
            return <p key={puppy.id}>{puppy.name}</p>;
          })
        }
      </div>
      
    </>
  );
}

export default App
