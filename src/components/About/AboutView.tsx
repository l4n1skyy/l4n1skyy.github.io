import React from 'react';
import { ComponentProps } from 'react'

export const AboutView = ({ className, children, ...props }: ComponentProps<'div'>) => {
      return (
    <div className="">
      <p className='text-red-500'>About</p>
    </div>
  );
}