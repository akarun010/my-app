import { useContext, useMemo } from "react";
import { ThemeContext } from "./ThemeContext";

const Dashboard = () => {
  const { themes, toggleTheme, dark } = useContext(ThemeContext);

  const tasks = [
    "Running",
    "Gaming",
    "Eating",
    "Studying",
    "Watching YouTube",
  ];

  const taskNum = useMemo(() => {
    return tasks.length;
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <div
        style={{
          backgroundColor: themes.cardBackground,
          padding: "25px",
          borderRadius: "12px",
          maxWidth: "500px",
          margin: "20px auto",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <h1>My Dashboard</h1>

        <p>Welcome back, Arun!</p>

        <h3>Total Tasks: {taskNum}</h3>

        <ul>
          {tasks.map((task, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {task}
            </li>
          ))}
        </ul>

        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: themes.buttonBackground,
            color: "#FFFFFF",
            padding: "10px 18px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Switch to {dark ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
};

export default Dashboard;