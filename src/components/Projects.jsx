

const Projects = () => {



    return (

        <div className="bg-white flex flex-col space-y-16 justify-center items-center px-4 pt-6 w-11/12 mx-auto">

            <h2 className="text-2xl font-semibold">My Latest Projects:</h2>

            <div className="flex flex-col space-y-10 md:flex-row
             md:space-x-20 md:space-y-0 items-center justify-center">

                <div className="w-40 h-40 bg-gray-300 rounded-xl hover:scale-110 transition duration-75 ease-in cursor-pointer "></div>
                <div className="w-40 h-40 bg-gray-300 rounded-xl hover:scale-110 transition duration-75 ease-in cursor-pointer"></div>
                <div className="w-40 h-40 bg-gray-300 rounded-xl hover:scale-110 transition duration-75 ease-in cursor-pointer"></div>

            </div>


        </div>


    )
}

export default Projects