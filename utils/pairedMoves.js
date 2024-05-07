const pairedMove = (moves) => {
  // using reduce to iterate over the moves array and accumulate the pairs
  return moves.reduce((result, element, index) => {
    // if the index is even, create a new pair array and add the element
    if (index % 2 === 0) {
      result.push([element]);
    } else {
      // if the index is odd, add the element to the last pair in the result array
      result[result.length - 1].push(element);
    }
    return result; // return the result array for the next iteration
  }, []); // Initialize the result as an empty array
};

module.exports = { pairedMove };
