import React, { useState } from 'react'
import './App.css'
import List from './List'

const Data = ({people}) => {

  

  return (
    <>
    {people.map((person)=>{
      const{id,name,Age,image}=person;

      return <article key={id} className='person'>
          <img src={image} alt={name} style={{height:'50px', width:'50px'}}/>

        <div>
          <h4>{name}</h4>
          <p>{Age} years</p>
        </div>

      </article>

    })}

    </>
  )
}

export default Data

