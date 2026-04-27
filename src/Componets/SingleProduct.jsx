import React, { useEffect, useState } from "react";
import axios from "axios";

function SingleProduct({ productId }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    <div>
      <h2>Single Product</h2>
      <h3> ID: {product.id}</h3>
      <p>{product.title}</p>
      <p>₹ {product.price}</p>
      <p>{product.category}</p>
    </div>
  );
}

export default SingleProduct;