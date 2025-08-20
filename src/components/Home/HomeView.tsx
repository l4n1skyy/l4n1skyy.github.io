import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const HomeView = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <div
     className={twMerge('font-CozetteVector', className)}
     {...props}
    >
      home
    </div>
  );
}