import { Nav } from "./components/nav";
import { About } from "./components/about";
import { Counter } from "./components/counter";
import { Join } from "./components/join";
import { Schedule } from "./components/schedule";
import { Speakers } from "./components/speakers.jsx";
import { Tickets } from "./components/tickets.jsx";
import { Sponsor } from "./components/sponsor.jsx";
import { Location } from "./components/location.jsx";
import { Footer } from "./components/footer.jsx";
import { ButtonlToTop } from "./components/ButtonlToTop";


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
      <Speakers />
      <Tickets />
      <Sponsor />
      <Location />
      <Footer />
      <ButtonlToTop />
    </>
  );
}

export default App
