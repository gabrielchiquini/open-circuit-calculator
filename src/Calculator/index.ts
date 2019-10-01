import {BigNumber, bignumber, lusolve} from 'mathjs';
import Circuit from '../Circuit/Circuit';
import conductanceMatrix from './ConductanceMatrix';
import gauss from "./gauss";
import sourceMatrix from './SourceMatrix';

export default function solve(circuit: Circuit): BigNumber[] {
  const cMatrix = conductanceMatrix(circuit);
  const sMatrix = sourceMatrix(circuit);

  return (gauss(cMatrix, sMatrix))
    .slice(0, circuit.nodePoles.length);
}
