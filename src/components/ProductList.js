import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/productService';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await getProducts();
    setProducts(result.data);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-lg font-medium mb-4">{products.length} Products in Total</h2>

      <table className="min-w-full bg-white">
        <thead>
          <tr className="border-b border-gray-200 ">
            <th className="py-2 px-4 text-left text-xs text-[#AFB8CD] w-1/2 ">Product Image</th>
            <th className="py-2 px-4 text-left text-xs text-[#AFB8CD] text-center">Category</th>
            <th className="py-2 px-4 text-left text-xs text-[#AFB8CD] text-center">Quantity</th>
            <th className="py-2 px-4 text-left text-xs text-[#AFB8CD] text-center">Unit Price</th>
            <th className="py-2 px-4 text-left text-xs text-[#AFB8CD] text-center">Total Revenue</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id} className="border-b border-gray-200">
              <td className="py-2 px-4  ">
                <div className="flex items-center">
                  <img src={product.image} alt={product.name} className="w-20 h-20 object-cover mr-2 rounded-lg" />
                  <div>
                    <Link to={`/edit-product/${product._id}`} className="text-black-500 hover:underline font-semibold	text-base">{product.name}</Link>
                    <p className="text-[#AFB8CD] text-sm">{product.sku}</p>
                  </div>
                </div>
              </td>
              <td className="py-2 px-4 text-center">
                <span className="bg-purple-100 text-purple-600 font-semibold text-sm px-2 py-1 rounded-full ">
                  {product.category}
                </span>
              </td>
              <td className="py-2 px-4 text-center ">{product.units}</td>
              <td className="py-2 px-4 text-center">${product.price}</td>
              <td className="py-2 px-4 text-center">${product.units * product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
