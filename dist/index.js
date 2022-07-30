"use strict";
/**
 * Create a new array with randomized values.
 * @param array The array to shuffle.
 * @returns A new array with randomized values.
 * ex: shuffle([1, 2, 3, 4, 5]) => [ 4, 1, 2, 5, 3 ]
 *
 */
function shuffle(array) {
    const newArray = array;
    let currentIndex = newArray.length;
    let randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
    }
    return newArray;
}
module.exports = shuffle;
//# sourceMappingURL=index.js.map