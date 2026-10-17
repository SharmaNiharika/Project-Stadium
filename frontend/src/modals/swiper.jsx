import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const swipData = [
    {
        _id: 1,
        img1: "https://i.pinimg.com/474x/39/e8/f1/39e8f14ce62fb407f110b15f1442ab7a.jpg",

    },
    {
        _id: 2,
        img1: "https://i.pinimg.com/474x/11/6c/89/116c89aa9e38ecd6d8344521d7e7b8a7.jpg"
    },
    {
         _id: 3,
        img1: "https://i.pinimg.com/736x/8f/a7/9f/8fa79fa674b328de572ec071752c1aad.jpg"
    },
    {
        _id: 4,
        img1: "https://i.pinimg.com/736x/25/8a/e3/258ae36e5b31f8cb5aa7d33a49b30caa.jpg"
    },
    {
        _id: 5,
        img1: "https://i.pinimg.com/736x/1a/65/7a/1a657a1d0a4e3352f3528907a4d9b8ce.jpg"
    },
    {
        _id: 6,
        img1: "https://i.pinimg.com/736x/e5/f7/7e/e5f77ea9ff269a491c08934d47705549.jpg"
    },
    {
        _id: 7,
        img1: "https://i.pinimg.com/736x/9c/5b/c2/9c5bc2a3f9461577829d65b16292aadd.jpg"
    },
    {
        _id: 8,
        img1: "https://i.pinimg.com/736x/1a/65/7a/1a657a1d0a4e3352f3528907a4d9b8ce.jpg"
    }
    

];

export default () => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
      {
        swipData.map((item)=>{
            return(
                <SwiperSlide key={item._id} className="bg-black">
                    <img src={item.img1} alt="" className="w-screen h-full " />
                </SwiperSlide>
            )
        })
      }
      
    </Swiper>
  );
};