import { Route, Routes } from "react-router-dom";
import GameStatistics from "./pages/GameStatistics";

function App() {
  return (
    <Routes>
      <Route path="/:gameId" element={<GameStatistics />} />
      <Route path="/" element={<GameStatistics />} />
    </Routes>
  );
}

export default App;
