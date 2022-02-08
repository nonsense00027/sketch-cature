import { collection, onSnapshot, query } from "@firebase/firestore";
import React, { useState, useEffect } from "react";
import { firestore } from "../shared/configs/firebase";

function Sale() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const q = query(collection(firestore, "Products"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setProducts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="font-bold text-3xl mb-10 mt-10 text-center">
        Items For Sale
      </h1>
      <div className="flex gap-2 flex-wrap">
        {products.map((product) => (
          <div className="border rounded-md w-60 px-4 py-2">
            <h1 className="font-bold text-lg">{product.name}</h1>
            <h4 className="italic text-sm">{product.category}</h4>
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-md">Php. {product.price}</h2>
              <h4>Stock: {product.quantity}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sale;
