import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const HomeView = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <div
     className={twMerge('text-red-500', className)}
     {...props}
    >
      home
    </div>
  );
}