import {ICircuitRepresentation} from "../../../src/Deserialize/CircuitRepresentation";

export const EXAMPLE4: ICircuitRepresentation = {
  nodes: [
    [
      "V2-1",
      "RR7-1",
      "R1-2",
      "V3-2",
      "RR4-2",
    ],
    [
      "V2-2",
      "R1-1",
      "V4-1",
    ],
    [
      "V4-2",
      "RR4-1",
      "RR2-1",
    ],
    [
      "RR2-2",
      "RR3-1",
    ],
    [
      "V3-1",
      "RR7-2",
      "RR3-2",
    ],
  ],
  parts: [
    {
      poles: [
        "V2-1",
        "V2-2",
      ],
      properties: {
        voltage: 5,
      },
      type: "VoltageSource",
    },
    {
      poles: [
        "R1-1",
        "R1-2",
      ],
      properties: {
        resistance: 1000,
      },
      type: "Resistor",
    },
    {
      poles: [
        "V4-1",
        "V4-2",
      ],
      properties: {
        voltage: 0.5,
      },
      type: "VoltageSource",
    },
    {
      poles: [
        "RR4-1",
        "RR4-2",
      ],
      properties: {
        resistance: 10000,
      },
      type: "Resistor",
    },
    {
      poles: [
        "RR2-1",
        "RR2-2",
      ],
      properties: {
        resistance: 0.2,
      },
      type: "Resistor",
    },
    {
      poles: [
        "RR3-1",
        "RR3-2",
      ],
      properties: {
        resistance: 300,
      },
      type: "Resistor",
    },
    {
      poles: [
        "V3-1",
        "V3-2",
      ],
      properties: {
        voltage: 100,
      },
      type: "VoltageSource",
    },
    {
      poles: [
        "RR7-1",
        "RR7-2",
      ],
      properties: {
        resistance: 2.3,
      },
      type: "Resistor",
    },
  ],
};
