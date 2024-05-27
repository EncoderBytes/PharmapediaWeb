"use client"
// For slider react slick 32:56 the brave coder
import Image from 'next/image';
import { cards } from '../app/data.js'
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import { Navigation, Pagination, A11y } from 'swiper/modules';

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (key) => {
    // Toggle accordion state
    setActiveAccordion(prevActiveAccordion => prevActiveAccordion === key ? null : key);
  };

  const renderContent = () => {
    switch (activeAccordion) {
      case '1':
        return (
          <div className=" bg-white rounded-2xl h-80 absolute -top-9 -left-5 z-0">
            <div className="px-8 pt-9 font-semibold">How many devices can simultaneously use  the data using a single subscription code? </div>
            <div className="p-8">
              Pharmapedia Pro data can only be used on one device using the same 11-digit subscription code. The prepaid subscription code is for one-time use only.
            </div>
          </div>
        );

      case '2':
        return (
          <div className="bg-white rounded-2xl h-96 absolute -top-9 -left-5 z-0">
            <div className="px-8 pt-9 font-semibold">Is Pharmapedia Pro App subscription-based?</div>
            <div className="p-8">
              Pharmapedia Pro data can only be used on one device using the same 11-digit subscription code. The prepaid subscription code is for one-time use only.
            </div>
          </div>
        );

      case '3':
        return (
          <div className="bg-white rounded-2xl h-80 absolute -top-9 -left-5 z-0">
            <div className="px-8 pt-9 font-semibold">Why don’t I have full access when I have already subscribed? </div>
            <div className="p-8">
              Pharmapedia Pro data can only be used on one device using the same 11-digit subscription code. The prepaid subscription code is for one-time use only.
            </div>
          </div>
        );
      default:
        return null; // No content to render by default
    }
  };
  return (
    <main className='bg-bg_1'>
      {/* <section className="w-11/12 ms-auto relative bg-bg_1 py-8">
        <Image src="/mainMesh.svg" alt="Main Mesh" className="absolute z-10 left-96" width={900} height={500} />
        <div className="relative z-10 w-full h-auto">
        <Image
      src="/mainMesh.svg"
      alt="Main Mesh"
      layout="responsive"
      width={900}
      height={500}
      priority
      className="absolute left-1/2 transform -translate-x-1/2 md:left-96"
    />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-8">
          <div className="left bg-transparent uppercase text-blue w-full md:w-2/3 z-20 text-center md:text-left">
            <h1 className="text-2xl font-semibold mb-2">Your Gateway to Informed</h1>
            <h2 className="text-6xl md:text-8xl lg:text-9xl italic font-extrabold leading-tight">Healthcare</h2>
            <p className="text-lg md:text-xl font-semibold leading-normal mt-4">Your health companion, <br /> anytime, anywhere!</p>
          </div>
          <div className="right z-20 mt-8 md:mt-0">
            <Image
              src="/mainLeft.svg"
              alt="Illustration of healthcare concept"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>
      </section> */}

      <section className="w-11/12 ms-auto relative bg-bg_1 py-8">
        <div className="relative w-full h-auto">
          <Image
            src="/mainMesh.svg"
            alt="Main Mesh"
            layout="responsive"
            width={1098}
            height={500}
            priority
            className="absolute "
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 relative z-10">
          <div className="left bg-transparent uppercase text-blue w-full md:w-2/3 z-20 text-center md:text-left">
            <h1 className="text-2xl font-semibold mb-2">Your Gateway to Informed</h1>
            <h2 className="text-6xl md:text-8xl lg:text-9xl italic font-extrabold leading-tight">Healthcare</h2>
            <p className="text-lg md:text-xl font-semibold leading-normal mt-4">Your health companion, <br /> anytime, anywhere!</p>
          </div>
          <div className="right z-20 mt-8 md:mt-0">
            <Image
              src="/mainLeft.svg"
              alt="Illustration of healthcare concept"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>
      </section>


      <section className='bg-blue_sec relative shadow-inner shadow-white z-20'>
        <div className="container mx-auto py-10 px-4 z-20 w-10/12">
          <h1 className="uppercase text-5xl text-white font-bold text-center">Our Recent Blogs</h1>
          <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-14 justify-center items-center z-20">
            {cards.map((card, index) => (
              <article key={index} className='card bg-white rounded-t-lg mx-auto' style={{ width: "100%", maxWidth: "370px" }}>
                <Image src="/cardImg.svg" alt={`Illustration for ${card.title}`} width={370} height={257} layout="responsive" />
                <div className="p-4 relative z-20">
                  <h2 className="text-xl font-bold pb-3">{card.title}</h2>
                  <p className="text-base text-pClr pb-4">{card.description}</p>
                  <a href="#" className="text-blue font-semibold cardLink">READ MORE</a>
                </div>
              </article>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <a href="#" className="cardView flex items-center justify-center text-xl font-semibold text-blue bg-white w-40 h-11 rounded-2xl">VIEW ALL</a>
          </div>
        </div>
        <Image src="/section2vector.svg" alt="Main Mesh" className="absolute z-10 right-0 bottom-0" width={500} height={300} />
      </section>

      <section className='py-28'>
        <div className="w-10/12 mx-auto ">
          <h1 className="uppercase text-5xl text-blue font-bold pb-10">FREQUENTLY ASKED QUESTIONS</h1>
        </div>

        <div className="w-10/12 mx-auto flex">
          <div className="w-2/5 bg-white z-30 relative">
            <Accordion variant="dark" className=" outline-none border-none">
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="How many devices can simultaneously use  the data using a single 
subscription code?  "
                onClick={() => handleAccordionClick('1')}
              >
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Is Pharmapedia Pro App subscription-based?"
                onClick={() => handleAccordionClick('2')}
              >
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Why don’t I have full access when I have already subscribed? "
                onClick={() => handleAccordionClick('3')}
              >
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-3/5 relative">
            {renderContent()}
          </div>
        </div>
      </section>

      <section className='bg-blue_sec relative shadow-inner shadow-white z-20 pt-28'>
        <div className="w-10/12 mx-auto mb-10">
          <h1 className="uppercase text-5xl text-white font-bold pb-10">Client Remarks</h1>
        </div>

        <div className="w-11/12 mx-auto h-screen ">
          <div className="relative">
            <div className="flex absolute top-0">
              <Image src="/testi3.svg" alt="" className="" width={500} height={300} />
              <Image src="/testi1.svg" alt="" className="" width={500} height={300} />
              <Image src="/testi2.svg" alt="" className="" width={500} height={300} />
            </div>


            <Swiper
              className="swiper-container pt-40 mx-auto"
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={1} // Default for large screens
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide>
                <div className="flex items-center justify-center h-full">
                  <div className="flex flex-col items-center justify-center h-full w-full p-4">
                    <Image src="/testiMain.svg" alt="Main Mesh" className="absolute top-3" width={84} height={84} />
                    <p className="text-blue text-2xl font-bold absolute top-24">Khan</p>
                    <p className=" text-lg text-blue font-bold absolute top-32">Teacher2</p>
                    <p className="text-pClr text-base text-center px-1">
                      &quot;I have found it very helpful in my daily life and in my job. Thank you for such an
                      incredible app😍. Highly recommended to healthcare professionals.&quot;
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex items-center justify-center h-full">
                  <div className="flex flex-col items-center justify-center h-full w-full p-4">
                    <Image src="/testiMain.svg" alt="Main Mesh" className="absolute top-3" width={84} height={84} />
                    <p className="text-blue text-2xl font-bold absolute top-28">Khan</p>
                    <p className=" text-lg text-blue font-bold absolute top-36">Teacher</p>
                    <p className="text-pClr text-base text-center px-1">
                      &quot;I have found it very helpful in my daily life and in my job. Thank you for such an
                      incredible app😍. Highly recommended to healthcare professionals.&quot;
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex items-center justify-center h-full">
                  <div className="flex flex-col items-center justify-center h-full w-full p-4">
                    <Image src="/testiMain.svg" alt="Main Mesh" className="absolute top-3" width={84} height={84} />
                    <p className="text-blue text-2xl font-bold absolute top-28">Khan</p>
                    <p className=" text-lg text-blue font-bold absolute top-36">Teacher</p>
                    <p className="text-pClr text-base text-center px-1">
                      &quot;I have found it very helpful in my daily life and in my job. Thank you for such an
                      incredible app😍. Highly recommended to healthcare professionals.&quot;
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex items-center justify-center h-full">
                  <div className="flex flex-col items-center justify-center h-full w-full p-4">
                    <Image src="/testiMain.svg" alt="Main Mesh" className="absolute top-3" width={84} height={84} />
                    <p className="text-blue text-2xl font-bold absolute top-28">Khan</p>
                    <p className=" text-lg text-blue font-bold absolute top-36">Teacher</p>
                    <p className="text-pClr text-base text-center px-1">
                      &quot;I have found it very helpful in my daily life and in my job. Thank you for such an
                      incredible app😍. Highly recommended to healthcare professionals.&quot;
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex items-center justify-center h-full">
                  <div className="flex flex-col items-center justify-center h-full w-full p-4">
                    <Image src="/testiMain.svg" alt="Main Mesh" className="absolute top-0" width={84} height={84} />
                    <p className="text-blue text-2xl font-bold  absolute top-28">Khan</p>
                    <p className=" text-lg text-blue font-bold absolute top-36">Teacher</p>
                    <p className="text-pClr text-base text-center">
                      &quot;I have found it very helpful in my daily life and in my job. Thank you for such an
                      incredible app😍. Highly recommended to healthcare professionals.&quot;
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex items-center justify-center h-full">
                  <div className="flex flex-col items-center justify-center h-full w-full p-4">
                    <Image src="/testiMain.svg" alt="Main Mesh" className="absolute top-0" width={84} height={84} />
                    <p className="text-blue text-2xl font-bold  absolute top-28">Khan</p>
                    <p className=" text-lg text-blue font-bold absolute top-36">Teacher</p>
                    <p className="text-pClr text-base text-center">
                      &quot;I have found it very helpful in my daily life and in my job. Thank you for such an
                      incredible app😍. Highly recommended to healthcare professionals.&quot;
                    </p>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>


        </div>
        <Image src="/section2vector.svg" alt="Main Mesh" className="absolute z-10 right-0 bottom-0" width={500} height={300} layout="fixed" />
      </section>

      <section className="w-10/12 mx-auto py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-2/4 mb-10 lg:mb-0">
            <Image src="/DownloadPhone.svg" alt="Download App" width={708} height={720} layout="responsive" />
          </div>
          <div className="w-full lg:w-2/4 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold uppercase">Download <br /> App Now</h1>
            <h3 className="text-xl lg:text-3xl text-blue mt-5">The content in this smartphone application is verified by qualified and registered healthcare professionals.</h3>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start mt-10 space-y-4 lg:space-y-0 lg:space-x-4">
              <Image src="/googlePlay.svg" alt="Google Play Store" width={273} height={81} layout="fixed" />
              <Image src="/app store.svg" alt="Apple App Store" width={273} height={81} layout="fixed" />
            </div>
          </div>
        </div>
      </section>
    </main >
  );
}
