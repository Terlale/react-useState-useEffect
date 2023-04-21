import {useState} from "react"

function App() {
  const [count, setCount] = useState(0)

  const artir = () => {
    setCount(count +1)
  }

  const azalt = () => {
    setCount(count -1)
  }

  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <button onClick={artir}>Artir</button>
      <button onClick={azalt}>Azalt</button>
    </div>
  );
}


export default App;