import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './specialistsSlider.css';
import { Pagination } from 'swiper/modules';

export default function SpecialistsSlider({specialists}) {
    const [slidesPerView, setSlidesPerView] = useState(3);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(5);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='specialists-section'>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {specialists.map((specialist, index) => (
                    <SwiperSlide key={index} className='specialist-item'>
                            <img className='specialist-img' src={specialist.imgSrc} alt={specialist.alt}/>
                            <div className='specialist-name'>{specialist.name}</div>
                            <div className='specialist-specialisation'>{specialist.specialisation}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}