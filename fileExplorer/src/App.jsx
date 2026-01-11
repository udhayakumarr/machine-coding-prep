import FileExplorer from "./components/fileExplorer";
import fileSystem from "./data/fileSystem";

function App() {
  return <FileExplorer fileSystem={fileSystem} />;
}

export default App;
