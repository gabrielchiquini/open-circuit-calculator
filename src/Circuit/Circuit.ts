import Part from "./Part";

export default class Circuit {
  public parts: Part[];
  public nodePoles: string[][];
  public nodeParts: Part[][];

  constructor(parts: Part[], nodes: string[][]) {
    this.parts = parts;
    this.nodePoles = nodes.slice(1); //taking node 0 as referece
    this.nodeParts = this.nodePoles.map((node) =>
      node.map((nodeId) => this.findPartByPole(nodeId)),
    );
  }

  public findPartByPole(nodeId: string): Part {
    return this.parts.find((part) => part.poles.includes(nodeId)) as Part;
  }

  public nodeNumberByPole(pole: string): number {
    return this.nodePoles.findIndex(node => node.includes(pole));
  }
}
