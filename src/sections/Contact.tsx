import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'

export const ContactSection = () => {
  return (
    <section className='py-16 pt-12'>
      <div className="container">
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-center md:text-left text-gray-950 overflow-hidden rounded-3xl py-8 px-10 relative z-0'>
          
          <div className='absolute inset-0 opacity-5 -z-10' style={{
            backgroundImage: `url(${grainImage.src})`
          }}></div>
          
          <div className='flex flex-col md:flex-row items-center gap-8 md:gap-[65px]'>
            
            <div>
              <h2 className='font-dm_serif text-2xl font-semibold md:text-3xl'>{"Let's create something amazing together"}</h2>
              <p className='mt-2 text-sm font-medium md:text-base'>{"Ready to bring your next project to life? Let's connect and discuss how I can help you achive your goals."}</p>
            </div>
            

            <div>
              <button className="bg-gray-900 text-white h-12 px-6 rounded-xl font-semibold inline-flex items-center gap-2 w-max">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className='size-4' />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
};
