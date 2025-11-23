import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Cart />
        <main>
          <Hero />
          <ProductsSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
