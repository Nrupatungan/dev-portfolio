
type SectionHeaderProps = {
    eyebrow: String,
    title: String,
    description: String,
}

const SectionHeader = ({
    eyebrow,
    title,
    description
}: SectionHeaderProps) => {
  return (
    <>
        <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">{eyebrow}</p>
        </div>
        <h2 className="font-dm_serif text-3xl md:text-5xl text-center mt-6">{title}</h2>
        <p className="text-white/50 text-center md:text-lg lg:text-xl mt-5 max-w-md mx-auto">{description}</p>
    </>
  )
}

export default SectionHeader