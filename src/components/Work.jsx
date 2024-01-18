import React from 'react'
import Spotfyimg from '../assets/image.jpg'
import Netfliximg from '../assets/netflix.jpg'
import Chatbotimg from '../assets/chatbot.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600' >Work</p>
                <p className='py-6'>Please take a look at my listed project works</p>
            </div>
            {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid View */}
                <div style={{backgroundImage:`url(${Spotfyimg})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                   {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white  tracking-wider'>
                            Spotify Clone Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://spotify-clone-ndt.vercel.app//' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo</button>
                            </a>
                            <a href='https://github.com/NiranchanVM/Spotify_clone' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${Netfliximg})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                   {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white  tracking-wider'>
                        Netflix Clone Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://netflix-clone-ndt.vercel.app/' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/NiranchanVM/Netflix_clone' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${Chatbotimg})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                   {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white  tracking-wider'>
                            ChatBot Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://hanashi-ndt.vercel.app//' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/NiranchanVM/chat_bot' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work