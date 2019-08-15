import { BigNumber, bignumber } from 'mathjs';
import Circuit from '../Circuit/Circuit';
import { sumBigNumbers, zeroBigNumber, zeroBigNumberArray } from '../util/MathUtil';

export default function conductanceMatrix(circuit: Circuit): BigNumber[][] {
  const nodeConductances = circuit.nodeParts.map(parts => parts.map(part => part.conductance));

  const matrix: BigNumber[][] = [];

  addConductances(nodeConductances, matrix);
  addVoltageSources(circuit, matrix);
  // console.log(matrix.map(list => list.map(num => num.toNumber())));
  return matrix;
}

function addConductances(nodeConductances: BigNumber[][], matrix: BigNumber[][]) {
  nodeConductances.forEach((node, i) => {
    matrix.push([]);
    for (let j = 0; j < nodeConductances.length; j++) {
      if (i === j) {
        matrix[i][j] = conductancesInsideNode(node);
      } else if (nodeConductances[j]) {
        matrix[i][j] = conductancesBetweenNodes(node, nodeConductances[j]).negated();
      } else {
        matrix[i][j] = zeroBigNumber();
      }
    }
  });
}
function conductancesInsideNode(node: BigNumber[]): BigNumber {
  return sumBigNumbers(...node);
}

function conductancesBetweenNodes(node1: BigNumber[], node2: BigNumber[]) {
  const intersection = node1.filter(part => node2.includes(part));
  return sumBigNumbers(...intersection);
}

function addVoltageSources(circuit: Circuit, matrix: BigNumber[][]) {
  const voltageParts = circuit.parts.filter(part => part.voltage.greaterThan(zeroBigNumber()));
  voltageParts.forEach(_part => {
    const oldSize = matrix.length;
    const newLine = zeroBigNumberArray(matrix.length + 1);
    const negative = circuit.nodeNumberByPole(_part.firstPole);
    const positive = circuit.nodeNumberByPole(_part.secondPole);
    if (positive > -1) {
      newLine[positive] = bignumber(1);
    }
    if (negative > -1) {
      newLine[negative] = bignumber(-1);
    }
    matrix.push(newLine);
    newLine.forEach((value, i) => {
      matrix[i][oldSize] = value;
    });
  });
}
