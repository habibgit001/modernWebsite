import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-[Gilroy] text-[4vw] leading-[4.5w] tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='w-full  flex gap-5 border-t-[1px] mt-20 pt-10 border-[#191d0c]'>
            <div className='w-1/2 '>
                <h1 className='text-7xl'>Our aproach</h1>
                <button className='px-10 py-6  bg-zinc-900 rounded-full text-white mt-10 flex items-center gap-10'>Read More
                <div className='w-2 h-2 font-bold bg-zinc-100 rounded-full '></div></button>

            </div>
            <div className='w-1/2 h-[60vh] bg-[#8c8e87] rounded-3xl'>
                <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
            </div>

        </div>
    </div>
  )
}

export default About