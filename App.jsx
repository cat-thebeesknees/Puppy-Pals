import { puppyList } from './data.js';
import React, { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log("puppList: ", puppyList);
function handleClick() {
  onClick={ ()=> {setFeatPupId(puppy.id)}};
}
const featuredPup = puppies.find((pup)=> pup.id === featPupId);
console.log(featuredPup);
  return (
    
      <div className="App">
        
        {
          puppies.map((puppy) => {
            return (
               <p onClick={handleClick} key={puppy.id}>
              {puppy.name}
              </p>
              {()=>{console.log("puppy id: ", puppy.id)}}
          );
})}
    {featPupId && (
      <div>
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
        </ul>
     
      </div>
     )} 
    
  );
}

export default App
