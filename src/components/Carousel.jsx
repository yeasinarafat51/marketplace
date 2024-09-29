
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import bg1 from '../assets/images/carousel1.jpg'
import bg2 from '../assets/images/carousel2.jpg'
import bg3 from '../assets/images/carousel3.jpg'



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Slide Image={bg1} text='Get your Web developent Projects Done in minutes'/>
        </SwiperSlide>
        <SwiperSlide>
            <Slide Image={bg2} text='Get your Graphics Design Projects Done in minutes'/>
        </SwiperSlide>
        <SwiperSlide>
            <Slide Image={bg3} text='Get your Digital Marketer Projects Done in minutes'/>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
