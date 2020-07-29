
import bfs from "../algos/bfs.tsx";
import dfs from "../algos/dfs.tsx";

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
type VoidFunction = (...args: any) => void;

export default function algoRunner
(fetchNodes: FetchNodesType, update: UpdateType, getStart: GetNodeType, getEnd: GetNodeType,
  algo: string, buildPath: VoidFunction, changeIsRunning: VoidFunction)
  : void
{
  if (algo === "bfs") {
    return bfs(fetchNodes(), getStart(), getEnd(), update, buildPath, changeIsRunning);
  } else if (algo === "dfs") {
    return dfs(fetchNodes(), getStart(), getEnd(), update, buildPath, changeIsRunning);
  } else {
    changeIsRunning(false);
    alert("Please Select an Algorithm")
  }
}
