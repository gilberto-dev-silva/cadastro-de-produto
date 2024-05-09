
import React, { useState } from 'react';

const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim() || !price.trim()) return;
    addProduct({ name, price: parseFloat(price) });
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do Produto"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Preço"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <div className='button-add-product'>
        <button type="submit">Adicionar Produto</button>
      </div>
    </form>
  );
};

export default ProductForm;
