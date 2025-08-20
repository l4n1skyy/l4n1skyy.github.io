import React from 'react';
import { ComponentProps } from 'react'

export const ContactView = ({ className, children, ...props }: ComponentProps<'div'>) => {
      return (
    <div className="">
      <p className='text-red-500'>Contact</p>
    </div>
  );
}