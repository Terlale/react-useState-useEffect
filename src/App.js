import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/orders`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Ship Names:</h1>
      
      {data.map((item) => (
          <p>{item.shipName}</p>
        ))}
      
      </div>
  );
}

export default App;
