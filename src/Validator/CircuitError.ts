export default class CircuitError {
  public floating: string[] = [];
  public shortCircuit: string[] = [];
  public groundMissing = false;

  public valid() {
    return (this.floating.length + this.shortCircuit.length) === 0 && !this.groundMissing;
  }
}
