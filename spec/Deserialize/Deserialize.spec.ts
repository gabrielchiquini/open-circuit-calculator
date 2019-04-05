import { bignumber, divide } from "mathjs";
import { IPartRepresentation } from "../../src/Deserialize/CircuitRepresentation";
import deserialize from "../../src/Deserialize/Deserializer";

const parts: IPartRepresentation[] = [
  {
    id: "1",
    properties: {
      voltage: 5,
    },
    type: "VoltageSource",
    poles: ["1-1", "1-2"],
  },
  {
    id: "2",
    properties: {
      voltage: 20,
    },
    type: "VoltageSource",
    poles: ["2-1", "2-2"],
  },
  {
    id: "3",
    properties: {
      resistance: 1000,
    },
    type: "Resistor",
    poles: ["3-1", "3-2"],
  },
  {
    id: "4",
    properties: {
      resistance: 500,
    },
    type: "Resistor",
    poles: ["4-1", "4-2"],
  },
];

const nodes: string[][] = [
  ["1-1", "2-1", "4-2"],
  ["1-2", "3-1"],
  ["3-2", "2-2", "4-1"],
];

describe("Test deserialize", () => {
  it("Should deserialize circuit", () => {
    const circuit = deserialize({ parts, nodes });
    expect(circuit).toBeDefined();
    expect(circuit.nodePoles).toEqual(nodes);
    expect(circuit.parts.length).toBe(4);
    expect(circuit.parts[0]).toEqual(jasmine.objectContaining({
      voltage: bignumber(5),
    }) as any);
    expect(circuit.parts[2]).toEqual(jasmine.objectContaining({
      conductance: divide(bignumber(1), bignumber(1000)),
    }) as any);
    expect(circuit.nodeParts).toContain([
      jasmine.objectContaining({ voltage: bignumber(5) }),
      jasmine.objectContaining({ voltage: bignumber(20) }),
      jasmine.objectContaining({ conductance: bignumber(1).dividedBy(1000) }),
      jasmine.objectContaining({ conductance: bignumber(1).dividedBy(500) }),
    ] as any);
  });
});
