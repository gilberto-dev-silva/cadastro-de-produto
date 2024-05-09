import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, deleteProduct }) => {
  return (
    <div className='list'>
      <div className="product-list-header">
        <h2>Lista de Produtos</h2>
      </div>
      <div className='product-list'>
        <ul>
          {products.map(product => (
            <ProductItem key={product.id} product={product} deleteProduct={deleteProduct} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
