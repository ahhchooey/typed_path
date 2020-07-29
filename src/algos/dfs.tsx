
type PathNode = {
  row: number,
  col: number, 
  isStart: boolean,
  isEnd: boolean,
  isBlocked: boolean,
  isVisited: boolean,
  isPath: boolean,
};
type Coordinates = {
  row: number,
  col: number,
}
type UpdateType = (nodes: Array<Array<PathNode>>) => void;
type VoidFunction = (...args: any) => void;


export default function dfs
(nodes: Array<Array<PathNode>>, start: PathNode, end: PathNode, update: UpdateType,
  buildPath: VoidFunction, changeIsRunning: VoidFunction)
  : void
  {
    const dirs: Array<Array<number>> = [[1,0],[0,-1],[-1,0],[0,1]];
    const recur = (node: PathNode, path: Array<PathNode> = []): void => {
      if (node === end) {
        buildPath(path);
        changeIsRunning(false);
        return;
      }

      node.isVisited = true;

      for (let i = 0; i < dirs.length; i++) {
        let newRow = node.row + dirs[i][0];
        let newCol = node.col + dirs[i][1];

        
        if (newRow >= 0 && newRow < nodes.length && newCol >= 0 && newCol < nodes[0].length) {
          if (!nodes[newRow][newCol].isVisited && !nodes[newRow][newCol].isBlocked) {
            recur(nodes[newRow][newCol], path.concat(node));
          }
        }
      }
    }

    recur(start);
  }
