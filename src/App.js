import AboutSection from "./Components/AboutSection/AboutSection";
import Clients from "./Components/Clients/Clients";
import Contact from "./Components/Contact/Contact";
import Events from "./Components/Events/Events";
import HomePage from "./Components/HomePage/HomePage";
import SpecialEvents from "./Components/SpecialEvents/SpecialEvents";


function App() {
  return (
    <div>
        <HomePage />
        <AboutSection />
        <Clients />
        <Events />
        <SpecialEvents />
        <Contact />
    </div>
  );
}

export default App;
