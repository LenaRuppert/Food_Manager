import React, {useEffect, useState} from 'react';
import './App.css';
import {Food} from "./model/Food";
import axios from "axios";
import FoodGallery from "./components/FoodGallery";
import Header from "./components/Header";
import {Route, Router, Routes} from "react-router-dom";
import UpdateFood from "./components/UpdateFood";
import Favorites from "./components/Favorites";


function App() {

    const [food, setFood] = useState<Food[]>([])

    function loadFood() {
        axios.get("/api/food")
            .then((response) => {
                setFood(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function addFood(foodToAdd: Food) {
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

    function updateFood(food: Food){
        axios.put("/api/food/" + food.id, food)
            .then(loadFood)
            .catch(console.error)
    }


    useEffect(() => {
        loadFood()
    }, [])

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<FoodGallery food={food} deleteFood={deleteFood} addFood={addFood} updateFood={updateFood}/>}/>
                <Route path={"/food/favorites"} element={<Favorites food={food} deleteFood={deleteFood} addFood={addFood} updateFood={updateFood}  />}/>
                <Route path={"/food/update/:id"} element={<UpdateFood updateFood={updateFood}/>}/>
            </Routes>
        </div>
    );
}

export default App;