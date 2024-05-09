import { useState, useEffect } from 'react'
import './App.css'
import keys from './assets/drum-pad.json'

const countAddOne = (count) => {
  return (count + 1)
}

function App() {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playSound(event.key.toUpperCase());
    })
  })

  function playSound(selector) {
    const audio = document.getElementById(selector);
    console.log(audio);
    audio.play();
    setDisplay(selector);
  }

  return (
    <div id="background">
      <div id="drum-machine">
        <div id="display">{display}</div>
        <div className="drum-pads">
          {keys.map((key)=>
          <div key={key.keyCode} className='drum-pad' id={key.keyCode} onClick={() => playSound(key.text)}>
            {key.text}
            <audio src={key.src} className="clip" id={key.text}></audio>
          </div>)}
        </div>
      </div> 
    </div>
    
  )
}

export default App
