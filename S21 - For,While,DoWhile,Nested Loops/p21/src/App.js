import React, { useState } from 'react';
import './App.css';

function App() {
  let [output, setOutput] = useState('');

  let table = () => {
    let result = '';
    for (let i = 1; i <= 1000; i++) {
      if (i === 2 || i === 7 || i === 10 || i === 65 || i === 78|| i === 669) {
        continue;
      } else {
        for (let j = 1; j <= 100; j++) {
          if (j === 4 || j === 6 || j === 9 || j === 12 || j === 25 || j === 28 || j === 36 || j === 48 || j === 51 || j === 69 || j === 89) {
            continue;
          } else {
            result += `${i} * ${j} = ${i * j}\n`;
          }
        }
      }
    }
    setOutput(result);
  };

  return (
    <div className="App">
      <h1>Nested Loop</h1>
 <a href="#"
           onClick={table}>Submit <span></span> <span></span><span></span><span></span>
          </a>
      <pre style={{fontSize:"1.5rem", width:"100%"}}>{output}</pre>
    </div>
  );
}

export default App;
