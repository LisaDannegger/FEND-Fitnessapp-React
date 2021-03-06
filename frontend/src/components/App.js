import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import styled, { css } from "styled-components";
import "./App.css";

//Components
import Dashboard from "./Home/Dashboard";
import Browse from "./Browse/Browse";
import ProgrammOverview from "./Programm/ProgrammOverview";
import Trainingsplan from "./Home/Trainingsplan";
import Workout from "../screens/Workout";

const Wrapper = styled.div`
  text-align: left;
  color: #1d2a73;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <header className="App-header"></header>
        <main>
          <Switch>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/browse">
              <Browse />
            </Route>

            <Route path="/programm">
              <ProgrammOverview />
            </Route>
            <Route exact path="/trainingsplan">
              <Trainingsplan />
            </Route>
            <Route path="/workout">
              <Workout />
            </Route>
          </Switch>
        </main>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;

// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import {
//   BrowserRouter,
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from "react-router-dom";
