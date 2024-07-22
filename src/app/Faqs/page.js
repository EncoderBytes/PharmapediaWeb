// "use client"

// import { faqs } from '../data';
// import Image from 'next/image';
// import React, { useState } from 'react';
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
//   AccordionItemState
// } from 'react-accessible-accordion';
// import "react-accessible-accordion/dist/fancy-example.css";
// import { FaPlus } from "react-icons/fa6";
// import { FaMinus } from "react-icons/fa6";

// const Page = () => {
//   const scrollToSchools = () => {
//     document.getElementById('drop').scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <main>
// <section className="flex justify-center items-center h-[597px] overflow-hidden relative z-30" style={{
//   background: "radial-gradient(circle, #57A8D1 0%, #2980B9 100%)"
// }}>
//   <div className="text-white w-3/6 text-center flex flex-col justify-center items-center gap-5">
//     <h1 className="text-6xl font-light">Ask Us Anything</h1>
//     <p className="leading-7 text-xl uppercase tracking-wide">Have any questions? We&apos;re here to assist you..</p>
//   </div>
//   <Image src="/DownBtn.svg" alt="Scroll down button" width={40} height={40} className='absolute bottom-10 cursor-pointer' onClick={scrollToSchools} />
//   <div className="w-60 h-60 border-1 rounded-full border-white opacity-30 absolute -bottom-40 -left-14 z-10" aria-hidden="true"></div>
//   <div className="w-[350px] h-[350px] border-1 rounded-full border-white opacity-30 absolute -bottom-48 -left-24 z-10"></div>
//   <div className="w-[493px] h-[493px] border-1 rounded-full border-white opacity-30 absolute -bottom-60 -left-40 z-10"></div>
//   <div className="w-[606px] h-[606px] border-1 rounded-full border-white opacity-30 absolute -bottom-64 -left-44 z-10"></div>

//   <div className="w-80 h-80 border-1 rounded-full border-white opacity-30 absolute -bottom-32 -right-44 z-10"></div>
//   <div className="w-[452px] h-[452px] border-1 rounded-full border-white opacity-30 absolute -bottom-40 -right-52 z-10"></div>
//   <div className="w-[637px] h-[637px] border-1 rounded-full border-white opacity-30 absolute -bottom-48 -right-60 z-10"></div>
//   <div className="w-[783px] h-[783px] border-1 rounded-full border-white opacity-30 absolute -bottom-56 -right-64 z-10"></div>
// </section>

//       <section className='w-10/12 m-auto mt-20 flex items-center justify-center' id='drop'>
//         <div className="left w-1/2">
//           <Image src="/faqImg.svg" alt="Scroll down button" width={40} height={40} className='w-[730px]' />
//         </div>
//         <div className="right w-1/2">
//           <div className="">
//             <h1 className="text-5xl uppercase pt-14">Frequently <br /> <span className='text-heading_blue'>Ask Questions</span></h1>

//             <Accordion
//               className='mt-10'
//               allowMultipleExpanded={false}
//               preExpanded={[0]}
//             >
//               {
//                 faqs.map((item, i) => {
//                   const [className, setClassName] = useState(null);
//                   return (
//                     <AccordionItem className={`border-2 rounded-lg border-[#D8D8D8] mb-5 accordionItem ${className}`} key={i} uuid={i}>
//                       <AccordionItemHeading>
//                         <AccordionItemButton className='flex'>
//                           <AccordionItemState>
//                             {
//                               ({ expanded }) => {
//                                 setClassName(expanded ? "expanded" : "collapsed");
//                                 return (
//                                   <div className="flex items-center justify-center  w-full">
//                                     <div className="w-1/12 flex items-center justify-center font-semibold text-xl">{item.num}</div>
//                                     <div className="w-10/12 p-2">
//                                       <p className='question ms-0 ml-3 font-semibold text-xl'>{item.question}</p>
//                                     </div>
//                                     <div className={`w-1/12 p-4 rounded-tr-md flex justify-center items-center ${expanded ? 'bg-[#85D0FF]' : "bg-[#D8D8D8]"}`}>
//                                       {expanded ? <FaMinus /> : <FaPlus />}
//                                     </div>
//                                   </div>
//                                 );
//                               }
//                             }
//                           </AccordionItemState>
//                         </AccordionItemButton>
//                       </AccordionItemHeading>

//                       <AccordionItemPanel>
//                         <p className="secondaryText w-11/12 m-auto text-pClr text-lg">{item.ans}</p>
//                       </AccordionItemPanel>
//                     </AccordionItem>
//                   );
//                 })
//               }
//             </Accordion>
//           </div>
//         </div>
//       </section>

// {/* FORM */}
// <section className="m-auto overflow-hidden relative">
//   <div className="w-10/12 m-auto flex flex-col md:flex-row items-center justify-center gap-20 relative py-28">
//     <div className="left w-full md:w-1/2 relative z-30">
//       <form action="">
//         <div className="flex justify-between items-center gap-2 md:gap-10 mb-4">
//           <div className="flex flex-col items-start justify-center gap-1 w-6/12">
//             <label htmlFor="firstName" >First Name</label>
//             <input type="text" name="firstName" id="firstName" placeholder='First Name' className='h-12 w-full rounded-lg p-3 outline-none border-slate-400 border' required />
//           </div>
//           <div className="flex flex-col items-start justify-center gap-1 w-6/12">
//             <label htmlFor="lastName" className='text-sm font-medium leading-6'>Last Name</label>
//             <input type="text" name="lastName" id="lastName" placeholder='Last Name' className='h-12 w-full rounded-lg p-3 outline-none border-slate-400 border' required />
//           </div>
//         </div>

//         <div className="flex flex-col mb-4">
//           <label htmlFor="email" className='text-sm font-medium leading-6'>Email</label>
//           <input type="email" name="email" id="email" placeholder='Example@company.com' required className='h-12 w-full rounded-lg p-3 outline-none border-slate-400 border' />
//         </div>

//         <div className=" mb-4">
//           <label htmlFor="phone" className='text-sm font-medium leading-6'>Phone number</label>
//           <div className='h-12 w-full rounded-lg outline-none border-slate-400 border phone-input'>
//             <select id="country-code" name="country-code" className='h-11 rounded-l-lg outline-none'>
//               <option value="PK">PK +92</option>
//               <option value="IND">IND +91</option>
//             </select>
//             <input type="tel" id="phone" name="phone" placeholder="Phone number" className='h-11 md:w-10/12 px-3 outline-none' />
//           </div>
//         </div>

//         <div className="flex flex-col mb-5">
//           <label htmlFor="message" className='text-sm font-medium leading-6'>Message</label>
//           <textarea name="message" id="message" className='h-32 w-full rounded-lg p-3 outline-none border-slate-400 border resize-none'></textarea>
//         </div>

//         <div className="flex mb-8 gap-3 items-center justify-start">
//           <input type="checkbox" id="myCheckbox" className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded outline-none " />
//           <p className="font-medium text-base">You agree to our friendly <a href="" className='underline'>privacy policy.</a></p>
//         </div>

//         <button className="button-filledext">
//           Send Message
//         </button>
//       </form>
//     </div>

//     <div className="right w-full md:w-1/2 relative z-30">
//       <div className="flex flex-col gap-4">
//         <h2 className="uppercase font-light text-4xl md:text-5xl text-heading_blue tracking-wider">Get in Touch</h2>

//         <p className="text-sm md:text-xl text-t_grey">Lorem ipsum dolor sit amet consectetur. Eu egestas libero viverra vulputate amet nunc lectus non ac. Arcu diam nullam ultrices consectetur. Gravida enim in sagittis mauris aliquam duis.</p>

//         <button className="button-filled">
//           Contact us
//         </button>
//       </div>
//     </div>
//   </div>

//   <div className="w-96 h-96 border-2 rounded-full border-grey absolute -bottom-60 -right-36  z-10"></div>
//   <div className="border-2 rounded-full border-grey  absolute -bottom-60 -right-36 z-10" style={{ width: '456px', height: '456px' }}></div>
//   <div className="border-2 rounded-full border-grey opacity-65 absolute -bottom-60 -right-36 z-10" style={{ width: '526px', height: '526px' }}></div>
//   <div className="border-2 rounded-full border-grey opacity-65 absolute -bottom-60 -right-36 z-10" style={{ width: '599px', height: '599px' }}></div>

//   <Image src='./Ellipse 45.svg' width={116} height={116} alt="Ellipse Image" className='absolute top-1/3 right-0' />
// </section>
//     </main>
//   )
// }

// export default Page;

"use client"

import { faqs } from '../data';
import Image from 'next/image';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Page = () => {
  const scrollToSchools = () => {
    document.getElementById('drop').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <section className="flex justify-center items-center h-[597px] overflow-hidden relative z-30" style={{
        background: "radial-gradient(circle, #57A8D1 0%, #2980B9 100%)"
      }}>
        <div className="text-white w-3/6 text-center flex flex-col justify-center items-center gap-5">
          <h1 className="text-6xl font-light">Ask Us Anything</h1>
          <p className="leading-7 text-xl uppercase tracking-wide">Have any questions? We&apos;re here to assist you..</p>
        </div>
        <Image src="/DownBtn.svg" alt="Scroll down button" width={40} height={40} className='absolute bottom-10 cursor-pointer' onClick={scrollToSchools} />
        <div className="w-60 h-60 border-1 rounded-full border-white opacity-15 absolute -bottom-20 -left-44 z-10" aria-hidden="true"></div>
        <div className="w-[350px] h-[350px] border-1 rounded-full border-white opacity-15 absolute -bottom-24 -left-48 z-10"></div>
        <div className="w-[493px] h-[493px] border-1 rounded-full border-white opacity-15 absolute -bottom-28 -left-56 z-10"></div>
        <div className="w-[606px] h-[606px] border-1 rounded-full border-white opacity-15 absolute -bottom-32 -left-60 z-10"></div>

        <div className="w-80 h-80 border-1 rounded-full border-white opacity-15 absolute -top-40 right-10 z-10"></div>
        <div className="w-[452px] h-[452px] border-1 rounded-full border-white opacity-15 absolute -top-48 -right-12 z-10"></div>
        <div className="w-[637px] h-[637px] border-1 rounded-full border-white opacity-15 absolute -top-60 -right-36 z-10"></div>
        <div className="w-[783px] h-[783px] border-1 rounded-full border-white opacity-15 absolute -top-64 -right-56 z-10"></div> 
      </section>


      <section className='w-10/12 m-auto mt-20 flex items-center justify-center' id='drop'>
        <div className="left w-1/2">
          <Image src="/faqImg.svg" alt="Scroll down button" width={40} height={40} className='w-[730px]' />
        </div>
        <div className="right w-1/2">
          <div className="">
            <h1 className="text-5xl uppercase pt-14">Frequently <br /> <span className='text-heading_blue'>Ask Questions</span></h1>

            <Accordion className='mt-10' allowMultipleExpanded={false} preExpanded={[0]}>
              {
                faqs.map((item, i) => (
                  <AccordionItem className='border-2 rounded-lg border-[#D8D8D8] mb-5 accordionItem' key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className='flex'>
                        <AccordionItemState>
                          {({ expanded }) => (
                            <div className="flex items-center justify-center w-full">
                              <div className="w-1/12 flex items-center justify-center font-semibold text-xl">{item.num}</div>
                              <div className="w-10/12 p-2">
                                <p className='question ms-0 ml-3 font-semibold text-xl'>{item.question}</p>
                              </div>
                              <div className={`w-1/12 p-4 rounded-tr-md flex justify-center items-center ${expanded ? 'bg-[#85D0FF]' : "bg-[#D8D8D8]"}`}>
                                {expanded ? <FaMinus /> : <FaPlus />}
                              </div>
                            </div>
                          )}
                        </AccordionItemState>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="secondaryText w-11/12 m-auto text-pClr text-lg">{item.ans}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))
              }
            </Accordion>
          </div>
        </div>
      </section>

      {/* FORM */}
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
    </main>
  )
}

export default Page;