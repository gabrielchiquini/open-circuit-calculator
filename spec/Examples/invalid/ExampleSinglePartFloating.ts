import { ICircuitRepresentation } from "../../../src/Deserialize/CircuitRepresentation";

export const EXAMPLE_SINGLE_FLOATING: ICircuitRepresentation = {
  parts: [
    {
      properties: {
        voltage: 5,
      },
      type: 'VoltageSource',
      poles: ['1-1', '1-2'],
    },
  ],
  nodes: [],
};
