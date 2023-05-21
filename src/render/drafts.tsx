import { useNavigate } from "react-router-dom"

export interface DraftsProps {}

export default function Drafts(props: DraftsProps) {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col w-full items-center text-center ">
          <p className="text-md my-16 mx-auto ">You have no drafts.</p>
          <p className="text-md mx-auto">
            <span onClick={() => navigate("/newstories")} className="underline cursor-pointer">
              Write
            </span>{" "}
            a story or{" "}
            <span onClick={() => navigate("/home")} className="underline cursor-pointer">
              read
            </span>{" "}
            on Medium.
          </p>
        </div>
    )
}