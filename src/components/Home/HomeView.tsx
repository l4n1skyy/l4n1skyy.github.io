import React from 'react';
import { ComponentProps } from 'react'
 import { Link } from "react-router-dom";

export const HomeView = ({ className, children, ...props }: ComponentProps<'div'>) => {
      return (
    <div className="">
      <p className='text-red-500'>home</p>
      <ul>
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/About">About</Link>
         </li>
         <li>
           <Link to="/Contact">Contact</Link>
         </li>
       </ul>
    </div>
  );
}