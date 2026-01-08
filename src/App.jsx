import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting';
import Count from './Count';
import Car4 from './Expression';
import Cclass from './Attributes';

function App(){
  return(
    <div className="App">
      <Count />
      <Car4 />
      <Greeting name="John" age={25} />
      <h1>Hello World!</h1>
      <h2>How are you?</h2>
      <button>Click</button>
      <Cclass />
    </div>
  )
}

export default App