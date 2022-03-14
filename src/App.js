import "./App.css";
import { useStateValue } from "./state_provider/StateProvider";

function App() {
  const [state, dispatch] = useStateValue();
  const handleOperation = (operator) => {
    switch (operator) {
      case "+":
        dispatch({
          type: "SAVE_CALCULATE_RESULT",
          payload: state.counter + 1,
        });
        break;
      case "-":
        dispatch({
          type: "SAVE_CALCULATE_RESULT",
          payload: state.counter - 1,
        });
        break;
    }
  };
  return (
    <div className="App">
      <p>{state.counter}</p>
      <button onClick={() => handleOperation("+")}>Add</button>
      <button onClick={() => handleOperation("-")}>Sub</button>
    </div>
  );
}

export default App;
