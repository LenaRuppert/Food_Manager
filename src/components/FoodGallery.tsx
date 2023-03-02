import React from "react";
import {Food} from "../model/Food";
import FoodCard from "./FoodCard";
import "./FoodGallery.css"

type FoodGalleryProps = {
    food: Food[]

    deleteFood: (id: string) => void
}

export default function FoodGallery(props: FoodGalleryProps) {

    const foodCard = props.food.map((food) => {
        return (
            <FoodCard food={food} key={food.id} deleteFood={props.deleteFood}/>
        )


    })

    return (
        <div className={"food-list"}>
            {foodCard}
        </div>
    )
}