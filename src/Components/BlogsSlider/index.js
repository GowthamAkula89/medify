import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import BlogsCard from '../BlogsCard';

export default function BlogsSlider({blogsDetails}) {
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSlidesPerView(1);
            } 
            else if(window.innerWidth <= 1368) {
              setSlidesPerView(2);
            }
            else {
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
    <>
      <Swiper
        slidesPerView={slidesPerView}
        centeredSlides={true}
        spaceBetween={10}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {blogsDetails.map((blog, index) => (
          <SwiperSlide key={blog.idx} style={{padding: "18px"}}>
            <BlogsCard  data={blog} />
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  );
}
