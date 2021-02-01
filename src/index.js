module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix === undefined || matrix.length == 0) return [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0 || i == 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        result.push(matrix[i][j]);
      }
      console.log(result);
    } else if (i % 2 != 0) {
      let reverse = matrix[i].reverse();
      for (let j = 0; j < reverse.length; j++) {
        result.push(reverse[j]);
      }
      console.log(result);
    }
  }
  console.log(result);

  
  return result;
}
