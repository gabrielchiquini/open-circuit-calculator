import {BigNumber, bignumber, lusolve} from 'mathjs';
import Circuit from '../Circuit/Circuit';
import conductanceMatrix from './ConductanceMatrix';
import sourceMatrix from './SourceMatrix';

export default function solve(circuit: Circuit): BigNumber[] {
  const cMatrix = conductanceMatrix(circuit);
  const sMatrix = sourceMatrix(circuit);

  return (lusolve(cMatrix as any, sMatrix as any) as any[])
    .map((arr: BigNumber[]) => {
      return typeof arr[0] === 'number' ? bignumber(arr[0]) : arr[0];
    })
    .slice(0, circuit.nodePoles.length);
}
