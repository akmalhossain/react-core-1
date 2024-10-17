import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      {/* <Device name="Laptop" price="6000"></Device>
      <Device name= "mobile" price ="8000"></Device>
      <Device name= "watch" price ="4000"></Device>
      <Device ></Device>
      <Person></Person>
      <Student grade="4" score ="700"></Student>
      <Student grade="2" score ="800"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )


}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: 'sakib', age: 12 }
  // return <h3>I am {person.name} a person age: {age+ money}</h3>
  return <h3>I am {person.name} a person age: {person.age}</h3>
}
function Student({grade=1, score=0}) { 
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>score: {score}</p>

    </div>
  )
}

function Developer(){
  const devStyle= {
    margin:'20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'

  }
  return(
    <>
    <div style={devStyle}>
      <h5>Developer</h5>
      <p>Coding: </p>
    </div>
    <div style={{
    margin:'20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'

  }}>
      <h5>Developer </h5>
      <p>Coding: </p>
    </div>
    </>
  )
}
function Device({name, price}){
  // const {name, price}=props;
  return <h2>Device Name: {name}/ price {price} </h2>
}



export default App
