import React from "react";
import {Food} from "../model/Food";

type FoodCardProps = {

    food: Food
}

export default function FoodCard(props: FoodCardProps){

    return (
        <section>
            <h2>{props.food.name}</h2>
        </section>
    )
}