import { BigNumber, bignumber } from 'mathjs';
import conductanceMatrix from '../../src/Calculator/ConductanceMatrix';
import deserialize from '../../src/Deserialize/Deserializer';
import { EXAMPLE1 } from '../Example1';

describe('Matrices generation', () => {
  it('Should generate conductance matrix for example 1', () => {
    const circuit = deserialize(EXAMPLE1);
    const expected = mapToBigNumber([[0.001, -0.001, 1], [-0.001, 0.003, 0], [1, 0, 0]]);
    const matrix = conductanceMatrix(circuit);
    expect(expected).toEqual(matrix);
  });
});

function mapToBigNumber(matrix: number[][]): BigNumber[][] {
  return matrix.map(node => node.map(value => bignumber(value)));
}
