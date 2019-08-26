import 'ts-polyfill/lib/es2015-core';
import 'ts-polyfill/lib/es2016-array-include';
import solve from "./src/Calculator";
import {ICircuitRepresentation} from './src/Deserialize/CircuitRepresentation';
import deserialize from "./src/Deserialize/Deserializer";
import validate from "./src/Validator";
import CircuitError from "./src/Validator/CircuitError";

export {CircuitError};

export interface IPoleVoltage {
  pole: string;
  voltage: number;
}

export default function calculate(representation: ICircuitRepresentation): IPoleVoltage[] {
  const errors = validate(representation);
  if (errors.valid()) {
    const circuit = deserialize(representation);
    return solve(circuit).map((bigNumber, index) => {
      return {
        pole: circuit.nodePoles[index][0],
        voltage: bigNumber.toNumber(),
      };
    })
      ;
  }
  throw errors;
}
