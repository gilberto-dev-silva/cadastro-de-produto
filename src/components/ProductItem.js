import React from 'react';

const ProductItem = ({ product, deleteProduct }) => {
  return (
    <li>
      <div className='list-product'>
        <div className='product-name'>{product.name}</div>
        <div className='product-price'>
          {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </div>
        <div className='button-delete'>
          <button onClick={() => deleteProduct(product.id)}>Remover</button>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
