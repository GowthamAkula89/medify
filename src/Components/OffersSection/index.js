import React, { useState, useEffect } from 'react';
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
    const [slidesPerView, setSlidesPerView] = useState(3);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(3);
            }
        };  
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='offers-section'>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {offers.map((offer, index) => (
                    <SwiperSlide key={index} className='element-img'>
                        <img className='offer-img' src={offer.imgSrc} alt={offer.alt}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
