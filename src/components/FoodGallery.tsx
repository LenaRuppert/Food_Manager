import React from "react";
import {Food} from "../model/Food";
import FoodCard from "./FoodCard";
import "./FoodGallery.css"
import AddFood from "./AddFood";

type FoodGalleryProps = {
    food: Food[]

    deleteFood: (id: string) => void
    addFood: (food: Food) => void

    updateFood: (food: Food) => void
}

export default function FoodGallery(props: FoodGalleryProps) {

    const foodCard = props.food.map((food) => {
        return (
            <FoodCard food={food} key={food.id} deleteFood={props.deleteFood} updateFood={props.updateFood}/>
        )


    })

    return (
        <>
        <div className={"food-list"}>
            {foodCard}
        </div>
    <AddFood onAdd={props.addFood}/>
         </>
    )
}