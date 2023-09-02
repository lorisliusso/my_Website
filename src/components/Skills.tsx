import htmlLogo from "../icons/html-logo.svg"
import tailwindLogo from "../icons/tailwind-logo-3.svg"
import typescriptLogo from "../icons/typescript-logo.svg"
import reactLogo from "../icons/react-logo.svg"
import djangoLogo from "../icons/django-logo.svg"
import graphqlLogo from "../icons/graphql-logo.svg"
import gitLogo from "../icons/git-logo.svg"
import githubLogo from "../icons/github-logo.svg"
import pythonLogo from "../icons/python-logo.svg"
import numpyLogo from "../icons/numpy-logo.svg"
import sqlLogo from "../icons/sql-logo.svg"
import tensorflowLogo from "../icons/tensorflow-logo.svg"
import pandasLogo from "../icons/pandas-logo.png"
import matplotlibLogo from "../icons/matplotlib-logo.svg.png"
import scipyLogo from "../icons/scipy-logo.svg.png"
import sklearnLogo from "../icons/sklearn-logo.svg.png"
import seabornLogo from "../icons/seaborn-logo.svg"
import sassLogo from "../icons/sass-logo.png"


const Skills = () => {


    return (

        <div className="bg-white flex flex-col px-8 w-11/12 mx-auto items-center space-y-5">

            <h1 className="text-2xl font-semibold ">Skills</h1>

            <div className="flex flex-col space-y-4 items-center rounded-xl bg-gray-100 w-full p-2">


                <div className="flex flex-col space-y-2 w-full">

                    <h1 className="font-semibold text-xl mb-1">Web Development</h1>
                    <ul className="w-full bg-gray-100 grid grid-cols-2 md:grid-cols-3 rounded-xl ">

                        <li className="border-2 border-gray-300 rounded-xl flex space-x-2 h-fit px-1 py-2 items-center justify-center">
                            <p className="font-bold">HTML</p>
                            <img className="h-10" src={htmlLogo} alt="" />
                        </li>

                        <li className="border-2 border-gray-300 rounded-xl flex space-x-2 h-fit px-1 py-2  items-center justify-center">
                            <p className="font-bold">SASS</p>
                            <img className="h-10" src={sassLogo} alt="" />
                        </li>

                        <li className="border-2 border-gray-300 rounded-xl flex space-x-2 h-fit px-1 py-2  items-center justify-center">
                            <p className="font-bold">TAILWIND CSS</p>
                            <img className="h-10" src={tailwindLogo} alt="" />
                        </li>

                        <li className="border-2 border-gray-300 rounded-xl flex space-x-2 h-fit px-1 py-2  items-center justify-center">
                            <p className="font-bold">TYPESCRIPT</p>
                            <img className="h-10" src={typescriptLogo} alt="" />
                        </li>

                        <li className="border-2 border-gray-300 rounded-xl flex space-x-2 h-fit px-1 py-2  items-center justify-center">
                            <p className="font-bold">REACT JS</p>
                            <img className="h-11" src={reactLogo} alt="" />
                        </li>

                        <li className="border-2 border-gray-300 rounded-xl flex space-x-2 h-fit px-1 py-2  items-center justify-center">
                            <p className="font-bold">GRAPHQL</p>
                            <img className="h-11" src={graphqlLogo} alt="" />
                        </li>

                        <li className="border-2 border-gray-300 rounded-xl flex space-x-2 h-fit px-1 py-2  items-center justify-center">
                            <p className="font-bold">DJANGO</p>
                            <img className="h-11" src={djangoLogo} alt="" />
                        </li>

                        <li className="border-2 border-gray-300 rounded-xl flex space-x-2 h-fit items-center justify-center">
                            <p className="font-bold">GIT</p>
                            <img className="h-14" src={gitLogo} alt="" />
                        </li>

                        <li className="border-2 border-gray-300 h-fit rounded-xl flex space-x-2 items-center justify-center">
                            <p className="font-bold">GITHUB</p>
                            <img className="h-14 p-2" src={githubLogo} alt="" />
                        </li>

                    </ul>

                </div>



                <div className="flex flex-col space-y-2 w-full">

                    <h1 className="font-semibold text-xl">Data Science</h1>
                    <ul className="w-full bg-gray-100 grid grid-cols-2 md:grid-cols-3 rounded-xl ">

                        <li className="border-2 border-gray-300 rounded-xl flex space-x-2 h-fit px-1 py-2 items-center justify-center">
                            <p className="font-bold">PYTHON</p>
                            <img className="h-10" src={pythonLogo} alt="" />
                        </li>

                        <li className="border-2 border-gray-300 rounded-xl flex space-x-2 h-fit px-1 py-2  items-center justify-center">
                            <p className="font-bold">NUMPY</p>
                            <img className="h-11" src={numpyLogo} alt="" />
                        </li>

                        <li className="border-2 border-gray-300 rounded-xl flex space-x-2 h-fit px-1 py-2  items-center justify-center">
                            <p className="font-bold">PANDAS</p>
                            <img className="h-10" src={pandasLogo} alt="" />
                        </li>

                        <li className="border-2 border-gray-300 rounded-xl flex space-x-2 h-fit px-1 py-2  items-center justify-center">
                            <p className="font-bold">MATPLOTLIB</p>
                            <img className="h-10" src={matplotlibLogo} alt="" />
                        </li>

                        <li className="border-2 border-gray-300 rounded-xl flex space-x-2 h-fit px-1 py-2  items-center justify-center">
                            <p className="font-bold">SEABORN</p>
                            <img className="h-10" src={seabornLogo} alt="" />
                        </li>

                        <li className="border-2 border-gray-300 rounded-xl flex space-x-2 h-fit px-1 py-2  items-center justify-center">
                            <p className="font-bold">SCIPY</p>
                            <img className="h-11" src={scipyLogo} alt="" />
                        </li>

                        <li className="border-2 border-gray-300 rounded-xl flex space-x-2 h-fit px-1 py-2  items-center justify-center">
                            <p className="font-bold">SKLEARN</p>
                            <img className="h-10" src={sklearnLogo} alt="" />
                        </li>

                        <li className="border-2 border-gray-300 rounded-xl flex space-x-2 h-fit px-1 py-2  items-center justify-center">
                            <p className="font-bold">TENSORFLOW</p>
                            <img className="h-10" src={tensorflowLogo} alt="" />
                        </li>

                        <li className="border-2 border-gray-300 rounded-xl flex space-x-2 h-fit px-1 py-2  items-center justify-center">
                            <p className="font-bold">SQL</p>
                            <img className="h-10" src={sqlLogo} alt="" />
                        </li>

                    </ul>

                </div>


            </div>


        </div >
    )

}


export default Skills;