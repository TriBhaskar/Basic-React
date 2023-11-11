import Header from "./components/Header/Header.jsx";
import Coreconcepts from "./components/Coreconcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    //Fragment (<>)component from react helps to combine multiple child or components inside a function (replacement for Div)
    <>
      <Header />
      <main>
        <Coreconcepts />

        <Examples />
      </main>
    </>
  );
}

export default App;
