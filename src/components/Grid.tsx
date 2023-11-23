import { ReactElement, useState } from "react";
import Rectangle from "./Rectangle";
import { convertToGridAbsoluteCoordinates } from "src/math/Grid";
import * as assets from 'src/assets';

function Grid(): ReactElement {
    const [colors, setColors] = useState({
        light: assets.square_gray_light,
        dark: assets.square_gray_dark
    })

    let elements: ReactElement[] = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            elements.push(
                <Rectangle 
                    asset={(i + j) % 2 === 0 ? colors.light : colors.dark} 
                    coordinates={convertToGridAbsoluteCoordinates({x: i, y: j})}
                />
            );
        }
    }

    return (
        <div className="grid">
            {elements.map(item => (item))}
        </div>
    );
}

export default Grid;