import React from "react";
import {Food} from "../model/Food";
import "./FoodCard.css";

type FoodCardProps = {

    food: Food
}

export default function FoodCard(props: FoodCardProps){

    return (
        <div className={"food-card"}>
            <h2>{props.food.name}</h2>
        </div>
    )
}