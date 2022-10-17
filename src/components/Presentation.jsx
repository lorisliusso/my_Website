import Me from '../icons/me.jpg'


const Presentation = () => {



    return (

        <div className="bg-MainBlue flex flex-col space-y-10 items-center justify-center 
        md:flex-row md:items-center md:space-y-0
        p-8  mx-auto text-white w-11/12 rounded-t-xl">

            <div className="flex flex-col space-y-3 ">

                <h1 className='text-3xl font-bold w-2/3'>
                    <span className='text-5xl block mb-5 w-fit font-dancing'>CIAO!</span >I’m Loris Liusso,
                    <span className='bg-blue-600 ml-1'>a
                        Front End Web developer.</span></h1>

                <div className='w-fit'>
                    <p className='text-xl font-semibold'>	ReactJS Developer & TailwindCSS Lover</p>
                    <hr className=' bg-white' />
                </div>

            </div>


            <div className='w-40 md:w-60 '>

                <img className='rounded-full' src={Me} alt="my_profile" />



            </div>




        </div>







    )
}



export default Presentation;