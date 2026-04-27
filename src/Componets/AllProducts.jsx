import React, { useEffect, useState } from "react";
import axios from "axios";
function AllProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []); 
  
    
  return (
    <div>
      <h2>All Products</h2>
      {products.map((item) => (
        <div key={item.id}>
          <h3> ID:{item.id}</h3>
          <p>{item.title}</p>
          <p>₹ {item.price}</p>
          <p>{item.category}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default AllProducts;