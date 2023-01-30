import { Nav } from "./components/nav";
import { About } from "./components/about";
import { Counter } from "./components/counter";
import { Join } from "./components/join";
import { Schedule } from "./components/schedule";

function App() {

  return (
    <>
      <div className="App">
        <Nav />
      </div>
      <About />
      <Counter />
      <Join />
      <Schedule />
    </>
  );
}

export default App
