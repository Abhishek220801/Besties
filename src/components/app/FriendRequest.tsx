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
import moment from 'moment';

const FriendRequest = () => {
    const [loading, setLoading] = useState({state: false, index: -1});

    const {data: requests, error: friendsError, isLoading: friendsLoading} = useSWR("/friend/requests", Fetcher);

    const acceptFriendRequest = async (id: string, index: number) => {
        try {
            setLoading({state: true, index});
            await HttpInterceptor.put(`/friend/${id}`, {status: "accepted"})
            toast.success("Friend request accepted !", {position: 'top-center'});
            mutate("/friend/suggested");
            mutate('/friend');
        } catch (err: any) {
            CatchError(err);
        } finally{
            setLoading({state: false, index: -1});
        }
    }
    const ignoreFriendRequest = async (id: string, index: number) => {
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

    <Card title="Friend Requests" divider>
        { friendsLoading && <Skeleton active/>}

        { friendsError && <Error message={friendsError?.message} />}

        {requests && requests.map((item: any, index: number) => (
            <div key={index} className="flex gap-4 mb-3">
                <img
                    src={item.user.image || "/images/avt.png"}
                    alt={item.user.fullname}
                    className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                    <div className="mb-1">
                    <h1 className="text-black font-medium capitalize -mb-1">{item.user.fullname}</h1>
                    <small className="text-gray-400"><i>Received on {moment(item.createdAt).format('DD MMM, YYYY')}</i></small>
                    </div>
                    <div className="flex gap-3">
                        <SmallButton type="success" loading={loading.state && loading.index === index} onClick={() => acceptFriendRequest(item.id, index)}>
                            Accept
                        </SmallButton>
                        <SmallButton type="danger" loading={loading.state && loading.index === index} onClick={() => ignoreFriendRequest(item.id, index)}>
                            Ignore
                        </SmallButton>
                    </div>
                </div>
            </div>
        ))}

        {
            (requests && requests.length === 0)
            &&
            <Empty description="No new requests"/>
        }
    </Card>
  )
}

export default FriendRequest