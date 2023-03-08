import "./Navigation.css"
import React from "react";
import {NavLink} from "react-router-dom";
export default function Navigation(){

    return(
        <nav className={"nav"}>
            <ul>
                <li>
                    <NavLink to={"/"}>Homepage</NavLink>
                </li>
                <li>
                    <NavLink to={"/food/favorites"}>Favoriten</NavLink>
                </li>
                <li>
                    <NavLink to={"/gerichte"}>Gerichte</NavLink>
                </li>
            </ul>
        </nav>
    )
}