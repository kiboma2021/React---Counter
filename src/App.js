import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="App">
      <>
      <Header />
      <div className='counter'>
        <button>Subtract</button>
        <h2>0</h2>
        <button>Add</button>

      </div>

      <Footer />
      </>
      

    </div>
  );
}
