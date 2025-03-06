import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
      <Footer />
    </div>
  );
}

export default App;