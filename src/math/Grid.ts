export enum sizes {
    x=96, 
    y=96,
}

export function convertToGridAbsoluteCoordinates(coordinates: {x: number, y: number}) {
    return {x: sizes.x * coordinates.x, y: sizes.y * coordinates.y};
}

export function convertToGridCoordinates(coordinates: {x: number, y: number}) {
    return {x: Math.round(coordinates.x / sizes.x), y: Math.round(coordinates.y / sizes.y)}
}
