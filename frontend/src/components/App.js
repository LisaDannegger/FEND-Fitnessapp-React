import React from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import Navigation from "./Navigation";
// import Browse from "./Browse";
// import Profile from "./Profile";

//Styles
const Wrapper = styled.div`
  text-align: left;
  background-color: white;
  color: #1d2a73;
`;

const App = () => {
  return (
    <Router>
      <Wrapper>
        <header className="App-header">
          <Dashboard
            userName="Lisa"
            workoutTitle="Titel des Workouts"
            programTitle="Titel des Programms"
          />
        </header>
        <Navigation>
          <Route exact path="/" component={Navigation} />
          {/* <Route exact path="/browse" component={Browse} />
          <Route exact path="/profile" component={Profile} /> */}
        </Navigation>
      </Wrapper>
    </Router>
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
