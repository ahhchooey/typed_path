import * as React from "react";
import {useState, useEffect} from "react";
import "./stylesheets/Pathfinder.css";

import {Node} from "./Node.tsx";
import {Topbar} from "./Topbar.tsx";


export function Pathfinder() {
  const dummyNode = new Node({});

  const [nodes, setNodes] = useState([]);
  const [startNode, setStartNode] = useState(dummyNode);
  const [endNode, setEndNode] = useState(dummyNode);

  const createNodes = () => {
    const nodes = [];
    let startNode;
    let endNode;

    for (let row = 0; row < 21; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        const currentNode = {
          row,
          col,
          isStart : (row === 10 && col === 9) ? true : false,
          isEnd : (row === 10 && col === 40) ? true : false
        }
        if (currentNode.isStart) setStartNode(currentNode);
        if (currentNode.isEnd) setEndNode(currentNode);
        currentRow.push(currentNode)
      }
      nodes.push(currentRow);
    }

    setNodes(nodes);
  }

  useEffect(() => {
    createNodes();
  }, []);

  return (
    <div className="pathfinder">
      {nodes.map((row) => {
        return row.map((node) => {
          console.log(node);
          return <Node node={node} key={`${node.row},${node.col}`}/>
        })
      })}
    </div>
  )
}
