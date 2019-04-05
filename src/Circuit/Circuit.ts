import Part from "./Part";

export default class Circuit {
  public parts: Part[];
  public nodePoles: string[][];
  public nodeParts: Part[][];

  constructor(parts: Part[], nodes: string[][]) {
    this.parts = parts;
    this.nodePoles = nodes;
    this.nodeParts = nodes.map((node) =>
      node.map((nodeId) => this.findPartByPole(nodeId)),
    );
  }

  public findPartByPole(nodeId: string): Part {
    return this.parts.find((part) => part.poles.includes(nodeId)) as Part;
  }
}
