import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import MongoDB from '../assets/mongo.png';
import java from '../assets/java.png';
import sql from '../assets/sql.png';
import Python from '../assets/python.png';
import php from '../assets/php.png';
import c from '../assets/c.png';


const Skills = () => {
  return (
    <div name='skills'className=' w-full h-screen bg-[#0a192f] text-gray-300' >
          {/* COntainer*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-300'>Skills</p>
                <p className='py-4'>These are the technologys I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="css icon" />
                    <p className='my-4'>CSS</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="js icon" />
                    <p className='my-4'>JavaScript</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt= "React icon" />
                    <p className='my-4'>React</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={java} alt="Node icon" />
                    <p className='my-4'>Java</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                    <p className='my-4'>GitHub</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p className='my-4'>Tailwind</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MongoDB} alt="MOngoose icon" />
                    <p className='my-4'>MongoDB</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={sql} alt="SQL icon" />
                    <p className='my-4'>SQL</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt="python icon" />
                    <p className='my-4'>Python</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={php} alt="php icon" />
                    <p className='my-4'>Php</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={c} alt="C icon" />
                    <p className='my-4'>C</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills