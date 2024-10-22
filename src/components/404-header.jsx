import round_svg from '../assets/round.svg'
import photo from '../assets/photo.jpg'
import path_circle from '../assets/path-circle.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import MainButton from './main-button'

export default function NotFoundHeader() {
    const wait_photo = 'https://media.licdn.com/dms/image/v2/D4D22AQFTuwzRyIOw6A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1713865151953?e=1732752000&v=beta&t=nJIo_lZbepnwJpcflMsHpYHy36Cq7spqiBaEymrNd_M';
    const baseUrl = window.location.origin

    return (
        <div className="relative">
            <img src={round_svg} alt="" srcSet="" className='absolute -left-56 animate-fly'/>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-8 py-16"> 
                <div className="flex">
                    <div className="flex flex-col space-y-8 my-auto z-10">
                        <h2 className="text-xl">404</h2>
                        <h1 className="text-4xl">Page not found</h1>
                        <a href={baseUrl}>
                            <MainButton themeMain={true} label={`Back to page`}>
                                <FontAwesomeIcon icon={faArrowDown} className='rotate-45 mx-auto my-auto'/>
                            </MainButton>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 relative">
                    <div className="rounded-md lg:w-4/5 h-48 md:h-80 lg:h-96 lg:ms-auto drop-shadow-md" style={{
                        backgroundImage: `url('${wait_photo}')`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`
                    }}></div>
                    <img src={path_circle} alt="" srcSet="" className="hidden xl:block absolute -left-8 lg:-left-24 h-36 top-20 mix-blend-multiply animate-flyX"/>
                    <img src={round_svg} alt="" srcSet="" className='hidden lg:block lg:absolute right-24 -top-12 mix-blend-multiply h-16 animate-fly'/>
                </div>
            </div>
        </div>
    )
}