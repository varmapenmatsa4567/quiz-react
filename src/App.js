import { Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import CreateQuiz from "./components/CreateQuiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Quiz/>}/>
      <Route path="/create" element={<CreateQuiz/>}/>
    </Routes>
  );
}

export default App;
