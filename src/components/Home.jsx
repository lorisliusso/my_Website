import Presentation from "./Presentation";
import Projects from "./Projects";
import JobEducation from "./JobEducation";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Navbar from "./Navbar";
import Footer from "./Footer";




const Home = () => {


    return (


        <div className="max-w-full min-h-screen px-2 lg:mx-8 relative z-10 flex flex-col 
        " id="Home">

            <Navbar />
            <Presentation />
            <Projects />
            <JobEducation />
            <Skills />
            <Certificates />
            <Footer />


        </div>
    )
}


export default Home;