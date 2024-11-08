import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Skils from "./Components/Skils";
import Realisations from "./Components/Réalisations";
import ProjetFront from "./Components/ProjetFront";
import Me from "./Components/Me";
import Contact from "./Components/Contact";
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
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
