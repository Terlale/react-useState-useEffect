import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [data, setData] = useState([])


    useEffect(() => {
      axios.get("https://northwind.vercel.app/api/orders/").then((response) => {
        setData(response.data)
      });
    }, []);


  return (
    <div className="App">
      {data.map(item => (
      <div>
        <p>{item.shipName}</p>
        <p>{item.requiredDate}</p>
        <hr></hr>
      </div>))}
    </div>
  );
}

export default App;