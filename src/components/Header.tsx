import React from "react";
import "./Header.css"
import Navigation from "./Navigation";

export default function Header() {

    return (
        <div className={"header"}>
            <h1>Food Manager</h1>
            <Navigation/>
        </div>
    )
}