import React, { useState, useEffect } from "react";

const Home = () => {
  // Search + Product modal
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Navbar interactive state
  const [nav, setNav] = useState("Home");
  const [navMessage, setNavMessage] = useState("");

  // Products
  const products = [
    { id: 1, name: "Wireless Headphones", price: "$99", img: "https://tse1.mm.bing.net/th/id/OIP.yzjZOqxOEIxXhbtfMd191gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 2, name: "Smart Watch", price: "$149", img: "https://cdn.mos.cms.futurecdn.net/ZnfiyKaps4Ck8n8G8JZd9S.jpg" },
    { id: 3, name: "Gaming Mouse", price: "$45", img: "https://img.freepik.com/premium-photo/gaming-mouse_893571-27038.jpg" },
    { id: 4, name: "Backpack", price: "$70", img: "https://www.factsfanatics.com/content/images/2024/08/Bseash-50L-Hiking-Backpack.png" },
    { id: 5, name: "Sunglasses", price: "$60", img: "https://wallpapers.com/images/hd/sunglasses-pictures-qthr00xtaomch4b9.jpg" },
    {id:6, name:"Smartphone", price:"$50000",img:"https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg"},
  ];

  // Navbar useEffect popup message
  useEffect(() => {
    if (nav === "Home") setNavMessage("🏠 Welcome to Home Page!");
    if (nav === "Categories") setNavMessage("📂 Browse Product Categories!");
    if (nav === "Mall") setNavMessage("🛍️ Welcome to Shopping Mall!");
    if (nav === "Video") setNavMessage("🎥 Watch Trending Videos!");
    if (nav === "Orders") setNavMessage("📦 Check Your Orders!");

    // Auto hide popup after 2 seconds
    const timer = setTimeout(() => setNavMessage(""), 2000);
    return () => clearTimeout(timer);
  }, [nav]);

  // Button handlers
  const handleBuy = (product) => alert(`You clicked Buy Now for "${product.name}"`);
  const handleWishlist = () => alert("Added to Wishlist ❤️");
  const handleCart = () => alert("Added to Cart 🛒");

  const handleProductClick = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  return (
    <div style={styles.container}>

      {/* HEADER */}
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
          <button style={styles.headerButton} onClick={handleWishlist}>💖 </button>
          <button style={styles.headerButton} onClick={handleCart}>🛒 </button>
        </div>
      </header>

      {/* MAIN */}
      <main style={styles.main}>
        <h1 style={styles.heroTitle}>Discover Amazing Products</h1>
        <p style={styles.heroSubtitle}>Curated just for you</p>

        <div style={styles.productsContainer}>
          {products
            .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
            .map((product) => (
              <div key={product.id} style={styles.productCard} onClick={() => handleProductClick(product)}>
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
                  Buy now
                </button>
              </div>
            ))}
        </div>
      </main>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.img} alt="" style={{ width: "100%", borderRadius: "12px" }} />
            <p style={{ fontSize: "18px" }}>Price: {selectedProduct.price}</p>
            <button style={styles.buyButton} onClick={() => handleCart(selectedProduct)}>Add to cart</button>
            <button style={{ ...styles.buyButton, background: "red", marginLeft: "10px" }} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {/* NAVBAR POPUP MESSAGE */}
      {navMessage && <div style={styles.navPopup}>{navMessage}</div>}

      {/* FOOTER NAVBAR */}
      <footer style={styles.footer}>
        <nav style={styles.footerNav}>
          <button style={styles.navButton} onClick={() => setNav("Home")}>🏠 Home</button>
          <button style={styles.navButton} onClick={() => setNav("Categories")}>📂 Categories</button>
          <button style={styles.navButton} onClick={() => setNav("Mall")}>🛍️ Mall</button>
          <button style={styles.navButton} onClick={() => setNav("Video")}>🎥 Video Finds</button>
          <button style={styles.navButton} onClick={() => setNav("Orders")}>📦 My Orders</button>
        </nav>
      </footer>
    </div>
  );
};

// STYLES
const styles = {
  container: {
    fontFamily: "Arial",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "linear-gradient(135deg,#f5f7fa,#c3cfe2)",
  },

  /* HEADER */
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 15px", // smaller
    background: "#fff",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  logo: { fontSize: "20px", fontWeight: "bold" },
  rightHeader: { display: "flex", gap: "6px" },
  searchBox: { padding: "5px 10px", borderRadius: "15px", border: "1px solid #ccc", fontSize: "12px" },
  headerButton: { padding: "5px 10px", borderRadius: "15px", border: "none", background: "#007bff", color: "#fff", fontSize: "12px" },

  /* MAIN */
main: {
  flex: 1,
  padding: "10px",
  textAlign: "center",
},

  /* PRODUCTS GRID */
  productsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", // smaller cards
    gap: "10px",
  },

  productCard: {
    background: "#fff",
    padding: "8px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "0.2s",
  },

  productImg: { width: "100%", borderRadius: "8px", height: "120px", objectFit: "cover" },
  productName: { fontSize: "14px", margin: "5px 0" },
  productPrice: { fontSize: "13px", color: "#007bff" },

  buyButton: {
    padding: "4px 10px",
    borderRadius: "12px",
    border: "none",
    background: "#28a745",
    color: "#fff",
    fontSize: "12px",
    cursor: "pointer",
  },

  /* FOOTER NAVBAR */
  footer: {
  background: "#fff",
  padding: "8px 0",
  width: "100%",
  boxShadow: "0 -1px 4px rgba(0,0,0,0.1)",
  marginTop: "auto",   // 👈 pushes footer to bottom inside container
},
  footerNav: { display: "flex", justifyContent: "space-around" },
  navButton: { background: "none", border: "none", fontSize: "12px", cursor: "pointer" },

  /* MODAL */
  modalOverlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center" },
  modalContent: { background: "#fff", padding: "12px", borderRadius: "10px", width: "280px" },

  /* NAV POPUP */
  navPopup: {
    position: "fixed",
    top: "60px",
    right: "10px",
    background: "black",
    color: "white",
    padding: "8px 12px",
    borderRadius: "15px",
    fontSize: "12px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
  },
};


export default Home;  




