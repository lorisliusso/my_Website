import logo from "../icons/logo-2.png";
import logoMobile from "../icons/logo-3.png";
import svgHamburger from "../icons/hamburgerclassic.svg";
import X from "../icons/x.svg";
import Mail from "../icons/mail.svg"
import Youtube from "../icons/youtube.svg"
import Linkedin from "../icons/linkedin.svg"
import MailColor from "../icons/mail-black.svg"
import YoutubeColor from "../icons/youtube-color.svg"
import LinkedinColor from "../icons/linkedin-color.svg"
import { useState } from "react";

const Navbar = () => {

    const [sideNavbar, setSideNavbar] = useState(false)

    function handleClick() {
        setSideNavbar(prevValue => !prevValue)
    }

    return (

        <>


            <nav className="flex justify-between items-center p-4 0 mb-10"
                id='navbar-desktop'>

                <div className="h-20' w-20 cursor-pointer">
                    <img src={logo} alt="logo" />
                </div>

                <div onClick={handleClick} className=" w-10 h-10 md:w-11 lg:hidden cursor-pointer hover:scale-110 transition duration-75 ease-in">
                    <img className="white-color" src={svgHamburger} alt="hamburger" />

                </div>

                <div className="hidden lg:flex space-x-10 text-2xl text-white">


                    <div className=" flex space-x-3 px-8 py-1 rounded-xl
                     bg-slate-700 items-center hover:bg-gray-400">
                        <a className="cursor-pointer" href="">Contact Me</a>
                        <div className="w-6 self-end">
                            <img src={Mail} alt="Contact Me" />
                        </div>
                    </div>

                    <div className=" flex space-x-3 px-8 py-1
                     rounded-xl bg-slate-700 items-center hover:bg-blue-500">
                        <a className="cursor-pointer" href="https://www.linkedin.com/in/loris-liusso-3b7244194/" target="_blank">Linkedin</a>
                        <div className="w-6">
                            <img src={Linkedin} alt="Contact Me" />
                        </div>
                    </div>

                    <div className=" flex space-x-3 px-8 py-1 rounded-xl
                     bg-slate-700 items-center hover:bg-red-500">
                        <a className="cursor-pointer" href="https://www.youtube.com/c/LorisLiusso" target="_blank">Youtube</a>
                        <div className="w-7 self-end">
                            <img src={Youtube} alt="Contact Me" />
                        </div>
                    </div>


                </div>

            </nav >

            {/* NAVBAR MOBILE: */}

            < nav className={sideNavbar === false ? "absolute z-0 opacity-0"
                : "opacity-100 flex flex-col items-center space-y-20 p-4 absolute z-20 bg-white w-full h-full inset-y-0 right-0 transition-opacity  duration-300 ease-in-out"}
                id='navbar-mobile' >

                <div onClick={handleClick} className="cursor-pointer self-end">
                    <img className="w-10" src={X} alt="close" />

                </div>

                <div className="cursor-pointer">
                    <img className="w-24" src={logoMobile} alt="logo" />
                </div>


                <div className="flex flex-col space-y-20 text-3xl items-center">

                    <div className=" flex space-x-3 px-8 py-1 rounded-xl
                     items-center hover:underline">
                        <a className="cursor-pointer" href="">Contact Me</a>
                        <div className="w-7 self-end">
                            <img src={MailColor} alt="Contact Me" />
                        </div>
                    </div>


                    <div className="  flex space-x-3 px-8 py-1 rounded-xl
                     items-center hover:underline">
                        <a className="cursor-pointer" href="https://www.linkedin.com/in/loris-liusso-3b7244194/" target="_blank">Linkedin</a>
                        <div className="w-7">
                            <img src={LinkedinColor} alt="Contact Me" />
                        </div>
                    </div>

                    <div className="  flex space-x-3 px-8 py-1 rounded-xl
                     items-center hover:underline">
                        <a className="cursor-pointer" href="https://www.youtube.com/c/LorisLiusso" target="_blank">Youtube</a>
                        <div className="w-7 self-end">
                            <img src={YoutubeColor} alt="Contact Me" />
                        </div>
                    </div>
                </div>

            </nav >



        </>
    )
}



export default Navbar;