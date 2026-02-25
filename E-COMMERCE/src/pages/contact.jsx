import { useState } from "react";

function Contact() {
  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.overlay}>
          <h1 style={styles.heroTitle}>Contact Us</h1>
          <p style={styles.heroText}>
            Need help with your orders, payments, or delivery?  
            Our e-commerce support team is always ready to assist you.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div style={styles.content}>
        {/* Form */}
        <div style={styles.formBox}>
          <h2>We’re happy to help!</h2>
          <p style={styles.text}>
            Have questions about products, returns, or shipping?  
            Send us a message and we’ll respond shortly.
          </p>

          <input style={styles.input} type="text" placeholder="Your Name" />
          <input style={styles.input} type="email" placeholder="Your Email" />
          <textarea
            style={styles.textarea}
            placeholder="Your Message"
          ></textarea>

          <button style={styles.button}>Submit</button>
        </div>

        {/* Info */}
        <div style={styles.infoBox}>
          <h3>FAQs</h3>
          <p style={styles.text}>
            Visit our FAQs section for quick answers about orders and returns.
          </p>

          <h3>Warehouse Address</h3>
          <p style={styles.text}>
            E-Shop Fulfillment Center <br />
            1250 Market Road <br />
            Chennai, Tamil Nadu, India
          </p>

          <h3>Email Us</h3>
          <p style={styles.text}>support@eshop.com</p>

          <h3>Call Us</h3>
          <p style={styles.text}>
            +91 98765 43210 <br />
            9:00 AM – 6:00 PM IST
          </p>

          <div style={styles.socials}>
            <span style={styles.icon}>G</span>
            <span style={styles.icon}>F</span>
            <span style={styles.icon}>X</span>
            <span style={styles.icon}>I</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Styles */
const styles = {
  page: {
    backgroundColor: "#f2f2f2",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
  },
  hero: {
    height: "320px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521334884684-d80222895322')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.55)",
    height: "100%",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "40px",
  },
  heroTitle: {
    fontSize: "42px",
    marginBottom: "10px",
  },
  heroText: {
    maxWidth: "600px",
    fontSize: "16px",
  },
  content: {
    display: "flex",
    gap: "40px",
    padding: "50px",
  },
  formBox: {
    flex: 2,
    backgroundColor: "#fff",
    padding: "35px",
    borderRadius: "8px",
  },
  infoBox: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "35px",
    borderRadius: "8px",
  },
  text: {
    color: "#555",
    fontSize: "14px",
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    height: "120px",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    resize: "none",
  },
  button: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "12px 25px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  socials: {
    display: "flex",
    gap: "12px",
    marginTop: "20px",
  },
  icon: {
    width: "32px",
    height: "32px",
    backgroundColor: "#111",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    cursor: "pointer",
  },
};

export default Contact;