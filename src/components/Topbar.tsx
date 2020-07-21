import * as React from "react";
import "./stylesheets/Topbar.css";


type NodeType = {
  row: number,
  col: number,
  isStart: boolean,
  isEnd: boolean,
  isBlocked: boolean,
  isVisited: boolean,
  isPath: boolean,
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

  addSelectListener(): void {
    const nodes = document.querySelector(".node-container");
    nodes.addEventListener("click", (e) => {
      let node = e.target as HTMLElement;
      if (node.classList.contains("node")) {
        let row = node.getAttribute("data-row");
        let col = node.getAttribute("data-col");
        if (this.state.selected === "changeStart") {
          this.props.changeNode(row, col, "changeStart")
        } else if (this.state.selected === "changeEnd") {
          this.props.changeNode(row, col, "changeEnd")
        } else if (this.state.selected === "toggleBlock") {
          this.props.changeNode(row, col, "toggleBlock")
        }
      }
    })
  }

  addActive(target: any, input: string) {
    target.classList.add("active-button");
    this.setState({selected: input});
  }

  removeActive() {
    let buttons = document.querySelectorAll(".toggle-button");
    buttons.forEach(button => {
      button.classList.remove("active-button");
    })
    this.setState({selected: ""});
  }

  changeSelected(input: string, event: any): void {
    let target = event.target;
    if (target.classList.contains("active-button")) {
      this.removeActive();
    } else {
      this.removeActive();
      this.addActive(target, input);
    }
  }

  render() {
    return (
      <div className="topbar">
        <div className="run-button">
          RUN
        </div>
        <div className="toggle-button"
          onClick={(e) => this.changeSelected("changeStart", e)}
        >
          Change Start
        </div>
        <div className="toggle-button"
          onClick={(e) => this.changeSelected("changeEnd", e)}
        >
          Change End
        </div>
        <div className="toggle-button"
          onClick={(e) => this.changeSelected("toggleBlock", e)}
        >
          Toggle Block
        </div>
        <div className="algo-dropdown">
          ALGODROPDOWN
        </div>
        <div className="reset-button">
          RESET
        </div>
      </div>
    )
  }
}
