import {Food} from "../model/Food";
import React from "react";
import FoodGallery from "./FoodGallery";

type FavoritesProps = {
    food: Food[]

    deleteFood: (id: string) => void

    updateFood: (food: Food) => void

    addFood: (food: Food) => void
}
export default function Favorites(props: FavoritesProps){

    const foodCardFilter = props.food.filter(food => food.isFavorite ===true)

    return(
        <>
       <p>Favoriten</p>

        <FoodGallery food={foodCardFilter} deleteFood={props.deleteFood} addFood={props.addFood} updateFood={props.updateFood}/>

    </>
    )
}