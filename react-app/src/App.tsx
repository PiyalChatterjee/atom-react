import "./App.css";
import Users from "./Components/Users";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (process.env.NODE_ENV !== "production") {  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}
function App() {
  return <Users />;
}

export default App;
