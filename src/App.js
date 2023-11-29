import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Counter from './components/Counter';

export default function App() {

  return (
    <div className="App">
      <>
      <Header title="Integer Counter" />
      <hr />
      <Counter />

     <hr />

      <Footer copyright="@copyright. All rights reserved" />
      </>
      

    </div>
  );
}
