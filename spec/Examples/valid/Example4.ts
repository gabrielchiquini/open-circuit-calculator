import {ICircuitRepresentation} from "../../../src/Deserialize/CircuitRepresentation";

export const EXAMPLE4: ICircuitRepresentation = {
  nodes: [
    [
      "838ee49c-d2b0-43c3-9959-26d082961d27",
      "774120ff-00a8-4aeb-a582-e68ebfcfd836",
      "f8dc7981-f453-4b75-a8a8-5d552e2b5edd",
      "afe79b52-f8ec-468c-b798-2ce071df77e4",
      "ef479316-64fc-4b29-98e4-83d6e8d0ac38",
    ],
    [
      "33199be3-dbc6-435a-9950-a2a09b3468b5",
      "538c0028-edea-4dd5-b9f5-b76be127e572",
      "b6d03974-57e7-4cf8-963f-05b70923e748",
    ],
    [
      "ecf19609-81c1-4d79-8479-9fb3122ae475",
      "1d8c188d-fa1a-436b-865f-ce130291932a",
      "7e026e89-1fc4-4a67-8125-247cab33afa1",
    ],
    [
      "e1b80013-0d23-41b6-b126-a6736fa1d8f5",
      "6bf8133e-a6b6-4295-b343-faf3b5aa31ba",
      "76e9ee02-5f32-4b24-9d90-c7039f9d10b7",
    ],
    [
      "ffc3f714-21d2-4b4c-a789-8ec35d993790",
      "d473f330-d5bc-42e2-8177-f4151443531a",
    ],
  ],
  parts: [
    {
      poles: [
        "33199be3-dbc6-435a-9950-a2a09b3468b5",
        "838ee49c-d2b0-43c3-9959-26d082961d27",
      ],
      properties: {
        voltage: 5,
      },
      type: "VoltageSource",
    },
    {
      poles: [
        "538c0028-edea-4dd5-b9f5-b76be127e572",
        "f8dc7981-f453-4b75-a8a8-5d552e2b5edd",
      ],
      properties: {
        resistance: 1000,
      },
      type: "Resistor",
    },
    {
      poles: [
        "e1b80013-0d23-41b6-b126-a6736fa1d8f5",
        "b6d03974-57e7-4cf8-963f-05b70923e748",
      ],
      properties: {
        voltage: 0.5,
      },
      type: "VoltageSource",
    },
    {
      poles: [
        "6bf8133e-a6b6-4295-b343-faf3b5aa31ba",
        "ef479316-64fc-4b29-98e4-83d6e8d0ac38",
      ],
      properties: {
        resistance: 10000,
      },
      type: "Resistor",
    },
    {
      poles: [
        "76e9ee02-5f32-4b24-9d90-c7039f9d10b7",
        "ffc3f714-21d2-4b4c-a789-8ec35d993790",
      ],
      properties: {
        resistance: 0.2,
      },
      type: "Resistor",
    },
    {
      poles: [
        "d473f330-d5bc-42e2-8177-f4151443531a",
        "7e026e89-1fc4-4a67-8125-247cab33afa1",
      ],
      properties: {
        resistance: 300,
      },
      type: "Resistor",
    },
    {
      poles: [
        "afe79b52-f8ec-468c-b798-2ce071df77e4",
        "ecf19609-81c1-4d79-8479-9fb3122ae475",
      ],
      properties: {
        voltage: 100,
      },
      type: "VoltageSource",
    },
    {
      poles: [
        "774120ff-00a8-4aeb-a582-e68ebfcfd836",
        "1d8c188d-fa1a-436b-865f-ce130291932a",
      ],
      properties: {
        resistance: 2.3,
      },
      type: "Resistor",
    },
  ],
};
