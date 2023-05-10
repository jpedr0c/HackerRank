function getCount(objects) {
    const filterArray = objects.filter((object) => object.x === object.y);
    return filterArray.length;
}