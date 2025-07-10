import React from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  return (
    <div className="App container">
      <FeedbackForm />
      <hr />
      <FeedbackList />
    </div>
  );
}

export default App;
