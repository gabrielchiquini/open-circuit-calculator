export interface ICircuitRepresentation {
  parts: IPartRepresentation[];
  nodes: string[][];
}

export interface IPartRepresentation {
  id: string;
  type: string;
  properties: { [key: string]: number };
  poles: string[];
}
