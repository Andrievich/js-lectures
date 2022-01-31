import React from 'react';
import './App.css';
import { Clicker } from './components/clicker/clicker';
import { Form } from './components/Form';


const App: React.FC = () => {
  return (
    <>
      <section>
        <div className='container'>
          <Clicker />
          <div className="clicker-wrapper">
            <Clicker />
            <Clicker />
            <Clicker />
            <Clicker />
            <Clicker />
          </div>
        </div>   
      </section>
      <section>
        <div className="container">
          <Form />
        </div>
      </section>
    </>
  );
}

export default App;
