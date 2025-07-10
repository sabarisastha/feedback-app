import React, { useEffect, useState } from "react";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  // Fetch feedbacks when component mounts
  useEffect(() => {
    fetch("http://localhost:5000/feedback")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch((err) => console.log("Error fetching feedbacks:", err));
  }, []);

  // 🗑️ Delete feedback by ID
  /*const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/feedback/${id}`, {
        method: "DELETE",
      });
      setFeedbacks((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Failed to delete:", err);
    }
  }; */

  return (
    <div className="container mt-5">
      <h2>📋 All Feedback</h2>
      
        {feedbacks.length === 0 ? (
          <p>No feedback yet...</p>
        ) : (
          feedbacks.map((fb, index) => (
            <div key={index} className="card mb-3 p-3 shadow-sm">
              <h5>👤 {fb.name}</h5>
              <p>💬 {fb.message}</p>
              <p>⭐ Rating: {fb.rate}</p>
              <p>📅 Date: {fb.createdAt}</p>
            </div>
          ))
        )}
      </div>
   
  );
};

export default FeedbackList;
