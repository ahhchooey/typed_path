import * as React from "react";
import "./stylesheets/Topbar.css";


type TopbarState = {
  selected: string,
}

export default class Topbar extends React.Component<{}, TopbarState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      selected: "",
    }
  }

  render() {
    return (
      <div className="topbar">
        i am topbar
      </div>
    )
  }
}
