import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MainButton({themeMain, children, label}) {
    return (
        <div className="flex flex-row space-x-2 cursor-pointer">
            <div className={`rounded-full hover:scale-75 transition-all p-1 ${themeMain ? `bg-waitGreen` : `bg-white`} w-12 h-12 flex`}>
                {children}
            </div>
            <div className={`border-t-2 border-b-2 ${themeMain ? `border-waitGreen` : `border-white`} uppercase px-3 flex text-sm lg:text-md`}><b className="my-auto">{label}</b></div>
        </div>
    )
}