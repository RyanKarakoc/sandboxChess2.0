const { pairedMove } = require("../../utils/pairedMoves");

describe("pairedMove", () => {
  test("should return an empty array if no moves are provided", () => {
    // arrange
    const moves = [];
    // act
    const result = pairedMove(moves);
    // assert
    expect(result).toEqual([]);
  });
  test("should pair consecutive elements from the array", () => {
    // arrange
    const moves = ["a", "b", "c", "d"];
    const outcome = [
      ["a", "b"],
      ["c", "d"],
    ];
    // act
    const result = pairedMove(moves);
    //assert
    expect(result).toEqual(outcome);
  });
  test("should handle odd-length arrays by ;placing the last element on it's own", () => {
    // arrange
    const moves = ["a", "b", "c", "d", "e"];
    const outcome = [["a", "b"], ["c", "d"], ["e"]];
    // act
    const result = pairedMove(moves);
    //assert
    expect(result).toEqual(outcome);
  });
  test("should handle arrays with a single element", () => {
    // arrange
    const moves = ["a"];
    const outcome = [["a"]];
    // act
    const result = pairedMove(moves);
    //assert
    expect(result).toEqual(outcome);
  });
  test("should not mutate the original array", () => {
    // arrange
    const moves = ["a", "b", "c", "d"];
    const movesCopy = [...moves];
    // act
    pairedMove(moves);
    // assert
    expect(moves).toEqual(movesCopy);
  });
});
