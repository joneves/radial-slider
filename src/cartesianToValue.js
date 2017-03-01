const cartesianToValue = (coords, center) => {
    const {x, y} = {...coords};
    const cy = center.y;
    const cx = center.x;

    const angle = Math.round((Math.atan((y - cy) / (x - cx))) / (Math.PI / 180))
        + (x < cx ? 270 : 90);

    return  (angle / 360);
};

export default cartesianToValue;
