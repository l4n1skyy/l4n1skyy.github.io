import React from 'react'
import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'

export const ContactView = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={`md:h-screen min-h-screen w-full bg-slate-900 flex flex-col overflow-y-scroll`}
      {...props}
    >
      <div className="min-h-full md:h-full md:w-[70%] w-full mx-auto flex md:flex-row flex-col justify-start">
        {/* Top */}
        <div className="md:h-1/3 h-fit mt-[10%] md:mt-0 md:w-[60%] pb-6 md:pb-0 w-[70%] mx-auto flex flex-col justify-center items-start self-start md:sticky top-0">
          {/* Title */}
          <p className="text-purple-400 font-bold text-5xl md:text-7xl">
            <Link className="text-lime-200" to="/">{'< '}</Link>
            Contact
          </p>
          <p className="text-gray-600 font-semibold text-lg md:text-2xl md:ml-[5.5%] mt-1 md:mt-0">
            Links to my socials and other accounts
          </p>
        </div>
        {/* Right */}
        <div className="md:w-[40%] w-full min-h-full justify-center">
          <div className="min-h-full md:w-fit w-fit mx-auto flex flex-col justify-center md:pt-[30%] pb-[30%]">
            {/* Discord */}
            <div className="md:my-3 my-1 rounded-lg h-fit space-y-2 flex flex-col relative">
              <div className="flex">
                <a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer"
                  className="px-3 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                  <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                  <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                  <span className="relative md:text-xl text-md">Discord</span>
                </a>
                <p className="text-xs md:text-lg text-gray-400 whitespace-pre-wrap pl-3 md:pt-2 pt-4">l4n1skyy</p>
              </div>
            </div>
            {/* Protonmail */}
            <div className="md:my-3 my-1 rounded-lg h-fit space-y-2 flex flex-col relative">
              <div className="flex">
                <a href="mailto:l4n1skyy@protonmail.com" target="_blank" rel="noopener noreferrer"
                  className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                  <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                  <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                  <span className="relative md:text-xl text-md">Email</span>
                </a>
                <p className="text-xs md:text-lg text-gray-400 whitespace-pre-wrap pl-3 md:pt-2 pt-4">l4n1skyy@protonmail.com</p>
              </div>
            </div>
            {/* Gmail */}
            <div className="md:my-3 my-1 rounded-lg h-fit space-y-2 flex flex-col relative">
              <div className="flex">
                <a href="mailto:lanishaanusri28@gmail.com" target="_blank" rel="noopener noreferrer"
                  className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                  <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                  <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                  <span className="relative md:text-xl text-md">Email</span>
                </a>
                <p className="text-xs md:text-lg text-gray-400 whitespace-pre-wrap pl-3 md:pt-2 pt-4">lanishaanusri28@gmail.com</p>
              </div>
            </div>
            {/* Divider */}
            <p className="text-2xl font-light text-lime-100 rounded-full md:py-1 mx-auto">------------------------</p>
            {/* Resume */}
            <div className="md:my-3 my-1 rounded-lg h-fit space-y-2 flex flex-col relative">
              <a href="https://drive.google.com/file/d/1DqUwEKkLRo4HHCRBiDwXRXHle-Fb6Ab3/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <span className="relative md:text-xl text-md">Resume</span>
              </a>
            </div>
            {/* LinkedIn */}
            <div className="md:my-3 my-1 rounded-lg h-fit space-y-2 flex flex-col relative">
              <a href="https://www.linkedin.com/in/lanishaanusri/" target="_blank" rel="noopener noreferrer"
                className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <span className="relative md:text-xl text-md">LinkedIn</span>
              </a>
            </div>
            {/* Github */}
            <div className="md:my-3 my-1 rounded-lg h-fit space-y-2 flex flex-col relative">
              <a href="https://github.com/l4n1skyy/" target="_blank" rel="noopener noreferrer"
                className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <span className="relative md:text-xl text-md">Github</span>
              </a>
            </div>
            {/* Divider */}
            <p className="text-2xl font-light text-lime-100 rounded-full md:py-1 mx-auto">------------------------</p>
            {/* Instagram */}
            <div className="md:my-3 my-1 rounded-lg h-fit space-y-2 flex flex-col relative">
              <a href="https://www.instagram.com/l4n1skyy/" target="_blank" rel="noopener noreferrer"
                className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <span className="relative md:text-xl text-md">Instagram</span>
              </a>
            </div>
            {/* Steam */}
            <div className="md:my-3 my-1 rounded-lg h-fit space-y-2 flex flex-col relative">
              <a href="https://steamcommunity.com/id/l4n1skyy/" target="_blank" rel="noopener noreferrer"
                className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <span className="relative md:text-xl text-md">Steam</span>
              </a>
            </div>
            {/* MyAnimeList */}
            <div className="md:my-3 my-1 rounded-lg h-fit space-y-2 flex flex-col relative">
              <a href="https://myanimelist.net/profile/l4n1skyy" target="_blank" rel="noopener noreferrer"
                className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <span className="relative md:text-xl text-md">MyAnimeList</span>
              </a>
            </div>
            {/* Spotify */}
            <div className="md:my-3 my-1 rounded-lg h-fit space-y-2 flex flex-col relative">
              <a href="https://spotify.link/qQnZUKdfUDb" target="_blank" rel="noopener noreferrer"
                className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <span className="relative md:text-xl text-md">Spotify</span>
              </a>
            </div>
            {/* Goodreads */}
            <div className="md:my-3 my-1 rounded-lg h-fit space-y-2 flex flex-col relative">
              <a href="https://www.goodreads.com/l4n1skyy" target="_blank" rel="noopener noreferrer"
                className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <span className="relative md:text-xl text-md">Goodreads</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}