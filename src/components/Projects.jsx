import GithubFinder from "../icons/github-finder.svg"
import Bookmark from "../icons/bookmark-project.svg"
import House from "../icons/house-project.svg"



const Projects = () => {



    return (

        <div className="bg-white flex flex-col space-y-10 justify-center items-center px-4 pt-6 w-11/12 mx-auto">

            <h2 className="text-2xl font-semibold">My Latest Projects:</h2>

            <div className="flex flex-col space-y-5 md:flex-row
             md:space-x-20 md:space-y-0 items-center justify-center font-semibold text-2xl text-gray-600">

                <div className="flex flex-col space-y-3 items-center">

                    <h2 className="font-dancing">Bookmark Project</h2>

                    <a href="https://bookmark-project-lorisliusso.vercel.app/" target='_blank'>
                        <div className="h-50 w-50 flex items-center justify-center bg-gray-200 rounded-xl hover:scale-110 transition duration-75 ease-in cursor-pointer p-2">
                            <img className="h-40 bg-red-100 rounded-xl" src={Bookmark} alt="" />
                        </div>
                    </a>

                    <h2 className="font-extrabold text-lg">BASE</h2>

                </div>

                <div className="flex flex-col space-y-3 items-center" >

                    <h2 className="font-dancing">Github Project</h2>

                    <a href="https://github-project-lorisliusso.vercel.app/" target='_blank'>
                        <div className="flex items-center justify-center bg-gray-200 rounded-xl hover:scale-110 transition duration-75 ease-in cursor-pointer p-2 ">
                            <img className="h-40 bg-blue-100 rounded-xl" src={GithubFinder} alt="" />
                        </div>
                    </a>

                    <h2 className="font-extrabold text-lg">MEDIUM</h2>

                </div>

                <div className="flex flex-col space-y-3 items-center">

                    <h2 className="font-dancing">Realtor Project</h2>

                    <a href="https://realtor-project-lorisliusso.vercel.app/" target='_blank'>
                        <div className=" flex items-center justify-center bg-gray-200 rounded-xl hover:scale-110 transition duration-75 ease-in cursor-pointer p-2">
                            <img className="h-40 bg-green-100 rounded-xl" src={House} alt="" />
                        </div>
                    </a>

                    <h2 className="font-extrabold text-lg">ADVANCED</h2>

                </div>


            </div>


        </div>


    )
}

export default Projects