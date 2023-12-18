export interface Node {
    key: string;
    name: string;
    children?: Node[];
  }
  
  export interface DataState {
    data: Node[];
  }
  
 