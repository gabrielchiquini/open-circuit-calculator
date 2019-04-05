import { BigNumber } from "mathjs";
import Circuit from "../Circuit/Circuit";
import { sumBigNumbers } from "../util/MathUtil";

export function conductanceMatrix(circuit: Circuit) {
  const nodeConductances = circuit.nodeParts.map((parts) =>
    parts.map((part) => part.conductance),
  );

  const matrix: BigNumber[][] = [];
  nodeConductances.forEach((node, i) => {
    matrix.push([]);
    node.forEach((__, j) => {
      if (i === j) {
        matrix[i][j] = conductancesInsideNode(node);
      } else {
        matrix[i][j] = conductancesBetweenNodes(node, nodeConductances[j]);
      }
    });
  });
}

function conductancesInsideNode(node: BigNumber[]): BigNumber {
  return sumBigNumbers(...node);
}

function conductancesBetweenNodes(node1: BigNumber[], node2: BigNumber[]) {
  const intersection = node1.filter((part) => node2.includes(part));
  return sumBigNumbers(...intersection);
}
