import * as React from "react";
import "./stylesheets/Topbar.css";


type NodeType = {
  row: number,
  col: number,
  isStart: boolean,
  isEnd: boolean,
  isBlocked: boolean,
}

type NodesFunctionType = () => Array<Array<NodeType>>;
type VoidFunctionType = (...args: any) => void;

type TopbarProps = {
  startNode: NodeType,
  endNode: NodeType,
  getNodes: NodesFunctionType,
  changeNode: VoidFunctionType,
  reset: VoidFunctionType;
}

type TopbarState = {
  selected: string,
}

export default class Topbar extends React.Component<TopbarProps, TopbarState> {

  constructor(props: TopbarProps) {
    super(props);
    this.state = {
      selected: "",
    }
  }

  componentDidMount() {
    this.addSelectListener();
  }

  componentDidUpdate(prevProps: TopbarProps, prevState: TopbarState) {
    if (prevProps !== this.props) {
    }
  }

  addSelectListener() {
    const nodes = document.querySelector(".node-container");
    nodes.addEventListener("click", (e) => {
      let node = e.target as HTMLElement;
      if (node.className === "node") {
        let row = node.getAttribute("data-row");
        let col = node.getAttribute("data-col");
        this.props.changeNode(row, col, "toggleBlock")

        console.log(this.props.getNodes()[row][col])
      }
    })
  }

  render() {
    return (
      <div className="topbar">
        <div>
          RUN
        </div>
        <div>
          Change Start
        </div>
        <div>
          Change End
        </div>
        <div>
          Toggle Block
        </div>
        <div>
          ALGODROPDOWN
        </div>
        <div>
          RESET
        </div>
      </div>
    )
  }
}
