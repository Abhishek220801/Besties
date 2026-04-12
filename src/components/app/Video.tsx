import { RiCamera2Line, RiFullscreenLine, RiMicLine, RiMicOffLine, RiTv2Line, RiUserAddLine, RiVideoOffLine, RiVideoOnLine } from "@remixicon/react"
import Button from "../shared/Button"
import { MdCallEnd } from "react-icons/md"
import { useState } from "react"

const Video = () => {
    const [muted, setMuted] = useState(false);
    const [video, setVideo] = useState(false);
  return (
    <div>
      <div className="bg-black w-full h-0 relative pb-[56.25%] rounded-xl">
        <video className="w-full h-full absolute top-0 left-0"></video>
        <button
          className="absolute bottom-5 left-5 text-xs px-2.5 py-1 rounded-lg text-white"
          style={{ background: "rgba(255,255,255,0.1)" }}
          title="username"
        >
          Abhishek
        </button>
        <button
            className="absolute bottom-5 right-5 scale-75 text-xs px-1 rounded-lg text-white transition-all duration-100 hover:scale-90 hover:cursor-pointer"
            style={{ background: "rgba(255,255,255,0)" }}
            title="fullscreen"
        >
            <RiFullscreenLine/>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-3">
        <div className="bg-black w-full h-0 relative pb-[56.25%] rounded-xl">
            <video className="w-full h-full absolute top-0 left-0"></video>
            <button
            className="absolute bottom-5 left-5 text-xs px-2.5 py-1 rounded-lg text-white"
            style={{ background: "rgba(255,255,255,0.1)" }}
            title="username"
            >
            Abhishek
            </button>
        </div>

        <Button>
            <div className="flex items-center justify-center gap-1 w-full">
                <RiUserAddLine/>
                Add
            </div>
        </Button>

      </div>

      <div>
        <div className="flex relative justify-between items-center">
          <div className="flex gap-2 pb-2">
            <button
              className="bg-amber-50 text-amber-500 flex items-center justify-center w-12 h-12 mt-3 rounded-full hover:bg-amber-500 hover:text-white"
              title="mic"
              onClick={() => setMuted(!muted)}
            >
                {muted ? <RiMicOffLine/> : <RiMicLine />}
            </button>
            <button
              className="bg-green-50 text-green-500 flex items-center justify-center w-12 h-12 mt-3 rounded-full hover:bg-green-500 hover:text-white"
              title="mic"
              onClick={() => setVideo(!video)}
            >
              {video ? <RiVideoOnLine /> : <RiVideoOffLine/>}
            </button>
            <button
              className="bg-pink-50 text-pink-500 flex items-center justify-center w-12 h-12 mt-3 rounded-full hover:bg-pink-500 hover:text-white"
              title="mic"
            >
              <RiTv2Line/>
            </button>
          </div>
          <Button type="danger">
            <div className="flex items-center gap-2">
                <MdCallEnd />
                <span>End</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Video
