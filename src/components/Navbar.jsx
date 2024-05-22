"use client"
// import React from 'react'
// import Link from 'next/link';
// // import logo from ''

// const Navbar = () => {
//   return (
//     <nav className='nav bg-blue h-20 flex justify-center items-center'>
//       <div className="w-10/12">
//         <div className="flex justify-between items-center text-white">
//           <ul className='flex items-center justify-center gap-16 uppercase text-xl'>
//             <li><Link href="/">Home</Link></li>
//             <li><Link href="/blogs">Blogs</Link></li>
//             <li><Link href="/products">Products</Link></li>
//             <li><Link href="/faqs">FAQs</Link></li>
//             <li><Link href="/contact">Contact Us</Link></li>
//             <li className='bg-white text-blue rounded-3xl h-12 w-40 flex items-center justify-center'>
//               <a href="/download">Download</a>
//             </li>
//           </ul>
//           <div className="">
//             <img src="/logo.svg" alt="Company Logo" width={200} height={300} />
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

// import Link from 'next/link';
// import { useState } from 'react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="nav bg-blue h-20 flex justify-center items-center">
//       <div className="w-10/12 flex justify-between items-center">
//         <div className="block lg:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-white focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <div className="hidden lg:block">
//           <img src="/logo.svg" alt="Company Logo" width={200} height={300} />
//         </div>
//         <div className={`fixed inset-0 bg-blue bg-opacity-95 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 lg:static lg:bg-transparent lg:transform-none lg:transition-none lg:opacity-100 lg:w-auto lg:flex lg:items-center`}>
//           <ul className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16 uppercase text-xl text-white lg:bg-transparent h-full lg:h-auto">
//             <li><Link href="/">Home</Link></li>
//             <li><Link href="/blogs">Blogs</Link></li>
//             <li><Link href="/products">Products</Link></li>
//             <li><Link href="/faqs">FAQs</Link></li>
//             <li><Link href="/contact">Contact Us</Link></li>
//             <li className="bg-white text-blue rounded-3xl h-12 w-40 flex items-center justify-center">
//               <a href="/download">Download</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }


import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav bg-blue h-20 flex justify-center items-center">
      <div className="w-10/12 flex justify-between items-center">
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-blue bg-opacity-95 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 lg:static lg:bg-transparent lg:transform-none lg:transition-none lg:opacity-100 lg:w-auto lg:flex lg:items-center`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white lg:hidden"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16 uppercase text-xl text-white lg:bg-transparent h-full lg:h-auto">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li className="bg-white text-blue rounded-3xl h-12 w-40 flex items-center justify-center">
              <a href="/download">Download</a>
            </li>
          </ul>
        </div>

        <div className="md:w-52 w-40 lg:block">
          <img src="/logo.svg" alt="Company Logo" width={200} height={300} />
        </div>
      </div>
    </nav>
  );
}
