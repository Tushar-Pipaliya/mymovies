import React from 'react'
import featurebg from '../../../assets/featurebg.jpg'
import posterprice from '../../../assets/posterprice.jpg'
import { PiDownloadSimpleBold } from "react-icons/pi";

//add comments
function Feature() {
    return (

    <div className='flex items-center'>
        <div
            className="relative min-h-screen w-full bg-cover bg-[#100e17] opacity-[0.95] py-28  "
            style={{ backgroundImage: `url(${featurebg})` }}>

                <div className="md:w-1/2 flex jusify-center items-end">
                    {/* Render posterprice as an image */}
                    <img
                        src={posterprice}
                        alt="Poster Price"
                        className=" h-50"
                    />

                    <div class="bg-primary uppercase text-[12px] font-medium text-[#14141d] relative bottom- right- rotate-90 py-12 px-11 rounded-[6px] tracking-[5px] flex items-center  cursor-pointer">
                        Download<PiDownloadSimpleBold className='!rotate-[270deg] text-2xl'/>

                    </div>

                </div>

                {/* <div>
                    afioaj
                </div> */}
            </div>

        </div>

    )
}

export default Feature
