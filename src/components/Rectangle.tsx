import React, { ReactElement } from "react";
import "../styles/Rectangle.css"
import dark from "../assets/squares/square_gray_dark.svg";
import light from "../assets/squares/square_gray_light.svg";
import { Colors } from "src/models/Colors";

function Rectangle(props: any): ReactElement {
    let img;
    if (props.color === Colors.WHITE) {
        img = <img src={light}></img>
    } else {
        img = <img src={dark}></img>
    }
    return (
        <div className="rectangle">
            {img}
        </div>
    )
}

export default Rectangle;