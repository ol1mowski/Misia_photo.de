import AboutSection from "./Components/AboutSection/AboutSection";
import Clients from "./Components/Clients/Clients";
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
    </div>
  );
}

export default App;
