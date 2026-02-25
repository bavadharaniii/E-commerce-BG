import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("❌ Please fill all the fields");
      return;
    }

    setStatus("✅ Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .content {
            flex-direction: column;
            padding: 25px;
          }
        }
      `}</style>

      <div style={styles.page}>
        {/* Hero */}
        <div style={styles.hero}>
          <div style={styles.overlay}>
            <h1>Contact Us</h1>
            <p>
              Need help with orders, delivery, or returns?
              Our e-commerce support team is here for you.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={styles.content} className="content">
          {/* Form */}
          <div style={styles.box}>
            <h2>We’re happy to help!</h2>

            <form onSubmit={handleSubmit}>
              <input
                style={styles.input}
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />

              <input
                style={styles.input}
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
              />

              <textarea
                style={styles.textarea}
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
              />

              <button style={styles.button} type="submit">
                Submit
              </button>
            </form>

            {status && <p style={styles.status}>{status}</p>}
          </div>

          {/* Info */}
          <div style={styles.box}>
            <h3>FAQs</h3>
            <p style={styles.text}>
              Get quick answers about orders, payments, and returns.
            </p>

            <h3>Warehouse</h3>
            <p style={styles.text}>
              E-Shop Fulfillment Center <br />
              Chennai, India
            </p>

            <h3>Email</h3>
            <p style={styles.text}>support@eshop.com</p>

            <h3>Call</h3>
            <p style={styles.text}>+91 98765 43210</p>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  page: {
    backgroundColor: "#f2f2f2",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
  },
  hero: {
    height: "300px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521334884684-d80222895322')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.55)",
    height: "100%",
    color: "#fff",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  content: {
    display: "flex",
    gap: "30px",
    padding: "50px",
  },
  box: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    width: "100%",
    backgroundColor: "#111",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  status: {
    marginTop: "15px",
    fontWeight: "bold",
  },
  text: {
    fontSize: "14px",
    color: "#555",
  },
};

export default Contact;