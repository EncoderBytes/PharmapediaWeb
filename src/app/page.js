"use client"
import Image from 'next/image';
import { products } from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { FaStar } from "react-icons/fa";
import Link from 'next/link';

export default function Home() {

  return (
    <main className=''>
      <section className="relative py-20 md:pb-36">
        <div className="w-10/12 mx-auto relative flex justify-center items-center flex-col overflow-hidden">
          <div className="text-center flex justify-center items-center flex-col gap-4 max-w-3xl relative z-30">
            <h1 className="font-light text-5xl md:text-6xl text-heading_blue tracking-wide">Pharmapedia</h1>
            <p className="text-t_grey text-sm md:text-xl px-1 md:px-4">
              Pharmapedia Private Limited is a company specializing in mobile application development. Our focus lies primarily in the education sector, with an emphasis on medical education and STEM (Science, Technology, Engineering, and Mathematics) education.
            </p>
            <div>
              <button className="button-filled">
                <Link href='/About'>
                  About us
                </Link>
              </button>
            </div>
          </div>

          <div className="w-full mt-10 md:mt-0 relative z-10">
            <Image src='/MainImg.svg' width={1728} height={698} layout="responsive" alt="Pharmapedia" />
          </div>

          <div className="w-[1199px] h-[1199px] border-1 rounded-full border-grey opacity-65 absolute top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
        </div>
        <Image src='/Ellipse 42.svg' width={116} height={116} alt="Ellipse" className='absolute -bottom-10 left-0 z-50' />
      </section>

      <section className="w-full mx-auto h-96 relative my-28" style={{
        background: "linear-gradient(#57A8D1, #2980B9)"
      }}>
        <div className="left w-1/2 xl:flex justify-center items-center left-16 absolute -top-12 z-50 hidden">
          <div className="circle bg-white rounded-full flex justify-center items-center relative overflow-visible" style={{ width: '500px', height: '500px' }}>
            <Image
              src="/Group1000011108.svg"
              width={100}
              height={624}
              className='xl:w-[304px] w-[260px]'
              alt="Illustration of Pharmapedia"
              priority
            />
          </div>
        </div>

        <div className="overflow-hidden relative h-96 md:mt-20">
          <div className="w-10/12 mx-auto flex justify-center xl:justify-end items-center h-full z-20 relative">
            <div className="right w-full md:w-1/2 text-white flex flex-col justify-center items-start gap-6">
              <h2 className="font-light text-4xl md:text-5xl uppercase  tracking-wide">About us</h2>
              <p className="text-sm md:text-lg">
                Lorem ipsum dolor sit amet consectetur. Eu egestas libero viverra
                vulputate amet nunc lectus non ac. Arcu diam nullam ultrices
                consectetur. Gravida enim in sagittis mauris aliquam duis.
              </p>
              <button className="button-filled">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-52 h-52 border rounded-full border-white opacity-15 absolute -bottom-10 -right-10 z-10"></div>
          <div className="w-72 h-72 border rounded-full border-white opacity-15 absolute -bottom-12 -right-12 z-10"></div>
          <div className="border rounded-full border-white opacity-15 absolute top-20 -right-20 z-10" style={{ width: '406px', height: '406px' }}></div>
          <div className="border rounded-full border-white opacity-15 absolute top-2 -right-24 z-10" style={{ width: '499px', height: '499px' }}></div>

          <div className="border rounded-full border-white opacity-15 absolute -top-48 left-20 z-10 hidden xl:block" style={{ width: '761px', height: '761px' }}></div>
          <div className="border rounded-full border-white opacity-15 absolute -top-28 left-36 z-10 hidden xl:block" style={{ width: '605px', height: '605px' }}></div>
        </div>
      </section>

      <section className="w-10/12 mx-auto mt-20 mb-28 md:mt-60">
        <div className="flex flex-col items-start gap-4" style={{ maxWidth: "677px" }}>
          <h2 className="text-4xl md:text-5xl text-heading_blue font-light tracking-wide">OUR PRODUCTS</h2>
          <p className="text-sm md:text-xl text-t_grey">
            Pharmapedia Private Limited is a company specializing in mobile application development. Our focus lies primarily in the education sector, with an emphasis on medical education and STEM (Science, Technology, Engineering, and Mathematics) education.
          </p>
          <button className="button-filled" aria-label="Explore More">
            Explore More
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-10 cursor-pointer">
          {products.map((data, i) => (
            <div key={i} className='w-[307px] lg:w-[415px] xl:w-[520px]'>

              <Image
                src={data.image}
                width={100}
                height={362}
                alt="Products Image"
                className="h-auto hover:scale-95 w-full transition-all"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="my-20 md:my-32 h-[380px] lg:h-[710px]" style={{ background: "radial-gradient(circle, #57A8D1 , #2980B9)" }}>
        <div className="flex h-full w-10/12 mx-auto">
          <div className="left w-full md:w-1/2 relative">
            <img src="/[Mockup] iPhone 15.svg" loading="lazy" alt="Download App" style={{ width: "682px" }} className='absolute top-0 -left-36 hidden md:block' />

            <div className="txt w-full md:w-10/12 mx-auto text-white flex flex-col gap-3 absolute bottom-[20%]">
              <h2 className="font-medium text-3xl md:text-5xl uppercase">Download App Now</h2>
              <p className="md:leading-9 text-sm md:text-3xl">The content in this smartphone application is verified by qualified and registered healthcare professionals!</p>

              {/* <div className="download-imgs flex-col md:flex-row flex justify-start items-start md:items-center gap-2 md:gap-8"> */}
              <div className="download-imgs flex justify-start items-start md:items-center gap-2 md:gap-8">
                <Image src='./download2.svg' width={202} height={60} alt="Download Image 1" className='cursor-pointer' loading="lazy" />
                <Image src='./download1.svg' width={202} height={60} alt="Download Image 2" className='cursor-pointer' loading="lazy" />
              </div>
            </div>
          </div>
          <div className="right w-1/2 md:flex justify-center items-end relative overflow-hidden hidden">
            <img src="/phone13.svg" alt="Download App" loading="lazy" style={{ width: "511px" }} className='absolute bottom-0'
            />
          </div>
        </div>
      </section>

      <section className="w-10/12 m-auto">
        <div className="relative py-10">
          <div className="w-full md:w-7/12 text-center m-auto pb-12">
            <h3 className="uppercase font-semibold text-base md:text-xl tracking-widest  mb-0 md:mb-2">News& Events</h3>
            <h1 className="uppercase font-light text-4xl md:text-5xl text-heading_blue mb-5">Our Blogs</h1>
            <p className="text-sm md:text-xl text-t_grey mb-5 md:leading-7">Lorem ipsum dolor sit amet consectetur. Morbi in vulputate id tellus. Et scelerisque consequat egestas volutpat semper pretium morbi amet.</p>
            <button className="button-filled">
              Explore More
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center my-10 relative gap-10 md:gap-5 z-20">
            <div className="w-full md:w-2/6 flex flex-col justify-start md:justify-end items-start md:items-end gap-6 md:gap-16">
              <div className="text-start md:text-end  w-full md:w-10/12">
                <p className="text-lightBlue text-lg md:text-2xl font-medium mb-2 md:leading-8 leading-tight">Premium Book <br /> Marketing Services</p>
                <p className="text-base md:text-xl text-t_grey md:leading-7 leading-tight">Targeted advertising across platforms for maximum book visibility.</p>
              </div>

              <div className="text-start md:text-end w-full md:w-10/12">
                <p className="text-lightBlue text-lg md:text-2xl font-medium mb-2 md:leading-8 leading-tight">Certified <br />
                  Marketing Experts</p>
                <p className="text-base md:text-xl text-t_grey md:leading-7 leading-tight">Experienced team employing diverse digital strategies for success.</p>
              </div>
            </div>

            <div className="w-2/6 hidden md:block">
              <img src='./BlogImgPhone.svg' alt="BlogImg" width={506} height={659} className='block' />
            </div>

            <div className="w-full md:w-2/6 flex flex-col justify-start md:justify-end items-start md:items-end gap-6 md:gap-16">
              <div className="text-start  w-full md:w-10/12">
                <p className="text-lightBlue text-lg md:text-2xl font-medium mb-2 md:leading-8 leading-tight">Innovative Approach</p>
                <p className="text-base md:text-xl text-t_grey md:leading-7 leading-tight">Utilizing technology and creativity to boost book sales.</p>
              </div>

              <div className=" w-full md:w-10/12 text-start">
                <p className="text-lightBlue text-lg md:text-2xl font-medium mb-2 md:leading-8 leading-tight">Next Bestseller Guarantee</p>
                <p className="text-base md:text-xl text-t_grey md:leading-7 leading-tight">Dedicated to making your book stand out in the market.</p>
              </div>
            </div>
          </div>
          <Image src='./Ellipse 45.svg' width={132} height={132} alt="Ellipse Image" className='absolute bottom-0 left-0 z-10' />
        </div>
      </section>

      <section className="w-10/12 m-auto my-20">
        <div className="w-full md:w-7/12 text-center m-auto pb-12">
          <h2 className="uppercase font-semibold text-base md:text-xl tracking-widest mb-0 md:mb-2">Reviews</h2>
          <h1 className="uppercase font-light  text-4xl md:text-5xl text-heading_blue md:mb-5">Testimonials</h1>
        </div>

        <Swiper
          className="swiper-container pt-10 md:pt-40 mx-auto"
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className='pb-10'>
            <div className="w-full md:w-3/6 m-auto">
              <div className="flex flex-col items-center justify-center gap-10 md:gap-24">
                <p className="text-center text-sm md:text-xl text-t_grey">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>
                <div className="flex justify-center items-center gap-8">
                  <div className="w-3/12">
                    <Image src='./testimonialImg.svg' width={92} height={92} alt="Testimonial by Aliyan Baig" className='' />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-0 md:gap2 w-9/12">
                    <h3 className="font-bold text-xl md:text-3xl leading-10 pl-1">Aliyan Baig</h3>
                    <div className="icons text-xl md:text-4xl flex justify-center items-center gap-2">
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#E3E6F0" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='pb-10'>
            <div className="w-full md:w-3/6 m-auto">
              <div className="flex flex-col items-center justify-center gap-10 md:gap-24">
                <p className="text-center text-sm md:text-xl text-t_grey">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>
                <div className="flex justify-center items-center gap-8">
                  <div className="w-3/12">
                    <Image src='./testimonialImg.svg' width={92} height={92} alt="Testimonial by Aliyan Baig" className='' />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-0 md:gap2 w-9/12">
                    <h3 className="font-bold text-xl md:text-3xl leading-10 pl-1">Aliyan Baig</h3>
                    <div className="icons text-xl md:text-4xl flex justify-center items-center gap-2">
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#E3E6F0" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='pb-10'>
            <div className="w-full md:w-3/6 m-auto">
              <div className="flex flex-col items-center justify-center gap-10 md:gap-24">
                <p className="text-center text-sm md:text-xl text-t_grey">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>
                <div className="flex justify-center items-center gap-8">
                  <div className="w-3/12">
                    <Image src='./testimonialImg.svg' width={92} height={92} alt="Testimonial by Aliyan Baig" className='' />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-0 md:gap2 w-9/12">
                    <h3 className="font-bold text-xl md:text-3xl leading-10 pl-1">Aliyan Baig</h3>
                    <div className="icons text-xl md:text-4xl flex justify-center items-center gap-2">
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#E3E6F0" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='pb-10'>
            <div className="w-full md:w-3/6 m-auto">
              <div className="flex flex-col items-center justify-center gap-10 md:gap-24">
                <p className="text-center text-sm md:text-xl text-t_grey">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>
                <div className="flex justify-center items-center gap-8">
                  <div className="w-3/12">
                    <Image src='./testimonialImg.svg' width={92} height={92} alt="Testimonial by Aliyan Baig" className='' />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-0 md:gap2 w-9/12">
                    <h3 className="font-bold text-xl md:text-3xl leading-10 pl-1">Aliyan Baig</h3>
                    <div className="icons text-xl md:text-4xl flex justify-center items-center gap-2">
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#E3E6F0" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="m-auto overflow-hidden relative" id='contact'>
        <div className="w-10/12 m-auto flex flex-col-reverse md:flex-row items-center justify-center gap-20 relative py-28">
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

              <div className="mb-4">
                <label htmlFor="phone" className='text-sm font-medium leading-6'>Phone number</label>
                <div className='h-12 w-full rounded-lg outline-none border-slate-400 border phone-input '>
                  <select id="country-code" name="country-code" className='h-11 rounded-l-lg outline-none'>
                    <option value="PK">PK +92</option>
                    <option value="IND">IND +91</option>
                  </select>
                  <input type="tel" id="phone" name="phone" placeholder="Phone number" className='h-11 md:w-8/12 px-3 outline-none' />
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
  );
}
