import React from 'react'
import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export const AboutView = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={twMerge(
        'md:h-screen min-h-screen w-full bg-slate-900 flex flex-col overflow-y-auto',
        className
      )}
      {...props}
    >
      <div className="min-h-full md:h-full w-[70%] mx-auto flex flex-col justify-start">
        {/* Top */}
        <div className="md:h-1/3 h-fit mt-[10%] md:mt-0 w-full flex flex-col justify-center items-start">
          {/* Title */}
          <p className="text-purple-400 font-bold text-5xl md:text-7xl">
            <Link className="text-lime-200" to="/">{'< '}</Link>
            About Me
          </p>
          <p className="text-gray-600 font-semibold text-lg md:text-2xl md:ml-[5.5%] mt-1 md:mt-0">
            A little about me, my hobbies, etc
          </p>
        </div>
        {/* Bottom */}
        <div className="h-2/3 w-full flex flex-col md:flex-row items-center justify-center mb-[10%] md:mb-0">
          {/* Left */}
          <div className="h-full w-full flex flex-col justify-center items-start md:justify-start md:items-end">
            <ul className="text-gray-300 font-regular text-md md:text-2xl">
              <li className="text-lime-100 md:pt-0 pt-6">-----Basic Info-----</li>
              <li>✰ Lanisha Anusri</li>
              <li>✰ 20 yrs old</li>
              <li>✰ she/her</li>
              <li>✰ INTP-A</li>
              <li className="md:pt-6 text-lime-100 pt-3">-----Hobbies-----</li>
              <li>✰ programming</li>
              <li>✰ bouldering</li>
              <li>✰ calisthenics, gym</li>
              <li>✰ guitar (fingerstyle, electric)</li>
              <li>✰ manga,  manhwa, anime</li>
              <li>✰ games </li>
              <li>✰ gardening, making terrariums </li>
            </ul>
          </div>
          {/* Right */}
          <div className="h-full w-full flex flex-col justify-center items-start md:justify-start md:items-start md:ml-[8%]">
            <ul className="text-gray-300 font-regular text-md md:text-2xl">
              <li className="text-lime-100 md:pt-0 pt-3">-----Studies-----</li>
              <li>✰ Sunway University</li>
              <li>✰ Bachelors in Computer Science, year 2, sem 1</li>
              <li>✰ tech, cybersecurity and calisthenics club</li>
              <li className="text-lime-100 pt-3 md:pt-12">-----Current Favourites-----</li>
              <li>✰ Manga: Vagabond</li>
              <li>✰ Manhwa: The Greatest Estate Developer</li>
              <li>✰ Song: Take Me Out, Franz Ferdinand</li>
              <li>✰ Show: One Piece</li>
              <li>✰ Podcast: Darknet Diaries</li>
              <li>✰ Game: Sekiro</li>
              <li>✰ Book: Percy Jackson #1</li>
            </ul>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}