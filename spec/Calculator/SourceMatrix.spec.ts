import { BigNumber, bignumber } from 'mathjs';
import sourceMatrix from '../../src/Calculator/SourceMatrix';
import { ICircuitRepresentation } from '../../src/Deserialize/CircuitRepresentation';
import deserialize from '../../src/Deserialize/Deserializer';
import { EXAMPLE1 } from '../Examples/valid/Example1';
import { EXAMPLE2 } from '../Examples/valid/Example2';
import { EXAMPLE3 } from '../Examples/valid/Example3';
import { trueArray } from '../util/util';

describe('Matrices generation', () => {
  it('Should generate source matrix for example 1', () => {
    testExample(EXAMPLE1, [0, 0, 5]);
  });

  it('Should generate source matrix for example 2', () => {
    testExample(EXAMPLE2, [0, 0, 0, 5, 7]);
  });

  it('Should generate source matrix for example 3', () => {
    testExample(EXAMPLE3, [0, -0.5, 0.5, 0, 5, 7]);
  });
});

function mapToBigNumber(matrix: Array<number | BigNumber>): BigNumber[] {
  return matrix.map(value => bignumber(value));
}

function testExample(example: ICircuitRepresentation, expected: Array<number | BigNumber>) {
  const circuit = deserialize(example);
  const expectedMatrix = mapToBigNumber(expected);
  const matrix = sourceMatrix(circuit);
  const booleanMatrix = matrix.map((value, i) => value.eq(expectedMatrix[i]));
  expect(booleanMatrix).toEqual(trueArray(expected.length));
}
