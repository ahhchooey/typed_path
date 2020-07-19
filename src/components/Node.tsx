import * as React from "react";
import {useState} from "react";
import "./stylesheets/Node.css";


type NodeProps = {
  node: {
    row: number,
    col: number,
    isStart: boolean,
    isEnd: boolean,
  },
};

type NodeState = {
  row: number, 
  col: number,
  isStart: boolean,
  isEnd: boolean,
  distance: number,
  isVisited: boolean,
  isPath: boolean,
};

export default class Node extends React.Component<NodeProps, NodeState> {
  className: string;

  constructor(props: NodeProps) {
    super(props);
    this.state = {
      row: props.node.row,
      col: props.node.col,
      isStart: props.node.isStart,
      isEnd: props.node.isEnd,
      distance: Infinity,
      isVisited: false,
      isPath: false,
    }
    this.className = "node";
    if (this.state.isStart) {this.className += " node-start"};
    if (this.state.isEnd) {this.className += " node-end"};
    if (this.state.isVisited) {this.className += " node-visited"};
    if (this.state.isPath) {this.className += " node-path"};
  }

  render() {
    return (
      <div className={this.className}>
      </div>
    )
  }
}
