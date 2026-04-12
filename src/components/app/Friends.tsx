import { RiUserMinusLine } from "@remixicon/react"
import Card from "../shared/Card"

const Friends = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {
        Array(20).fill(0).map((_, index) => (
          <Card key={index}>
            <div className="flex flex-col items-center gap-3">
              <img src="/images/girl-avt.png" alt="avt" className="w-16 h-16 rounded-full object-cover" />
              <h1 className="text-base font-medium text-black">Palak Mucchal</h1>
              <button className="flex items-center gap-3 bg-red-500 text-white rounded px-2 py-1 text-xs hover:bg-red-600 mt-1 font-medium">
                <div className="mr-1">
                  <RiUserMinusLine/>
                </div>
                <span>Unfriend</span>
              </button>
            </div>
          </Card>
        ))
      }
    </div>
  )
}

export default Friends
