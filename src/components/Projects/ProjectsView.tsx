import React, { useState } from 'react'
import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'
import { projects as projectsData } from './projectsData'
import { ProjectCard } from './ProjectCard'

export const ProjectsView = ({ className, children, ...props }: ComponentProps<'div'>) => {
  const [sortMode, setSortMode] = useState<'default' | 'date'>('default')

  // Helper to parse date strings for sorting
  function parseDate(dateStr: string) {
    const match = dateStr.match(/([A-Za-z]+)?\s?(\d{4})/)
    if (match) {
      const month = match[1] || 'Jan'
      const year = parseInt(match[2])
      const monthNum = [
        'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
      ].indexOf(month.slice(0,3))
      return new Date(year, monthNum >= 0 ? monthNum : 0)
    }
    const yearMatch = dateStr.match(/(\d{4})/)
    return yearMatch ? new Date(parseInt(yearMatch[1]), 0) : new Date(0)
  }

  let sortedProjects = projectsData
  if (sortMode === 'date') {
    sortedProjects = [...projectsData].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
  }

  return (
    <div
      className={`md:min-h-screen min-h-screen w-full bg-slate-900 flex flex-col ${className || ''}`}
      {...props}
    >
      <div className="min-h-full md:min-h-full w-[70%] mx-auto flex flex-col justify-start">
        {/* Top */}
        <div className="md:h-fit md:mt-[8%] md:mb-[3%] h-fit w-full flex flex-col justify-center items-start sticky top-0 bg-slate-900 z-20">
          <p className="text-purple-400 font-bold text-5xl md:text-7xl">
            <Link className="text-lime-200" to="/">{'< '}</Link>
            My Projects
          </p>
          <p className="text-gray-600 font-semibold text-lg md:text-2xl md:ml-[5.5%] mt-1 md:mt-0">
            My current, past and future projects
          </p>
        </div>
        {/* Sort Button - horizontally aligned with projects */}
        <div className="flex flex-row items-center justify-end w-[90%] mx-auto mb-4">
          <span className="mr-2 text-white font-light">Sort by:</span>
          <button
            className={`px-3 py-1 rounded-full mx-1 font-medium ${sortMode === 'default' ? 'bg-pink-400/10 text-pink-400' : 'bg-slate-700 text-white'}`}
            onClick={() => setSortMode('default')}
          >
            Default
          </button>
          <button
            className={`px-3 py-1 rounded-full mx-1 font-medium ${sortMode === 'date' ? 'bg-pink-400/10 text-pink-400' : 'bg-slate-700 text-white'}`}
            onClick={() => setSortMode('date')}
          >
            Date
          </button>
        </div>
        {/* Bottom */}
        <div className="h-full w-[90%] flex flex-col mx-auto space-y-8 mb-[10%]">
          {/* Project Card */}
          {sortedProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {children}
      </div>
    </div>
  )
}