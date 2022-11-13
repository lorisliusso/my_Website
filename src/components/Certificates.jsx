import Codecademy from "../icons/codecademy.svg"
import Algoexpert from "../icons/algoexpert.png"
import Politecnico from "../icons/politecnico.jpg"
import Lewagon from "../icons/lewagon.png"
import UniCalifornia from "../icons/unicalifornia.png"
import UniDuke from "../icons/uniduke.png"
import UniStanford from "../icons/unistanford.png"


const Certificates = () => {

    return (

        <div className="flex flex-col space-y-5 bg-white px-8 pt-8 pb-2 w-11/12 mx-auto">

            <h1 className="text-2xl self-center font-semibold ">Certificates</h1>

            <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-8 p-4
             bg-gray-100 rounded-xl justify-center items-start ">


                <li >

                    <div className="flex space-x-3">

                        <img className="h-6" src={Codecademy} alt="img" />

                        <div className="flex flex-col space-y-5">
                            <h2 className="font-semibold">Frontend
                                Engineer</h2>
                            <p className="underline">Codecademy</p>
                            <a className="text-white text-base bg-MainBlue w-fit px-1 rounded-sm" href="https://www.codecademy.com/profiles/system8820282091/certificates/5f85dd867b67b60014ac9ea3" target="_blank">Link</a>
                        </div>

                    </div>

                </li>


                <li>

                    <div className="flex space-x-3">

                        <img className="h-6" src={Algoexpert} alt="img" />

                        <div className="flex flex-col space-y-5">
                            <h2 className="font-semibold">FrontendExpert</h2>
                            <p className="underline">AlgoExpert</p>
                            <a className="text-white text-base bg-MainBlue w-fit px-1 rounded-sm" href="https://certificate.algoexpert.io/FE-b3c5f9de68" target="_blank">Link</a>
                        </div>

                    </div>

                </li>


                <li>

                    <div className="flex space-x-3">

                        <img className="h-6" src={Politecnico} alt="img" />

                        <div className="flex flex-col space-y-5">
                            <h2 className="font-semibold">AI FOR PROFESSIONALS/ PRACTICIONER</h2>
                            <p className="underline">Politecnico di Milano</p>
                            <a className="text-white text-base bg-MainBlue w-fit px-1 rounded-sm" href="https://openbadges.bestr.it/public/assertions/6ccqCAV9RRGVbdeRREvJNg" target="_blank">Link</a>
                        </div>

                    </div>

                </li>





                <li >

                    <div className="flex space-x-3">

                        <img className="h-6" src={Algoexpert} alt="img" />

                        <div className="flex flex-col space-y-5">
                            <h2 className="font-semibold">Programming
                                Expert
                                (Python)</h2>
                            <p className="underline">AlgoExpert</p>
                            <a className="text-white text-base bg-MainBlue w-fit px-1 rounded-sm" href="https://certificate.algoexpert.io/PE-d334de89f8" target="_blank">Link</a>
                        </div>

                    </div>

                </li>


                <li>

                    <div className="flex space-x-3">

                        <img className="h-6" src={Politecnico} alt="img" />

                        <div className="flex flex-col space-y-5">
                            <h2 className="font-semibold">AI FOR PROFESSIONALS/ FOUNDATION</h2>
                            <p className="underline">Politecnico di Milano</p>
                            <a className="text-white text-base bg-MainBlue w-fit px-1 rounded-sm" href="https://bestr.it/award/show/QgTSwfU7SESUZaBgXfvb0A" target="_blank">Link</a>
                        </div>

                    </div>

                </li>


                <li>

                    <div className="flex space-x-3">

                        <img className="h-6" src={UniDuke} alt="img" />

                        <div className="flex flex-col space-y-5">
                            <h2 className="font-semibold">Business Metrics for Data Driven Companies</h2>
                            <p className="underline">Duke University</p>
                            <a className="text-white text-base bg-MainBlue w-fit px-1 rounded-sm" href="https://www.coursera.org/account/accomplishments/certificate/7WM2E9KZ4CDQ" target="_blank">Link</a>
                        </div>

                    </div>

                </li>


                <li>

                    <div className="flex space-x-3">

                        <img className="h-6" src={UniCalifornia} alt="img" />

                        <div className="flex flex-col space-y-5">
                            <h2 className="font-semibold">SQL for Data Science</h2>
                            <p className="underline">University of California</p>
                            <a className="text-white text-base bg-MainBlue w-fit px-1 rounded-sm" href="https://www.coursera.org/account/accomplishments/certificate/AV62S6EMCMJP" target="_blank">Link</a>
                        </div>

                    </div>

                </li>


                <li>

                    <div className="flex space-x-3">

                        <img className="h-6" src={UniStanford} alt="img" />

                        <div className="flex flex-col space-y-5">
                            <h2 className="font-semibold">Statistics & Probability </h2>
                            <p className="underline">Stanford University</p>
                            <a className="text-white text-base bg-MainBlue w-fit px-1 rounded-sm" href="https://www.coursera.org/account/accomplishments/certificate/GEN8LAEKLDQ8" target="_blank">Link</a>
                        </div>

                    </div>

                </li>


                <li>

                    <div className="flex space-x-3">

                        <img className="h-6" src={Lewagon} alt="img" />

                        <div className="flex flex-col space-y-5">
                            <h2 className="font-semibold">Data Scientist</h2>
                            <p className="underline">Le Wagon</p>
                            <a className="text-white text-base bg-MainBlue w-fit px-1 rounded-sm" href="" target="_blank">Link</a>
                        </div>

                    </div>

                </li>

            </ul>


        </div>
    )

}


export default Certificates;