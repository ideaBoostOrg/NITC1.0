import Navbar from "../../components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Countbar from "./components/Countbar";
// import Vedio_section from "./components/Vedio_section";
import Information_bar from "./components/Information_bar";
import Introduction from "./components/Introduction";
import Counter_area from "./components/Counter_area";
import Event_gallery from "./components/Event_gallery";
import Ticket_pricing from "./components/Ticket_pricing";
import Sponsors from "./components/Sponsors";
import Map from "./components/Map";
import Footer from "./components/Footer";

function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <Countbar />
      <About />
      {/* <Vedio_section /> */}
      <Information_bar />
      <Introduction />
      <Counter_area />
      <Event_gallery />
      <Ticket_pricing />
      <Sponsors />
      <Map />
      <Footer />
    </>
  );
}

export default index;
