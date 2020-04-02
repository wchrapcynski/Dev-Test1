import React from "react";
import "./App.scss";
import QuestionOne from "./components/QuestionOne";
import QuestionTwo from "./components/QuestionTwo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Blueprint Dev Text - Part 1</h1>
      </header>
      <main>
        <QuestionOne />
        <QuestionTwo />
      </main>
    </div>
  );
}

export default App;
