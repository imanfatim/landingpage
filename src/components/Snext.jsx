import React from 'react'
import pic2 from '../assests/secpic.png'
import { Link } from 'react-router-dom';

const Snext = () => {
  return (
    <div className='flex flex-col items-center self-center px-5 w-full max-w-[1658px] max-md:max-w-full'>
       <div className="mt-32 w-full max-w-[1524px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={pic2}
              className="grow w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto font-semibold max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl leading-8 text-center text-neutral-800 max-md:max-w-full">
                Short And Informative Blogs
              </div>
              <div className="mt-9 ml-5 text-2xl font-bold text-black max-md:max-w-full">
                Discover stories, thinking, and expertise from writers on any
                topic.
              </div>
              <Link to={'/articles'}>
              <button className="flex flex-col ml-32 justify-center items-center self-center px-5 py-5 mt-12 text-lg tracking-wide leading-7 text-white bg-indigo-500 rounded-xl max-md:px-5 max-md:mt-10">
                Explore Projects
              </button>
              </Link>
            </div>
          </div>
        </div>
        </div>
      
    </div>
  )
}

export default Snext
