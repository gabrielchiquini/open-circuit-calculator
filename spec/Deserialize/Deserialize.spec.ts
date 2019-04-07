import { bignumber, divide } from 'mathjs';
import deserialize from '../../src/Deserialize/Deserializer';
import { EXAMPLE1 } from '../Example1';

describe('Test deserialize', () => {
  it('Should deserialize circuit', () => {
    const circuit = deserialize(EXAMPLE1);
    expect(circuit).toBeDefined();
    expect(circuit.nodePoles).toEqual(EXAMPLE1.nodes.slice(1));
    expect(circuit.parts.length).toBe(3);
    expect(circuit.parts[0]).toEqual(jasmine.objectContaining({
      voltage: bignumber(5),
    }) as any);
    expect(circuit.parts[2]).toEqual(jasmine.objectContaining({
      conductance: divide(bignumber(1), bignumber(500)),
    }) as any);
    expect(circuit.nodeParts).toContain([
      jasmine.objectContaining({ voltage: bignumber(5) }),
      jasmine.objectContaining({ conductance: bignumber(1).dividedBy(1000) }),
    ] as any);
  });
});
