
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return [];
  }
  const toOddReversed = (row, idx) => idx % 2 ? row.reverse() : row;
  return matrix
    .map(toOddReversed)
    .flat();
}