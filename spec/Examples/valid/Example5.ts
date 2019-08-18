import { ICircuitRepresentation } from "../../../src/Deserialize/CircuitRepresentation";

export const EXAMPLE5: ICircuitRepresentation = {
  parts: [
    {
      properties: {
        voltage: 5,
      },
      type: 'VoltageSource',
      poles: ['1-1', '1-2'],
    },
    {
      properties: {
        resistance: 1000,
      },
      type: 'Resistor',
      poles: ['2-1', '2-2'],
    },
    {
      properties: {
        resistance: 500,
      },
      type: 'Resistor',
      poles: ['3-1', '3-2'],
    },
    {
      properties: {},
      type: 'Ground',
      poles: ['0-0'],
    },
    {
      properties: {},
      type: 'Ground',
      poles: ['0-1'],
    },
  ],
  nodes: [['1-1', '0-0'], ['1-2', '2-1'], ['2-2', '3-1'], ['3-2', '0-1']],
};
