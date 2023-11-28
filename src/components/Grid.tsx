import { ReactElement } from "react";
import {
	square_gray_dark as dark,
	square_gray_light as light,
} from "src/assets";
import "src/styles/Grid.css";

function Grid(): ReactElement {
	let elements: ReactElement[] = [];
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			elements.push(
				<img
					className="rectangle"
					src={(i + j) % 2 === 0 ? light : dark}
					alt="rectangle"
				/>
			);
		}
	}

	return <div className="grid">{elements.map((item) => item)}</div>;
}

export default Grid;
