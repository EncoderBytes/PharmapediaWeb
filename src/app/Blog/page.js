"use client"

import Image from 'next/image'
import React from 'react'
import { blogs, staticBlogs } from '../data'
import Link from 'next/link'

const Blog = () => {
  const scrollToSchools = () => {
    document.getElementById('drop').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <main>
      <section className="flex justify-center items-center h-[597px] overflow-hidden relative z-30" style={{
        background: "radial-gradient(circle, #57A8D1 0%, #2980B9 100%)"
      }}>
        <div className="text-white w-3/6 text-center flex flex-col justify-center items-center gap-5">
          <h1 className="text-6xl font-light">Our Blogs</h1>
          <p className="leading-7 text-xl">Pharmapedia Private Limited is a company specializing in mobile application development. Our focus lies primarily in the education sector, with an emphasis on medical education and STEM (Science, Technology, Engineering, and Mathematics) education.</p>
        </div>
        <Image src="/DownBtn.svg" alt="Scroll down button" width={40} height={40} className='absolute bottom-10 cursor-pointer' onClick={scrollToSchools} />
        <div className="w-60 h-60 border-1 rounded-full border-white opacity-30 absolute -bottom-40 -left-14 z-10" aria-hidden="true"></div>
        <div className="w-[350px] h-[350px] border-1 rounded-full border-white opacity-30 absolute -bottom-48 -left-24 z-10"></div>
        <div className="w-[493px] h-[493px] border-1 rounded-full border-white opacity-30 absolute -bottom-60 -left-40 z-10"></div>
        <div className="w-[606px] h-[606px] border-1 rounded-full border-white opacity-30 absolute -bottom-64 -left-44 z-10"></div>

        <div className="w-80 h-80 border-1 rounded-full border-white opacity-30 absolute -bottom-32 -right-44 z-10"></div>
        <div className="w-[452px] h-[452px] border-1 rounded-full border-white opacity-30 absolute -bottom-40 -right-52 z-10"></div>
        <div className="w-[637px] h-[637px] border-1 rounded-full border-white opacity-30 absolute -bottom-48 -right-60 z-10"></div>
        <div className="w-[783px] h-[783px] border-1 rounded-full border-white opacity-30 absolute -bottom-56 -right-64 z-10"></div>
      </section>

      <section className="py-20 relative overflow-hidden" id='drop'>
        <div className="w-96 h-96 border-3 rounded-full opacity-30 absolute top-36 -right-60" aria-hidden="true"></div>
        <div className="w-[452px] h-[452px] border-3 rounded-full opacity-30 absolute top-28 -right-56" aria-hidden="true"></div>
        <div className="w-[597px] h-[597px] border-3 rounded-full opacity-30 absolute top-10 -right-60" aria-hidden="true"></div>
        <div className="w-[697px] h-[697px] border-3 rounded-full opacity-30 absolute -top-5 -right-60" aria-hidden="true"></div>

        <div className="w-96 h-96 border-3 rounded-full opacity-30 absolute bottom-36 -left-60" aria-hidden="true"></div>
        <div className="w-[452px] h-[452px] border-3 rounded-full opacity-30 absolute bottom-28 -left-56" aria-hidden="true"></div>
        <div className="w-[597px] h-[597px] border-3 rounded-full opacity-30 absolute bottom-10 -left-60" aria-hidden="true"></div>
        <div className="w-[697px] h-[697px] border-3 rounded-full opacity-30 absolute -bottom-5 -left-60" aria-hidden="true"></div>

        <div className="w-10/12 m-auto">
          <div className="flex justify-center items-center flex-wrap gap-7">
            {/* <Link href={`/Blog/${blogData.slug}`} key={blogData.id}> */}
            {blogs.map((blogData) => (

              <div className="relative my-5" style={{ width: "400px" }} key={blogData.id}>
                <Image
                  src={blogData.BlogImg}
                  alt={blogData.alt}
                  width={468}
                  height={358}
                />
                <div className="buttons flex absolute gap-1 top-4 left-4 text-white">
                  <p className="button-blog">{blogData.domain}</p>
                  <p className="button-blog">{blogData.subDomain}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Image
                    src={blogData.blogVideoPlayImg}
                    width={35}
                    height={35}
                    className="cursor-pointer"
                    alt="Blog Data"
                  />
                </div>
                <div className="mt-8">
                  <h2 className="text-3xl font-semibold mb-3">{blogData.title}</h2>

                  <div className="w-11/12">
                    <div className="flex items-center justify-between">
                      <Image
                        src={blogData.authorImg}
                        alt="author Img"
                        width={31}
                        height={31}
                      />
                      <p className="text-base font-bold">{blogData.authName}</p>
                      <div className=" w-6 border-1 border-gray-300"></div>
                      <p className="text-sm text-pClr">{blogData.blogDate}</p>
                      <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                      <Image
                        src={blogData.shareIcon}
                        alt="shareIcon Img"
                        width={12}
                        height={12}
                      />
                      <p className="text-sm text-pClr">{blogData.shares}</p>
                    </div>

                    <p className="my-5 text-pClr leading-6">{blogData.data}</p>

                    {/* <Link href="Blog/Blogs/" */}
                    <Link href={`Blog/Blogs/${blogData.id}`}
                      className="text-lg font-semibold hover:border-b-2 border-black"
                    >
                      View Post
                    </Link>

                  </div>
                </div>
              </div>
            ))}
            <button className="button-filled">Load more</button>
          </div>
        </div>
      </section>

      <section className="m-auto w-11/12" >
        <div className="h-[448px] flex items-end justify-center" style={{
          background: "radial-gradient(circle , #ABDCFF 0%, #298ED6 100%)"
        }}>

          <div className="flex items-center justify-end w-11/12 ms-auto" >
            <div className="left text-white w-1/2 flex flex-col items-start justify-start gap-3">
              <h1 className="text-3xl font-light uppercase tracking-wider">Learn More About <br /> our Products</h1>
              <p className="text-lg tracking-wide">Lorem ipsum dolor sit amet consectetur. Eu egestas libero viverra vulputate amet nunc lectus non ac. Arcu diam nullam ultrices consectetur. Gravida enim in sagittis mauris aliquam duis.</p>
              <button className="button-filled">
                Learn More
              </button>
            </div>
            <div className="right w-1/2">
              <Image src="./blogPageiPhone12Pro.svg" width={1084} height={812} alt='blogPageImg' />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center justify-center gap-10 border-t-1 pt-10">
            <div className="left w-7/12 border ">
              s
            </div>
            <div className="left border w-5/12 px-9 py-3">
              <h3 className="font-bold text-sm">Manga reads</h3>
              <div className="">
                {
                  staticBlogs.map((data) => (
                    <div className="my-5 flex gap-6" key={data.id}>
                      <div className="">
                        <Image src={data.img} width={210} height={93} alt='staticBlogImg' />
                      </div>
                      <div className="flex flex-col items-start justify-between">
                        <p className='mb-0 font-semibold leading-5'>{data.title}</p>
                        <p className='mb-0 font-normal text-pClr text-[10px]'>{data.blogdate}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-auto overflow-hidden relative">
        <div className="w-10/12 m-auto flex flex-col md:flex-row items-center justify-center gap-20 relative py-28">
          <div className="left w-full md:w-1/2 relative z-30">
            <form action="">
              <div className="flex justify-between items-center gap-2 md:gap-10 mb-4">
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

              <div className=" mb-4">
                <label htmlFor="phone" className='text-sm font-medium leading-6'>Phone number</label>
                <div className='h-12 w-full rounded-lg outline-none border-slate-400 border phone-input'>
                  <select id="country-code" name="country-code" className='h-11 rounded-l-lg outline-none'>
                    <option value="PK">PK +92</option>
                    <option value="IND">IND +91</option>
                  </select>
                  <input type="tel" id="phone" name="phone" placeholder="Phone number" className='h-11 md:w-10/12 px-3 outline-none' />
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
              <h2 className="uppercase font-light text-4xl md:text-5xl text-heading_blue tracking-wider">Get in Touch</h2>

              <p className="text-sm md:text-xl text-t_grey">Lorem ipsum dolor sit amet consectetur. Eu egestas libero viverra vulputate amet nunc lectus non ac. Arcu diam nullam ultrices consectetur. Gravida enim in sagittis mauris aliquam duis.</p>

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

        <Image src='./Ellipse 45.svg' width={116} height={116} alt="Ellipse Image" className='absolute top-1/3 right-0' />
      </section>

    </main >
  )
}

export default Blog