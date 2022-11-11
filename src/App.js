import { Link } from "react-router-dom";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <a href="/">Hello</a>
      <Link to="/com">Hell</Link>
      <Button />
      <h1>
        Watch your favorite <span>Cat</span> videos here
      </h1>
    </div>
  );
}

export default App;
