import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skill from "../components/Skills";


function HomePage() {
  return (
    <>
      <div>
     <Navbar/>
     <About/>
     <Skill/>
     <Projects/>
     <Footer/>
      </div>

    

    </>
  );
}

export default HomePage;
