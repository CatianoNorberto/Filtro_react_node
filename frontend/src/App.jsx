import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./styles/global";

import PathRoutes from "../src/routes";


export default function App() {

  return (
    <Router>
      <GlobalStyle />
      <PathRoutes/>
    </Router>
  )
}

