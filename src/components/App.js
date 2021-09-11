import "../styles/App.css";
import { Layout } from "./Layout";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        <Signup />
      </Layout>
    </div>
  );
}

export default App;
