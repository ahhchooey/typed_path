import React from "react";
import "./stylesheets/Node.css";


export function Node(props) {

  const [row, setRow] = useState(props.row);
  const [col, setCol] = useState(props.col);
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const [distance, setDistance] = useState(Infinity);
  const [isVisted, setIsVisited] = useState(false);
  const [isPath, setIsPath] = useState(false);

  let className = "node";
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
