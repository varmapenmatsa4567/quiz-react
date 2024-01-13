import { Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import CreateQuiz from "./components/CreateQuiz";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/quiz/:id" element={<Quiz/>}/>
      <Route path="/create" element={<CreateQuiz/>}/>
    </Routes>
  );
}

export default App;
