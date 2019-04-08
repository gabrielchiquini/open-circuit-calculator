import { bignumber } from 'mathjs';
import Circuit from '../Circuit/Circuit';
import IPartProperties from '../Circuit/Parts/Properties';
import {
  ICircuitRepresentation,
  IPartRepresentation,
} from './CircuitRepresentation';
import { PART_MAP } from './PartMap';

export default function deserialize(circuit: ICircuitRepresentation): Circuit {
  const parts = circuit.parts.map(part => {
    const initializer = PART_MAP[part.type];
    const realProperties: IPartProperties = mapProperties(part);
    return new initializer(part.poles, realProperties);
  });

  return new Circuit(parts, circuit.nodes);
}
function mapProperties(part: IPartRepresentation) {
  const realProperties: IPartProperties = {};
  Object.keys(part.properties).forEach(
    key => (realProperties[key] = bignumber(part.properties[key])),
  );
  return realProperties;
}
