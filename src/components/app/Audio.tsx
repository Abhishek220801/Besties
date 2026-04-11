import { RiMicLine, RiMicOffLine } from "@remixicon/react"
import Button from "../shared/Button"
import { MdCallEnd } from "react-icons/md"
import { useState } from "react"
import Card from "../shared/Card"

const Audio = () => {
  const [muted, setMuted] = useState(false)
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4">
        <Card title="Rahul Yadav">
          <div className="flex flex-col items-center">
            <img
              src="/images/avt.png"
              alt="user-pic"
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>
        </Card>
        <Card title="Yash Sharma">
          <div className="flex flex-col items-center">
            <img
              src="/images/avt.png"
              alt="user-pic"
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>
        </Card>
      </div>

      <div className="flex justify-between items-center -my-2">
        <div className="flex gap-2 pb-2">
          <button
            className="bg-amber-50 text-amber-500 flex items-center justify-center w-12 h-12 mt-3 rounded-full hover:bg-amber-500 hover:text-white"
            title="mic"
            onClick={() => setMuted(!muted)}
          >
            {muted ? <RiMicOffLine /> : <RiMicLine />}
          </button>
        </div>
        <div className="">
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

export default Audio
