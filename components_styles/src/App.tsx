import React from 'react';
import './App.css';

const Header = () => (
  <header>My first page on React TS</header>
);

const Main = () => {
  return (
    <main style={{
      color: 'green',
      marginBottom: '40px',
    }}>Some text</main>
  )
};

const Footer = () => {
  return (
    <footer style={{
      color: 'blue',
      fontWeight: '400'
    }}>Footer</footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
