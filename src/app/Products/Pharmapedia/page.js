"use client"

import Image from 'next/image';
import React from 'react';
import './style.css'

const Page = () => {
  const scrollToSchools = () => {
    document.getElementById('drop').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <section className="flex justify-center items-start md:items-center h-[577px] relative z-30" style={{
        background: "radial-gradient(circle, #57A8D1 0%, #2980B9 100%)"
      }}>

        <div className="w-11/12 sm:w-9/12 text-center flex flex-col md:flex-row justify-center items-center md:h-[500px] z-40 absolute  lg:mt-40 xl:mt-72">

          <div className="w-full md:pt-20 xl:pt-44 mt-20 lg:mt-0">
            <h1 className="outlined-text m-0 p-0 text-white text-5xl lg:text-8xl xl:text-[140px]">PHARMA<span className='inline xl:block'>PEDIA</span></h1>
            <p className="text-t_grey text-sm sm:text-base md:text-xl w-full  md:w-10/12 text-left md:mt-5">Pharmapedia Private Limited is a company specializing in mobile application development. Our focus lies primarily in the education sector, with an emphasis on medical education and STEM (Science, Technology, Engineering, and Mathematics) education.</p>
          </div>

          <div className="w-full md:w-5/12 flex items-center lg:items-start justify-center mt-5 md:mt-16">
            {/* <Image src="/Ellipse 40.svg" alt="" width={100} height={186} className='' /> */}
            <Image
              src="/productImg1.svg"
              alt="productImg1"
              width={100}
              height={751}
              className="z-20  w-[250px] md:w-[365px]"
            />
            <Image src="/Ellipse 41.svg" alt="" width={100} height={100} className='' />
          </div>
        </div>

        <div className="overflow-hidden relative h-[577px] md:h-[627px] z-30 w-full">
          <div className="md:w-60 md:h-60 w-40 h-40 border-1 rounded-full border-white opacity-25 absolute md:-bottom-20 md:-left-44 -bottom-10 -left-20 z-10" aria-hidden="true"></div>
          <div className="md:w-[350px] md:h-[350px] w-[320px] h-[320px] border-1 rounded-full border-white opacity-25 absolute md:-bottom-24 md:-left-48 -bottom-24 -left-44 z-10"></div>
          <div className="md:w-[493px] md:h-[493px] w-[463px] h-[463px] border-1 rounded-full border-white opacity-25 absolute -bottom-28 -left-56 z-10"></div>
          <div className="md:w-[606px] md:h-[606px] w-[573px] h-[573px] border-1 rounded-full border-white opacity-25 absolute -bottom-32 -left-60 z-10"></div>

          <div className="md:w-80 md:h-80 border-1 rounded-full border-white opacity-25 absolute -top-40 right-10 z-10 hidden md:block"></div>
          <div className="md:w-[452px] md:h-[452px] border-1 rounded-full border-white opacity-25 absolute -top-48 -right-12 z-10 hidden md:block"></div>
          <div className="md:w-[637px] md:h-[637px] border-1 rounded-full border-white opacity-25 absolute -top-60 -right-36 z-10 hidden lg:block"></div>
          <div className="md:w-[783px] md:h-[783px] border-1 rounded-full border-white opacity-25 absolute -top-64 -right-56 z-10 hidden lg:block"></div>
        </div>
      </section>

      <section className="relative mt-60 md:mt-[480px] mb-20" id='drop'>
        <Image
          src="/Group1.svg"
          alt=""
          width={2947.91}
          height={1989.84}
          className="absolute z-10 -top-60"
        />
        <div className="z-30 relative w-11/12 md:w-10/12 m-auto">
          <div className="w-full md:w-10/12 m-auto text-center mt-32 relative">
            <h2 className="uppercase font-light text-3xl sm:text-4xl md:text-5xl text-heading_blue tracking-wider">Pharmapedia</h2>
            <p className="text-sm md:text-xl text-t_grey mt-2 w-full lg:w-7/12 m-auto">Pharmapedia Private Limited is a company specializing in mobile application development. Our focus lies primarily in the education sector, with an emphasis on medical education and STEM (Science, Technology, Engineering, and Mathematics) education.</p>
            <Image src="/Ellipse 41.svg" alt="" width={100} height={100} className='absolute left-0 md:left-32 w-12 md:w-[100px]' />
          </div>

          <div className="relative">
            <Image
              src="/productPage1.svg"
              alt="productImg1"
              width={1189}
              height={789}
              className="m-auto mt-10w-full"
            />
            <Image src="/Ellipse 41.svg" alt="" width={100} height={100} className='absolute right-0 md:right-80 bottom-16 w-12 md:w-[100px]' />
          </div>

          <div className="w-full md:w-10/12 m-auto text-center relative">
            <p className="uppercase text-white tracking-widest mb-5 w-fit m-auto px-2" style={{ background: "linear-gradient(to right, #0d47a1, #1976d2, #42a5f5)" }}>Preparation</p>
            <h2 className="uppercase font-light text-3xl sm:text-4xl md:text-5xl text-heading_blue tracking-wider">Pharmapedia</h2>
            <p className="text-sm md:text-xl text-t_grey mt-2 w-full lg:w-7/12 m-auto">Pharmapedia Private Limited is a company specializing in mobile application development. Our focus lies primarily in the education sector, with an emphasis on medical education and STEM (Science, Technology, Engineering, and Mathematics) education.</p>
          </div>

          <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center mt-14">

            {/* <div className="w-5/12 relative"> */}
            <div className="w-5/12">
              {/* <Image src="/Ellipse 40.svg" alt="" width={130} height={130} className='' /> */}
              <Image
                src="/productImg1.svg"
                alt="productImg1"
                width={365}
                height={751}
                // className="absolute -translate-x-1/2 left-1/2"
                className=""
              />
              {/* <Image src="/Ellipse 40.svg" alt="" width={130} height={130} className='absolute top-96' /> */}
              {/* <Image src="/Ellipse 41.svg" alt="" width={100} height={100} className='absolute right-8 top-[690px]' /> */}
              {/* <Image src="/Ellipse 41.svg" alt="" width={100} height={100} className='' /> */}
            </div>

            <div className="w-full md:w-7/12 flex  items-start justify-center tracking-wider gap-3">
              <div className="left relative z-30">
                <div className="w-44 h-40 sm:w-48 sm:h-48 md:w-96 md:h-56 bg-white shadow-xl border-l-5 border-[#2AA7FF] rounded-md flex flex-col items-center justify-center mt-6 sm:mt-7 md:mt-20">
                  <div className="text-left">
                    <Image src="/accessibility1.svg" alt="" width={100} height={32} className='mb-2 w-6 sm:w-[32px]' />
                    <p className="text-base sm:text-lg md:text-2xl font-bold text-prodclr1 leading-5 md:leading-6">40 top Companies <br /> data updated</p>
                    <p className="text-sm sm:text-lg md:text-xl text-prodclr2 mt-2">Our Data is Updated</p>
                  </div>
                </div>

                <div className="w-44 h-40 sm:w-48 sm:h-48 md:w-96 md:h-56 bg-white shadow-xl border-l-5 border-[#2AA7FF] rounded-md flex flex-col items-center justify-center mt-6 sm:mt-7 md:mt-20">
                  <div className="text-left">
                    <Image src="/accessibility3.svg" alt="" width={100} height={32} className='mb-2 w-6 sm:w-[32px]' />
                    <p className="text-base sm:text-lg md:text-2xl font-bold text-prodclr1 leading-5 md:leading-6">UI enhanced</p>
                    <p className="text-sm sm:text-lg md:text-xl text-prodclr2 mt-2">Our Application User<br /> Interface Design is more  <br />User Friendly</p>
                  </div>
                </div>
              </div>

              <div className="right">
                <div className="w-44 h-40 sm:w-48 sm:h-48 md:w-96 md:h-56 flex flex-col items-center justify-center">
                  <div className="">
                    <Image src="/accessibility2.svg" alt="" width={100} height={32} className='mb-2 w-6 sm:w-[32px]' />
                    <p className="text-base sm:text-lg md:text-2xl font-bold text-prodclr1 leading-5 md:leading-6">Bug in prescription fixed</p>
                    <p className="text-sm sm:text-lg md:text-xl text-prodclr2 mt-2">Our Application Bugs <br /> are Been Solved If Any</p>
                  </div>
                </div>

                <div className="w-44 h-40 sm:w-48 sm:h-48 md:w-96 md:h-56 flex flex-col items-center justify-center">
                  <div className="">
                    <Image src="/accessibility4.svg" alt="" width={100} height={32} className='mb-2 w-6 sm:w-[32px]' />
                    <p className="text-base sm:text-lg md:text-2xl font-bold text-prodclr1 leading-5 md:leading-6">Best Ux Design</p>
                    <p className="text-sm sm:text-lg md:text-xl text-prodclr2 mt-2">We have Best User <br />Experience Design</p>
                  </div>
                </div>
              </div>
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
                <div className='h-12 w-full rounded-lg outline-none border-slate-400 border phone-input '>
                  <select id="country-code" name="country-code" className='h-11 rounded-l-lg outline-none w-3/12 sm:w-2/12 md:w-3/12 lg:w-3/12 xl:w-2/12'>
                    <option value="PK">+92</option>
                    <option value="IND">+91</option>
                  </select>
                  <input type="tel" id="phone" name="phone" placeholder="Phone number" className='h-11 w-9/12 sm:w-10/12 md:w-9/12 lg:w-9/12 xl:w-10/12 px-3 outline-none rounded-2xl' />
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