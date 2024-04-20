import React from 'react'

const footer = () => {
  return (
    <div className="flex flex-col items-center px-16 pt-20 pb-6 w-full bg-neutral-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col mt-6 max-w-full w-[1212px]">
        <div className="flex gap-5 justify-between items-end text-violet-50 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="flex flex-col self-stretch font-bold text-white max-md:max-w-full">
            <div className="text-5xl leading-[49px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Our application is beyond <br />
              the wave
            </div>
            <div className="mt-6 text-sm font-semibold tracking-normal leading-6 text-zinc-300 max-md:max-w-full">
              Designed to make it easy for developers using a complex API <br />
              allows you to build innovative solutions{" "}
            </div>
            <div className="mt-16 text-xl font-extrabold tracking-wider leading-8 max-md:mt-10 max-md:max-w-full">
              BLOG DEV
            </div>
            <div className="mt-10 text-xs leading-4 max-md:max-w-full">
              Comply with Zatca's e-invoicing mandate for transparent <br />
              operations. Following government rules and laws <br />
              (compliance) is crucial. It ensures smooth business <br />
              practices, avoiding tax-related troubles. Stay compliant <br />
              with us!
            </div>
          </div>
          <div className="flex flex-col my-auto mt-32 text-xs leading-3 max-md:mt-10">
            <div className="text-xs font-extrabold leading-5 text-white">
              Complyance.io
            </div>
            <div className="mt-5">Home</div>
            <div className="mt-5">Product</div>
            <div className="mt-5">What's New</div>
            <div className="mt-6">Pricing</div>
            <div className="mt-5">Business</div>
            <div className="mt-6">Enterprise</div>
            <div className="mt-5">Customer Success</div>
          </div>
          <div className="flex flex-col my-auto mt-32 text-xs leading-3 text-white max-md:mt-10">
            <div className="text-xs font-extrabold leading-5">About</div>
            <div className="mt-5">Company</div>
            <div className="mt-5 text-violet-50">Customers</div>
            <div className="mt-5 text-violet-50">Careers</div>
            <div className="mt-6">Press</div>
            <div className="mt-5">Blog</div>
            <div className="mt-5 text-violet-50">Sitemap</div>
            <div className="mt-5 text-violet-50">Pricing FAQ</div>
          </div>
          <div className="flex flex-col my-auto mt-32 text-xs leading-3 max-md:mt-10">
            <div className="text-xs font-extrabold leading-5 text-white">
              Resourse
            </div>
            <div className="mt-5">Help Center</div>
            <div className="mt-5">Forum</div>
            <div className="mt-5">Support</div>
            <div className="mt-5">Developers & API</div>
            <div className="mt-5">Partners</div>
            <div className="mt-6">Events</div>
          </div>
          <div className="flex flex-col my-auto mt-32 text-xs leading-3 max-md:mt-10">
            <div className="text-xs font-extrabold leading-5 text-white">
              Learn
            </div>
            <div className="mt-5">ZATCA E-Invoicing</div>
            <div className="mt-5">ERP Integration</div>
            <div className="mt-5">ERP Implementation</div>
            <div className="mt-5">ERP Customisation</div>
            <div className="mt-5 ">
              QR Code <br />
              Generation
            </div>
          </div>
          <div className="flex flex-col mt-32 mr-40 my-auto text-xs leading-3 max-md:mt-10">
            <div className="text-xs font-extrabold leading-5 text-white">
              Workflow
              <br />
              Solutions
            </div>
            <div className="mt-5">Phase-1</div>
            <div className="mt-5">Phase-2</div>
            <div className="mt-5">Booklet</div>
          </div>
        </div>
       
       <hr className='m-10'></hr>
        <div className="flex gap-5 self-end mt-5 max-w-full text-xs font-semibold leading-3 w-[1034px] max-md:flex-wrap">
          <div className="flex gap-5 self-start mt-1 text-violet-50">
            <div>Privacy policy</div>
            <div className="flex-auto">Terms and conditions</div>
            <div>Support</div>
          </div>
          <div className="flex-auto text-white">
            Copyright 2023 @ compylance.io
          </div>
        </div>
      </div>
    </div>

   
  )
}

export default footer
