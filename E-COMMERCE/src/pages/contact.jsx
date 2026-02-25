import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! Our team will contact you shortly 💗");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Contact Us</h2>
        <p style={styles.subtitle}>
          Need help with orders, returns, or products? We’re just a message away.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />

          <textarea
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          />

          <button type="submit" style={styles.button}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f5f5f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "420px",
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "8px",
    fontSize: "22px",
    fontWeight: "600",
    color: "#282c3f",
  },
  subtitle: {
    fontSize: "14px",
    color: "#7e818c",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    border: "1px solid #d4d5d9",
    borderRadius: "4px",
    fontSize: "14px",
    outline: "none",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    height: "90px",
    marginBottom: "20px",
    border: "1px solid #d4d5d9",
    borderRadius: "4px",
    fontSize: "14px",
    resize: "none",
    outline: "none",
  },
  button: {
    width: "100%",
    backgroundColor: "#ff3f6c",
    color: "#ffffff",
    padding: "12px",
    fontSize: "14px",
    fontWeight: "600",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Contact;