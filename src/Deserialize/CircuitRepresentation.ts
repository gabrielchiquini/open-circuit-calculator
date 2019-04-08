export interface ICircuitRepresentation {
  parts: IPartRepresentation[];
  nodes: string[][];
}

export interface IPartRepresentation {
  type: string;
  properties: { [key: string]: number };
  poles: string[];
}
