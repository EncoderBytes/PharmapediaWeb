// "use client";

// import Image from 'next/image';
// import { FaFacebookF, FaInstagram, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
// import { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// // import Footer from './Footer';
// import { IoIosSearch } from "react-icons/io";

// export default function Navbar() {
//   const [moveTo, setMoveTo] = useState("Home");
//   const [menuOpen, setMenuOpen] = useState(false);

//   const [query, setQuery] = useState('');
//   const [showSearchBox, setShowSearchBox] = useState(false);

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Implement the search logic or API call here
//     console.log('Search query:', query);
//   };

//   const toggleSearchBox = () => {
//     setShowSearchBox(!showSearchBox);
//   };

//   return (
//     <>
//       <Head>
//         <title>Pharmapedia</title>
//         <meta name="description" content="Pharmapedia - Your reliable source for pharmaceutical products and information." />
//         <meta name="keywords" content="Pharmapedia, pharmaceutical, products, health, medicine" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link rel="canonical" href="https://www.pharmapedia.pro" />
//       </Head>
//       <nav className="w-full">
//         <div className={`h-10 w-full flex items-center justify-center ${moveTo === "Home" ? "bg-blue text-white" : "bg-white text-black"}`}>
//           <div className="w-11/12 sm:w-9/12 flex m-auto justify-between">
//             <div className="flex items-center  gap-3 text-3xl">
//               <a href="https://www.facebook.com" className='sm:text-base text-sm border-r border-borderBlue md:border-r-2 pr-3 py-1' aria-label="Facebook">
//                 <FaFacebookF className='cursor-pointer' />
//               </a>
//               <a href="https://www.youtube.com" className='sm:text-base text-sm border-r border-borderBlue md:border-r-2 pr-3 py-1' aria-label="YouTube">
//                 <FaYoutube className='cursor-pointer' />
//               </a>
//               <a href="https://www.instagram.com" className='sm:text-base text-sm' aria-label="Instagram">
//                 <FaInstagram className='cursor-pointer' />
//               </a>
//             </div>

//             <div className="flex-row items-center justify-end gap-6 sm:flex font-semibold text-[9px] sm:text-sm">
//               <p className="">SAHARBEGUM@PHARMAPEDIA.PRO</p>
//               <p className="">+923494428783</p>
//             </div>
//           </div>
//         </div>
//         <div className={`h-20 md:h-28 flex items-center justify-center ${moveTo !== "Home" ? "absolute bg-transparent w-full top-12 z-50" : "block"} `}>
//           <div className="w-10/12 flex justify-between items-center m-auto">
//             <div className="flex-shrink-0">
//               <Link href="/" onClick={() => setMoveTo("Home")}>
//                 <Image
//                   src="/logo.svg"
//                   alt="Pharmapedia Logo"
//                   width={289}
//                   height={87}
//                   priority
//                 />
//               </Link>
//             </div>
//             <div className="flex-grow hidden lg:flex items-center justify-center">
//               <ul className={`flex justify-center items-center gap-7 text-base xl:text-lg ${moveTo !== "Home" ? "text-white" : ""}`}>
//                 <li onClick={() => setMoveTo("Home")}>
//                   <Link href="/" className={`${moveTo === "Home" ? "text-hover_blue font-bold" : ""}`}>Home</Link>
//                 </li>
//                 <li onClick={() => setMoveTo("About")}>
//                   {/* <a href="/About" className={`${moveTo === "About" ? "text-hover_blue2 font-bold" : ""}`}>About us</a> */}
//                   <Link href="/About" className={`${moveTo === "About" ? "text-hover_blue2 font-bold" : ""}`}>About us</Link>
//                 </li>
//                 <li onClick={() => setMoveTo("Blog")}>
//                   <Link href="/Blog" className={`${moveTo === "Blog" ? "text-hover_blue2 font-bold" : ""}`}>Blogs</Link>
//                 </li>
//                 <li onClick={() => setMoveTo("Our Products")}>
//                   <a href="#our-products" className={`${moveTo === "Our Products" ? "text-hover_blue2 font-bold" : ""}`}>Our Products</a>
//                 </li>
//                 <li onClick={() => setMoveTo("FAQs")}>
//                   <Link href="/Faqs" className={`${moveTo === "FAQs" ? "text-hover_blue2 font-bold" : ""}`}>FAQs</Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="hidden lg:flex items-center justify-center gap-5">
//               <div>
//                 {!showSearchBox && <IoIosSearch onClick={toggleSearchBox} style={{ cursor: 'pointer', fontSize: '34px' }} />}
//                 {showSearchBox && (
//                   <form onSubmit={handleSubmit} className='flex justify-center items-center'>
//                     <IoIosSearch className='text-white' onClick={toggleSearchBox} style={{ cursor: 'pointer', fontSize: '30px' }} />
//                     {/* <label htmlFor="search" style={{ display: 'none' }}>Search:</label> */}
//                     <input
//                       type="text"
//                       id="search"
//                       name="q"
//                       value={query}
//                       onChange={handleInputChange}
//                       placeholder="Search"
//                       className='outline-none border-1 border-black rounded-md p-1'
//                       autoFocus
//                     />
//                   </form>
//                 )}
//               </div>
//               <button className={` ${moveTo !== "Home" ? "button-outlined2" : "button-outlined"} `}>Contact Us</button>
//             </div>
//             <div className="lg:hidden text-2xl">
//               <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
//                 {menuOpen ? <FaTimes /> : <FaBars />}
//               </button>
//             </div>
//           </div>
//         </div>
//         {menuOpen && (
//           <div className="lg:hidden bg-slate-100 w-full">
//             <ul className='flex flex-col items-center gap-4 py-4 text-lg'>
//               <li onClick={() => { setMoveTo("Home"); setMenuOpen(false); }}>
//                 <a href="#home" className={`${moveTo === "Home" ? "text-hover_blue font-bold" : "text-black"}`}>Home</a>
//               </li>
//               <li onClick={() => { setMoveTo("About us"); setMenuOpen(false); }}>
//                 <a href="#about-us" className={`${moveTo === "About us" ? "text-hover_blue font-bold" : "text-black"}`}>About us</a>
//               </li>
//               <li onClick={() => { setMoveTo("Blogs"); setMenuOpen(false); }}>
//                 <a href="#blogs" className={`${moveTo === "Blogs" ? "text-hover_blue font-bold" : "text-black"}`}>Blogs</a>
//               </li>
//               <li onClick={() => { setMoveTo("Our Products"); setMenuOpen(false); }}>
//                 <a href="#our-products" className={`${moveTo === "Our Products" ? "text-hover_blue font-bold" : "text-black"}`}>Our Products</a>
//               </li>
//               <li onClick={() => { setMoveTo("FAQs"); setMenuOpen(false); }}>
//                 <a href="#faqs" className={`${moveTo === "FAQs" ? "text-hover_blue font-bold" : "text-black"}`}>FAQs</a>
//               </li>
//               <li>
//                 <button className="button-outlined">Contact Us</button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </nav >
//     </>
//   );
// }




"use client";

import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";

export default function Navbar() {
  // Assuming you are in a component or function
  const currentUrl = typeof window !== 'undefined' ? window.location.pathname : '';

  // console.log('Current URL:', currentUrl);

  const [moveTo, setMoveTo] = useState(currentUrl);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [showSearchBox, setShowSearchBox] = useState(false);

  useEffect(() => {
    // Extract current pathname from window.location
    const path = window.location.pathname;
    // Determine active link based on pathname
    if (path === "/") {
      setMoveTo("Home");
    } else if (path === "/About") {
      setMoveTo("About");
    } else if (path === "/Blog") {
      setMoveTo("Blog");
    } else if (path === "/Products") {
      setMoveTo("Products");
    } else if (path === "/Faqs") {
      setMoveTo("FAQs");
    } else {
      setMoveTo("Home"); // Default to Home if path not matched
    }

    // Cleanup function to prevent memory leaks
    // return () => {

    // };
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement the search logic or API call here
    console.log('Search query:', query);
  };

  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
  };

  return (
    <>
      <Head>
        <title>Pharmapedia</title>
        <meta name="description" content="Pharmapedia - Your reliable source for pharmaceutical products and information." />
        <meta name="keywords" content="Pharmapedia, pharmaceutical, products, health, medicine" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.pharmapedia.pro" />
      </Head>
      <nav className="w-full">
        <div className={`h-10 w-full flex items-center justify-center ${moveTo === "Home" ? "bg-blue text-white" : "bg-white text-black"}`}>
          <div className="w-11/12 sm:w-9/12 flex m-auto justify-between">
            <div className="flex items-center  gap-3 text-3xl">
              <a href="https://www.facebook.com" className='sm:text-base text-sm border-r border-borderBlue md:border-r-2 pr-3 py-1' aria-label="Facebook">
                <FaFacebookF className='cursor-pointer' />
              </a>
              <a href="https://www.youtube.com" className='sm:text-base text-sm border-r border-borderBlue md:border-r-2 pr-3 py-1' aria-label="YouTube">
                <FaYoutube className='cursor-pointer' />
              </a>
              <a href="https://www.instagram.com" className='sm:text-base text-sm' aria-label="Instagram">
                <FaInstagram className='cursor-pointer' />
              </a>
            </div>

            <div className="flex-row items-center justify-end gap-6 sm:flex font-semibold text-[9px] sm:text-sm">
              <p className="">saharbegum@pharmapedia.pro</p>
              <p className="">+92&nbsp;3494428783</p>
            </div>
          </div>
        </div>
        <div className={`h-20 md:h-28 flex items-center justify-center ${moveTo !== "Home" ? "absolute bg-transparent w-full top-12 z-50" : "block"} `}>
          <div className="w-10/12 flex justify-between items-center m-auto">
            <div className="flex-shrink-0">
              <Link href="/" onClick={() => setMoveTo("Home")}>
                <Image
                  src="/logo.svg"
                  alt="Pharmapedia Logo"
                  width={289}
                  height={87}
                  priority
                />
              </Link>
            </div>
            <div className="flex-grow hidden lg:flex items-center justify-center">
              <ul className={`flex justify-center items-center gap-7 text-base xl:text-lg ${moveTo !== "Home" ? "text-white" : ""}`}>
                <li onClick={() => setMoveTo("Home")}>
                  <Link href="/" className={`${moveTo === "Home" ? "text-hover_blue font-bold" : ""}`}>Home</Link>
                </li>
                <li onClick={() => setMoveTo("About")}>
                  <Link href="/About" className={`${moveTo === "About" ? "text-hover_blue2 font-bold" : ""}`}>About us</Link>
                </li>
                <li onClick={() => setMoveTo("Blog")}>
                  <Link href="/Blog" className={`${moveTo === "Blog" ? "text-hover_blue2 font-bold" : ""}`}>Blogs</Link>
                </li>
                {/* <li onClick={() => setMoveTo("Products")}>
                  <a href="/Products" className={`${moveTo === "Products" ? "text-hover_blue2 font-bold" : ""}`}>Our Products</a>
                </li> */}
                <li onClick={() => setMoveTo("Products")}>
                  <Link href="/Products" className={`${moveTo === "Products" ? "text-hover_blue2 font-bold" : ""}`}>Products</Link>
                </li>
                <li onClick={() => setMoveTo("FAQs")}>
                  <Link href="/Faqs" className={`${moveTo === "FAQs" ? "text-hover_blue2 font-bold" : ""}`}>FAQs</Link>
                </li>
              </ul>
            </div>
            <div className="hidden lg:flex items-center justify-center gap-5">
              <div>
                {!showSearchBox && <IoIosSearch onClick={toggleSearchBox} style={{ cursor: 'pointer', fontSize: '34px' }} />}
                {showSearchBox && (
                  <form onSubmit={handleSubmit} className='flex justify-center items-center'>
                    <IoIosSearch className='text-white' onClick={toggleSearchBox} style={{ cursor: 'pointer', fontSize: '30px' }} />
                    <input
                      type="text"
                      id="search"
                      name="q"
                      value={query}
                      onChange={handleInputChange}
                      placeholder="Search"
                      className='outline-none border-1 border-black rounded-md p-1'
                      autoFocus
                    />
                  </form>
                )}
              </div>
              <button className={` ${moveTo !== "Home" ? "button-outlined2" : "button-outlined"} `}>Contact Us</button>
            </div>
            <div className="lg:hidden text-2xl">
              <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-slate-100 w-full">
            <ul className='flex flex-col items-center gap-4 py-4 text-lg'>
              <li onClick={() => { setMoveTo("Home"); setMenuOpen(false); }}>
                <a href="#home" className={`${moveTo === "Home" ? "text-hover_blue font-bold" : "text-black"}`}>Home</a>
              </li>
              <li onClick={() => { setMoveTo("About us"); setMenuOpen(false); }}>
                <a href="#about-us" className={`${moveTo === "About us" ? "text-hover_blue font-bold" : "text-black"}`}>About us</a>
              </li>
              <li onClick={() => { setMoveTo("Blogs"); setMenuOpen(false); }}>
                <a href="#blogs" className={`${moveTo === "Blogs" ? "text-hover_blue font-bold" : "text-black"}`}>Blogs</a>
              </li>
              <li onClick={() => { setMoveTo("Our Products"); setMenuOpen(false); }}>
                <a href="#our-products" className={`${moveTo === "Our Products" ? "text-hover_blue font-bold" : "text-black"}`}>Our Products</a>
              </li>
              <li onClick={() => { setMoveTo("FAQs"); setMenuOpen(false); }}>
                <a href="#faqs" className={`${moveTo === "FAQs" ? "text-hover_blue font-bold" : "text-black"}`}>FAQs</a>
              </li>
              <li>
                <button className="button-outlined">Contact Us</button>
              </li>
            </ul>
          </div>
        )}
      </nav >
    </>
  );
}