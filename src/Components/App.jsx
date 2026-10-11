import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

function AppContent() {
  const { themes } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: themes.background,
        color: themes.color,
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      <Navbar />
      <Dashboard />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;