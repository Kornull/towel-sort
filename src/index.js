
// You should implement your task here.


module.exports = function towelSort (matrix) {
    let b = []
    if (matrix === undefined) {
     return []
    }
    for (let i = 0; i < matrix.length;i++) {
        if (i % 2 === 0) {
          b = b.concat(matrix[i])
        } else {
          b = b.concat(matrix[i].reverse())
        }
         }
       return b
      }
