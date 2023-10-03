import React,{useState} from 'react';
import './App.css';
import List from './List';
import Data from './data';

function App() {
  const [people,setpeople]=useState(List)
  return (
    <>
    <section className='container'>
     
     <h1>{people.length} Birthday Today</h1>
      <Data people={people}/>

<button className='btn' onClick={()=> setpeople([])}>Clear all</button>
    </section>
    
    </>
  );
}

export default App;
