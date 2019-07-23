import 'ts-polyfill/lib/es2015-core';
import 'ts-polyfill/lib/es2016-array-include';

import solve from './src/Calculator/Solve';
import { ICircuitRepresentation } from './src/Deserialize/CircuitRepresentation';
import deserialize from './src/Deserialize/Deserializer';
import validate from './src/Validator/Validator';

export default function calculate(representation: ICircuitRepresentation): number[] {
  const errors = validate(representation);
  if (errors.valid()) {
    const circuit = deserialize(representation);
    return solve(circuit).map(bigNumber => bigNumber.toNumber());
  }
  throw errors;
}
