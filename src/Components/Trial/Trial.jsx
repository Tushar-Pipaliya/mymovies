import React from 'react'
import trial from '../../assets/trial.jpg'


function Trial() {
    return (
        <div className=" bg-center bg-cover " style={{ backgroundImage: `url(${trial})` }}>
            <div className='m-auto px-4'>
                <div className='px-20 py-10 flex  items-center '>
                    <div className='w-full md:w-1/2'>
                        <div>
                            <h4 className="text-3xl font-bold  uppercase text-[#171d22] mb-0">Trial Start First 30 Days.</h4>
                            <p className='text-[#171d22] font-semibold leading-[2] '>Enter your email to create or restart your membership.</p>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <form className='flex justify-between items-center border-2 border-[#faf9f7] bg-white shadow-[0px_3px_4px_0px_rgba(30,30,30,0.17)] rounded'>
                            <input type="email" required placeholder='Enter your email' className="bg-white p-4  focus:outline-none"
                            />
                            <button type='submit' className="font-bold uppercase rounded-[4px] bg-[#171d22] border-[#171d22] text-[#e4d804] text-[14px] p-[15px] px-[44px]"
                            >get started</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trial
