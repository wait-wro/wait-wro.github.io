import photo from '../assets/photo.jpg'
import logo from '../assets/logo.png'
import NavItem from './nav-item'
import linkedin from '../assets/linkedin.svg'
import facebook from '../assets/facebook.svg'
import github from '../assets/github.svg'
import meetup from '../assets/meetup.svg'
import round_svg from '../assets/round.svg'
import path_circle from '../assets/path-circle.svg'
import footer_img from '../assets/footer.JPG'

export default function Footer() {
    return (
        <div className="px-8 py-5 bg-waitGreen rounded-md overflow-hidden min-h-96">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-6 relative">
                    <img src={logo} alt="" srcSet="" className='w-20 h-20 mix-blend-multiply mx-auto xl:mx-0'/>
                    <h3 className='text-xl md:text-3xl mx-auto xl:mx-0 text-center lg:text-left'>Wrocław AI Team (WAIT)</h3>
                    <div className="pt-1"></div>
                    <div className="flex flex-col space-y-6">
                        <div className="flex flex-col md:flex-row xl:space-x-4 space-y-2 md:space-y-0 mx-auto xl:mx-0 text-center">
                            <NavItem label={`Start`} slug={`#start`} footer={true}/>
                            <NavItem label={`About`} slug={`#about`} footer={true}/>
                            <NavItem label={`Our Mission`} slug={`#what-we-do`} footer={true}/>
                            <NavItem label={`Meetups`} slug={`#events`} footer={true}/>
                            <NavItem label={`Contact`} slug={`#join-us`} footer={true}/>
                        </div>
                        <div className="flex flex-row space-x-4 xl:space-x-6 mx-auto xl:mx-0">
                            <a href="https://www.linkedin.com/company/wait-wro/"><img src={linkedin} alt="Linkedin" srcSet="" className='h-6 hover:scale-90 transition-all'/></a>
                            <a href="https://github.com/wait-wro"><img src={github} alt="Github" srcSet="" className='h-6 hover:scale-90 transition-all'/></a>
                            <a href="https://www.meetup.com/wait-wroclaw-ai-team/"><img src={meetup} alt="Meetup" srcSet="" className='h-6 hover:scale-90 transition-all'/></a>
                        </div>
                    </div>
                    <div className="pb-1"></div>
                    <div className="flex flex-col space-y-2">
                        <small className='mx-auto xl:mx-0'>2024 | wroclaw ai team / wait</small>
                        <small className='mx-auto xl:mx-0 z-30 font-bold'>design & code - <a href="https://www.linkedin.com/company/studio-cyfrowe/">studio cyfrowe</a></small>
                    </div>
                    <img src={round_svg} alt="" srcSet="" className='hidden lg:block lg:absolute -left-24 -top-12 mix-blend-multiply h-48 animate-flyX'/>
                    <img src={round_svg} alt="" srcSet="" className='hidden lg:block lg:absolute left-12 top-64 mix-blend-multiply h-80 animate-fly'/>
                </div>
                <div className="relative hidden xl:block">
                    <div className="rounded-full w-96 h-96 xl:absolute -top-12 left-4 drop-shadow-md z-30" style={{
                        backgroundImage: `url('${photo}')`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`
                    }}></div>
                     <div className="rounded-full w-[50vh] h-[50vh] xl:absolute top-20 left-80 drop-shadow-md z-20" style={{
                        backgroundImage: `url('${footer_img}')`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`
                    }}></div>
                    <img src={path_circle} alt="" srcSet="" className="hidden xl:block absolute -left-8 lg:-left-24 h-36 top-48 mix-blend-multiply animate-fly"/>
                    <img src={round_svg} alt="" srcSet="" className='hidden lg:block lg:absolute right-24 -top-12 mix-blend-multiply h-16 animate-fly'/>
                    <img src={path_circle} alt="" srcSet="" className="hidden lg:block lg:absolute left-80 h-24 top-72 mix-blend-multiply animate-fly"/>
                </div>
            </div>
        </div>
    )
}