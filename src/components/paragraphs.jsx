import ParagraphSection from "./paragraph-section";
import path_circle from '../assets/path-circle.svg'
import about001 from '../assets/about001.jpg'
import about002 from '../assets/about002.jpg'
import about003 from '../assets/about003.jpg'

export default function Paragraphs({paragraphs}) {
    const photo_1 = 'https://media.licdn.com/dms/image/v2/D4D22AQHPYtzolBU9Rg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727643511441?e=1732752000&v=beta&t=_jbOzziqjfEFy7HwmuNm8C17OrqM1rs8qhyraxhnv_8'
    return (
        <div className="relative">
            <div className="flex flex-col space-y-16">
                <div className="flex flex-col space-y-12 lg:w-4/5 space-y-16">
                    <h1 className="text-3xl pb-4">What we do</h1>
                    <div className="container flex flex-col space-y-12 lg:px-16">
                        {paragraphs.map((item) => (
                            <ParagraphSection title={item.paragraph_header} desc={item.paragraph_desc}/>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-2 xl:grid-cols-3 gap-8">
                    <div className="rounded-md h-52 lg:h-80 xl:h-72" style={{
                        backgroundImage: `url('${about001}')`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`
                    }}></div>
                    <div className="rounded-md h-52 lg:h-80 xl:h-72" style={{
                        backgroundImage: `url('${about002}')`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`
                    }}></div>
                    <div className="rounded-md h-72 hidden xl:block" style={{
                        backgroundImage: `url('${about003}')`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`
                    }}></div>
                </div>
            </div>
            <img src={path_circle} alt="" srcSet="" className="absolute -left-8 lg:-left-24 h-16 lg:h-24 animate-fly"/>
        </div>
    )
}