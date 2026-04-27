import { RiCheckDoubleLine, RiCheckLine, RiUserMinusLine } from "@remixicon/react"
import Card from "../shared/Card"
import useSWR, { mutate } from "swr"
import Fetcher from "../../lib/fetcher";
import Error from "../shared/Error";
import HttpInterceptor from "../../lib/HttpInterceptor";

const Friends = () => {

  const {data, error, isLoading} = useSWR("/friend", Fetcher);

  if(isLoading) return <h1>Loading...</h1>

  if(error)
    return <Error message={error.message} />

  const unfriend = async (id: string) => {
    await HttpInterceptor.delete(`/friend/${id}`);
    mutate('/friend');
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      {
        data.map((item: any, index: number) => (
          <Card key={index}>
            <div className="flex flex-col items-center gap-3">
              <img src={item.friend.image || "/images/girl-avt.png"} alt="avt" className="w-16 h-16 rounded-full object-cover" />
              <h1 className="text-base font-medium text-black capitalize">{item.friend.fullname}</h1>
              {
                item.status === 'accepted'
                ?
                <button onClick={() => unfriend(item._id)} className="flex items-center gap-3 bg-red-500 text-white rounded px-2 py-1 text-xs hover:bg-red-600 mt-1 font-medium">
                  <div className="mr-1">
                    <RiUserMinusLine/>
                  </div>
                  <span>Unfriend</span>
                </button>
                :
                <button className="flex items-center gap-2 bg-olive-500 text-white rounded px-2 py-1 text-xs hover:bg-olive-600 mt-1 font-medium">
                  <div className="mr-1">
                    <RiCheckDoubleLine/>
                  </div>
                  <span>Requested</span>
                </button>
              }
            </div>
          </Card>
        ))
      }
    </div>
  )
}

export default Friends
