

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
type QueueNode = {
  node: PathNode,
  path: Array<PathNode>,
}
type UpdateType = (nodes: Array<Array<PathNode>>) => void;
type VoidFunction = (...args: any) => void;


export default function bfs
(nodes: Array<Array<PathNode>>, start: PathNode, end: PathNode, update: UpdateType,
  buildPath: VoidFunction, changeIsRunning: VoidFunction)
  : void
{
  const queue: Array<QueueNode> = [{node: start, path: []}];
  const dirs: Array<Array<number>> = [[1,0],[0,-1],[-1,0],[0,1]];

  let interval = setInterval(function() {
    let current: QueueNode = queue.shift();
    if (!current.node.isVisited) {
      if (current.node === end) {
        clearInterval(interval);
        buildPath(current.path);
        changeIsRunning(false);
      }

      current.node.isVisited = true;

      for (let i = 0; i < dirs.length; i++) {
        let newRow = current.node.row + dirs[i][0];
        let newCol = current.node.col + dirs[i][1];

        if (newRow >= 0 && newRow < nodes.length && newCol >= 0 && newCol < nodes[0].length) {
          if (!nodes[newRow][newCol].isVisited && !nodes[newRow][newCol].isBlocked) {
            queue.push({node: nodes[newRow][newCol], path: current.path.concat(current.node)})
          }
        }
      }

      update(nodes);
    }

    if (queue.length === 0) clearInterval(interval);
  }, 25)
}
