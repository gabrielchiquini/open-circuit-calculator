import {BigNumber} from "mathjs";
import {zeroBigNumber, zeroBigNumberArray} from "../util/MathUtil";

export default function gauss(matrix: BigNumber[][], solution: BigNumber[]) {
  const realMatrix = matrix.concat([]);
  // Just make a single matrix
  for (let i = 0; i < realMatrix.length; i++) {
    realMatrix[i].push(solution[i]);
  }
  const n = realMatrix.length;

  for (let i = 0; i < n; i++) {
    // Search for maximum in this column
    let maxElement = realMatrix[i][i].abs();
    let maxRow = i;
    for (let k = i + 1; k < n; k++) {
      if (realMatrix[k][i].abs().greaterThan(maxElement)) {
        maxElement = realMatrix[k][i].abs();
        maxRow = k;
      }
    }

    // Swap maximum row with current row (column by column)
    for (let k = i; k < n + 1; k++) {
      const tmp = realMatrix[maxRow][k];
      realMatrix[maxRow][k] = realMatrix[i][k];
      realMatrix[i][k] = tmp;
    }

    // Make all rows below this one 0 in current column
    for (let k = i + 1; k < n; k++) {
      const c = realMatrix[k][i].negated().dividedBy(realMatrix[i][i]);
      for (let j = i; j < n + 1; j++) {
        if (i === j) {
          realMatrix[k][j] = zeroBigNumber();
        } else {
          realMatrix[k][j] = realMatrix[k][j].plus(c.times(realMatrix[i][j]));
        }
      }
    }
  }

  // Solve equation Ax=b for an upper triangular matrix A
  solution = zeroBigNumberArray(n);
  for (let i = n - 1; i > -1; i--) {
    solution[i] = realMatrix[i][n].dividedBy(realMatrix[i][i]);
    for (let k = i - 1; k > -1; k--) {
      realMatrix[k][n] = realMatrix[k][n].minus(realMatrix[k][i].times(solution[i]));
    }
  }

  return solution;
}
