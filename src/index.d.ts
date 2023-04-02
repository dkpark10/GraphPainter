declare module 'global-type' {
  export interface Point {
    y: number;
    x: number;
  }

  export interface Vertex {
    connectedList: string[][];
    coord: Point;
  }
}