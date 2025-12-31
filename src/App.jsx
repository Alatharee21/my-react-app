import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting';
import Count from './Count';

function App(){
  return(
    <div className="App">
      <Count />
      <Greeting name="John" age={25} />
      <h1>Hello World!</h1>
      <h2>How are you?</h2>
      <button>Click</button>
    </div>
  )
}

export default App