import React, { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: "Wireless Headphones", price: "$99", img: "https://tse1.mm.bing.net/th/id/OIP.yzjZOqxOEIxXhbtfMd191gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 2, name: "Smart Watch", price: "$149", img: "https://cdn.mos.cms.futurecdn.net/ZnfiyKaps4Ck8n8G8JZd9S.jpg" },
    { id: 3, name: "Gaming Mouse", price: "$45", img: "https://img.freepik.com/premium-photo/gaming-mouse_893571-27038.jpg" },
    { id: 4, name: "Backpack", price: "$70", img: "https://www.factsfanatics.com/content/images/2024/08/Bseash-50L-Hiking-Backpack.png" },
    { id: 5, name: "Sunglasses", price: "$60", img: "https://wallpapers.com/images/hd/sunglasses-pictures-qthr00xtaomch4b9.jpg" },
  ];

  const handleBuy = (product) => {
    alert(`You clicked Buy Now for "${product.name}"!`);
  };

  const handleWishlist = () => {
    alert("Wishlist clicked!");
  };

  const handleCart = () => {
    alert("Cart clicked!");
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>✨ MyShop</div>
        <div style={styles.rightHeader}>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.searchBox}
          />
          <button style={styles.headerButton} onClick={handleWishlist}>💖 Wishlist</button>
          <button style={styles.headerButton} onClick={handleCart}>🛒 Cart</button>
        </div>
      </header>

      <main style={styles.main}>
        <h1 style={styles.heroTitle}>Discover Amazing Products</h1>
        <p style={styles.heroSubtitle}>Curated just for you</p>
        <div style={styles.productsContainer}>
          {products
            .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
            .map((product) => (
              <div
                key={product.id}
                style={styles.productCard}
                onClick={() => handleProductClick(product)}
              >
                <img src={product.img} alt={product.name} style={styles.productImg} />
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.productPrice}>{product.price}</p>
                <button
                  style={styles.buyButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBuy(product);
                  }}
                >
                  Buy Now
                </button>
              </div>
            ))}
        </div>
      </main>

      {selectedProduct && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.img} alt={selectedProduct.name} style={{ width: "100%", borderRadius: "12px" }} />
            <p style={{ fontSize: "18px", marginTop: "10px" }}>Price: {selectedProduct.price}</p>
            <button style={styles.buyButton} onClick={() => handleBuy(selectedProduct)}>Buy Now</button>
            <button style={{ ...styles.buyButton, backgroundColor: "#dc3545", marginLeft: "10px" }} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      <footer style={styles.footer}>
        <nav style={styles.footerNav}>
          <button style={styles.navButton}>🏠 Home</button>
          <button style={styles.navButton}>📂 Categories</button>
          <button style={styles.navButton}>🛍️ Mall</button>
          <button style={styles.navButton}>🎥 Video Finds</button>
          <button style={styles.navButton}>📦 My Orders</button>
        </nav>
      </footer>
    </div>
  );
};

// Complete styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#ffffffcc",
    backdropFilter: "blur(10px)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    zIndex: 10,
    position: "sticky",
    top: 0,
  },
  logo: { fontSize: "28px", fontWeight: "bold", color: "#4a4a4a" },
  rightHeader: { display: "flex", alignItems: "center", gap: "15px" },
  searchBox: { padding: "8px 12px", fontSize: "16px", borderRadius: "20px", border: "1px solid #ccc", outline: "none", width: "200px", transition: "0.3s" },
  headerButton: { padding: "8px 15px", fontSize: "16px", borderRadius: "20px", border: "none", cursor: "pointer", backgroundColor: "#007bff", color: "#fff", transition: "0.3s" },
  main: { flex: 1, overflowY: "auto", padding: "30px", display: "flex", flexDirection: "column", alignItems: "center" },
  heroTitle: { fontSize: "40px", fontWeight: "bold", marginBottom: "10px", textAlign: "center", color: "#333" },
  heroSubtitle: { fontSize: "18px", color: "#666", marginBottom: "30px", textAlign: "center" },
  productsContainer: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "25px", width: "100%" },
  productCard: { background: "#fff", borderRadius: "12px", padding: "15px", textAlign: "center", boxShadow: "0 8px 15px rgba(0,0,0,0.1)", transition: "transform 0.3s, box-shadow 0.3s", cursor: "pointer" },
  productImg: { width: "100%", borderRadius: "12px", marginBottom: "10px" },
  productName: { fontSize: "18px", fontWeight: "bold", color: "#333" },
  productPrice: { fontSize: "16px", color: "#007bff", marginBottom: "10px" },
  buyButton: { padding: "8px 20px", fontSize: "16px", border: "none", borderRadius: "20px", backgroundColor: "#28a745", color: "#fff", cursor: "pointer", transition: "0.3s" },
  footer: { borderTop: "1px solid #ccc", padding: "10px 0", backgroundColor: "#ffffffcc", backdropFilter: "blur(10px)", position: "fixed", bottom: 0, width: "100%" },
  footerNav: { display: "flex", justifyContent: "space-around" },
  navButton: { background: "none", border: "none", fontSize: "16px", cursor: "pointer", color: "#333" },
  modalOverlay: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 },
  modalContent: { background: "#fff", padding: "20px", borderRadius: "12px", width: "90%", maxWidth: "400px", textAlign: "center" },
};

export default Home;