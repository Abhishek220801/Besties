import { Skeleton } from "antd"
import Card from "../shared/Card"
import useSWR from "swr"
import Fetcher from "../../lib/fetcher"
import Error from "../shared/Error"
import Button from "../shared/Button"
import CatchError from "../../lib/CatchError"
import HttpInterceptor from "../../lib/HttpInterceptor"
import { useState } from "react"
import SmallButton from "../shared/SmallButton"

const FriendSuggestion = () => {
    const [loading, setLoading] = useState({state: false, index: -1});

    const {data: friends, error: friendsError, isLoading: friendsLoading} = useSWR("/friend/suggested", Fetcher);

    const sendFriendRequest = async (id: string, index: number) => {
        try {
            setLoading({state: true, index});
            const {data} = await HttpInterceptor.post('/friend', {id})
            console.log(data);
        } catch (err: any) {
            CatchError(err);
        } finally{
            setLoading({state: false, index: -1});
        }
    }

  return (
    <Card title="Suggestions" divider>
        { friendsLoading && <Skeleton active/>}

        { friendsError && <Error message={friendsError?.message} />}

        {friends && friends.map((item: any, index: number) => (
            <div key={index} className="flex gap-4 mb-3">
                <img
                    src={item.image || "/images/avt.png"}
                    alt={item.fullname}
                    className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                    <h1 className="text-black font-medium capitalize mb-1">{item.fullname}</h1>
                    <SmallButton loading={loading.state && loading.index === index} onClick={() => sendFriendRequest(item._id, index)}>
                        Add Friend
                    </SmallButton>
                </div>
            </div>
        ))}
    </Card>
  )
}

export default FriendSuggestion
