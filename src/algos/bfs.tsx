

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

export default function bfs
  (nodes: Array<Array<PathNode>>, start: PathNode, end: PathNode): void 
{

  const queue: Array<PathNode> = [start];
  const dirs: Array<Array<number>> = [[1,0],[0,-1],[-1,0],[0,1]];

  while (queue.length > 0) {

  }
}
