"use strict";
/**
 * Create a new array with randomized values.
 * @param array The array to shuffle.
 * @returns A new array with randomized values.
 *
 * @example
 * const shuffledArray = shuffle([1, 2, 3, 4, 5]);
 * console.log(shuffledArray);
 * // output: [ 4, 1, 2, 5, 3 ]
 *
 */
function shuffle(array) {
    const newArray = array;
    let currentIndex = newArray.length;
    while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
    }
    return newArray;
}
module.exports = shuffle;
//# sourceMappingURL=index.js.map