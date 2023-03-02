import React, {useState} from "react";
import {Food} from "../model/Food";
import "./FoodCard.css";

type FoodCardProps = {

    food: Food

    deleteFood: (id: string) => void
}

export default function FoodCard(props: FoodCardProps){

     function handleDelete(){
       props.deleteFood(props.food.id)
   }

    return (
        <div className={"food-card"}>
            <h2>{props.food.name}</h2>
            <button className={"button-delete"} onClick={handleDelete}>delete</button>
        </div>
    )
}