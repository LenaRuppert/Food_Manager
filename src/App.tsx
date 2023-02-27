import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Food} from "./model/Food";
import axios from "axios";
import FoodGallery from "./component/FoodGallery";
import FoodCard from "./component/FoodCard";

function App() {

  const [food, setFood] = useState<Food[]>([])

    function loadFood(){
      axios.get("/api/food")
          .then((response) => {
              setFood(response.data)
          })
          .catch((error) => {
              console.error(error)
          })
    }

    useEffect(() => {
        loadFood()
    }, [])

  return (
    <div className="App">

        <p>hello</p>
        <FoodGallery food={food}/>

    </div>
  );
}

export default App;
