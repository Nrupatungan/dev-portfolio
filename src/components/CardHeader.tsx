import React from 'react'
import StarIcon from '@/assets/icons/star.svg'
import { twMerge } from 'tailwind-merge'

const CardHeader = ({title, description, className}: {
  title: string, 
  description: string,
  className?: string
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
        <div className="inline-flex gap-2 items-center">
        <StarIcon className='text-green-300 size-9'/>
        <h3 className="text-3xl font-dm_serif font-semibold">{title}</h3>
        </div>
        <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">{description}</p>
    </div>
  )
}

export default CardHeader