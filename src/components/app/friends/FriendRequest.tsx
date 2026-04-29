import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from '../../shared/Card';
import SmallButton from "../../shared/SmallButton"
import { RiUserAddLine } from '@remixicon/react';

export default function FriendRequest() {
  return (
    <Card title="Suggestions" divider>
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }}
            >
                {Array(5).fill(0).map((item, index) => (
                    <SwiperSlide>
                            <div className='flex flex-col justify-center items-center gap-2 border border-gray-100 p-3 rounded-lg'>
                                <img src='/images/avt.png' className='w-20 h-20 rounded-full object-cover' alt="pfp" />
                                <h1>Suraj Kumar</h1>
                                <SmallButton type="success">
                                    <div className='flex gap-2 items-center'>
                                        <RiUserAddLine/>
                                        <span>Add</span>
                                    </div>
                                </SmallButton>
                            </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </Card>
  );
}
