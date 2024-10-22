import round_svg from '../assets/round.svg'
import photo from '../assets/photo.jpg'
import path_circle from '../assets/path-circle.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import MainButton from './main-button'

export default function MainHeader() {
    const wait_photo = 'https://media.licdn.com/dms/image/v2/D4D22AQGjK339IGKoFw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1716986345922?e=1732752000&v=beta&t=oj1dRr2X5dH9RBnfWLwKI1kxCBURkh7gjfg0R6dFzbg';

    return (
        <div className="relative">
            <img src={round_svg} alt="" srcSet="" className='absolute -left-56 animate-fly'/>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-8 py-16"> 
                <div className="flex">
                    <div className="flex flex-col space-y-8 my-auto z-10">
                        <h1 className="text-4xl">Wrocław AI Team</h1>
                        <h2 className="text-xl">What we’re about</h2>
                        <p className="lg:w-4/5 xl:w-3/5">We are an open community of practitioners, researchers, and enthusiasts of AI and Data Science. We originated from the activities and experience of the Wrocław R Users Association (STWUR) - proudly continuing this work! 🏆 Anyone can join us, regardless of their level of experience. Our mission is to educate, connect enthusiasts, and practice AI and Data Science. 🎓🤝</p>
                        <a href="#about">
                            <MainButton themeMain={true} label={`Read more`}>
                                <FontAwesomeIcon icon={faArrowDown} className='mx-auto my-auto'/>
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
                    <div className="hidden lg:block rounded-full h-64 w-64 xl:w-96 xl:h-96 md:absolute top-36 xl:top-28 -left-12 xl:-left-36 drop-shadow-md z-30" style={{
                        backgroundImage: `url('${photo}')`,
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