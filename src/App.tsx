import "./App.css";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Instructors from "./components/Instructors";
import Nav from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className="relative mx-auto max-w-[100%] justify-center">
      <Nav />
      <Hero />

      <Services />
      <Benefits />
      <Instructors />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;
