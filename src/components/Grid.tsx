import { ReactElement } from "react";
import Rectangle from "./Rectangle";
import { Colors } from "src/models/Colors";

function Grid(): ReactElement {
    return (
        <div className="grid">
            <Rectangle color={Colors.WHITE}/>
            <Rectangle color={Colors.BLACK}/>
            <Rectangle color={Colors.WHITE}/>
            <Rectangle color={Colors.BLACK}/>
            <Rectangle color={Colors.WHITE}/>
            <Rectangle color={Colors.BLACK}/>
            <Rectangle color={Colors.WHITE}/>
            <Rectangle color={Colors.BLACK}/>
        </div>
    );
}

export default Grid;