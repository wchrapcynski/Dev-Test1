import React from "react";
import "./App.scss";
import QuestionOne from "./components/QuestionOne";
import QuestionTwo from "./components/QuestionTwo";
import QuestionThree from "./components/QuestionThree"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Blueprint Dev Text - Part 1</h1>
      </header>
      <main>
        <QuestionOne />
        <QuestionTwo />
        <QuestionThree />
      </main>
    </div>
  );
}

export default App;
