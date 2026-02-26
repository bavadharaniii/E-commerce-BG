import React, { useState, useEffect } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [nav, setNav] = useState("Home");
  const [navMessage, setNavMessage] = useState("");
  const [category, setCategory] = useState("All");
  const [fadeIn, setFadeIn] = useState(true);

  // Fade animation
  useEffect(() => {
    setFadeIn(false);
    const timer = setTimeout(() => setFadeIn(true), 200);
    return () => clearTimeout(timer);
  }, [nav]);

  // Nav popup message
  useEffect(() => {
    const messages = {
      Home: "🏠 Welcome to MyShop!",
      Products: "🛍 Explore Premium Products!",
      About: "✨ Learn About MyShop!",
      Contact: "📞 Let's Connect!"
    };
    setNavMessage(messages[nav] || "");
    const timer = setTimeout(() => setNavMessage(""), 2000);
    return () => clearTimeout(timer);
  }, [nav]);

  const products = [
  // Electronics
  { id: 1, name: "Wireless Headphones", price: "$99", category: "Electronics", img: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg" },
  { id: 2, name: "Smart Watch", price: "$149", category: "Electronics", img: "https://images.pexels.com/photos/30385640/pexels-photo-30385640.jpeg" },
  { id: 6, name: "Bluetooth Speaker", price: "$79", category: "Electronics", img: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg" },

  // Cosmetics
  { id: 3, name: "Lipstick Kit", price: "$30", category: "Cosmetics", img: "https://images.pexels.com/photos/2547462/pexels-photo-2547462.jpeg" },
  { id: 7, name: "Makeup Brush Set", price: "$25", category: "Cosmetics", img: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg" },
  { id: 8, name: "Foundation Cream", price: "$40", category: "Cosmetics", img: "https://images.pexels.com/photos/6621467/pexels-photo-6621467.jpeg" },

  // Women Dresses
  { id: 4, name: "Women Dress", price: "$120", category: "Women Dresses", img: "https://images.pexels.com/photos/1382730/pexels-photo-1382730.jpeg" },
  { id: 9, name: "Party Gown", price: "$180", category: "Women Dresses", img: "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg" },
  { id: 10, name: "Casual Kurti", price: "$60", category: "Women Dresses", img: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg" },

  // Men Dresses
  { id: 5, name: "Men Shirt", price: "$80", category: "Men Dresses", img: "https://images.pexels.com/photos/17901262/pexels-photo-17901262.jpeg" },
  { id: 11, name: "Formal Suit", price: "$200", category: "Men Dresses", img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg" },
  { id: 12, name: "Casual T-Shirt", price: "$35", category: "Men Dresses", img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg" },
];

  const filteredProducts = products
    .filter(p => category === "All" || p.category === category)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={styles.container}>
      
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.logo} onClick={() => setNav("Home")}>
          ✨ MyShop
        </div>

        <div style={styles.topNav}>
          {["Home", "Products", "About", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => setNav(item)}
              style={{
                ...styles.topNavBtn,
                background: nav === item ? "linear-gradient(45deg,#00f2fe,#4facfe)" : "transparent",
                color: "#fff"
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchBox}
        />
      </header>

      {/* MAIN */}
      <main
        style={{
          ...styles.main,
          opacity: fadeIn ? 1 : 0,
          transition: "0.5s"
        }}
      >

        {/* HOME PAGE */}
        {nav === "Home" && (
          <>
            <h1 style={styles.title}>Welcome to MyShop ✨</h1>
            <p style={styles.subtitle}>Explore Our Trending Products</p>

            <div style={styles.productsContainer}>
              {products.map((product) => (
                <div key={product.id} style={styles.productCard}>
                  <img
                    src={product.img}
                    alt={product.name}
                    style={styles.productImg}
                  />
                  <h4>{product.name}</h4>
                  <p>{product.price}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* PRODUCTS PAGE */}
        {nav === "Products" && (
          <div style={styles.productsContainer}>
            {filteredProducts.map((product) => (
              <div key={product.id} style={styles.productCard}>
                <img
                  src={product.img}
                  alt={product.name}
                  style={styles.productImg}
                />
                <h4>{product.name}</h4>
                <p>{product.price}</p>
                <button style={styles.buyButton}>Buy Now</button>
              </div>
            ))}
          </div>
        )}

        {/* ABOUT PAGE */}
        {nav === "About" && (
          <div style={styles.cardGlass}>
            <h2>About MyShop</h2>
            <p>
              MyShop is a modern eCommerce platform that provides
              high-quality Electronics, Cosmetics, and Fashion products.
            </p>
            <p>
              We focus on customer satisfaction, fast delivery,
              premium UI experience and affordable pricing.
            </p>
            <div style={styles.stats}>
              <div>🛍 100+ Products</div>
              <div>🚚 Fast Delivery</div>
              <div>⭐ 4.9 Customer Rating</div>
            </div>
          </div>
        )}

        {/* CONTACT PAGE */}
        {nav === "Contact" && (
          <div style={styles.cardGlass}>
            <h2>Contact Us</h2>
            <input placeholder="Your Name" style={styles.inputBox} />
            <input placeholder="Your Email" style={styles.inputBox} />
            <textarea placeholder="Your Message" style={styles.textArea} />
            <button style={styles.buyButton}>Send Message</button>
          </div>
        )}

      </main>

      {navMessage && <div style={styles.navPopup}>{navMessage}</div>}

      {/* FOOTER CATEGORY FILTER */}
      <footer style={styles.footer}>
        <nav style={styles.footerNav}>
          {["All","Cosmetics","Women Dresses","Men Dresses","Electronics"].map(cat => (
            <button
              key={cat}
              style={styles.navButton}
              onClick={() => {
                setCategory(cat);
                setNav("Products");
              }}
            >
              {cat}
            </button>
          ))}
        </nav>
      </footer>

    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "linear-gradient(135deg,#1fd1f9,#b621fe)",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 25px",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(15px)",
  },

  logo: {
    fontWeight: "bold",
    fontSize: "24px",
    color: "#fff",
    cursor: "pointer"
  },

  topNav: { display: "flex", gap: "15px" },

  topNavBtn: {
    border: "none",
    padding: "8px 18px",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "500",
  },

  searchBox: {
    padding: "7px 15px",
    borderRadius: "25px",
    border: "none",
    outline: "none",
  },

  main: {
    flex: 1,
    padding: "30px",
    textAlign: "center",
    color: "#fff",
    overflowY: "auto"
  },

  title: { fontSize: "34px", fontWeight: "700" },

  subtitle: { fontSize: "18px", marginBottom: "20px" },

  productsContainer: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 180px))",
  justifyContent: "center",
  gap: "15px",
  marginTop: "20px"
},

  productCard: {
    background: "rgba(255,255,255,0.2)",
    backdropFilter: "blur(10px)",
    padding: "15px",
    borderRadius: "15px",
    color: "#fff"
  },

  productImg: {
  width: "100%",
  aspectRatio: "4 / 3",   // uniform ratio
  objectFit: "cover",
  borderRadius: "20px",
  display: "block"
},

  buyButton: {
    marginTop: "8px",
    padding: "6px 14px",
    border: "none",
    borderRadius: "20px",
    background: "linear-gradient(45deg,#00f2fe,#4facfe)",
    color: "#fff",
    cursor: "pointer",
  },

  cardGlass: {
    background: "rgba(255,255,255,0.2)",
    padding: "25px",
    borderRadius: "20px",
  },

  stats: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "15px",
    fontWeight: "bold"
  },

  inputBox: {
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    marginBottom: "10px",
    width: "100%"
  },

  textArea: {
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    height: "80px",
    marginBottom: "10px",
    width: "100%"
  },

  footer: {
    background: "rgba(255,255,255,0.15)",
    padding: "12px"
  },

  footerNav: {
    display: "flex",
    justifyContent: "space-around"
  },

  navButton: {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    color: "#fff",
    fontWeight: "500"
  },

  navPopup: {
    position: "fixed",
    top: "80px",
    right: "25px",
    background: "linear-gradient(45deg,#00f2fe,#4facfe)",
    color: "#fff",
    padding: "8px 18px",
    borderRadius: "25px",
  }
};

export default Home;