import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import JobEducation from "./components/JobEducation";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";

const App= ()=> {

  return (
    <div className="max-w-full min-h-screen px-2 lg:mx-8 relative z-10 flex flex-col
     ">

      <Navbar/>
      <Presentation />
      <Projects />
      <JobEducation/>
      <Skills/>
      <Certificates />
      <Footer/>

    </div>
  );
}

export default App;
