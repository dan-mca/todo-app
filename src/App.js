import Home from "./containers/Home";
import TaskProvider from "./context/TasksProvider";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <TaskProvider>
      <GlobalStyles />
      <Home />
    </TaskProvider>
  );
}

export default App;
