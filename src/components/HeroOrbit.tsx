import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge";

type HeroOrbitProps = {
  size: number; 
  rotation: number; 
  orbitDuration?: number; 
  shouldOrbit?: boolean; 
  shouldSpin?: boolean; 
  spinDuration?: number;
}

const HeroOrbit = ({ 
  children, 
  size, 
  rotation, 
  orbitDuration, 
  shouldOrbit = false, 
  shouldSpin = false, 
  spinDuration }: PropsWithChildren<HeroOrbitProps>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
        <div className={twMerge(shouldOrbit && "animate-spin")} style={{
          animationDuration: `${orbitDuration}s`
        }}>
          <div className='flex items-start justify-start' style={{
            transform: `rotate(${rotation}deg)`,
            height:`${size}px`,
            width: `${size}px`
          }}>
            <div className={twMerge(shouldSpin && "animate-spin")} style={{
              animationDuration: `${spinDuration}s`
            }}>
              <div className=' inline-flex' style={{
                transform: `rotate(${rotation * -1}deg)`
              }}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeroOrbit