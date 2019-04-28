import { BigNumber, bignumber } from 'mathjs';
import conductanceMatrix from '../../src/Calculator/ConductanceMatrix';
import { ICircuitRepresentation } from '../../src/Deserialize/CircuitRepresentation';
import deserialize from '../../src/Deserialize/Deserializer';
import { EXAMPLE1 } from '../Examples/valid/Example1';
import { EXAMPLE2 } from '../Examples/valid/Example2';
import { trueMatrix } from '../util/util';

describe('Matrices generation', () => {
  it('Should generate conductance matrix for example 1', () => {
    testExample(EXAMPLE1, [[0.001, -0.001, 1], [-0.001, 0.003, 0], [1, 0, 0]]);
  });

  it('Should generate conductance matrix for example 2', () => {
    const c300 = bignumber(1).dividedBy(300);
    testExample(EXAMPLE2, [
      [0.001, -0.001, 0, 1, 0],
      [-0.001, c300.plus(0.001), c300.negated(), 0, -1],
      [0, c300.negated(), c300.plus(0.002), 0, 1],
      [1, 0, 0, 0, 0],
      [0, -1, 1, 0, 0],
    ]);
  });
});

function mapToBigNumber(matrix: Array<Array<number | BigNumber>>): BigNumber[][] {
  return matrix.map(node => node.map(value => bignumber(value)));
}

function testExample(example: ICircuitRepresentation, expected: Array<Array<number | BigNumber>>) {
  const circuit = deserialize(example);
  const expectedMatrix = mapToBigNumber(expected);
  const matrix = conductanceMatrix(circuit);
  const booleanMatrix = matrix.map((line, i) => line.map((value, j) => expectedMatrix[i][j].eq(value)));
  expect(booleanMatrix).toEqual(trueMatrix(expected.length));
}
