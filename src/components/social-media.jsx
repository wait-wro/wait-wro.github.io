import SocialMediaItem from "./social-media-item";

export default function SocialMedia({socials}) {
    return (
        <div className="relative">
            <div className="flex flex-col space-y-12">
                <h1 className="text-3xl pb-4">Join Us!</h1>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {socials.map((item) => (
                        <SocialMediaItem 
                            color={item.color} 
                            name={item.name} 
                            link={item.link} 
                            followers={item.followers}
                            type={item.type}/>
                    ))}
                </div>
            </div>
            {/* <img src={path_circle} alt="" srcSet="" className="absolute -left-8 lg:-left-24 h-16 lg:h-24"/> */}
        </div>
    )
}