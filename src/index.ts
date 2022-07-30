/**
 * Create a new array with randomized values.
 * @param array The array to shuffle.
 * @returns A new array with randomized values.
 * ex: shuffle([1, 2, 3, 4, 5]) => [ 4, 1, 2, 5, 3 ]
 *
 */

function shuffle<T>(array: T[]): T[] {
  const newArray = array;

  let currentIndex = newArray.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
  }

  return newArray;
}

export = shuffle;
