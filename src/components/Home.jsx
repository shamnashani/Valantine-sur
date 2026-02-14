import { useState } from "react";
import "../App.css";
import love from '../gif/love.gif'

function App() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "65%", left: "55%" });

  const moveButton = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;

    setNoPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  return (
    <div className="background">
      {!accepted ? (
        <div className="card">
          <h1>Will you be my Valentine? 💌</h1>


          <div className="buttons">
            <button className="yes" onClick={() => setAccepted(true)}>
              Yes 💖
            </button>

<button
  className="no"
  style={{ top: noPosition.top, left: noPosition.left }}
  onMouseEnter={moveButton}
  onClick={() => {
    alert("Are you sure? Mr.Haseeb! 😏😖 ");
    moveButton();
  }}
>
  No 😢
</button>

          </div>
        </div>
      ) : (
        <div className="card celebration">
          <h1>Yayyyyy! 💕</h1>
          <p>
            I wish I could hold you today…
but until that moment comes,
I’m holding you in every prayer and every heartbeat. 💕
          </p>

<div className="couple">
  <img src={love} alt="couple kiss" />
</div>


          <div className="hearts">
            <span>💖</span>
            <span>💘</span>
            <span>💕</span>
            <span>💞</span>
            <span>💓</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
