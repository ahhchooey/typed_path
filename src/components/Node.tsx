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

export default class Node extends React.Component<NodeProps, NodeState> {
  row: number;
  col: number;

  constructor(props: NodeProps) {
    super(props);
    this.state = {
      isStart: props.node.isStart,
      isEnd: props.node.isEnd,
      distance: Infinity,
      isVisited: false,
      isPath: false,
      isBlocked: props.node.isBlocked,
      className: "",
    }
    this.row = props.node.row;
    this.col = props.node.col;
  }

  componentDidMount(): void {
    this.determineClassName();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      console.log("hi")
    }
  }

  determineClassName(): void {
    let className: string = "node";
    if (this.state.isStart) {className += " node-start"};
    if (this.state.isEnd) {className += " node-end"};
    if (this.state.isVisited) {className += " node-visited"};
    if (this.state.isPath) {className += " node-path"};
    if (this.state.isBlocked) {className += " node-block"};
    this.setState({className: className})
  }

  render() {
    console.log(this.state.className)
    return (
      <div className={this.state.className} data-row={this.row} data-col={this.col} >
      </div>
    )
  }
}
