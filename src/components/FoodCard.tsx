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
            <h2 className={"food-card-fields"}>{props.food.name}</h2>
            <p className={"food-card-fields"}>kcal/100g: {props.food.kcalPerHundredGrams}</p>
            <p className={"food-card-fields"}>Menge in Gramm: {props.food.amountInGrams}</p>
            <button className={"button-delete"} onClick={handleDelete}>delete</button>
        </div>
    )
}