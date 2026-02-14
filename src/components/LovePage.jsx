import React, { useState } from "react";
import "../App.css"

function LovePage() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="love-container">
      <h1>Happy Valentine's Day ❤️</h1>

      <button onClick={() => setShowMessage(true)}>
        Click for a surprise 💖
      </button>

      {showMessage && (
        <p className="message">
          You are my favorite notification,
          my best commit,
          and my forever deployment ❤️
        </p>
      )}
    </div>
  );
}

export default LovePage;
