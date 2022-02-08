import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../shared/configs/firebase";
import { Link } from "react-router-dom";

function ViewItems() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const q = query(collection(firestore, "Products"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setProducts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);

  console.log("products: ", products);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(firestore, "Products"), {
      name,
      category,
      price,
      quantity: parseInt(quantity),
    });
    alert("Product added!");
    setName("");
    setCategory("");
    setPrice("");
    setQuantity(1);
  };

  const updateStock = async (id, quantity, method) => {
    const docRef = doc(firestore, "Products", id);

    if (method === "add") {
      await updateDoc(docRef, {
        quantity: quantity + 1,
      });
    } else {
      await updateDoc(docRef, {
        quantity: quantity - 1,
      });
    }
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <form className="w-80 flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Item name:</label>
          <input
            className="border py-1 px-1"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category">Item category</label>
          <select
            name=""
            id=""
            className="border py-2 px-1 rounded-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="keychain">Keychain</option>
            <option value="mugs">Mugs</option>
            <option value="bags">Bags</option>
            <option value="shirts">Shirts</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category">Item price:</label>
          <input
            className="border py-1 px-1"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category">Item quantity:</label>
          <input
            className="border py-1 px-1"
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-green-400 py-1 text-white">
          Add Item
        </button>
      </form>

      <table className="mt-10">
        <tr>
          <th>Item code</th>
          <th>Item name</th>
          <th>Item category</th>
          <th>Item price</th>
          <th>Item quantity</th>
          <th>Actions</th>
        </tr>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td className="flex gap-2">
                <button
                  className="bg-blue-400 text-white rounded-sm py-1 px-2"
                  onClick={() =>
                    updateStock(product.id, product.quantity, "add")
                  }
                >
                  Increment
                </button>
                <button
                  className="bg-red-400 text-white rounded-sm py-1 px-2"
                  onClick={() =>
                    updateStock(product.id, product.quantity, "minus")
                  }
                >
                  Decrement
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewItems;
