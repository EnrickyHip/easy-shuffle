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
declare function shuffle<T>(array: T[]): T[];
export = shuffle;
