import React from 'react';
import { ComponentProps } from 'react'

export const ProjectView = ({ className, children, ...props }: ComponentProps<'div'>) => {
      return (
    <div className="">
      <p className='text-red-500'>Project</p>
    </div>
  );
}