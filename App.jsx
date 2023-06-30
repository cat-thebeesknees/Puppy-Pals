import { puppyList } from './data.js';
import React, { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [puppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log("puppList: ", puppyList);

  

const featuredPup = puppies.find((pup)=> pup.id === featPupId);
console.log(featuredPup);
  return (
    
      <div className="App">
        <h1>Puppy Pals</h1>
        {featPupId && (
      <div className="details">
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
        </ul>
     
      </div>
     )}
        
        
         {puppies.map((puppy) => (
            
             <div className="button" onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>
          {puppy.name}
        </div>
            ))}
              </div>
  );
         }

            
          

export default App;
