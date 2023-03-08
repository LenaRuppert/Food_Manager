import React, {ChangeEvent, useEffect, useState} from "react";
import {Food} from "../model/Food";
import {useParams} from "react-router-dom";
import "./UpdateFood.css"



type UpdateFoodProps = {
    updateFood: (foodToUpdate: Food) => void
}

export default function UpdateFood(props: UpdateFoodProps){
    const params = useParams()
    const id: string | undefined = params.id


    const [foodToUpdate, setFoodToUpdate] = useState<Food>({
        id: id ? id : "",
        name: "",
        kcalPerHundredGrams: 0,
        amountInGrams: 0,
        isFavorite: false
    })



    function onChangeName(event: ChangeEvent<HTMLInputElement>) {
        setFoodToUpdate({
            ...foodToUpdate,
            name: event.target.value
        })
    }

    function onChangeKcal(event: ChangeEvent<HTMLInputElement>) {
        setFoodToUpdate({
            ...foodToUpdate,
            kcalPerHundredGrams: event.target.valueAsNumber
        })
    }

    function onChangeAmount(event: ChangeEvent<HTMLInputElement>){
        setFoodToUpdate({
            ...foodToUpdate,
            amountInGrams: event.target.valueAsNumber
        })
    }



    function onSave(){
        props.updateFood(foodToUpdate)
        setFoodToUpdate({
            ...foodToUpdate,
            id: "",
            name: "",
            kcalPerHundredGrams: 0,
            amountInGrams: 0,
            isFavorite: false
        })
    }


    return (
        <div className={"update-food"}>
            <form>
                <input className={"input-name"} type="text" value={foodToUpdate.name} onChange={onChangeName} placeholder="geändertes Produkt"/>
                <label>     kcal/100g: </label>
                <input className={"input-kcal"} type="number" value={foodToUpdate.kcalPerHundredGrams} onChange={onChangeKcal} placeholder="kcal/100g"/>
                <label>     Menge in Gramm: </label>
                <input className={"input-amount"} type="number" value={foodToUpdate.amountInGrams} onChange={onChangeAmount} placeholder="Menge in Gramm"/>
                <button className={"input-button"} onClick={onSave}>submit</button>
            </form>
        </div>
    )
}


