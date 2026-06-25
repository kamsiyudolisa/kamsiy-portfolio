import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BeyondCode from "./components/BeyondCode";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Experience />
      <Leadership />
      <Projects />
      <Gallery />
      <Contact />
      <BeyondCode />
      <Footer />
    </main>
  );
}

export default App;