import {bignumber, BigNumber} from 'mathjs';
import solve from "../../src/Calculator";
import {ICircuitRepresentation} from '../../src/Deserialize/CircuitRepresentation';
import deserialize from "../../src/Deserialize/Deserializer";
import {EXAMPLE1} from '../Examples/valid/Example1';
import {EXAMPLE2} from '../Examples/valid/Example2';
import {EXAMPLE3} from '../Examples/valid/Example3';
import {EXAMPLE4} from "../Examples/valid/Example4";

describe('Matrices generation', () => {
  it('Should solve example 1', () => {
    testExample(EXAMPLE1, [
      5,
      bignumber(5)
        .minus(bignumber(1).dividedBy(0.3))
        .toNumber(),
    ]);
  });
  it('Should solve example 2', () => {
    testExample(EXAMPLE2, [5, -3, 4]);
  });

  it('Should solve example 3', () => {
    testExample(EXAMPLE3, [5, -3, 154, 4]);
  });

  it('Should solve example 4', () => {
    testExample(EXAMPLE4, [5, 5.5, 5.43, -100]);
  });
});

function testExample(example: ICircuitRepresentation, expected: Array<number | BigNumber>) {
  const circuit = deserialize(example);
  const matrix = solve(circuit);
  const matrixNumber = mapToNumber(matrix);
  // console.log(matrixNumber);
  const expectedNumber = mapToNumber((expected));
  for (let i = 0; i < matrix.length; i++) {
    expect(matrixNumber[i]).toBeCloseTo(expectedNumber[i], 0.000001);
  }
}

function mapToNumber(arr: Array<number | BigNumber>): number[] {
  return arr.map(value => {
    if (typeof value === 'number') {
      return value;
    }
    return value.toNumber();
  });
}
