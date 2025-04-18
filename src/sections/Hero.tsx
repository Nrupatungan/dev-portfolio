import memeojiImage from '@/assets/images/memoji-computer.png'
import grainImage from '@/assets/images/grain.jpg'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import Image from 'next/image';
import HeroOrbit from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (
    <section className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        {/* Grainy image */}
        <div className='absolute inset-0 -z-30 opacity-5' style={{
          backgroundImage: `url(${grainImage.src})`
        }}></div>
        
        {/* First Ring */}
        <div className='ring-item size-[620px]'></div>

        {/* Second Ring */}
        <div className='ring-item size-[820px]'></div>

        {/* Third Ring */}
        <div className='ring-item size-[1020px]'></div>

        {/* Fourth Ring */}
        <div className='ring-item size-[1220px]'></div>

        {/* Stars */}
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration={38} shouldSpin spinDuration={6}>
          <StarIcon className='size-12 text-emerald-300' />
        </HeroOrbit>

        <HeroOrbit size={590} rotation={100} shouldOrbit orbitDuration={40} shouldSpin spinDuration={6}>
          <StarIcon className='size-8 text-emerald-300' />
        </HeroOrbit>

        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration={48} shouldSpin spinDuration={6}>
          <StarIcon className='size-28 text-emerald-300' />
        </HeroOrbit>

        {/* Sparkles */}
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration={30} shouldSpin spinDuration={3}>
          <SparkleIcon className='size-8 text-emerald-300/20' />
        </HeroOrbit>

        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration={32} shouldSpin spinDuration={3}>
          <SparkleIcon className='size-5 text-emerald-300/20' />
        </HeroOrbit>

        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration={36} shouldSpin spinDuration={3}>
          <SparkleIcon className='size-10 text-emerald-300/20' />
        </HeroOrbit>

        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration={44} shouldSpin spinDuration={3}>
          <SparkleIcon className='size-14 text-emerald-300/20' />
        </HeroOrbit>

        {/* Circles */}
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration={34}>
          <div className='size-2 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration={42}>
          <div className='size-2 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>
        
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration={46}>
          <div className='size-3 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>
      </div>

      {/* Hero Content */}
      <div className="container">
        <div className='flex flex-col items-center'>
          <Image src={memeojiImage} alt='Person peeking from behind a laptop' className='size-[100px]' />
        
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3.5 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>
            </div>
            <div className='text-sm font-medium'>Available for new projects</div>
          </div>
        </div>

        <div className='max-w-lg mx-auto'>
          <h1 className='font-dm_serif capitalize text-3xl md:text-5xl text-center mt-8 tracking-wide font-semibold'>Building exceptional user experiences</h1>
          <p className='mt-5 text-center text-white/60 md:text-lg'>I specialize in transforming designs into functional, high-performing web applications. Let&apos;s discuss your next project.</p>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <span className='capitalize font-semibold'>Explore my work</span>
            <ArrowDown className='size-4' />
          </button>
          <button className='inline-flex items-center gap-1 bg-white text-gray-900 border border-white h-12 px-5 rounded-xl'>
            <span className='text-2xl'>👋</span>
            <span className='font-semibold'>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </section>
  )
};
