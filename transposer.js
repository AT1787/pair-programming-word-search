// Create an iterative loop over all arrays
// Created a nested array
// matrix.length === column length 
// push first column second row into new row second number




const transpose = function(matrix) {
  const parentArray = []
  for (let element of matrix) {
      for (let i = 0; i < element.length; i++) {
          if (parentArray.length < matrix[0].length) {
              let newArray = []
              newArray.push(element[i])
              parentArray.push(newArray) 
          } else {
              parentArray[i].push(element[i])
          }
      }
  }
  return parentArray
}

  // Do not edit this function.
  const printMatrix = (matrix) => {
      for (const row of matrix) {
          for (const el of row) {
              process.stdout.write(el + " ");
          }
          process.stdout.write('\n')
      }
  }
  
  // printMatrix(transpose([
  //   [1, 2, 3, 4],
  //   [1, 2, 3, 4],
  //   [1, 2, 3, 4],
  //   [1, 2, 3, 4]
  // ]));


  
  // console.log('----')
  
  // printMatrix(transpose([
  //   [1, 2],
  //   [3, 4],
  //   [5, 6]
  // ]));
  
  // console.log('----')
  
  // printMatrix(transpose([
  //   [1, 2, 3, 4, 5, 6, 7]
  // ]));

  module.exports = { transpose, printMatrix }