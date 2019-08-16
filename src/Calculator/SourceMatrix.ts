import { BigNumber } from 'mathjs';
import Circuit from '../Circuit/Circuit';
import { zeroBigNumber, zeroBigNumberArray } from '../util/MathUtil';

export default function sourceMatrix(circuit: Circuit): BigNumber[] {
  const nodeCurrents = addNodeCurrents(circuit);
  const voltageParts = addNodeVoltages(circuit);
  return nodeCurrents.concat(voltageParts);
}

function addNodeCurrents(circuit: Circuit) {
  const nodeCurrents = zeroBigNumberArray(circuit.nodeCount());
  circuit.parts
    .filter(part => !part.current.eq(zeroBigNumber()))
    .forEach(part => {
      const firstNode = circuit.nodeNumberByPole(part.firstPole);
      if (firstNode > -1) {
        nodeCurrents[firstNode] = nodeCurrents[firstNode].minus(part.current);
      }
      const secondNode = circuit.nodeNumberByPole(part.secondPole);
      if (secondNode > -1) {
        nodeCurrents[secondNode] = nodeCurrents[secondNode].plus(part.current);
      }
    });
  return nodeCurrents;
}

function addNodeVoltages(circuit: Circuit) {
  return circuit.parts
    .filter(part => part.voltage.greaterThan(zeroBigNumber()))
    .map(part => part.voltage);
}
