import { RiChat1Line, RiDeleteBin4Line, RiEdit2Line, RiHeart3Line, RiThumbDownLine } from "@remixicon/react"
import Card from "../shared/Card"
import IconButton from "../shared/IconButton"
import Divider from "../shared/Divider"

const Posts = () => {
  return (
    <div className="space-y-4">
      {
        Array(20).fill(0).map((_, index) => (
          <Card
            key={index}
          >
        <div className="relative">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe soluta, aperiam ullam pariatur vel, dolor sequi sapiente neque doloribus, corrupti deserunt. Maiores accusamus est sint earum perferendis! Deserunt, natus.</p>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="text-xs text-zinc-500 flex flex-col leading-tight">
            <span>Posted on Jan 2, 2026</span>
            <span>at 7:09 PM</span>
          </div>

          <div className="flex gap-2">
            <IconButton type="danger" title="delete" >
              {
                <div className="scale-80">
                  <RiDeleteBin4Line/>
                </div>
            } </IconButton>
            <IconButton 
              type="warning"
              title="edit"
            >{
                <div className="scale-90">
                  <RiEdit2Line />
                </div>
              } </IconButton>
          </div>
        </div>
        <Divider />
        <div className="flex gap-5">
          <button title="like" className="flex gap-1">
            <div className="hover:text-red-500 hover:cursor-pointer">
              <RiHeart3Line />
            </div>
              <span className="text-gray-700">20k</span>
          </button>

          <button title="dislike" className="flex gap-1">
            <div className="hover:text-purple-600 hover:cursor-pointer">
              <RiThumbDownLine />
            </div>
              <span className="text-gray-700">1k</span>
          </button>

          <button title="comment" className="flex gap-1">
            <div className="hover:text-yellow-500 hover:cursor-pointer">
              <RiChat1Line />
            </div>
              <span className="text-gray-700">7.1k</span>
          </button>
        </div>
          </Card>
        ))
      }
    </div>
  )
}

export default Posts
