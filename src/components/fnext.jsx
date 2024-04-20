import React from 'react'
import img from '../assests/nex.png'

const fnext = () => {
  return (
    <div className='flex flex-col items-center self-center px-5 w-full max-w-[1658px] max-md:max-w-full '>
     
       <div className="flex overflow-hidden relative flex-col justify-center items-center self-center px-16 py-20 mt-28 max-w-full text-white min-h-[436px] w-[1200px] max-md:px-5 max-md:mt-10">
       <img
        loading="lazy"
        src={img}
        className="object-cover absolute inset-0 size-full "
      />
      <div className="flex relative flex-col items-center mt-1 mb-3.5  max-w-full w-[905px] ">
        <div className="text-5xl font-semibold tracking-wider text-center leading-[67.95px] max-md:text-4xl">
          Blogs{" "}
        </div>
        <div className="mt-12 text-3xl leading-8 text-black text-justify max-md:mt-10 max-md:max-w-full">
          Our Best Blog Related to Technology
        </div>
        <div className="self-stretch mt-7 text-base leading-6  text-justify max-md:max-w-full">
          Our employees are our number one asset. Our goal is to recruit the
          best candidates in the industry and retain them for a long,
          progressive career. HBK is a fast-paced, team-centered environment
          with unlimited growth potential. Our long list of established
          clients provides employees with the opportunity to work on dynamic and
          challenging projects every day. We offer an exciting and
          gainful work environment encouraging professional, personal and
          organizational growth. Our team of multi-talented employees
          contributes to an entrepreneurial-minded atmosphere where ideas,
          creativity and solutions are cultivated.
        </div>
      </div>
    </div>
    </div>
  )
}

export default fnext
