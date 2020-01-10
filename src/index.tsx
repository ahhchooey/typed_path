import * as React from "react";
import * as ReactDOM from "react-dom";

import {Hello} from "./components/Hello.tsx";

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React"></Hello>,
  document.getElementById("root")
);
