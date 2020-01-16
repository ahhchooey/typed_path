import React from "react";
import "./stylesheets/Pathfinder.css";

import Node from "./Node.tsx";
import Topbar from "./Topbar.tsx";


export function Pathfinder() {
  const dummyNode = new Node();

  const [nodes, setNodes] = useState([]);
  const [startNode, setStartNode] = useState(dummyNode);
  const [endNode, setEndNode] = useState(dummyNode);

  return (

  )
}
