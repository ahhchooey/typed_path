import * as React from "react";
import {useState} from "react";
import "./stylesheets/Node.css";


type NodeProps= {
  row: number,
  col: number,
  isStart: boolean,
  isEnd: boolean
}

export function Node(props: NodeProps) {

  const [row, setRow] = useState(props.row);
  const [col, setCol] = useState(props.col);
  const [isStart, setIsStart] = useState(props.isStart);
  const [isEnd, setIsEnd] = useState(props.isEnd);

  const [distance, setDistance] = useState(Infinity);
  const [isVisted, setIsVisited] = useState(false);
  const [isPath, setIsPath] = useState(false);

  let className: string = "node";
  if (isStart) {className += " node-start"};
  if (isEnd) {className += " node-end"};
  if (isVisted) {className += " node-visited"};
  if (isPath) {className += " node-path"};

  return (
    <div
      className={className}
    >
    </div>
  )
}
