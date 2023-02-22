import React from "react";
import {Food} from "../model/Food";
import FoodCard from "./FoodCard";

type FoodGalleryProps ={
    food: Food[]
}

export default function FoodGallery(props: FoodGalleryProps){

    const foodCard = props.food.map((food) => {
        return(
            <FoodCard food={food} key={food.id + " " +food.name}/>
        )
    })

    return (
        <div>
            {foodCard}
            <p>testFoodGallery</p>
        </div>
    )
}