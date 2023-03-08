import React, {useState} from "react";
import {Food} from "../model/Food";
import "./FoodCard.css";
import {Link, useParams} from "react-router-dom";

type FoodCardProps = {

    food: Food

    deleteFood: (id: string) => void
    updateFood: (food: Food) => void
}

export default function FoodCard(props: FoodCardProps){

     function handleDelete(){
       props.deleteFood(props.food.id)
   }

   function handleFavorite(){
         const favoriteFood: Food = {...props.food, isFavorite: true}
       props.updateFood(favoriteFood)
   }

   const kcal = props.food.amountInGrams * (props.food.kcalPerHundredGrams/100)


    return (
        <div className={"food-card"}>
            <h2 className={"food-card-fields"}>{props.food.name}</h2>
            <p className={"food-card-fields"}>kcal/100g: {props.food.kcalPerHundredGrams}</p>
            <p className={"food-card-fields"}>Menge in Gramm: {props.food.amountInGrams}</p>
            <p className={"food-card-fields"}>kcal gesamt: {kcal} </p>
            <p>{props.food.isFavorite}</p>
            <button className={"button-update"}><Link to={"/food/update/"+ props.food.id}>update</Link></button>
            <button className={"button-delete"} onClick={handleDelete}>delete</button>
            <button className={"button-favorite"} onClick={handleFavorite}>Favoriten</button>
        </div>
    )
}