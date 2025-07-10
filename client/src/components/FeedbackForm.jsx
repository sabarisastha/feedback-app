import React, { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rate, setRate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, message, rate }),
    });

    if (res.ok) {
      alert("Feedback sent!");
      setName("");
      setMessage("");
      setRate("");
    } else {
      alert("Error sending feedback.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Give Feedback</h2>

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="form-control mb-2"
      />

      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="form-control mb-2"
      />

      <select
        className="form-control mb-3"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        required
      >
        <option value="">Rate us</option>
        <option value="1">⭐</option>
        <option value="2">⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="5">⭐⭐⭐⭐⭐</option>
      </select>

      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
};

export default FeedbackForm;
