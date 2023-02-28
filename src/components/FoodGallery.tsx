import React from "react";
import {Food} from "../model/Food";
import FoodCard from "./FoodCard";
import "./FoodGallery.css"

type FoodGalleryProps ={
    food: Food[]
}

export default function FoodGallery(props: FoodGalleryProps){

    const foodCard = props.food.map((food) => {
        return(
            <FoodCard food={food} key={food.id}/>
        )
    })

    return (
        <div className={"food-list"}>
            <p>Test</p>
            {foodCard}
        </div>
    )
}