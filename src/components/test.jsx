import React from 'react'
import img1 from '../assests/john.png'
import img2 from '../assests/david.png'
import img3 from '../assests/sid.png'

const test = () => {
  return (
    <div className='flex flex-col items-center self-center px-5 w-full max-w-[1658px] max-md:max-w-full'>
       <div className="flex justify-center items-center px-16 py-20 mt-44 w-full bg-indigo-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center mt-3 mb-2.5 max-w-full w-[1204px]">
        <div className="text-5xl font-semibold tracking-wider text-center text-white leading-[67.95px] max-md:text-4xl">
          Testimonals
        </div>
        <div className="self-stretch px-0.5 mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow items-start pt-20 pr-20 pb-11 pl-4 aspect-[0.88] max-md:pr-5 max-md:mt-7">
                <img
                  loading="lazy"
                  src={img1}
                  className="object-cover absolute inset-0 size-full rounded-lg"
                />
                <div className="relative mt-60 text-3xl font-bold  leading-6 text-white max-md:mt-10">
                  Mr John
                </div>
                <div className="relative mt-2 text-xl text-white max-md:mt-10 ">
                  Best Blog Website for Reading Blogs
                </div>
               
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow items-start pt-20 pr-20 pb-11 pl-6 aspect-[0.88] max-md:px-5 max-md:mt-7">
                <img
                  loading="lazy"
                  src={img2}
                  className="object-cover absolute inset-0 size-full rounded-lg"
                />
                <div className="relative mt-60 text-3xl font-bold leading-6 text-white max-md:mt-10">
                  Mr David
                </div>
                <div className="relative mt-2 text-xl text-white max-md:mt-10">
                  Highly Recommended Blog Website
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow items-start pt-20 pr-20 pb-11 pl-6 aspect-[0.88] max-md:px-5 max-md:mt-7">
                <img
                  loading="lazy"
                  src={img3}
                  className="object-cover absolute inset-0 size-full rounded-lg"
                />
                <div className="relative mt-60 text-3xl font-bold leading-6 text-white max-md:mt-10">
                  Mr Salil
                </div>
                <div className="relative mt-2 text-xl text-white max-md:mt-10">
                  Best Website for technology Blogs
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center px-16 py-6 mt-16 text-lg font-semibold tracking-wide leading-7 text-indigo-500 bg-white rounded-xl max-md:pr-7 max-md:pl-6 max-md:mt-10">
          More News
        </div>
      </div>
    </div>
    </div>
  )
}

export default test
