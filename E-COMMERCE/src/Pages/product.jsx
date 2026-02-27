import React from "react";

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
    ];

    const categories = ["All", "Cosmetics", "Gadgets", "Women", "Men"];

    return (
        <div style={styles.page}>
            <h1 style={{ textAlign: "center" }}>MyShop</h1>

            {/* Categories (Static) */}
            <div style={styles.categoryContainer}>
                {categories.map((cat) => (
                    <div key={cat} style={{ ...styles.categoryButton, backgroundColor: "#ddd", color: "#000" }}>
                        {cat}
                    </div>
                ))}
            </div>

            {/* Products Grid */}
            <div style={styles.grid}>
                {products.map((product) => (
                    <div key={product.id} style={styles.card}>
                        <img src={product.image} alt={product.name} style={styles.image} />
                        <h3>{product.name}</h3>
                        <p><strong>Category:</strong> {product.category}</p>
                        <div style={styles.price}>${product.price}</div>

                        {/* Buttons removed or static */}
                        <div style={{ marginTop: "10px" }}>
                            <button style={{ ...styles.cartButton, cursor: "default" }}>Add to Cart</button>
                            <button style={{ ...styles.buyButton, cursor: "default", marginLeft: "5px" }}>Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
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
        fontWeight: "bold",
        textAlign: "center",
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
        padding: "8px",
        border: "none",
        borderRadius: "6px",
        backgroundColor: "#007bff",
        color: "white",
    },
    buyButton: {
        padding: "8px",
        border: "none",
        borderRadius: "6px",
        backgroundColor: "#ff5722",
        color: "white",
    },
};

export default ProductPage;