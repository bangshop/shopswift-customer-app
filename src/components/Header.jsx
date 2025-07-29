// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="app-header">
      <h1>ShopSwift</h1>
      <nav>
        {/* You can add navigation links here later */}
        <span>Cart (0)</span>
      </nav>
    </header>
  );
};

export default Header;