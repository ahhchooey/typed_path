

type PathNode = {
  row: number,
  col: number, 
  isStart: boolean,
  isEnd: boolean,
  isBlocked: boolean,
  isVisited: boolean,
  isPath: boolean,
};

type QueueNode = {
  node: PathNode,
  path: Array<PathNode>,
}

type UpdateType = (nodes: Array<Array<PathNode>>) => void;


export default function bfs
(nodes: Array<Array<PathNode>>, start: PathNode, end: PathNode, update: UpdateType)
  : Array<PathNode>
{
  let output: Array<PathNode> = [];

  const queue: Array<QueueNode> = [{node: start, path: []}];
  const dirs: Array<Array<number>> = [[1,0],[0,-1],[-1,0],[0,1]];

  while (queue.length > 0) {
    let current: QueueNode = queue.shift();
    console.log(current.node.row, current.node.col)

    if (current.node === end) {
      output = current.path;
      break;
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

  return output;
}
