import React from 'react'

const About = () => {
  return (
    <div name ='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
                </div>
            <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hello! I'm Niranchan V M, delighted to make your acquaintance. Feel free to explore the surroundings.</p>
                </div>
                <div>
                    <p>I am driven by a profound passion for crafting exceptional software that enhances the lives of those in my community.
                         My expertise lies in developing tailored software solutions for a diverse clientele, 
                         spanning individuals and small businesses to expansive enterprise corporations.
                         Imagine having a dedicated software expert at your fingertips and consider how I could bring your digital aspirations to life?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About