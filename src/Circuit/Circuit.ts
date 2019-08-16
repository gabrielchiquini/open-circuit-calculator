import Part from './Part';
import PartType from "./PartType";

export default class Circuit {
  public parts: Part[];
  public nodePoles: string[][];
  public nodeParts: Part[][];

  constructor(parts: Part[], nodes: string[][]) {
    this.parts = parts;
    this.nodePoles = this.removeGrounds(parts, nodes);
    this.nodeParts = this.nodePoles.map(node =>
      node.map(nodeId => this.findPartByPole(nodeId)),
    );
  }

  public findPartByPole(nodeId: string): Part {
    return this.parts.find(part => part.poles.includes(nodeId)) as Part;
  }

  public nodeNumberByPole(pole: string): number {
    return this.nodePoles.findIndex(node => node.includes(pole));
  }

  public nodeCount() {
    return this.nodePoles.length;
  }

  private removeGrounds(parts: Part[], nodes: string[][]): string[][] {
    const groundPoles = parts.filter(part => part.type === PartType.GROUND).map(gnd => gnd.firstPole);
    return nodes.filter(node => {
      let found = false;
      groundPoles.forEach(groundPole => {
        found = node.includes(groundPole);
        return !found; // breaks the loop when found
      });
      return !found;
    });
  }
}
