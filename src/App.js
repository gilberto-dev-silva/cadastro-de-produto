import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = product => {
    product.id = Date.now();
    setProducts([...products, product]);
  };

  const deleteProduct = id => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="app">
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} />
    </div>
  );
};

export default App;
