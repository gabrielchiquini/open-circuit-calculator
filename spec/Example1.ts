import { ICircuitRepresentation, IPartRepresentation } from '../src/Deserialize/CircuitRepresentation';
export const EXAMPLE1: ICircuitRepresentation = {
  parts: [
    {
      id: '1',
      properties: {
        voltage: 5,
      },
      type: 'VoltageSource',
      poles: ['1-1', '1-2'],
    },
    {
      id: '2',
      properties: {
        resistance: 1000,
      },
      type: 'Resistor',
      poles: ['2-1', '2-2'],
    },
    {
      id: '3',
      properties: {
        resistance: 500,
      },
      type: 'Resistor',
      poles: ['3-1', '3-2'],
    },
  ],
  nodes: [['1-1', '3-2'], ['1-2', '2-1'], ['2-2', '3-1']],
};
