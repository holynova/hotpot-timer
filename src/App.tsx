import React from "react";
import { Header } from "./components/Header/Header";
import TimerPage from "./pages/TimerPage/TimerPage";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentKey="timer" />
      <main className="pt-16 py-6">
        <TimerPage />
      </main>
    </div>
  );
};

export default App;
