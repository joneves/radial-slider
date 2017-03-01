const valueToCartesian = (value, centreCoords, radius) => {

    let radians = value * 360 * Math.PI / 180;
    let x = centreCoords.x + (radius * Math.sin(radians));
    let y = centreCoords.y - (radius * Math.cos(radians));

    return {x, y};
};

export default valueToCartesian;
