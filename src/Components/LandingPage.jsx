import React from 'react'
import {FaArrowUpLong} from "react-icons/fa6"

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div  className='textstructure mt-52 px-20'>
          {["We Create","Eye Opening","Presentations"].map((item,index)=>{
            return (
            <div key={index} className='masker  '>
              <div className='w-fit flex items-end  '>
                {index === 1 && (<div className='mr-[1vw] w-[8vw] h-[5.7vw] relative  bg-red-500  rounded-md'></div>)}
                  <h1 className='Uppercase pt-[2vw] -mb-[1vw] text-[9vw] font-[Gilroy] leading-[.75] '>{item}</h1>
                </div>
              </div>);
              })}

            </div><div className='border-t-[1px] border-zinc-800 mt-20 flex items-center justify-between py-5 px-20'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => <p key={index} className='text-md font-light tracking-tight leading-none '>{item}</p>)}
                <div className='start flex items-center gap-5'>
                  <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase'>Start project
                    <div className='w-3 h-3 rounded-full border-[1px] border-zinc-400 flex items-center justify-center'>
                      <span className='rotate-[45deg]'>
                        <FaArrowUpLong />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
    </div>
    
  )
}

export default LandingPage