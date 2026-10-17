import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
// import {gap} from 'swiper/modules';

const swipData = [
    {
        _id: 1,
        img1: "https://i.pinimg.com/736x/ef/45/b1/ef45b13568194d1a03b09eb9de6f66a6.jpg",
        title: "Trainer 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc."

    },
    {
        _id: 2,
        img1: "https://i.pinimg.com/736x/a8/d8/dc/a8d8dc2461725f5fe13b7ca8b1f6338f.jpg",
        title: "Trainer 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc."
    },
    {
         _id: 3,
        img1: "https://i.pinimg.com/736x/a2/89/a0/a289a069f60fe8add7e2f4b4513ab20c.jpg",
        title: "Trainer 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc."
    },
    

];

export default () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper  "
        spaceBetween={30}
        loop={true}
      >
        {swipData.map((item) => (
          <SwiperSlide key={item._id} className="     ">
            <div className="flex flex-col items-center justify-center w-100px ">
            <div className="flex justify-center items-center h-[200px] w-full " >
                <img src={item.img1} alt={item.title} className=" w-full text-white h-full object-cover" />
            </div>
              
              <h3 className=" text-slate-400 text-sm font-bold mt-4">{item.title}</h3>
              <p className=" text-center mt-2 p-2 text-slate-400 text-sm ">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};