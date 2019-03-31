import Part from './Part';

export default class Circuit {
  parts: Part[];
  nodes: string[][];

  constructor(parts: Part[], nodes: string[][]) {
    this.parts = parts;
    this.nodes = nodes;
  }
}
