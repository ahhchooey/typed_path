import * as React from "react";
import {useState} from "react";
import "./stylesheets/Node.css";


type NodeProps = {
  node: {
    row: number,
    col: number,
    isStart: boolean,
    isEnd: boolean,
    isBlocked: boolean,
    isVisited: boolean,
    isPath: boolean,
  },
};

type NodeState = {
  isStart: boolean,
  isEnd: boolean,
  distance: number,
  isVisited: boolean,
  isPath: boolean,
  isBlocked: boolean,
  className: string,
};

export default function Node(props: NodeProps) {

  let className: string = "node";
  if (props.node.isStart) {className += " node-start"};
  if (props.node.isEnd) {className += " node-end"};
  if (props.node.isVisited) {className += " node-visited"};
  if (props.node.isPath) {className += " node-path"};
  if (props.node.isBlocked) {className += " node-block"};

  return (
    <div className={className} data-row={props.node.row} data-col={props.node.col} >
    </div>
  )
}
