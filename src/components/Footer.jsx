import React from 'react'
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='bg-darkblue relative z-20'>
      <div className="text-white">
        <div className="w-10/12 pb-16 flex flex-wrap mx-auto items-center justify-between">
          <div className="w-3/6 lg:w-2/6">
            <Image src="/FooterLogo.svg" className='' width={374} height={184} />
            <div className="icons flex md:flex-row flex-col gap-4 items-center justify-center md:gap-6">

              <div className='text-xl border-r-none md:border-r-2 pr-5 cursor-pointer' >
                <FaFacebookF />
              </div>
              <div className='text-xl border-r-none md:border-r-2 pr-5 cursor-pointer' >
                <AiFillInstagram />
              </div>
              <div className='text-xl border-r-none md:border-r-2 pr-5 cursor-pointer' >
                <FaTwitter />
              </div>

              <div className='text-xl border-r-none md:border-r-2 pr-5 cursor-pointer' >
                <FaYoutube />
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-10 md:mt-28 w-2/6  lg:w-2/6">
            <p className="uppercase text-2xl font-semibold pb-4">quick links</p>
            <a href="" className='mb-2'>About</a>
            <a href="" className='mb-2'>Products</a>
            <a href="" className='mb-2'>Faq</a>
            <a href="" className='mb-2'>Blog</a>
          </div>

          <div className="w-6/6  lg:w-2/6">
            <div className="w-10/12">
              <p className="uppercase text-2xl font-semibold mt-14 pb-4">NEWS</p>
              <p className="pb-6">Subscribe our newsletter to get our latest update & news</p>
            </div>
            <div className="w-full relative z-20">
              <input type="email" name="email" id="" placeholder='Your email address' className='w-full h-12 p-4 outline-none text-black  rounded-sm' />
            </div>
          </div>
        </div>
        <hr className=' w-10/12 mx-auto  lg:w-2/6' />

        <p className="text-center py-6">© Copyright 2024. All Right Reserved.</p>
      </div>
      <Image src="/section2vector.svg" alt="Main Mesh" className="absolute z-10 right-0 bottom-0" width={500} height={300} />
    </section>
  )
}

export default Footer