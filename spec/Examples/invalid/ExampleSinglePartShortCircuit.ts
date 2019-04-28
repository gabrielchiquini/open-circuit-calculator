import { ICircuitRepresentation } from '../../../src/Deserialize/CircuitRepresentation';

export const EXAMPLE_SINGLE_SHORT_CIRCUIT: ICircuitRepresentation = {
  parts: [
    {
      properties: {
        voltage: 5,
      },
      type: 'VoltageSource',
      poles: ['1-1', '1-2'],
    },
  ],
  nodes: [['1-1', '1-2']],
};
