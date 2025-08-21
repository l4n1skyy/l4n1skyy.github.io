import React, { useState } from 'react'

export interface ProjectCardProps {
  project: {
    id: string
    title: string
    date: string
    links: { label: string; url: string }[]
    description: string
    tags: string[]
    image?: string | string[] // allow multiple images
  }
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Support both string and string[] for images
  const images: string[] = Array.isArray(project.image)
    ? project.image
    : project.image
      ? [project.image]
      : []

  const [imgIdx, setImgIdx] = useState(0)

  const showPrev = () => setImgIdx(i => (i > 0 ? i - 1 : images.length - 1))
  const showNext = () => setImgIdx(i => (i < images.length - 1 ? i + 1 : 0))

  return (
    // Project Card
    <div className="w-full h-fit md:min-h-[25rem] flex flex-col bg-slate-800 p-8 rounded-xl">
      {/* Card inner flex row: left and right sides */}
      <div className="flex flex-col md:flex-row h-full w-full">
        {/* Left side (text content) */}
        <div className="w-full md:w-1/2 md:min-h-[25rem] flex flex-col justify-between flex-1 md:mr-8">
          {/* Title */}
          <p className="md:text-3xl text-lg font-light text-white">{project.title}</p>
          {/* Links */}
          <div className="flex flex-row flex-wrap max-w-full mb-2">
            {project.links.map((link, idx) => (
              <p
                key={idx}
                className={`text-slate-400 ${link.label.length > 30 ? 'break-all whitespace-normal' : 'text-nowrap'} mr-2`}
                style={{ maxWidth: 'calc(100% - 2rem)' }}
              >
                {idx === 0 ? '✰ ' : ', '}
                <a
                  className="text-xs md:text-xl text-purple-300/70 hover:text-purple-300 underline"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </p>
            ))}
          </div>
          {/* Description */}
          <div className="flex-1 flex items-center">
            <p className="text-sm md:text-xl text-slate-400 whitespace-pre-wrap text-pretty">{project.description}</p>
          </div>
          {/* Tags */}
          <div className="justify-start text-xs md:text-base flex flex-wrap mt-2">
            {project.tags.map((tag, idx) => {
              const areaTags = [
                'Web Development',
                'Software Engineering',
                'Game Dev',
                'Data Analytics',
                'Computer Science'
              ]
              const isArea = areaTags.includes(tag)
              return (
                <span
                  key={idx}
                  className={`whitespace-nowrap rounded-full px-3 py-1 font-semibold m-1 inline-block ${
                    isArea
                      ? 'bg-sky-500/10 text-sky-400'
                      : 'bg-lime-500/10 text-lime-500'
                  }`}
                >
                  {tag}
                </span>
              )
            })}
          </div>
          {/* Date */}
          <span className="whitespace-nowrap rounded-full px-2 py-1 font-semibold text-slate-500 h-fit mt-2 self-start">{project.date}</span>
        </div>
        {/* Right side (image) */}
        <div className="w-1/2 md:h-[25rem] hidden md:flex flex-1 items-center justify-center relative">
          {images.length > 0 && (
            <>
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-700/70 hover:bg-slate-700 text-white rounded-full p-2 z-10"
                onClick={showPrev}
                aria-label="Previous image"
                style={{ display: images.length > 1 ? 'block' : 'none' }}
              >
                &#8592;
              </button>
              <img
                className="object-contain h-full w-fit rounded-xl mx-auto"
                src={images[imgIdx]}
                alt={project.title}
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-700/70 hover:bg-slate-700 text-white rounded-full p-2 z-10"
                onClick={showNext}
                aria-label="Next image"
                style={{ display: images.length > 1 ? 'block' : 'none' }}
              >
                &#8594;
              </button>
            </>
          )}
        </div>
        {/* Image on top for mobile, right for desktop */}
        <div className="w-full md:w-1/2 flex md:hidden mb-2 items-center justify-center relative">
          {images.length > 0 && (
            <>
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-700/70 hover:bg-slate-700 text-white rounded-full p-2 z-10"
                onClick={showPrev}
                aria-label="Previous image"
                style={{ display: images.length > 1 ? 'block' : 'none' }}
              >
                &#8592;
              </button>
              <img
                className="object-contain w-full h-48 rounded-xl mx-auto"
                src={images[imgIdx]}
                alt={project.title}
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-700/70 hover:bg-slate-700 text-white rounded-full p-2 z-10"
                onClick={showNext}
                aria-label="Next image"
                style={{ display: images.length > 1 ? 'block' : 'none' }}
              >
                &#8594;
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
