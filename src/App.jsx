import "./styles/App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Body />
      </Layout>
    </>
  );
}

export default App;
