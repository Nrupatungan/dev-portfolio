import grainImage from '@/assets/images/grain.jpg';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const Card = ({ children, className, ...other}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl overflow-hidden z-0 relative",
        className
      )}
      {...other}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>

      {/* Outline using after pseudo-element */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 after:content-[''] after:absolute after:inset-0 after:rounded-3xl after:outline after:outline-2 after:outline-white/20 after:-outline-offset-2"></div>
      </div>

      {children}
    </div>
  );
};

export default Card;