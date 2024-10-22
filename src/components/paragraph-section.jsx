import round_svg from '../assets/round.svg'

export default function ParagraphSection({title, desc}) {
    return (
       <div className="relative">
            <img src={round_svg} alt="" srcSet="" className='absolute -left-4 -top-4 h-12 animate-flyX'/>
            <div className="flex flex-col space-y-8 my-auto">
                <h2 className="text-xl z-10">{title}</h2>
                <p className="xl:w-3/5">{desc}</p>
            </div>
       </div>
    )
}