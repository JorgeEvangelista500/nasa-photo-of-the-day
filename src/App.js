import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import dummyData from "./dummyData";
import Card from "./components/Card";


function App() {
const [data, setData] = useState()


useEffect(() => {
  setData(dummyData)
  // axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  // .then(res => {
  //   setData(res.data)
  // })
  // .catch(err => {
  //   debugger
  // })
}, []) 


  return (
    <div className="App">
      {data && <Card imgData={data}/>}
    </div>
  );
}

export default App;
