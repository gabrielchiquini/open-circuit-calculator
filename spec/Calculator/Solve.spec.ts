import {bignumber, BigNumber} from 'mathjs';
import solve from '../../src/Calculator/Solve';
import {ICircuitRepresentation} from '../../src/Deserialize/CircuitRepresentation';
import deserialize from '../../src/Deserialize/Deserializer';
import {EXAMPLE1} from '../Examples/valid/Example1';
import {EXAMPLE2} from '../Examples/valid/Example2';
import {EXAMPLE3} from '../Examples/valid/Example3';

describe('Matrices generation', () => {
  it('Should solve example 1', () => {
    testExample(EXAMPLE1, [5, bignumber(5).minus(bignumber(1).dividedBy(0.3))]);
  });
  it('Should solve example 2', () => {
    testExample(EXAMPLE2, [5, -3, 4]);
  });

  it('Should solve example 3', () => {
    testExample(EXAMPLE3, [5, -3, 154, 4]);
  });
});

function mapToNumber(matrix: Array<number | BigNumber>): number[] {
  return matrix.map(value => {
    if (typeof value === 'number') {
      return value;
    } else {
      return value.toNumber();
    }
  });
}

function testExample(example: ICircuitRepresentation, expected: Array<number | BigNumber>) {
  const circuit = deserialize(example);
  console.time('solve');
  const matrix = solve(circuit);
  console.timeEnd('solve');
  const expectedNumber = mapToNumber(expected);
  const matrixNumber = mapToNumber(matrix);
  for (let i = 0; i < matrix.length; i++) {
    expect(matrixNumber[i]).toBeCloseTo(expectedNumber[i], 0.0001);
  }
}
