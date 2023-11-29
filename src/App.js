import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react';

export default function App() {
  const [count, setCount]=useState(0)
  
  function handleAdd(){
    setCount(count+1)
  }

  function handleSub(){
    setCount(count-1)
  }
  function handleReset(){
    setCount(0)
  }
  return (
    <div className="App">
      <>
      <Header />
      <hr />
      <div className='counter'>
        <button onClick={handleSub}>Subtract</button>
        <h2>{count}</h2>
        <button onClick={handleAdd}>Add</button>
      </div>
      <hr />
      <div className='center-reset'>
        <button onClick={handleReset} className='reset'>Reset Counter</button>
      </div>
     <hr />

      <Footer />
      </>
      

    </div>
  );
}
