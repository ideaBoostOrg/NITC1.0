import Navbar from "../../components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Countbar from "./components/Countbar";
import Shedule from "./components/Shedule";
// import Vedio_section from "./components/Vedio_section";
import Information_bar from "./components/Information_bar";
import Introduction from "./components/Introduction";
// import Counter_area from "./components/Counter_area";
// import Event_gallery from "./components/Event_gallery";
import Gallery from "./components/Gallery";
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
      <Shedule />
      <Introduction />
      {/* <Counter_area />
      <Event_gallery /> */}
      <Gallery />
      <Ticket_pricing />
      <Sponsors />
      <Map />
      <Footer />
    </>
  );
}

export default index;
