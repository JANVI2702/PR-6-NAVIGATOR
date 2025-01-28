import React, { createContext, useContext } from "react";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is the description for Product 1.",
      image: "https://img.tatacliq.com/images/i19//658Wx734H/MP000000023041620_658Wx734H_202407262021321.jpeg",
      price: 19.99,
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is the description for Product 2.",
      image: "https://img.tatacliq.com/images/i10/658Wx734H/MP000000016677444_658Wx734H_202302270105571.jpeg",
      price: 29.99,
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is the description for Product 3.",
      image: "https://img.tatacliq.com/images/i18//658Wx734H/MP000000016577285_658Wx734H_202406301656021.jpeg",
      price: 39.99,
    },
  ];

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("userProducts must be used within an ProductProvider");
  }
  return context;
}

