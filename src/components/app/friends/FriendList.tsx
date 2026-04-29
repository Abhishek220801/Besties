import { RiChatAiLine, RiPhoneLine, RiUserMinusLine, RiVideoOnAiLine } from "@remixicon/react"
import Card from "../../shared/Card"
import SmallButton from "../../shared/SmallButton"
import IconButton from "../../shared/IconButton"
import { Link } from "react-router"
import type { FC } from "react"

export interface FriendsListInterface {
  gap?: number
  column?: number
}

const FriendList: FC<FriendsListInterface> = ({gap=8, column=3}) => {
  return (
    <div className={`grid grid-cols-${column} gap-${gap}`}>
      {Array(12).fill(0).map((item, index) => (
        <div key={index}>
          <Card>
            <div className="flex flex-col items-center gap-3">
              <img src="/images/avt.png" alt="pfp" className="rounded-full object-cover w-20 h-20"/>
              <h1 className="text-center">Ravi Kumar</h1>
              <div className="relative">
                <SmallButton type="danger">
                <div className="flex gap-2 items-center">
                  <RiUserMinusLine/>
                  Unfollow
                </div>
                
                </SmallButton>
                <div className="w-2 h-2 rounded-full bg-green-400 absolute -top-1 -right-1 animate__animated animate__pulse animate__infinite"></div>
              </div>
              <div className="flex gap-2 mt-3">
                <Link to="/app/chat">
                  <IconButton icon={<RiChatAiLine/>} type="warning" />
                </Link>
                <Link to="/app/audio-call">
                  <IconButton icon={<RiPhoneLine/>} type="success" />
                </Link>
                <Link to="/app/video-call">
                  <IconButton icon={<RiVideoOnAiLine/>} type="danger"/>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default FriendList
