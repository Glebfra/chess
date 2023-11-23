import React, { CSSProperties, ReactElement, useState } from "react";
import { sizes } from "src/math/Grid";

function Rectangle(props: any): ReactElement {
    const [styles, setStyles]: [CSSProperties, CallableFunction] = useState({
        position: "absolute",
        left: props.coordinates.x,
        top: props.coordinates.y,
        height: `${sizes.x}px`,
        width: `${sizes.y}px`,
        userSelect: "none",
        pointerEvents: "none"
    });
    
    return (
        <div className="rectangle">
            <img 
                src={props.asset} 
                style={styles} 
                alt="rectangle"
            />
        </div>
    )
}

export default Rectangle;
