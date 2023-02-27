import React from "react";
import "./AddFood.css";

export default function () {

    return (
        <div className={"add-food"}>
            <form>
                <input type="text" placeholder="new item"/>
                <button>submit</button>
            </form>
        </div>
    )
}