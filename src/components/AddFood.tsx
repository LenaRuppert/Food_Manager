import React, {ChangeEvent, useState} from "react";
import "./AddFood.css";
import {Food} from "../model/Food";

type AddFoodProps = {

    onAdd: (foodToAdd: Food) => void
}

export default function AddFood(props: AddFoodProps) {

    const [foodToAdd, setFoodToAdd] = useState<Food>({
        id: "",
        name: ""
    })

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        setFoodToAdd({
            ...foodToAdd,
            name: event.target.value
        })
    }

    function onSave(){
        props.onAdd(foodToAdd)
        setFoodToAdd({
        ...foodToAdd,
        id: "",
        name: ""})
    }


    return (
        <div className={"add-food"}>
            <form>
                <input className={"input"} type="text" value={foodToAdd.name} onChange={onChange} placeholder="new item"/>
                <button className={"input-button"} onClick={onSave}>submit</button>
            </form>
        </div>
    )
}