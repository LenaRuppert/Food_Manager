import React, {useEffect, useState} from 'react';
import './App.css';
import {Food} from "./model/Food";
import axios from "axios";
import FoodGallery from "./components/FoodGallery";
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

    function addFood(newFood: Food){
        return axios.post("/api/food", newFood)
            .then((response) => response.data)
            .then(data => setFood(prevState => [...prevState, data]))

            }


    useEffect(() => {
        loadFood()
    }, [])

  return (
    <div className="App">
        <Header />
        <FoodGallery food={food}/>
        <AddFood onAdd={addFood}/>

    </div>
  );
}

export default App;
