import { Empty, Skeleton } from "antd"
import Card from "../shared/Card"
import useSWR, { mutate } from "swr"
import Fetcher from "../../lib/fetcher"
import Error from "../shared/Error"
import CatchError from "../../lib/CatchError"
import HttpInterceptor from "../../lib/HttpInterceptor"
import { useState } from "react"
import SmallButton from "../shared/SmallButton"
import { toast } from "react-toastify"

const FriendSuggestion = () => {
    const [loading, setLoading] = useState({state: false, index: -1});

    const {data: friends, error: friendsError, isLoading: friendsLoading} = useSWR("/friend/suggested", Fetcher);

    const sendFriendRequest = async (id: string, index: number) => {
        try {
            setLoading({state: true, index});
            await HttpInterceptor.post('/friend', {friend: id})
            toast.success("Friend request sent !", {position: 'top-center'});
            mutate("/friend/suggested");
            mutate('/friend');
        } catch (err: any) {
            CatchError(err);
        } finally{
            setLoading({state: false, index: -1});
        }
    }

  return (
    <Card title="Add New Friends" divider>
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

        {
            (friends && friends.length === 0)
            &&
            <Empty description="No new friend suggestions"/>
        }
    </Card>
  )
}

export default FriendSuggestion
