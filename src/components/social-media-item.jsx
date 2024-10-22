import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/logo.png'
import MainButton from './main-button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialMediaItem({color, followers, name, link, type}) {
    return (
        <div className={`rounded-md flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-8 ${color} px-8 pt-6 pb-8 text-white`}>
            <div>
                <img src={logo} alt="" srcSet="" className='h-36 lg:h-24 rounded-md mx-auto lg:mx-0'/>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col space-y-2">
                    <div className='mx-auto md:mx-0'>{type}</div>
                    <h3 className='text-xl md:text-4xl mx-auto lg:mx-0 text-center lg:text-left'>{name}</h3>
                </div>
                <div className="rounded-md bg-white px-4 py-2 text-black md:me-auto mt-8 lg:mt-16 mb-8 mx-auto md:mx-0">
                    <b className='text-sm md:text-md'>{followers}</b>
                </div>
                <a href={link}>
                    <MainButton themeMain={false} label={`Read more`}>
                        <FontAwesomeIcon icon={faArrowUp} className='rotate-45 mx-auto my-auto text-black'/>
                    </MainButton>
                </a>
            </div>
        </div>
    )
}