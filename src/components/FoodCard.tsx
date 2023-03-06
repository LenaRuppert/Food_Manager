import React, {useState} from "react";
import {Food} from "../model/Food";
import "./FoodCard.css";
import {Link} from "react-router-dom";

type FoodCardProps = {

    food: Food

    deleteFood: (id: string) => void
}

export default function FoodCard(props: FoodCardProps){

     function handleDelete(){
       props.deleteFood(props.food.id)
   }

   const kcal = props.food.amountInGrams * (props.food.kcalPerHundredGrams/100)


    return (
        <div className={"food-card"}>
            <h2 className={"food-card-fields"}>{props.food.name}</h2>
            <p className={"food-card-fields"}>kcal/100g: {props.food.kcalPerHundredGrams}</p>
            <p className={"food-card-fields"}>Menge in Gramm: {props.food.amountInGrams}</p>
            <p className={"food-card-fields"}>kcal gesamt: {kcal} </p>
            <button className={"button-update"}><Link to={"/food/update/"+ props.food.id}>update</Link></button>
            <button className={"button-delete"} onClick={handleDelete}>delete</button>
        </div>
    )
}