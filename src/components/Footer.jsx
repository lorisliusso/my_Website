import Love from "../icons/love.svg"
import Github from "../icons/github.svg"

const Footer = () => {


    return (

        <footer className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 justify-between items-center px-10 py-4 text-gray-500
         w-11/12 mx-auto bg-white rounded-b-xl">


            <div className="flex space-x-2
            items-center">
                <p className="text-xl ">Made with LOVE (ReactJS & TailwindCSS)</p>
                <img className="h-10" src={Love} alt="" srcset="" />
            </div>

            <div className="flex space-x-2 items-center">
                <a className="text-xl font-semibold underline" href='https://github.com/lorisliusso?tab=repositories'
                    target="_blank" >GITHUB</a>
                <img className="h-5" src={Github} alt="github-logo" />
            </div>



            <div>
                <a className="font-medium text-xl underline" href="" target="_blank">DOWNLOAD CV</a>
            </div>




        </footer>
    )





}


export default Footer;