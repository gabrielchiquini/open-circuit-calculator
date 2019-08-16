import PartType from "../Circuit/PartType";
import {ICircuitRepresentation} from '../Deserialize/CircuitRepresentation';
import CircuitError from './CircuitError';

export default function validate(circuit: ICircuitRepresentation): CircuitError {
  const polesbyPart = circuit.parts.map(part => part.poles);
  const errors = new CircuitError();
  const flattenPoles: string[] = [];
  circuit.nodes.forEach(node => {
    nodePolesShortCircuit(polesbyPart, node, errors);
    flattenPoles.push(...node);
  });

  polesbyPart.forEach(poles => {
    const floatingPoles = poles.filter(pole => !flattenPoles.includes(pole));
    errors.floating.push(...floatingPoles);
  });

  const groundPoles = circuit.parts.filter(part => part.type === PartType.GROUND).map(gnd => gnd.poles[0]);
  errors.groundMissing = groundPoles.length === 0;
  return errors;
}

function nodePolesShortCircuit(polesbyPart: string[][], node: string[], errors: CircuitError) {
  polesbyPart.forEach(partPoles => {
    const polesInNode = partPoles.filter(pole => node.includes(pole));
    if (polesInNode.length > 1) {
      errors.shortCircuit.push(...polesInNode);
    }
  });
}
