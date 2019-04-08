import { ICircuitRepresentation } from '../../src/Deserialize/CircuitRepresentation';

export const EXAMPLE3: ICircuitRepresentation = {
  nodes: [
    ['R500-1', 'V5-1'],
    ['V5-2', 'R1000-1'],
    ['R1000-2', 'V7-1', 'C0.5-1'],
    ['C0.5-2', 'R300-1'],
    ['V7-2', 'R500-2', 'R300-2'],
  ],
  parts: [
    {
      poles: ['V5-1', 'V5-2'],
      properties: { voltage: 5 },
      type: 'VoltageSource',
    },
    {
      poles: ['R1000-1', 'R1000-2'],
      properties: { resistance: 1000 },
      type: 'Resistor',
    },
    {
      poles: ['V7-1', 'V7-2'],
      properties: { voltage: 7 },
      type: 'VoltageSource',
    },
    {
      poles: ['R300-1', 'R300-2'],
      properties: { resistance: 300 },
      type: 'Resistor',
    },
    {
      poles: ['R500-1', 'R500-2'],
      properties: { resistance: 500 },
      type: 'Resistor',
    },
    {
      poles: ['C0.5-1', 'C0.5-2'],
      properties: { current: 0.5 },
      type: 'CurrentSource',
    },
  ],
};
