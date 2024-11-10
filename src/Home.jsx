import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Skils from "./Components/Skils";
import Realisations from "./Components/Réalisations";
import ProjetFront from "./Components/ProjetFront";
import Me from "./Components/Me";
import Contact from "./Components/Contact";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";

function Home() {
  return (
    <div className="w-full">
      <Header />
      <Banner />
      <Skils />
      <Realisations />
      <ProjetFront />
      <Me />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
