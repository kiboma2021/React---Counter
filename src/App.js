import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="App">
      <>
      <Header />
      <hr />
      <div className='counter'>
        <button>Subtract</button>
        <h2>0</h2>
        <button>Add</button>
      </div>
      <hr />
      <div className='center-reset'>
        <button className='reset'>Reset Counter</button>
      </div>
     <hr />

      <Footer />
      </>
      

    </div>
  );
}
