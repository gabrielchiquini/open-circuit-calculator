import {ICircuitRepresentation} from '../../src/Deserialize/CircuitRepresentation';
import validate from '../../src/Validator/Validator';
import {EXAMPLE_MIXED} from '../Examples/invalid/ExampleMixed';
import {EXAMPLE_SINGLE_FLOATING} from '../Examples/invalid/ExampleSinglePartFloating';
import {EXAMPLE_SINGLE_SHORT_CIRCUIT} from '../Examples/invalid/ExampleSinglePartShortCircuit';
import {EXAMPLE1} from '../Examples/valid/Example1';
import {EXAMPLE2} from '../Examples/valid/Example2';
import {EXAMPLE3} from '../Examples/valid/Example3';

describe('Test validator', () => {
  it('Should catch floating', () => {
    const errors = validate(EXAMPLE_SINGLE_FLOATING);
    expect(errors.valid()).toBeFalsy();
    expect(errors.floating.length).toBe(2);
    expect(errors.floating).toContain('1-1');
    expect(errors.floating).toContain('1-2');
  });

  it('Should catch short circuit', () => {
    const errors = validate(EXAMPLE_SINGLE_SHORT_CIRCUIT);
    expect(errors.valid()).toBeFalsy();
    expect(errors.shortCircuit.length).toBe(2);
    expect(errors.shortCircuit).toContain('1-1');
    expect(errors.shortCircuit).toContain('1-2');
  });

  it('Should catch mixed', () => {
    const errors = validate(EXAMPLE_MIXED);
    expect(errors.valid()).toBeFalsy();
    expect(errors.shortCircuit.length).toBe(2);
    expect(errors.shortCircuit).toContain('1-1');
    expect(errors.shortCircuit).toContain('1-2');
    expect(errors.floating.length).toBe(2);
    expect(errors.floating).toContain('2-2');
    expect(errors.floating).toContain('3-1');
  });

  it('Should return valid', () => {
    expect(isValid(EXAMPLE1)).toBeTruthy();
    expect(isValid(EXAMPLE2)).toBeTruthy();
    expect(isValid(EXAMPLE3)).toBeTruthy();
  });

  function isValid(representation: ICircuitRepresentation) {
    return validate(representation).valid();
  }
});
