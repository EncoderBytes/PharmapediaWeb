'use client'
import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { PiRanking } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
// import { blogs } from '@/app/data';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { blogs } from '@/app/data';

const page = ({ params }) => {
  // if (params.id === blogs.id) {
  //   console.log("same");

  // } else {
  //   console.log("not same");
  // }
  // const router = useRouter();
  // const { id } = router.query;

  // FORM SUBSCRIPTION
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!email) {
  //     setMessage('Please enter a valid email.');
  //     return;
  //   }

  //   try {
  //     const response = await fetch('/api/subscribe', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       setEmail('');
  //       setMessage('Thank you for subscribing!');
  //     } else {
  //       setMessage(data.error || 'Something went wrong.');
  //     }
  //   } catch (error) {
  //     setMessage('An error occurred. Please try again.');
  //   }
  // };
  return (
    <main>
      {/* <h1>{params.id}</h1> */}
      <section className='h-[577px] flex justify-center items-center' style={{ backgroundImage: "url('/SubBlogMain.svg')" }}>
        <div className="w-10/12 m-auto">
          <div className="text-white mb-3">
            <h2 className="text-6xl font-medium tracking-wider mb-3 mt-20 w-11/12">{params.id} Efficient Rules How to Organize Your Working Place</h2>
            <p className="text-4xl">Relationship tips couples therapists are giving all <br /> the time</p>
          </div>
          <div className="flex items-center justify-between w-1/2 text-white">
            <p className="text-xl">by Joanna Wellick</p>
            <div className="w-6 border-1 border-white"></div>
            <CiClock2 />
            <p className="text-sm">2 minute read</p>
            <div className="w-6 border-1 border-white"></div>
            <PiRanking />
            <p className="text-sm">1.6K views</p>
            <div className="w-6 border-1 border-white"></div>
            <FaFacebook className='cursor-pointer' />
            <FaTwitter className='cursor-pointer' />
            <FaPinterest className='cursor-pointer' />
            <p className="text-sm">1.2K shares</p>
          </div>
        </div>
      </section>

      <section className='relative overflow-hidden'>
        <div className="w-96 h-96 border-3 rounded-full opacity-30 absolute top-36 -right-60" aria-hidden="true"></div>
        <div className="w-[452px] h-[452px] border-3 rounded-full opacity-30 absolute top-28 -right-56" aria-hidden="true"></div>
        <div className="w-[597px] h-[597px] border-3 rounded-full opacity-30 absolute top-10 -right-60" aria-hidden="true"></div>
        <div className="w-[697px] h-[697px] border-3 rounded-full opacity-30 absolute -top-5 -right-60" aria-hidden="true"></div>

        <div className="w-96 h-96 border-3 rounded-full opacity-30 absolute bottom-36 -left-60" aria-hidden="true"></div>
        <div className="w-[452px] h-[452px] border-3 rounded-full opacity-30 absolute bottom-28 -left-56" aria-hidden="true"></div>
        <div className="w-[597px] h-[597px] border-3 rounded-full opacity-30 absolute bottom-10 -left-60" aria-hidden="true"></div>
        <div className="w-[697px] h-[697px] border-3 rounded-full opacity-30 absolute -bottom-5 -left-60" aria-hidden="true"></div>
        <div className="flex justify-between items-start mt-20">
          <div className="w-1/12 relative z-40">
            <div className="flex flex-col justify-center items-center gap-12" style={{
              color: '#121416'
            }}>
              <div className="flex flex-col justify-center items-center gap-1">
                <PiRanking />
                <p className="">views <br />
                  1.6K </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-1">
                <CiShare2 />
                <p className="">shares <br />
                  996K</p>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <FaFacebook className='cursor-pointer' />
                <p className="">125</p>
                <FaTwitter className='cursor-pointer' />
                <FaPinterest className='cursor-pointer' />
                <p className="">425</p>
              </div>
            </div>
          </div>

          <div className="w-8/12 relative z-40">
            <div className="">
              <p className="text-lg leading-8 mb-4">Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades.</p>
              <p className="text-lg leading-8 mb-3">Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.</p>
            </div>

            <div className="flex justify-center items-start gap-5 mt-16 mb-10">
              <Image src="/comma.svg" width={41} height={38} alt='Commas' className='mt-5' loading='lazy' />
              <h1 className="text-[46px] font-bold leading-tight uppercase">Knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral.
              </h1>
            </div>

            <div className="">
              <p className="text-lg leading-8 mb-4">Foam padding in the insoles leather fines5 quality staple flat slip-on design pointed toe off-duty shoe. Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design.
              </p>
              <p className="text-lg leading-8 mb-3"> Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.</p>
            </div>

            <div className="">
              <div className="mt-16">
                <h1 className="text-4xl font-bold leading-tight uppercase mb-3">Eu ridiculus fringilla aenean</h1>
                <p className="text-lg leading-8 mb-4 ml-2">Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque vulputate dolor eget dapibus. Nec vitae eros ullamcorper laoreet dapibus mus ac ante viverra. A aenean sit augue curabitur et parturient nisi sed enim. Nulla nec quis sit quisque sem commodo ultricies neque. Lorem eget venenatis dui ante luctus ultricies tellus montes. Quis in sapien tempus.</p>

                <ul className='ml-24 my-14 list-disc'>
                  <li>Crisp fresh iconic elegant timeless clean perfume</li>
                  <li> Neck straight sharp silhouette and dart detail</li>
                  <li>Machine wash cold slim fit premium stretch selvedge denim comfortable low waist</li>
                </ul>

                <p className="text-lg leading-8 mb-4 ml-2">See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket. Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design.</p>
              </div>

              <div className="flex justify-center items-center">
                <div className="w-1/4 flex items-center justify-center gap-2 py-3 border-b">
                  <p className="">694 <span className="font-semibold text-pClr"> Share</span></p>
                </div>

                <div className="w-1/4 flex items-center justify-center gap-2 py-3 border-b border-facebook">
                  <FaFacebook className='text-facebook' />
                  <p className=""><span className='uppercase font-semibold' style={{
                    color: "#3B5998"
                  }} >Share </span>694</p>
                </div>

                <div className="w-1/4 flex items-center justify-center gap-2 py-3 border-b border-twitter">
                  <FaTwitter className='text-twitter' />
                  <p className="">694 <span className='uppercase font-semibold text-twitter'>TWEET</span></p>
                </div>

                <div className="w-1/4 flex items-center justify-center gap-2 py-3 border-b border-pintrest">
                  <FaPinterest className='text-pintrest' />
                  <p className="">694</p>
                </div>
              </div>
              <button className="button-filledext my-20 tracking-widest">VIEW COMMENTS (0)</button>
            </div>

            <div className="">
              <div className="uppercase mb-5">
                <h1 className="text-4xl font-bold leading-tight uppercase">Sign Up for Our Newsletters</h1>
                <h1 className="text-[33px] font-bold leading-tight uppercase text-[#A9A9A9]">Get notified of the best deals on our WordPress themes.</h1>
              </div>

              <form className='flex justify-center items-center gap-7'>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className='h-16 w-full rounded-sm bg-transparent p-3 outline-none border-slate-200 border-1'
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className='h-16 w-full rounded-sm bg-transparent p-3 outline-none border-slate-200 border-1'
                />
                <button type="submit" className='button-filledext2 tracking-widest'>Subscribe</button>
              </form>

              <div className="flex mb-8 gap-3 items-center justify-start my-6">
                <input type="checkbox" id="myCheckbox" className="form-checkbox h-5 w-5 text-blue-600 border-gray-500 rounded outline-none " />
                <p className="font-medium text-[#A9A9A9]">By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.
                </p>
              </div>
            </div>
          </div>

          <div className="w-3/12 px-6 relative z-40">
            <h2 className="font-semibold text-2xl mb-6">Follow Us</h2>

            <div className="flex items-center justify-center gap-12  mb-6">
              <div className="">
                <FaFacebook className='text-2xl cursor-pointer' />
                <p className="">10</p>
              </div>

              <div className="">
                <FaTwitter className='text-2xl cursor-pointer' />
                <p className="">69k</p>
              </div>

              <div className="">
                <FaSquareInstagram className='text-2xl cursor-pointer' />
                <p className="">45</p>
              </div>

              <div className="">
                <FaPinterest className='text-2xl cursor-pointer' />
                <p className="">69k</p>
              </div>

              <div className="">
                <FaYoutube className='text-2xl cursor-pointer' />
                <p className="">69k</p>
              </div>
            </div>

            <div className="pb-3">
              <p className="mb-4 text-xl"><span className='font-semibold'>Subscription</span> Subscribe to our newsletter and receive a selection of cool articles every weeks
              </p>

              {/* <form onSubmit={handleSubmit}> */}
              <form>
                <input
                  type="email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className='h-16 w-full rounded-sm bg-transparent p-3 outline-none border-slate-400 border-1'
                />
                <button type="submit" className='block button-filledext2 mt-2'>Subscribe</button>
              </form>
              {/* {message && <p>{message}</p>} */}

              <div className="flex mb-8 gap-3 items-center justify-start my-6">
                <input type="checkbox" id="myCheckbox" className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded outline-none" />
                <p className="text-sm text-[#A9A9A9]">By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.
                </p>
              </div>
            </div>

            <h2 className="font-semibold text-2xl mt-10 mb-4">The Latest</h2>

            <div className="text-white mb-4 p-4" style={{ backgroundImage: "url('/Group 237624.svg')" }}>
              <p className="">10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships</p>

              <div className="flex justify-center items-center gap-3 mt-3">
                <p className="text-base">June 21,2022</p>
                <div className="w-6 border-1 border-white"></div>
                <CiClock2 />
                <p className="text-sm">2 minute read</p>
              </div>
            </div>

            <div className="mb-12 mt-14 w-11/12 m-auto">
              <p className="font-semibold leading-tight">10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships</p>

              <div className="flex justify-center items-center gap-5 my-3">
                <p className="text-base font-semibold">June 21,2022</p>
                <div className="w-6 border-1 border-t_grey"></div>
                <CiClock2 />
                <p className="text-sm font-semibold">2 minute read</p>
              </div>
            </div>

            <div className="mb-12 mt-3 w-11/12 m-auto">
              <p className="font-semibold leading-tight">10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships</p>

              <div className="flex justify-center items-center gap-5 my-3">
                <p className="text-base font-semibold">June 21,2022</p>
                <div className="w-6 border-1 border-t_grey"></div>
                <CiClock2 />
                <p className="text-sm font-semibold">2 minute read</p>
              </div>
            </div>

            <div className="mb-12 mt-3 w-11/12 m-auto">
              <p className="font-semibold leading-tight">10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships</p>

              <div className="flex justify-center items-center gap-5 my-3">
                <p className="text-base font-semibold">June 21,2022</p>
                <div className="w-6 border-1 border-t_grey"></div>
                <CiClock2 />
                <p className="text-sm font-semibold">2 minute read</p>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section className="">
        <div className="">
          <div className="flex justify-center items-center flex-wrap gap-7">

            {/* <Link href={`/Blog/${blogData.slug}`} key={blogData.id}> */}
            {blogs.slice(3, 6).map((blogData) => (


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
            {/* {blogs.map((blogData) => {
              console.log(params.id)
              if (params.id == blogData._id) {
                return (
                  <div className="relative my-5" style={{ width: "400px" }} key={blogData._id}>
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
                          <div className="w-6 border-1 border-gray-300"></div>
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
                        <Link href={`Blog/Blogs/${blogData._id}`} className="text-lg font-semibold hover:border-b-2 border-black">
                          View Post
                        </Link>
                      </div>
                    </div>
                  </div>
                );

              } else {
                return null;
              }
            })} */}

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

        <Image src='/Ellipse 45.svg' width={116} height={116} alt="Ellipse Image" className='absolute top-1/3 right-0' />
      </section>
    </main >
  )
}

export default page
