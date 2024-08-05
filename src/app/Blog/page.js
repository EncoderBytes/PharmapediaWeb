"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { blogs, staticBlogs, staticBlogs1 } from '../data'
import Link from 'next/link'

const categories = [
  { name: 'Category 1', imageUrl: '/Post Picture.svg' },
  { name: 'Category 2', imageUrl: '/Rectangle 6.svg' },
  { name: 'Category 3', imageUrl: '/staticBlog.svg' },
  { name: 'Category 4', imageUrl: '/Rectangle 6 (1).svg' },
];

const Blog = () => {
  const scrollToSchools = () => {
    document.getElementById('drop').scrollIntoView({ behavior: 'smooth' });
  };

  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [selectedImage, setSelectedImage] = useState(categories[0].imageUrl);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
    setSelectedImage(category.imageUrl);
  };

  return (
    <main>
      <section className="flex justify-center items-center h-[597px] overflow-hidden relative z-30" style={{
        background: "radial-gradient(circle, #57A8D1 0%, #2980B9 100%)"
      }}>
        <div className="text-white w-11/12 lg:w-3/6 text-center flex flex-col justify-center items-center gap-5">
          <h1 className="text-6xl font-light">Our Blogs</h1>
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

      <section className="py-20 relative overflow-hidden" id='drop'>
        <div className="w-96 h-96 border-3 rounded-full opacity-30 absolute top-36 -right-60" aria-hidden="true"></div>
        <div className="w-[452px] h-[452px] border-3 rounded-full opacity-30 absolute top-28 -right-56" aria-hidden="true"></div>
        <div className="w-[597px] h-[597px] border-3 rounded-full opacity-30 absolute top-10 -right-60" aria-hidden="true"></div>
        <div className="w-[697px] h-[697px] border-3 rounded-full opacity-30 absolute -top-5 -right-60" aria-hidden="true"></div>

        <div className="w-96 h-96 border-3 rounded-full opacity-30 absolute bottom-36 -left-60" aria-hidden="true"></div>
        <div className="w-[452px] h-[452px] border-3 rounded-full opacity-30 absolute bottom-28 -left-56" aria-hidden="true"></div>
        <div className="w-[597px] h-[597px] border-3 rounded-full opacity-30 absolute bottom-10 -left-60" aria-hidden="true"></div>
        <div className="w-[697px] h-[697px] border-3 rounded-full opacity-30 absolute -bottom-5 -left-60" aria-hidden="true"></div>

        <div className="w-11/12 m-auto">
          <div className="flex justify-center items-center flex-wrap gap-2 xl:gap-5">
            {/* <Link href={`/Blog/${blogData.slug}`} key={blogData.id}> */}
            {blogs.map((blogData) => (

              <div className="relative my-5 w-[360px] md:w-[325px] lg:w-[395px] xl:w-[400px]" key={blogData.id}>
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
                  <h2 className="text-xl md:text-3xl font-semibold mb-3">{blogData.title}</h2>

                  <div className="w-11/12">
                    <div className="flex items-center justify-between">
                      <Image
                        src={blogData.authorImg}
                        alt="author Img"
                        width={100}
                        height={100}
                        className='w-8 md:w-8'
                      />
                      <p className="text-xs md:text-base font-bold">{blogData.authName}</p>
                      <div className="w-3 md:w-6 border-1 border-gray-300"></div>
                      <p className="text-xs md:text-sm lg:text-base text-pClr">{blogData.blogDate}</p>
                      <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                      <Image
                        src={blogData.shareIcon}
                        alt="shareIcon Img"
                        width={100}
                        height={100}
                        className='w-2 md:w-3'
                      />
                      <p className="text-xs md:text-sm lg:text-base text-pClr hidden lg:block">{blogData.shares}</p>
                    </div>

                    <p className="my-5 text-pClr leading-6">{blogData.data}</p>

                    {/* <Link href="Blog/Blogs/" */}
                    <Link href={`Blog/Blogs/${blogData.id}`}
                      className="text-base md:text-lg font-semibold hover:border-b-2 border-black">
                      View Post
                    </Link>

                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="button-filled z-50 block m-auto">Load more</button>
        </div>
      </section >

      <section className="m-auto w-full md:w-11/12" >
        <div className="md:h-[448px] h-auto flex items-end justify-center" style={{
          background: "radial-gradient(circle , #ABDCFF 0%, #298ED6 100%)"
        }}>

          <div className="flex items-center flex-col md:flex-row justify-end  w-full md:w-11/12 m-auto md:ms-auto md:mb-0 mt-5" >
            <div className="left text-white w-full md:w-1/2 flex flex-col items-start justify-start gap-3 p-3 md:p-0">
              <h1 className="text-2xl md:text-3xl font-light uppercase tracking-wider">Learn More About <br /> our Products</h1>
              <p className="text-sm md:text-lg tracking-wide leading-5 md:leading-7">Lorem ipsum dolor sit amet consectetur. Eu egestas libero viverra vulputate amet nunc lectus non ac. Arcu diam nullam ultrices consectetur. Gravida enim in sagittis mauris aliquam duis.</p>
              <button className="button-filled">
                Learn More
              </button>
            </div>
            <div className="right  w-full md:w-1/2">
              <Image src="./blogPageiPhone12Pro.svg" width={1084} height={812} alt='blogPageImg' />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center justify-center gap-10 border-t-2 pt-2 flex-col lg:flex-row">
            <div className="left w-full lg:w-8/12 border-2 flex justify-between gap-3 items-center px-2 md:px-5 py-1">
              <div className='w-7/12'>
                <div className='flex items-end gap-1 md:gap-4'>
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => handleCategoryClick(category)}
                      className={`mx-1 text-sm md:text-base ${selectedCategory === category.name ? 'font-bold' : 'font-normal'}`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
                <div className='mt-2'>
                  <Image src={selectedImage} width={467} height={225} alt='staticBlogImg' />
                  <div className='w-11/12'>
                    <p className='text-pClr text-xs font-semibold my-1 md:my-2'>1 Month Ago</p>
                    <h2 className='my-1 md:my-2 font-semibold leading-5 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur. Ut sem vestibulum amet aliquam.</h2>
                    <p className='text-pClr text-xs md:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet nibh id lacus pharetra.</p>
                    <button className='text-sm md:text-lg font-semibold hover:border-b-2 border-black mt-1 md:mt-3'>View Post</button>
                  </div>
                </div>
              </div>

              <div className="w-5/12">
                {
                  staticBlogs1.map((data) => (
                    <div className="my-2 md:my-6 flex gap-2 md:gap-6" key={data.id}>
                      <div className="">
                        <Image src={data.img} width={122} height={77} alt='staticBlogImg' />
                      </div>
                      <div className="flex flex-col items-start justify-between">
                        <p className='mb-0 font-semibold text-xs md:text-base leading-4 md:leading-5 '>{data.title}</p>
                        <p className='mb-0 font-normal text-pClr text-[10px]'>{data.blogdate}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className="border-2 w-4/12 px-9 py-3 hidden lg:inline-block">
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

      <section className="m-auto overflow-hidden relative" id='contact' >
        <div className="w-10/12 m-auto flex flex-col-reverse md:flex-row items-center justify-center gap-20 relative py-20">
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

        <Image src='./Ellipse 45.svg' width={116} height={116} alt="Ellipse Image" className='absolute top-1/3 right-0' />
      </section>
    </main >
  )
}

export default Blog