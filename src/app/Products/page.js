"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  const scrollToSchools = () => {
    0
    document.getElementById('drop').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <section className="flex justify-center items-center h-[597px] overflow-hidden relative z-30" style={{
        background: "radial-gradient(circle, #57A8D1 0%, #2980B9 100%)"
      }}>
        <div className="text-white w-11/12 lg:w-3/6 text-center flex flex-col justify-center items-center gap-5">
          <h1 className="text-6xl font-light">Our Products</h1>
          <p className="leading-6 md:leading-7 md:text-xl text-lg">Pharmapedia Private Limited is a company specializing in mobile application development. Our focus lies primarily in the education sector, with an emphasis on medical education and STEM (Science, Technology, Engineering, and Mathematics) education.</p>
        </div>
        <Image src="/DownBtn.svg" alt="Scroll down button" width={40} height={40} className='absolute bottom-10 cursor-pointer z-50' onClick={scrollToSchools} />

        <div className="md:w-60 md:h-60 w-40 h-40 border-1 rounded-full border-white opacity-25 absolute md:-bottom-20 md:-left-44 -bottom-10 -left-20 z-10" aria-hidden="true"></div>
        <div className="md:w-[350px] md:h-[350px] w-[320px] h-[320px] border-1 rounded-full border-white opacity-25 absolute md:-bottom-24 md:-left-48 -bottom-24 -left-44 z-10"></div>
        <div className="md:w-[493px] md:h-[493px] w-[463px] h-[463px] border-1 rounded-full border-white opacity-25 absolute -bottom-28 -left-56 z-10"></div>
        <div className="md:w-[606px] md:h-[606px] w-[573px] h-[573px] border-1 rounded-full border-white opacity-25 absolute -bottom-32 -left-60 z-10"></div>

        <div className="md:w-80 md:h-80 border-1 rounded-full border-white opacity-25 absolute -top-40 right-10 z-10 hidden md:block"></div>
        <div className="md:w-[452px] md:h-[452px] border-1 rounded-full border-white opacity-25 absolute -top-48 -right-12 z-10 hidden md:block"></div>
        <div className="md:w-[637px] md:h-[637px] border-1 rounded-full border-white opacity-25 absolute -top-60 -right-36 z-10 hidden lg:block"></div>
        <div className="md:w-[783px] md:h-[783px] border-1 rounded-full border-white opacity-25 absolute -top-64 -right-56 z-10 hidden lg:block"></div>
      </section>

      <section className="relative">
        <Image
          src="/Group1.svg"
          alt=""
          width={2947.91}
          height={1989.84}
          className="absolute bottom-32 z-10"
        />
        <div className='w-11/12 ms-auto my-10 md:my-28 flex flex-col-reverse md:flex-row items-center justify-center' id='drop'>
          <div className="flex items-start justify-end md:justify-center flex-col w-full md:w-1/2 h-[409px] md:h-[659px]">
            <div className="w-11/12 md:w-10/12 z-20">
              <h2 className="uppercase font-light text-3xl sm:text-4xl md:text-5xl text-heading_blue lg:tracking-wider">Pharmapedia</h2>
              <p className="text-sm md:text-xl text-t_grey mt-2 text-justify">Pharmapedia Private Limited is a company specializing in mobile application development. Our focus lies primarily in the education sector, with an emphasis on medical education and STEM (Science, Technology, Engineering, and Mathematics) education.</p>
              <Link href='Products/Pharmapedia'>
                <button className="button-filled mt-3">
                  Explore More
                </button>
              </Link>
            </div>
          </div>

          <div className="right w-full md:w-1/2 relative h-[659px]" style={{ backgroundImage: "url('/Rectangle1332.svg')", backgroundRepeat: "no-repeat" }}>
            <Image
              src="/productImg1.svg"
              alt="productImg1"
              width={365}
              height={751}
              className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20"
            />
            <Image src="/Ellipse 40.svg" alt="" width={186} height={186} className='absolute bottom-0 -left-10' />
            <Image src="/Ellipse 41.svg" alt="" width={100} height={100} className='absolute -bottom-60 right-0 z-20' />
          </div>
        </div>

        <div className='w-full md:w-11/12 md:me-auto my-10 md:my-36 flex flex-col md:flex-row items-center justify-center' id='drop'>
          <div className="w-full md:w-[52.8%] relative h-[659px]" style={{ backgroundImage: "url('/Rectangle1333.svg')", backgroundRepeat: "no-repeat" }}>
            <Image
              src="/productImg2.svg"
              alt=""
              width={365}
              height={751}
              className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20"
            />
            <Image src="/Ellipse 40.svg" alt="" width={186} height={186} className='absolute top-14 md:top-24 right-0 md:-right-20 z-20 hidden sm:inline-block' />
            <Image src="/Ellipse 41.svg" alt="" width={100} height={100} className='absolute -bottom-20 left-36' />
          </div>

          <div className="flex items-end justify-end md:justify-center flex-col w-full md:w-[47.2%] h-[409px] md:h-[659px]">
            <div className="w-11/12 md:w-10/12 z-20">
              <h2 className="uppercase font-light text-3xl sm:text-4xl md:text-5xl text-heading_blue tracking-wider">Pog calculator</h2>
              <p className="text-sm md:text-xl text-t_grey mt-2 ">Pharmapedia Private Limited is a company specializing in mobile application development. Our focus lies primarily in the education sector, with an emphasis on medical education and STEM (Science, Technology, Engineering, and Mathematics) education.</p>
              <Link href='Products/PogCalculator'>
                <button className="button-filled mt-3">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className='w-11/12 ms-auto my-10 md:my-36 flex flex-col-reverse md:flex-row items-center justify-center' id='drop'>
          <div className="flex items-start justify-end md:justify-center flex-col w-full md:w-1/2 h-[409px] md:h-[659px]">
            <div className="w-11/12 md:w-10/12 z-20">
              <h2 className="uppercase font-light text-3xl sm:text-4xl md:text-5xl text-heading_blue tracking-wider">Gynae Guide</h2>
              <p className="text-sm md:text-xl text-t_grey mt-2 ">Pharmapedia Private Limited is a company specializing in mobile application development. Our focus lies primarily in the education sector, with an emphasis on medical education and STEM (Science, Technology, Engineering, and Mathematics) education.</p>
              <button className="button-filled mt-3">
                Explore More
              </button>
            </div>
          </div>
          <div className="right w-full md:w-1/2 relative h-[659px]" style={{ backgroundImage: "url('/Rectangle1332.svg')", backgroundRepeat: "no-repeat" }}>
            <Image
              src="/productImg3.svg"
              alt=""
              width={365}
              height={751}
              className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20"
            />
            <Image src="/Ellipse 40.svg" alt="" width={186} height={186} className='absolute bottom-0 -left-10' />
            <Image src="/Ellipse 41.svg" alt="" width={100} height={100} className='absolute -bottom-60 right-0 z-20' />
          </div>
        </div>

        <div className='w-full md:w-11/12 md:me-auto my-10 md:my-36 flex flex-col md:flex-row items-center justify-center' id='drop'>
          <div className="w-full md:w-[52.8%] relative h-[659px]" style={{ backgroundImage: "url('/Rectangle1333.svg')", backgroundRepeat: "no-repeat" }}>
            <Image
              src="/productImg4.svg"
              alt=""
              width={365}
              height={751}
              className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20"
            />
            <Image src="/Ellipse 40.svg" alt="" width={186} height={186} className='absolute top-14 md:top-24 right-0 md:-right-20 z-20 hidden sm:inline-block' />
            <Image src="/Ellipse 41.svg" alt="" width={100} height={100} className='absolute -bottom-20 left-36' />
          </div>

          <div className="flex items-end justify-end md:justify-center flex-col w-full md:w-[47.2%] h-[409px] md:h-[659px] bg-red-40">
            <div className="w-11/12 md:w-10/12 z-20">
              <h2 className="uppercase font-light text-3xl sm:text-4xl md:text-5xl text-heading_blue tracking-wider">Fourth Product</h2>
              <p className="text-sm md:text-xl text-t_grey mt-2">Pharmapedia Private Limited is a company specializing in mobile application development. Our focus lies primarily in the education sector, with an emphasis on medical education and STEM (Science, Technology, Engineering, and Mathematics) education.</p>
              <button className="button-filled mt-3">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="m-auto overflow-hidden relative" id='contact' >
        <div className="w-10/12 m-auto flex flex-col-reverse md:flex-row items-center justify-center gap-20 relative py-28">
          <div className="left w-full md:w-1/2 relative z-30">
            <form action="">
              <div className="flex justify-between items-center gap-2 lg:gap-7 xl:gap-10 mb-4">
                <div className="flex flex-col items-start justify-center gap-1 w-6/12">
                  <label htmlFor="firstName" >First Name</label>
                  <input type="text" name="firstName" id="firstName" placeholder='First Name' className='h-12 w-full rounded-lg p-3 outline-none border-slate-400 border' required />
                </div>
                <div className="flex flex-col items-start justify-center gap-1 w-6/12">
                  <label htmlFor="lastName" className='text-sm font-medium leading-6'>Last Name</label>
                  <input type="text" name="lastName" id="lastName" placeholder='Last Name' className='h-12 w-full rounded-lg p-3 outline-none border-slate-400 border' required />
                </div>
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="email" className='text-sm font-medium leading-6'>Email</label>
                <input type="email" name="email" id="email" placeholder='Example@company.com' required className='h-12 w-full rounded-lg p-3 outline-none border-slate-400 border' />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className='text-sm font-medium leading-6'>Phone number</label>
                <div className='h-12 w-full rounded-lg outline-none border-slate-400 border phone-input p-0'>
                  <select id="country-code" name="country-code" className='m-0 p-0 h-[46px] bg-white rounded-l-lg outline-none w-3/12 sm:w-2/12 md:w-3/12 lg:w-3/12 xl:w-2/12'>
                    <option value="PK">+92</option>
                    <option value="IND">+91</option>
                  </select>
                  <input type="tel" id="phone" name="phone" placeholder="Phone number" className=' bg-white h-11 w-9/12 sm:w-10/12 md:w-9/12 lg:w-9/12 xl:w-10/12 px-3 outline-none rounded-r-xl' />
                </div>
              </div>

              <div className="flex flex-col mb-5">
                <label htmlFor="message" className='text-sm font-medium leading-6'>Message</label>
                <textarea name="message" id="message" className='h-32 w-full rounded-lg p-3 outline-none border-slate-400 border resize-none'></textarea>
              </div>

              <div className="flex mb-8 gap-3 items-center justify-start">
                <input type="checkbox" id="myCheckbox" className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded outline-none " />
                <p className="font-medium text-base">You agree to our friendly <a href="" className='underline'>privacy policy.</a></p>
              </div>

              <button className="button-filledext">
                Send Message
              </button>
            </form>
          </div>

          <div className="right w-full md:w-1/2 relative z-30">
            <div className="flex flex-col gap-4">
              <h2 className="uppercase font-light text-4xl lg:text-5xl text-heading_blue tracking-wider">Get in Touch</h2>

              <p className="text-sm md:text-base lg:text-xl text-t_grey">Lorem ipsum dolor sit amet consectetur. Eu egestas libero viverra vulputate amet nunc lectus non ac. Arcu diam nullam ultrices consectetur. Gravida enim in sagittis mauris aliquam duis.</p>

              <button className="button-filled">
                Contact us
              </button>
            </div>
          </div>
        </div>

        <div className="w-96 h-96 border-2 rounded-full border-grey absolute -bottom-60 -right-36  z-10"></div>
        <div className="border-2 rounded-full border-grey  absolute -bottom-60 -right-36 z-10" style={{ width: '456px', height: '456px' }}></div>
        <div className="border-2 rounded-full border-grey opacity-65 absolute -bottom-60 -right-36 z-10" style={{ width: '526px', height: '526px' }}></div>
        <div className="border-2 rounded-full border-grey opacity-65 absolute -bottom-60 -right-36 z-10" style={{ width: '599px', height: '599px' }}></div>

        <Image src='/Ellipse 45.svg' width={116} height={116} alt="Ellipse Image" className='absolute top-1/3 right-0' />
      </section>
    </main>
  )
}

export default Page;