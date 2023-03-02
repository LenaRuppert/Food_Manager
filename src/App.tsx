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

    function addFood(foodToAdd: Food){
        return axios.post("/api/food", foodToAdd)
            .then(() => {
                loadFood();
            })
            .catch((error) => {
                console.error(error)
            })

    }

    function deleteFood(id: string) {
        axios.delete("/api/food/" + id)
            .then(loadFood)
            .catch(console.error)
    }


    useEffect(() => {
        loadFood()
    }, [])

  return (
    <div className="App">
        <Header />
        <FoodGallery food={food} deleteFood={deleteFood}/>
        <AddFood onAdd={addFood}/>

    </div>
  );
}

export default App;