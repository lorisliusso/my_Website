import LinkedinLogo from "../icons/linkedin.png"
import Codecademy from "../icons/codecademy.svg"
import Youtube2 from "../icons/youtube2.svg"
import Algoexpert from "../icons/algoexpert.png"
import Politecnico from "../icons/politecnico.jpg"
import Lewagon from "../icons/lewagon.png"
import Generali from "../icons/generali.png"
import HotelSoraya from "../icons/hotelsoraya.png"
import Uniud from "../icons/uniud.png"




const JobEducation = () => {


    return (

        <div className=" bg-white p-8 w-11/12 mx-auto pt-20">

            <div className="bg-gray-100 flex flex-col items-center p-4 
        rounded-xl mx-auto space-y-7 ">

                <h1 className="text-2xl font-bold">Job Experience & Education</h1>

                <div className="w-10 h-10 self-end cursor-pointer shadow-md hover:-rotate-12 transition duration-75 ease-in ">
                    <a href="https://www.linkedin.com/in/loris-liusso-3b7244194/" target="_blank">
                        <img src={LinkedinLogo} alt="linkedin" />
                    </a>
                </div>

                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-12 ">

                    <li>

                        <div className="flex space-x-5">

                            <img className="w-10 h-10" src={Codecademy} alt="codecademy-logo" />

                            <div className="flex flex-col space-y-5">
                                <h2 className="font-bold">Front-End Developer (Course)</h2>
                                <p className="underline">Codecademy</p>
                                <p>ag 2022 - oct 2022</p>
                                <p>Frontend engineer specialization course.</p>

                                <p> Topics covered:

                                    HTML, CSS
                                    JAVASCRIPT / TYPESCRIPT
                                    REACT JS
                                    GIT GITHUB
                                </p>
                            </div>

                        </div>

                    </li>



                    <li>

                        <div className="flex space-x-5 ">

                            <img className="h-10" src={Youtube2} alt="codecademy-logo" />

                            <div className="flex flex-col space-y-5">
                                <h2 className="font-bold">Web-Ai Content Creator</h2>
                                <p className="underline">Youtube</p>
                                <p>mar 2020 - Presente</p>
                                <p>Since 2020 I have created a Youtube channel
                                    where I teach topics related to Web Development and Artificial Intelligence.
                                </p>
                            </div>

                        </div>

                    </li>


                    <li>

                        <div className="flex space-x-5">

                            <img className="h-10" src={Algoexpert} alt="codecademy-logo" />

                            <div className="flex flex-col space-y-5">
                                <h2 className="font-bold">Front-End Developer (Course)</h2>
                                <p className="underline">AlgoExpert</p>
                                <p>lug 2022 - sept 2022</p>
                                <p>Frontend engineer course taught by Conner Ardman (Ex-Facebook Software Engineer).</p>

                                <p> Topics covered:

                                    -HTML, CSS
                                    -JAVASCRIPT / TYPESCRIPT
                                    -REACT JS
                                </p>
                            </div>

                        </div>

                    </li>

                    <li>

                        <div className="flex space-x-5">

                            <img className="h-10" src={Politecnico} alt="codecademy-logo" />

                            <div className="flex flex-col space-y-5">
                                <h2 className="font-bold">Data Scientist</h2>
                                <p className="underline">Politecnico Di Milano</p>
                                <p>mar 2022 - jul 2022</p>
                                <p>Specialization course in Ai with prevalent use of Microsoft Azure services, graduated in July.

                                    Topics covered:

                                    Data Analysis & Machine Learning with Microsoft Azure Platform and Python.

                                    Ethics and Laws of AI.
                                </p>
                            </div>

                        </div>

                    </li>



                    <li>

                        <div className="flex space-x-5">

                            <img className="h-10" src={Lewagon} alt="codecademy-logo" />

                            <div className="flex flex-col space-y-5">
                                <h2 className="font-bold">Data Scientist</h2>
                                <p className="underline">Le Wagon</p>
                                <p>sept 2021 - mar 2021</p>
                                <p>Data science Bootcamp in Berlin, graduated in March.

                                    Topics covered:

                                    Data Analysis
                                    Machine Learning
                                    Deep Learning

                                    [Python, SQL, Statistics, Calculus, Linear Algebra, Pandas, Numpy, Matplotlib, Seaborn, Plotly, Scipy, Sklearn, Tensorflow, Google Cloud Platform, Docker, Fast-api.
                                </p>
                            </div>

                        </div>

                    </li>



                    <li>

                        <div className="flex space-x-5">

                            <img className="h-10" src={HotelSoraya} alt="codecademy-logo" />

                            <div className="flex flex-col space-y-5">
                                <h2 className="font-bold">Hotel Manager</h2>
                                <p className="underline">Hotel Soraya</p>
                                <p>may 2017 - sept 2021</p>
                                <p>Hotel Management in Lignano.
                                </p>
                            </div>

                        </div>

                    </li>

                    <li>

                        <div className="flex space-x-5">

                            <img className="h-10" src={Uniud} alt="codecademy-logo" />

                            <div className="flex flex-col space-y-5">
                                <h2 className="font-bold">Internet of Things, Big data & Web</h2>
                                <p className="underline">Università Degli Studi Di Udine</p>
                                <p>oct 2019 - Presente</p>
                                <p>Bachelor Degree Course.
                                </p>
                            </div>

                        </div>

                    </li>

                    <li>

                        <div className="flex space-x-5">

                            <img className="h-10" src={Generali} alt="codecademy-logo" />

                            <div className="flex flex-col space-y-5">
                                <h2 className="font-bold">Marketing Direction & Financial Consulting</h2>
                                <p className="underline">Generali</p>
                                <p>sept 2015 - mar 2017</p>
                                <p>Started as a financial consultant and then moved on to work in the marketing department.
                                </p>
                            </div>

                        </div>

                    </li>



                </ul>







            </div>


        </div>
    )





}


export default JobEducation;