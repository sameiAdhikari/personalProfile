import Biography from "../components/Biography";
import ColaborateForm from "../components/ColaborateForm";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <HeroSection />
      <Biography />
      <Skills />
      <Experience />
      <Education />
      <Testimonials />
      <ColaborateForm />
      <Footer />
    </>
  );
}

export default Home;
