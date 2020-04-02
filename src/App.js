import React from "react";
import "./App.scss";
import QuestionOne from "./components/QuestionOne";
import QuestionTwo from "./components/QuestionTwo";
import QuestionThree from "./components/QuestionThree"
import Bonus from "./components/Bonus"

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
        <Bonus />
      </main>
    </div>
  );
}

export default App;
