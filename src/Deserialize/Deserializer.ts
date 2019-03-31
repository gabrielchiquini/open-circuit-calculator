import { PART_MAP } from './PartMap';
import { ICircuitRepresentation } from "./CircuitRepresentation";
import Circuit from "../Circuit/Circuit";

export default function deserialize(circuit: ICircuitRepresentation): Circuit {
  const parts = circuit.parts.map(part => {
    const initializer = PART_MAP[part.type];
    return new initializer(part.poles, part.properties);
  });

  return new Circuit(parts, circuit.nodes);
}
