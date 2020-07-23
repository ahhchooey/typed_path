
import bfs from "../algos/bfs.tsx";

type PathNode = {
  row: number,
  col: number, 
  isStart: boolean,
  isEnd: boolean,
  isBlocked: boolean,
  isVisited: boolean,
  isPath: boolean,
};

type UpdateType = (nodes: Array<Array<PathNode>>) => void;
type FetchNodesType = () => Array<Array<PathNode>>;
type GetNodeType = () => PathNode;

export default function algoRunner
(fetchNodes: FetchNodesType, update: UpdateType, getStart: GetNodeType, getEnd: GetNodeType): void
{
  bfs(fetchNodes(), getStart(), getEnd(), update);
}
