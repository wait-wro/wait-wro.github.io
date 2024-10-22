import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MainButton from './main-button'
import { faGithub, faMeetup } from '@fortawesome/free-brands-svg-icons'

export default function Incoming({cover, date, title, desc, tutors, link}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 mx-auto min-h-96">
            <a href={link} className="h-40 md:h-60 xl:h-96 lg:col-span-4 rounded-md hover:scale-90 hover:drop-shadow-md cursor-pointer transition-all" style={{
                backgroundImage: `url('${cover}')`,
                backgroundSize: `cover`,
                backgroundPosition: `center`
            }}></a>
            <div className="lg:col-span-5 flex flex-col space-y-6 lg:space-y-8">
                <div className="flex flex-col space-y-2">
                    <h6 className='text-sm lg:text-lg'>{date}</h6>
                    <a href={link} className='text-lg lg:text-2xl hover:text-underline cursor-pointer'><h4>{title}</h4></a>
                </div>
                <p className='text-sm lg:text-md'>{desc}</p>
                <div className="flex flex-col space-y-1">
                    <small>Prelegenci:</small>
                    <div className="flex flex-row flex-wrap">
                        {tutors.map((item) => (
                            <a href={item.tutor_url} className="me-3 mb-3 px-4 py-3 bg-waitGreen rounded-md text-sm hover:scale-90 hover:drop-shadow-md cursor-pointer transition-all"><h6>{item.tutor_name}</h6></a>
                        ))}
                    </div>
                </div>
                <a href={link}>
                    <MainButton themeMain={true} label={`Join now!`}>
                        <FontAwesomeIcon icon={faMeetup} className={`mx-auto my-auto text-black h-8`}/> 
                    </MainButton>
                </a>
            </div>
        </div>
    )
}