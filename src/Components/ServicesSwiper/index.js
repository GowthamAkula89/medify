import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import "./servicesSwiper.css"
export default function ServicesSwiper({services}) {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {services.map((service, index) => (
            <div key={"bb"+index}>
                <SwiperSlide>
                <div className="service">
                    <img className="service-img" src={service.imgSrc} alt={service.alt} />
                    <div className="service-type">{service.type}</div>
                </div>
            </SwiperSlide>
            </div>
        ))}
      </Swiper>
    </>
  );
}
