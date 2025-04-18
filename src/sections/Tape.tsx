
import StarIcon from '@/assets/icons/star.svg'

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable"
]

export const TapeSection = () => {
  return (
    <div className='py-16 lg:py-24 overflow-x-clip'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1'>
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className='flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]'>
            {[...words,...words].map((word, idx) => (
              <div key={idx} className='inline-flex gap-4 text-gray-900'>
                <span className='uppercase font-extrabold'>{word}</span>
                <StarIcon className='size-6 -rotate-12'/>
              </div>
            ))}
        </div>
        </div>
      </div>
    </div>
  )
};
