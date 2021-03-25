import { useState } from "react";

function Story() {
  let [color, setColor] = useState('white');

  return (
    <div>
      <h1>Story Component</h1>

      <button onClick={() => setColor(color = 'red')}>Red</button>
      <button onClick={() => setColor(color = 'orange') }>Orange</button>
      <button onClick={() => setColor(color = 'green') }>Green</button>
      <button onClick={() => setColor(color = 'yellow') }>Yellow</button>
      <button onClick={() => setColor(color = 'lightblue') }>Lightblue</button>

      <div style={{ backgroundColor: color }}>
        At distant inhabit amongst by. Appetite welcomed interest the goodness
        boy not. Estimable education for disposing pronounce her. John size good
        gay plan sent old roof own. Inquietude saw understood his friendship
        frequently yet. Nature his marked ham wished.
      </div>
    </div>
  );
}

export default Story;
