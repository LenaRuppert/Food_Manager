import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Food} from "./model/Food";
import axios from "axios";
import FoodGallery from "./components/FoodGallery";
import FoodCard from "./components/FoodCard";
import Header from "./components/Header";
import AddFood from "./components/AddFood";

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
        <Header />
        <FoodGallery food={food}/>
        <AddFood />

    </div>
  );
}

export default App;
