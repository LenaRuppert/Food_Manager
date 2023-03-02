import React, {ChangeEvent, useState} from "react";
import "./AddFood.css";
import {Food} from "../model/Food";

type AddFoodProps = {

    onAdd: (foodToAdd: Food) => void
}

export default function AddFood(props: AddFoodProps) {

    const [foodToAdd, setFoodToAdd] = useState<Food>({
        id: "",
        name: "",
        kcalPerHundredGrams: 0
    })

    function onChangeName(event: ChangeEvent<HTMLInputElement>) {
        setFoodToAdd({
            ...foodToAdd,
            name: event.target.value
        })
    }

    function onChangeKcal(event: ChangeEvent<HTMLInputElement>){
        setFoodToAdd({
            ...foodToAdd,
            kcalPerHundredGrams: event.target.valueAsNumber
        })
    }

    function onSave(){
        props.onAdd(foodToAdd)
        setFoodToAdd({
        ...foodToAdd,
        id: "",
        name: "",
        kcalPerHundredGrams: 0
        })
    }


    return (
        <div className={"add-food"}>
            <form>
                <input className={"input"} type="text" value={foodToAdd.name} onChange={onChangeName} placeholder="new item"/>
                <input className={"input"} type="number" value={foodToAdd.kcalPerHundredGrams} onChange={onChangeKcal} placeholder="kcal/100g"/>
                <button className={"input-button"} onClick={onSave}>submit</button>
            </form>
        </div>
    )
}