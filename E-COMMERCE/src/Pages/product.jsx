import React, { useState } from "react";

const ProductPage = () => {
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

        { id: 12, name: "Smart Watch", category: "Men", price: 1200, image: "https://images.pexels.com/photos/1334602/pexels-photo-1334602.jpeg" },
        { id: 13, name: "Watch", category: "Men", price: 800, image: "https://images.pexels.com/photos/364822/rolex-watch-time-luxury-364822.jpeg" },
        { id: 14, name: "Bracelet", category: "Men", price: 160, image: "https://images.pexels.com/photos/12194302/pexels-photo-12194302.jpeg" },
        { id: 15, name: "Shirt", category: "Men", price: 200, image: "https://images.pexels.com/photos/9558723/pexels-photo-9558723.jpeg" },
        { id: 16, name: "Formal pants combo", category: "Men", price: 1900, image: "https://images.pexels.com/photos/11176394/pexels-photo-11176394.jpeg" },
        { id: 17, name: "Formal Shoe", category: "Men", price: 900, image: "https://images.pexels.com/photos/32644171/pexels-photo-32644171.jpeg" },
        { id: 18, name: "Bag", category: "Men", price: 200, image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg" },
        { id: 19, name: "Luggage", category: "Men", price: 600, image: "https://images.pexels.com/photos/842960/pexels-photo-842960.jpeg" },
        { id: 20, name: "Ring", category: "Men", price: 200, image: "https://images.pexels.com/photos/1352783/pexels-photo-1352783.jpeg" },
    ];

    const categories = ["All", "Cosmetics", "Gadgets", "Women", "Men"];
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [message, setMessage] = useState("");

    // NEW STATES
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter((p) => p.category === selectedCategory);

    const addToCart = (product) => {
        setMessage(`${product.name} added to cart ✅`);
        setTimeout(() => setMessage(""), 2000);
    };

    // BUY NOW FUNCTION
    const handleBuyNow = (product) => {
        setSelectedProduct(product);
        setQuantity(1);
    };

    const confirmPurchase = () => {
        alert(
            `Purchase Successful!\n\nProduct: ${selectedProduct.name}\nQuantity: ${quantity}\nTotal: $${selectedProduct.price * quantity}`
        );
        setSelectedProduct(null);
    };

    return (
        <div style={styles.page}>
            <h1 style={{ textAlign: "center" }}> MyShop</h1>

            {/* Category Buttons */}
            <div style={styles.categoryContainer}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        style={{
                            ...styles.categoryButton,
                            backgroundColor:
                                selectedCategory === cat ? "#007bff" : "#ddd",
                            color: selectedCategory === cat ? "#fff" : "#000",
                        }}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {message && <div style={styles.message}>{message}</div>}

            {/* Products Grid */}
            <div style={styles.grid}>
                {filteredProducts.map((product) => (
                    <div key={product.id} style={styles.card}>
                        <img src={product.image} alt={product.name} style={styles.image} />
                        <h3>{product.name}</h3>
                        <p><strong>Category:</strong> {product.category}</p>
                        <div style={styles.price}>${product.price}</div>

                        <div style={{ display: "grid", gap: "10px", marginTop: "10px" }}>
                            <button
                                style={styles.cartButton}
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </button>

                            <button
                                style={styles.buyButton}
                                onClick={() => handleBuyNow(product)}
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* CHECKOUT MODAL */}
            {selectedProduct && (
                <div style={styles.modalOverlay}>
                    <div style={styles.modal}>
                        <h2>Checkout</h2>
                        <p><strong>{selectedProduct.name}</strong></p>
                        <p>Price: ${selectedProduct.price}</p>

                        <label>Quantity:</label>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            style={{ width: "60px", marginLeft: "10px" }}
                        />

                        <p style={{ marginTop: "10px" }}>
                            <strong>Total: ${selectedProduct.price * quantity}</strong>
                        </p>

                        <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
                            <button style={styles.confirmButton} onClick={confirmPurchase}>
                                Confirm Buy
                            </button>

                            <button
                                style={styles.cancelButton}
                                onClick={() => setSelectedProduct(null)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    page: {
        padding: "40px",
        fontFamily: "Arial",
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
    },
    categoryContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        margin: "20px 0",
        flexWrap: "wrap",
    },
    categoryButton: {
        padding: "10px 20px",
        borderRadius: "20px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
    },
    card: {
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        textAlign: "center",
    },
    image: {
        width: "100%",
        borderRadius: "8px",
        height: "200px",
        objectFit: "cover",
    },
    price: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#27ae60",
        margin: "10px 0",
    },
    cartButton: {
        flex: 1,
        padding: "8px",
        border: "none",
        borderRadius: "6px",
        backgroundColor: "#007bff",
        color: "white",
        cursor: "pointer",
    },
    buyButton: {
        flex: 1,
        padding: "8px",
        border: "none",
        borderRadius: "6px",
        backgroundColor: "#ff5722",
        color: "white",
        cursor: "pointer",
    },
    message: {
        textAlign: "center",
        marginBottom: "15px",
        color: "green",
        fontWeight: "bold",
    },
    modalOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        width: "300px",
        textAlign: "center",
    },
    confirmButton: {
        flex: 1,
        padding: "8px",
        border: "none",
        borderRadius: "6px",
        backgroundColor: "green",
        color: "white",
        cursor: "pointer",
    },
    cancelButton: {
        flex: 1,
        padding: "8px",
        border: "none",
        borderRadius: "6px",
        backgroundColor: "gray",
        color: "white",
        cursor: "pointer",
    },
};

export default ProductPage;