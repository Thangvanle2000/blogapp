import { Avatar } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export interface NewStoriesProps { }

export default function NewStories(props: NewStoriesProps) {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto w-2/3">
            <nav className="flex justify-between font-helvetica text-sm h-20">
                <div className="flex items-center">
                    <div onClick={() => navigate("/home")} className="cursor-pointer">
                        <svg viewBox="0 0 1043.63 592.71" className="h-6 text-logo">
                            <g data-name="Layer 2">
                                <g data-name="Layer 1">
                                    <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <span className="px-3">Draft in Long</span>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-2 text-white rounded-full bg-green1">Publish</button>
                    <span className="svgIcon svgIcon--moreFilled svgIcon--25px">
                        <svg className="svgIcon-use" width="25" height="25">
                            <path
                                d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z"
                                fill-rule="evenodd"
                            ></path>
                        </svg>
                    </span>
                    <svg className="h-6 text-iconNav" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18.5a3 3 0 1 1-6 0" stroke="currentColor"></path>
                        <path
                            d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
                            stroke="currentColor"
                        ></path>
                    </svg>
                    <Avatar
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz-77X11MoGE22xVjjPhbpW6lPj6I0SkcTQ"
                        alt="avatar"
                        size="md"
                        variant="circular"
                        className="w-10 h-10"
                    />
                </div>
            </nav>
            <form className="block w-2/3 mx-auto">
                <input type="text" className="text-4xl w-full mb-8 focus:border-none" />
                <textarea className="text-2xl w-full min-h-screen focus:border-none"></textarea>
            </form>
        </div>
    )
}