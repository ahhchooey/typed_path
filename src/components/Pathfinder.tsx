import * as React from "react";
import "./stylesheets/Pathfinder.css";

import Node from "./Node.tsx";
import {Topbar} from "./Topbar.tsx";


type PathNode = {
  row: number,
  col: number, 
  isStart: boolean,
  isEnd: boolean,
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
    this.dummy = {row: -1, col: -1, isStart: false, isEnd: false};
    this.state = {
      nodes: [[this.dummy]],
      startNode: this.dummy,
      endNode: this.dummy,
    };
  }

  componentDidMount(): void {
    this.createNodes();
  };

  createNodes(): void {
    const nodes = [];

    for (let row = 0; row < 21; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        const currentNode: PathNode = {
          row,
          col,
          isStart : (row === 10 && col === 9) ? true : false,
          isEnd : (row === 10 && col === 40) ? true : false
        }
        if (currentNode.isStart) this.setState({startNode: currentNode});
        if (currentNode.isEnd) this.setState({endNode: currentNode});
        currentRow.push(currentNode)
      }
      nodes.push(currentRow);
    }

    this.setState({nodes: nodes});
  }

  render() {
    return (
      <div className="pathfinder">
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
