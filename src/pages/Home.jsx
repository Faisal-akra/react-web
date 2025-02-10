import About from "../components/About";
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
      </div>

    

    </>
  );
}

export default HomePage;
