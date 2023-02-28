import React, {ChangeEvent, useState} from "react";
import "./AddFood.css";
import {type} from "os";
import {Food} from "../model/Food";

type AddFoodProps = {

    onAdd: (food: Food) => Promise<void>
}

export default function AddFood(props: AddFoodProps) {

    const [name, setName] = useState<string>("")

    function onChange(event: ChangeEvent<HTMLInputElement>){
        setName(event.target.value)
    }

    function onSave(){
        const food: Food = {id: "", name}
        props.onAdd(food)
            .then(r => setName(""))
    }


    return (
        <div className={"add-food"}>
            <form>
                <input type="text" value={name} onChange={onChange} placeholder="new item"/>
                <button onClick={onSave}>submit</button>
            </form>
        </div>
    )
}