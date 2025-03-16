import React from "react";
import PixelButton from '../ui/pixelated-btn'



const HackathonKit = () => {
    return <div className="w-full h-[100vh] flex flex-col lg:flex-row  lg:justify-around">
            <div className="w-[100%] text-center  lg:w-[50vw] lg:text-left h-[100vh] flex justify-center items-center">
                <div className="w-[100%] lg:w-[90%] h-[45vw] ">
                    <h1 className="[text-shadow:_0_4.56px_4.56px_#A84038] leading-[150px] text-white header">HACKATHON<br></br> <span className="text-[var(--color-yellow)]">K</span><span className="text-[var(--color-blue)]">I</span><span className="text-[var(--color-green)]">T</span><img src="src/assets/IsoSparky-Head-BASE.png" className="sm:hidden lg:inline w-[3.5rem] sm:w-[5rem] md:w-[6rem] xl:w-[6.5rem] 2xl:w-[7rem]"></img></h1>
                    <img src="src/assets/Artboard 1 1.png" className="justify-self-center aspect-square w-[70vw] h-[70vw] self-center rounded-[20px] border-solid border-white border-[5px] lg:hidden sm:block"></img>
                    <p className="body1 text-white max-lg:w-[70%] max-lg:text-center max-lg:mx-[15%] max-lg:mt-[5%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <PixelButton color='#4285f4' classname='w-60 mt-[5%]'>Download Kit</PixelButton>
                </div>
            </div>
            <div className="w-[45vw] flex justify-center align-center height-[80vh] ">
                <div className="w-[100%] h-[100vh] flex justify-center align-center">
                    <img src="src/assets/Artboard 1 1.png" className="hidden lg:aspect-square w-[45vw] h-[45vw] self-center rounded-[20px] border-solid border-white border-[5px] lg:block "></img>
                </div>
            </div>
        </div>
}

export default HackathonKit;