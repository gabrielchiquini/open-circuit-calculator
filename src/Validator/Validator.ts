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
