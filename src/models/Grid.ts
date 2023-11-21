import { Figure } from "./figures/Figure";
import { Pawn } from "./figures/Pawn";

export class Grid {
    figures: Figure[] = [];

    constructor() {
        for (let i = 0; i < 8; i++) {
            this.figures.push(new Pawn([i, 1]));
            this.figures.push(new Pawn([i, 7]));
        }
    }
}