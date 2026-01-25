import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting';
import Count from './Count';
import Car4 from './Expression';
import Cclass from './Attributes';
import Cobbler from './Component';
import Car from './ReactClassComponent';
import Vehicle from './ReactProps';
import Profile from './DProps';
import MainBox from './ReactPropsChildren';
import Football from './ReactEvent';
import Goal from './ReactCR';
import Goall from './ReactCR';
import Bus from './ReactCR';
import Dpp from './Excersise';
import MyCars from './ReacList';

function App(){
  const x = "expensive";
  let y = [1964, 1965, 1966];
  let z = {name: "Ford", model: "Mustang"};

  return(
    <div className="App">
      <Profile name="Rasheed"  year={27} state="Nasarawa" language="Solidity and JavaScript language" />
      <Vehicle size={y[0]} color={z.name} year={1999} value={x} />
      <Car />
      <Cobbler />
      <Count />
      <Car4 />
      <Greeting name="John" age={25} />
      <h1>Hello World!</h1>
      <h2>How are you?</h2>
      <button>Click</button>
      <Cclass />
      <MainBox />
      <Football />
      <Goal isGoal={!true} />
      <Bus Brand="" brand="Changre" />
      <Goall isGoal={true} />
      <Dpp />
      <MyCars />
    </div>
  )
}

export default App