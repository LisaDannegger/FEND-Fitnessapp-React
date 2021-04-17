import React from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 2.2rem;
  background-color: #f8f5f1;
`;

function App() {
  return (
    <Wrapper>
      <header className="App-header">
        <Dashboard />
      </header>
    </Wrapper>
  );
}

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
