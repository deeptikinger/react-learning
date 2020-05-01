import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app =props=> {
const [personsState,setpersonState]=  useState({
    persons:[
      {name:"a" ,age:25},
      {name:"b" ,age:23},
      {name:"c" ,age:21}
    ]
  })
  const switchHandler=()=>{
    // console.log("clicked")
    //Dont this.state.persons[0].name="eepp"
    setpersonState({persons:
      [
        {name:"abc" ,age:25},
        {name:"b" ,age:23},
        {name:"c" ,age:26}
      ]})
    }
  
   return(
     <div className='App'>
       <h1>this is just testing</h1>
       <button onClick={switchHandler}>Switch Name</button>
       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies:racing </Person>
       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
     </div>
   )
  }

export default app;

