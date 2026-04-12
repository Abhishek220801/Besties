import { RiArrowLeftSFill, RiAttachment2, RiAttachmentLine, RiSendPlane2Fill } from "@remixicon/react"
import Avatar from "../shared/Avatar"
import Input from "../shared/Input"
import Button from "../shared/Button"

const Chat = () => {
  return (
    <div>
        <div className="h-98 overflow-auto space-y-8">
        {
            Array(20).fill(0).map((_, index) => (
                <div className="space-y-8" key={index}>            
                    <div className="flex gap-3 items-end">
                        <Avatar 
                            imgUrl="/images/avt.png"
                            size="md"
                        /> 
                        <div className="bg-rose-50 px-3 py-2 rounded-lg text-pink-500 flex-1 border border-rose-100">
                            <h1 className="font-medium text-slate-800">Abhishek</h1>
                            <label>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita laboriosam voluptatibus vel, ut sit.
                            </label>
                            <div className="absolute top-0 -left-5 text-4xl text-rose-50">
                                <RiArrowLeftSFill/>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 items-end">
                        <div className="bg-green-50 px-3 py-2 rounded-lg text-green-500 flex-1 border border-green-100">
                            <h1 className="font-medium text-slate-800 text-end">Sarika Rajput</h1>
                            <label className="justify-end">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita laboriosam voluptatibus vel, ut sit.
                            </label>
                            <div className="absolute top-0 -right-5 text-4xl text-rose-50">
                                <RiArrowLeftSFill/>
                            </div>
                        </div>
                        <Avatar 
                            imgUrl="/images/girl-avt.png"
                            size="md"
                            /> 
                    </div>
                </div>
            ))
        }
        </div>

        <div className="p-2 mt-3">
            <div className="flex items-center gap-4">
                <form className="flex gap-4 flex-1">
                    <div className="w-10 h-10 p-2 bg-gray-100 rounded-full flex items-center justify-center hover:bg-amber-400 hover:text-white hover:cursor-pointer">
                        <RiAttachment2/>
                    </div>
                    <div className="w-full focus:border-gray-900">
                        <Input name="message" placeholder="Type your message here" />
                    </div>
                    <Button type="secondary" onClick={() => alert("msg sent")}>
                        <div className="scale-60">
                            <RiSendPlane2Fill/>
                        </div>
                        Send
                    </Button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Chat
