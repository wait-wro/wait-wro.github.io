import path_circle from '../assets/path-circle.svg'
import EventItem from './event-item'
import Incoming from './incoming'

export default function Events({events, incoming}) {
    return (
        <div className="relative">
            <div className="flex flex-col space-y-12">
                <div className="flex flex-col space-y-12 lg:w-4/5 space-y-16">
                    <h1 className="text-3xl pb-4">What happens</h1>
                </div>
                <div className="container mx-auto">
                    <Incoming cover={incoming.cover} date={incoming.date} title={incoming.title} desc={incoming.desc} tutors={incoming.tutors} link={incoming.link_prez}/>
                </div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {events.map((item) => (
                        <EventItem cover={item.cover} date={item.date} title={item.title} tutors={item.tutors} link={item.link_prez}/>
                    ))}
                </div>
            </div>
            <img src={path_circle} alt="" srcSet="" className="absolute -right-8 lg:-right-24 h-16 lg:h-24 animate-flyX"/>
        </div>
    )
}