import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './offersSection.css';
import { Pagination } from 'swiper/modules';
export default function OffersSection() {
    const offers = [
        { imgSrc: "offer1.png", alt: "offer1", type: "offer1" },
        { imgSrc: "offer24.png", alt: "offer24", type: "offer24" },
        { imgSrc: "offer1.png", alt: "offer1", type: "offer1" },
        { imgSrc: "offer24.png", alt: "offer24", type: "offer24" },
        { imgSrc: "offer5.png", alt: "offer5", type: "offer5" },
        { imgSrc: "offer24.png", alt: "offer24", type: "offer24" },
        { imgSrc: "offer5.png", alt: "offer5", type: "offer5" },
      ];    
  return (
    <div className='offers-section'>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {offers.map((offer,index) => (
            <div key={index}>
                <SwiperSlide className='element-img'>
                    <img className='offer-img' src={offer.imgSrc} alt={offer.alt}/>
                </SwiperSlide>
            </div>
        ))}

      </Swiper>
    </div>
  );
}
