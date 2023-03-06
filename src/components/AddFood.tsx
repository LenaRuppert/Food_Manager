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
        kcalPerHundredGrams: 0,
        amountInGrams: 0
    })

    function onChangeName(event: ChangeEvent<HTMLInputElement>) {
        setFoodToAdd({
            ...foodToAdd,
            name: event.target.value
        })
    }

    function onChangeKcal(event: ChangeEvent<HTMLInputElement>) {
        setFoodToAdd({
            ...foodToAdd,
            kcalPerHundredGrams: event.target.valueAsNumber
        })
    }

            function onChangeAmount(event: ChangeEvent<HTMLInputElement>){
                setFoodToAdd({
                    ...foodToAdd,
                    amountInGrams: event.target.valueAsNumber
                })
            }



    function onSave(){
        props.onAdd(foodToAdd)
        setFoodToAdd({
        ...foodToAdd,
        id: "",
        name: "",
        kcalPerHundredGrams: 0,
            amountInGrams: 0
        })
    }


    return (
        <div className={"add-food"}>
            <form>
                <input className={"input-name"} type="text" value={foodToAdd.name} onChange={onChangeName} placeholder="neues Produkt"/>
                <label>     kcal/100g: </label>
                <input className={"input-kcal"} type="number" value={foodToAdd.kcalPerHundredGrams} onChange={onChangeKcal} placeholder="kcal/100g"/>
                <label>     Menge in Gramm: </label>
                <input className={"input-amount"} type="number" value={foodToAdd.amountInGrams} onChange={onChangeAmount} placeholder="Menge in Gramm"/>
                <button className={"input-button"} onClick={onSave}>submit</button>
            </form>
        </div>
    )
}