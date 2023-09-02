import { Link } from "react-router-dom";
import EmailContact from "../icons/email-contact.svg"
import backArrow from "../icons/backarrow.svg"
import Send from "../icons/send.svg"
import { useNavigate } from "react-router-dom";


const Contact = () => {

    const navigate = useNavigate();

    return (

        <div className="min-h-screen flex flex-col bg-MainBlue p-8 container max-w-full items-center space-y-20">

            <div onClick={() => {
                navigate("/");
            }} className="flex space-x-3 items-baseline font-bold cursor-pointer">
                <img className="h-5" src={backArrow} alt="back-arrow" />
                <p className="text-white text-3xl">Back</p>
            </div>


            <form className="hidden md:flex md:text-xl lg:text-2xl mt-20" id='non-mobile-form'
                target="_blank"
                action="https://formsubmit.co/lorisliusso@gmail.com"
                method="POST"

            >

                <div className="flex flex-col space-y-5 p-8 bg-white rounded-l-xl ">

                    <div className="flex space-x-3 items-center mb-2">
                        <h2 className="text-3xl font-semibold">Get in Touch!</h2>
                        <img className="h-5" src={EmailContact} alt="" />
                    </div>

                    <div className="flex space-x-10 lg:text-2xl">

                        <input className="border-2 border-gray-400 p-2" type="text" name='name' placeholder='Name' required />
                        <input className="border-2 border-gray-400 p-2" type="email" name='email' placeholder='Email' required />

                    </div>

                    <input className="block border-2 border-gray-400 p-2" type="text" name='subject' placeholder='Subject' required />

                    <textarea className="p-2 border-2 border-gray-400" id="message" name="message" rows={8} placeholder="Your message..." required>

                    </textarea>

                    <div className="flex space-x-3 items-center">

                        <button className="bg-blue-300 rounded-xl font-bold px-4 py-2 w-fit 
                        cursor-pointer hover:bg-blue-400 shadow-sm" type="submit" >
                            SEND </button>
                        <img className="h-10" src={Send} alt="" />

                    </div>

                </div>


                <div className="flex flex-col bg-blue-300 space-y-10 p-8 rounded-r-xl">

                    <h2 className="opacity-0 text-xs">Contact</h2>

                </div>


            </form >


            <form className="flex md:hidden mt-20  w-full" id='mobile-form'
                target="_blank"
                action="https://formsubmit.co/lorisliusso@gmail.com"
                method="POST">

                <div className="flex flex-col space-y-5 p-8 bg-white rounded-2xl w-full mx-auto" >

                    <div className="flex space-x-3 items-center mb-2">
                        <h2 className="text-3xl font-semibold">Get in Touch!</h2>
                        <img className="h-5" src={EmailContact} alt="" />
                    </div>


                    <input className="border-2 border-gray-400 p-2" type="text" name='name' placeholder='Name' />
                    <input className="border-2 border-gray-400 p-2" type="email" name='email' placeholder='Email' />


                    <input className="block border-2 border-gray-400 p-2" type="text" name='subject' placeholder='Subject' />

                    <textarea className="p-2 border-2 border-gray-400" id="message" name="message" rows={8} placeholder="Your message..." required>

                    </textarea>

                    <div className="flex space-x-3 items-center">

                        <button className="bg-blue-300 rounded-xl font-bold px-4 py-2 w-fit 
                        cursor-pointer hover:bg-blue-400 shadow-sm" type="submit" >
                            SEND </button>
                        <img className="h-10" src={Send} alt="" />

                    </div>
                </div>


            </form >
        </div >

    )

}

export default Contact;