import React, { useState } from 'react';
import { data } from './Jsondata';
import './App.css'

export default function App() {

  const [searchItem, setSearchItem] = useState();
  console.log(data)
  return (
    <div className='App'>
      <input className='search' type="text" placeholder="Search..." onChange={event => { setSearchItem(event.target.value) }} />
      {
        data.filter(val => {
          if (searchItem === "") {
            return val
          }
          else if (val.name.includes(searchItem)) {
            return val
          }
        }).map((val) => { 
          return(
            <div className='user' key={val.id}>
              <h2>{val.name}</h2>
              <p>{val.dob}</p>
              <p>{val.age}</p>
              <p>{val.gender}</p>


            </div>
          )}
        )
      }
    </div>
  )
}
