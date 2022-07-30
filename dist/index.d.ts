/**
 * Create a new array with randomized values.
 * @param array The array to shuffle.
 * @returns A new array with randomized values.
 * ex: shuffle([1, 2, 3, 4, 5]) => [ 4, 1, 2, 5, 3 ]
 *
 */
declare function shuffle<T>(array: T[]): T[];
export = shuffle;
