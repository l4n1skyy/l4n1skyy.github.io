import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { Link } from 'react-router-dom'

export const HomeView = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={twMerge('md:h-screen min-h-screen w-full bg-slate-900 flex flex-col', className)}
      {...props}
    >
      {/* Wrapper */}
      <div className="min-h-full md:h-full w-[70%] mx-auto flex flex-col justify-start">
        {/* Top */}
        <div className="md:h-1/3 h-fit mt-[10%] md:mt-0 w-full flex flex-col justify-center items-start">
          {/* Title */}
          <div className="flex flex-row">
            <p className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 inline-block text-transparent bg-clip-text font-bold text-5xl md:text-7xl">
              l4n1skyy
            </p>
            <img
              className="h-4 w-5 md:h-8 md:w-10 mt-10 ml-1"
              src="/assets/image-1.png"
              alt="spider"
            />
          </div>
          <p className="text-gray-600 font-semibold text-lg md:text-2xl md:mt-5 md:ml-3">
            imma swerve bend that corner wooah 🥀🥀🥀
          </p>
        </div>
        {/* Bottom */}
        <div className="h-2/3 w-full flex md:flex-row flex-col mb-[10%] md:mb-0">
          {/* Left */}
          <div className="h-full w-full md:w-3/5 flex flex-col justify-start items-start mb-[15%] md:mb-0 mt-[15%] md:mt-0">
            <div className="flex flex-col justify-start w-fit h-full md:ml-4">
              {/* Image 2 */}
              <img className="object-contain h-3/5 w-fit" src="/assets/image-2.jpg" alt="main"/>
            </div>
          </div>
          {/* Right */}
          <div className="h-fit w-full md:w-2/5 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center w-fit h-full md:mt-8">
              {/* Title */}
              <p className="px-3 text-2xl md:text-4xl text-white font-light">Index:</p>
              {/* About Me */}
              <div className="md:my-4 my-2 rounded-lg h-fit flex flex-col relative">
                <div className="flex justify-between">
                  <Link
                    className="whitespace-nowrap rounded-full mx-1 px-3 py-1 bg-lime-400/10 md:text-2xl text-md font-light text-lime-200"
                    to="/about"
                  >
                    About Me
                  </Link>
                </div>
                <p className="md:text-lg text-sm px-3 md:pt-2 pt-1 text-gray-400 whitespace-pre-wrap">
                  A little about me, my hobbies, etc
                </p>
              </div>
              {/* Projects */}
              <div className="md:my-4 my-2 rounded-lg h-fit flex flex-col relative">
                <div className="flex justify-between">
                  <Link
                    className="whitespace-nowrap rounded-full mx-1 px-3 py-1 bg-lime-400/10 md:text-2xl text-md font-light text-lime-200"
                    to="/projects"
                  >
                    Projects
                  </Link>
                </div>
                <p className="md:text-lg text-sm px-3 md:pt-2 pt-1 text-gray-400 whitespace-pre-wrap">
                  My current, past and future projects
                </p>
              </div>
              {/* Contact */}
              <div className="md:my-4 my-2 rounded-lg h-fit flex flex-col relative">
                <div className="flex justify-between">
                  <Link
                    className="whitespace-nowrap rounded-full mx-1 px-3 py-1 bg-lime-400/10 md:text-2xl text-md font-light text-lime-200"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </div>
                <p className="md:text-lg text-sm px-3 md:pt-2 pt-1 text-gray-400 whitespace-pre-wrap">
                  Links to my socials and other accounts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* children for extensibility */}
      {children}
    </div>
  );
}