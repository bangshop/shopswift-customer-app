import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Header from './components/Header';
import './App.css'; // Basic styling

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          {/* You can add more routes here like /cart, /checkout etc. */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;