import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EventCard from "./components/EventCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <EventCard />
      <Footer />
    </>
  );
}

export default App;
