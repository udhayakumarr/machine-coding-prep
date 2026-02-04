import Switch from "./components/Switch";
import Default from "./components/Default";
import Case from "./components/Case";

function App() {
  return (
    <Switch value={"loading"}>
      <Case when="loading">
        <p>Loading...</p>
      </Case>

      <Case when="success">
        <p>Data Loaded Successfully</p>
      </Case>

      <Case when="error">
        <p>Something went wrong</p>
      </Case>

      <Default>
        <p>Unknown State</p>
      </Default>
    </Switch>
  );
}

export default App;
