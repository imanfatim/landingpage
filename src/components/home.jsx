import React from 'react'
import pic1 from '../assests/first1.png'
import { Link } from 'react-router-dom';

const home = () => {
  return (
    <div className="flex flex-col items-center self-center px-5 w-full max-w-[1658px] max-md:max-w-full">
    <div className="flex flex-col items-start self-stretch pt-2.5 pr-20 pb-6 pl-10 text-lg font-semibold text-black bg-white max-md:px-5 max-md:max-w-full">
    <div className="mt-20 ml-4 w-full max-w-[1432px] max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch my-auto font-semibold max-md:mt-10 max-md:max-w-full">
          <div className="text-9xl text-neutral-800 max-md:max-w-full max-md:text-4xl">
            <span className="text-6xl text-neutral-800">Stay Curious</span>
          </div>
          <div className="mt-7 text-2xl font-bold text-black max-md:max-w-full">
            Discover stories, thinking, and expertise from writers on any
            topic.
          </div>
          <Link to={'/about'}>
          <button className="justify-center self-start px-10 py-5 mt-7 text-lg tracking-wide leading-7 text-white bg-indigo-500 rounded-xl max-md:px-5">
            Explore Projects
          </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col ml-20 w-[64%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src={pic1}
          className="grow w-full aspect-[1.59] max-md:max-w-full"
        />
      </div>
    </div>
  </div>
  </div>
  
  </div>
  )
}

export default home
