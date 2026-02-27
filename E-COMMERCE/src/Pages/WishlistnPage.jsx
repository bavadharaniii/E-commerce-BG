import React, { useState } from "react";
import "./Wishlist.css";

const WishlistnPage = () => {

  const products = [
    { id: 1, name: "Lipstick", category: "Cosmetics", price: 250, image: "https://images.pexels.com/photos/7810641/pexels-photo-7810641.jpeg" },
    { id: 2, name: "Foundation", category: "Cosmetics", price: 400, image: "https://images.pexels.com/photos/5476580/pexels-photo-5476580.jpeg" },
    { id: 3, name: "Perfume", category: "Cosmetics", price: 800, image: "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg" },
    { id: 4, name: "Smartphone", category: "Gadgets", price: 99999, image: "https://images.pexels.com/photos/13939986/pexels-photo-13939986.jpeg" },
    { id: 5, name: "Laptop", category: "Gadgets", price: 40000, image: "https://images.pexels.com/photos/4067506/pexels-photo-4067506.jpeg" },
    { id: 6, name: "Bluetooth Earbuds", category: "Gadgets", price: 520, image: "https://images.pexels.com/photos/10029870/pexels-photo-10029870.jpeg" },
    { id: 7, name: "Women's Dress", category: "Women", price: 70, image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg" },
    { id: 8, name: "Heels", category: "Women", price: 90, image: "https://images.pexels.com/photos/3782786/pexels-photo-3782786.jpeg" },
    { id: 9, name: "Handbag", category: "Women", price: 150, image: "https://images.pexels.com/photos/9327162/pexels-photo-9327162.jpeg" },
    { id: 10, name: "Men's Jacket", category: "Men", price: 120, image: "https://images.pexels.com/photos/16069733/pexels-photo-16069733.jpeg" },
    { id: 11, name: "Sneakers", category: "Men", price: 110, image: "https://images.pexels.com/photos/2918534/pexels-photo-2918534.jpeg" },
    { id: 12, name: "Watch", category: "Men", price: 200, image: "https://images.pexels.com/photos/1334602/pexels-photo-1334602.jpeg" },
    { id: 13, name: "Face serum", category: "Women", price: 450, image: "https://images.pexels.com/photos/32282462/pexels-photo-32282462.jpeg" },
    { id: 14, name: "Smart Watch", category: "Men", price: 200, image: "https://images.pexels.com/photos/1334602/pexels-photo-1334602.jpeg" },
    
  ];

  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Shop</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map(product => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
            <img src={product.image} alt={product.name} width="100%" height="150px" />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <button onClick={() => addToWishlist(product)}>
              ❤️ 
            </button>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "40px" }}>💖 My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {wishlist.map(item => (
            <div key={item.id} style={{ border: "1px solid pink", padding: "10px", width: "200px" }}>
              <img src={item.image} alt={item.name} width="100%" height="150px" />
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
              <button onClick={() => removeFromWishlist(item.id)}>
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistnPage;


