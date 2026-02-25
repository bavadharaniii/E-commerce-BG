import React from "react";

const About = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.heading}>About Us</h1>

        <img
          src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80"
          alt="Men and Women Fashion Store"
          style={styles.image}
        />

        <div style={styles.card}>
          <h2>Our Story</h2>
          <p>
            Welcome to MyShop — your one-stop destination for everything you
            need. We bring fashion, beauty, accessories and more together in
            one platform.
          </p>
        </div>

        <div style={styles.card}>
          <h2>Our Mission</h2>
          <p>
            To provide quality products, secure payments, and fast delivery
            while ensuring complete customer satisfaction.
          </p>
        </div>

        <div style={styles.card}>
          <h2>Our Vision</h2>
          <p>
            To become a trusted online marketplace offering a wide range of
            products under one platform.
          </p>
        </div>

        <div style={styles.card}>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Wide range of products</li>
            <li>Affordable pricing</li>
            <li>Secure payments</li>
            <li>Fast delivery</li>
            <li>Easy returns</li>
          </ul>
        </div>

        <div style={styles.stats}>
          <div style={styles.statBox}>
            <h3>10K+</h3>
            <p>Products</p>
          </div>
          <div style={styles.statBox}>
            <h3>5K+</h3>
            <p>Happy Customers</p>
          </div>
          <div style={styles.statBox}>
            <h3>100+</h3>
            <p>Sellers</p>
          </div>
          <div style={styles.statBox}>
            <h3>50+</h3>
            <p>Cities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: "#F3E8FF",
    minHeight: "100vh",
    padding: "40px 0",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    width: "80%",
    margin: "auto",
    color: "#2D1B4E",
  },
  heading: {
    color: "#8B5CF6",
  },
  image: {
    width: "100%",
    borderRadius: "12px",
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  stats: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  statBox: {
    backgroundColor: "#A78BFA",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "22%",
    textAlign: "center",
  },
};

export default About;