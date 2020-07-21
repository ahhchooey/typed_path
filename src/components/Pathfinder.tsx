import * as React from "react";
import "./stylesheets/Pathfinder.css";

import Node from "./Node.tsx";
import Topbar from "./Topbar.tsx";


type PathNode = {
  row: number,
  col: number, 
  isStart: boolean,
  isEnd: boolean,
  isBlocked: boolean,
};

type PathfinderState = {
  nodes: Array<Array<PathNode>>,
  startNode: PathNode,
  endNode: PathNode,
};

export default class Pathfinder extends React.Component<{}, PathfinderState> {
  dummy: PathNode;

  constructor(props: {}) {
    super(props);
    this.dummy = {row: -1, col: -1, isStart: false, isEnd: false, isBlocked: false};
    this.state = {
      nodes: [[this.dummy]],
      startNode: this.dummy,
      endNode: this.dummy,
    };

    this.getNodes = this.getNodes.bind(this);
    this.changeNode = this.changeNode.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount(): void {
    this.createNodes();
  };

  componentDidUpdate(): void {

  }

  createNodes(): void {
    const nodes = [];

    for (let row = 0; row < 21; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        const currentNode: PathNode = {
          row,
          col,
          isStart: (row === 10 && col === 9) ? true : false,
          isEnd: (row === 10 && col === 40) ? true : false,
          isBlocked: false,
        }
        if (currentNode.isStart) this.setState({startNode: currentNode});
        if (currentNode.isEnd) this.setState({endNode: currentNode});
        currentRow.push(currentNode)
      }
      nodes.push(currentRow);
    }

    this.setState({nodes: nodes});
  }

  getNodes(): Array<Array<PathNode>> {
    return this.state.nodes;
  }

  changeNode(row: number, col: number, selected: string): void {
    if (selected === "changeStart" && !this.state.nodes[row][col].isBlocked) {
      let newNodes = Object.assign([], this.state.nodes);
      if (newNodes[row][col].isEnd) {
        newNodes[row][col].isEnd = false;
        newNodes[this.state.endNode.row][this.state.endNode.col].isEnd = false;
        newNodes[this.state.endNode.row][this.state.endNode.col].isStart = true;
      } 
      newNodes[this.state.startNode.row][this.state.startNode.col].isStart = false;
      newNodes[row][col].isStart = true;
      this.setState({nodes: newNodes});
    } else if (selected === "changeEnd" && !this.state.nodes[row][col].isBlocked) {
      let newNodes = Object.assign([], this.state.nodes);
      if (newNodes[row][col].isStart) {
        newNodes[row][col].isStart = false;
        newNodes[this.state.startNode.row][this.state.startNode.col].isStart = true;
        newNodes[this.state.startNode.row][this.state.startNode.col].isEnd = false;
      } 
      newNodes[this.state.endNode.row][this.state.endNode.col].isEnd = false;
      newNodes[row][col].isEnd = true;
      this.setState({nodes: newNodes});
    } else if (selected === "toggleBlock" 
      && !this.state.nodes[row][col].isStart && !this.state.nodes[row][col].isEnd) {
      let newNode = Object.assign({}, this.state.nodes[row][col]);
      if (newNode.isBlocked) {
        newNode.isBlocked = false;
      } else {
        newNode.isBlocked = true;
      }
      let newNodes = [...this.state.nodes];
      newNodes[row][col] = newNode;
      this.setState({nodes: newNodes});
    }
  }

  reset(): void {
    this.createNodes();
  }

  render() {
    console.log("path redner")
    return (
      <div className="pathfinder">
        <Topbar
          startNode={this.state.startNode}
          endNode={this.state.endNode}
          getNodes={this.getNodes}
          changeNode={this.changeNode}
          reset={this.reset}
        />
        <div className="node-container">
          {
            this.state.nodes.map((row) => {
              return row.map((node) => {
                return <Node node={node} key={`${node.row},${node.col}`} />
              })
            })
          }
        </div>
      </div>
    )
  }
};
