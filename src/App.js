import { Link } from "react-router-dom";
import Button from "./components/Button";
import Header from "./components/Header";
import { DevLayout } from "./styled-components/Layout.styles";

function App() {
  return (
    <>
      <Header />
      <DevLayout>
        <div className="App">
          <a href="/">Hello</a>
          <Link to="/com">Hell</Link>
          <Button type="primary">Connect Wallet</Button>
          <h1>
            Watch your favorite <span>Cat</span> videos here
          </h1>
        </div>
      </DevLayout>
    </>
  );
}

export default App;
