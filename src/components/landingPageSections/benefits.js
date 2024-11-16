import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Import core Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper modules from the new path
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import img1 from "../../assets/images/benefitImg1.jpg";
import img2 from "../../assets/images/benefitImg2.jpg";
import img3 from "../../assets/images/benefitImg3.jpg";
import img4 from "../../assets/images/benefitImg4.jpg";

import '../../themes/benefits.css'

const Benefits = () => {
  return (
    <div className='benefits'>
      <div className='Text'>
      <Swiper
          slidesPerView={1}         
          spaceBetween={30}
          autoplay={{
            delay: 2500,            
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          speed={1200} 
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper-header"
        >
          <SwiperSlide><h1>Coauthor Content <span className='text'>in Real Time</span></h1></SwiperSlide>
          <SwiperSlide><h1>Publish Your Work</h1></SwiperSlide>
          <SwiperSlide><h1>Find Just the Right <span className='text'>Collaborators for Work</span></h1></SwiperSlide>
          <SwiperSlide><p><h1>Track Your Performance <span className='text'>with Analytics</span></h1></p></SwiperSlide>
        </Swiper>
        <Swiper
          slidesPerView={1}         
          spaceBetween={30}
          autoplay={{
            delay: 2500,            
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          speed={1200} 
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><p>Transform the way you create by collaborating seamlessly in real-time. Our platform enables you and your team to brainstorm, draft, and refine content together, no matter where you are. Experience true synergy as you coauthor, revise, and innovate.</p></SwiperSlide>
          <SwiperSlide><p>Share your completed projects with the world effortlessly. Our intuitive publishing tools allow you to push your content live with just a few clicks. Manage your publications, reach your audience instantly, and showcase creativity.</p></SwiperSlide>
          <SwiperSlide><p>Connect with like-minded professionals who align with your project’s vision. Our platform helps you discover skilled collaborators, whether you need writers, designers, developers, or strategists.</p></SwiperSlide>
          <SwiperSlide><p>Stay informed and make data-driven decisions with comprehensive analytics. Our built-in tracking tools provide insights into your content’s performance, engagement metrics, and audience reach. </p></SwiperSlide>
        </Swiper>
        <button>Get Started <FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
      
      <div className='images'>
        <Swiper
          slidesPerView={2}         
          spaceBetween={20}
          autoplay={{
          delay: 2500,            
          disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          speed={1200} 
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper-image"
        >
          <SwiperSlide><img src={img1} alt='img 1' height={400} width={350} /></SwiperSlide>
          <SwiperSlide><img src={img2} alt='img 2' height={400} width={350} /></SwiperSlide>
          <SwiperSlide><img src={img3} alt='img 3' height={400} width={350} /></SwiperSlide>
          <SwiperSlide><img src={img4} alt='img 4' height={400} width={350} /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Benefits;
