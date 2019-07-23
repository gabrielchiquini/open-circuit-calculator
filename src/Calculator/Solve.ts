import {BigNumber, lusolve, Matrix, sparse} from 'mathjs';
import Circuit from '../Circuit/Circuit';
import conductanceMatrix from './ConductanceMatrix';
import sourceMatrix from './SourceMatrix';

export default function solve(circuit: Circuit): BigNumber[] {
  const cMatrix = conductanceMatrix(circuit);
  const sMatrix = sourceMatrix(circuit);
  const sparseMatrix = sparse(cMatrix as any);
  return ((lusolve(sparseMatrix as any, sMatrix as any, 1, 0.00001) as Matrix).toArray() as any[])
    .map((arr: BigNumber[]) => arr[0])
    .slice(0, circuit.nodePoles.length);
}
