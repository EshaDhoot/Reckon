import React from 'react'
import "./home.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HomeSwiper.css";
// import { Pagination, Navigation } from "swiper";
import { EffectCoverflow,Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {


  return (
    <>

      <div className='container'>
       Anemia 

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src="https://clf1.medpagetoday.com/assets/images/resource-center/immune-mediated%20thrombotic%20thrombocytopenic%20purpura.jpg" alt="" srcset="" /></SwiperSlide>
          <SwiperSlide><img src="https://healthworkers.medsim.in/static/project/images/learn/anemia.jpg" alt="" srcset="" /></SwiperSlide>
          <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQty1QL2fHYhwzh0RSLGwjDPk4OGZN5oKKafb4jzlErAoBvb56acXGmP-60MRC1obBePo8&usqp=CAU" alt="" srcset="" /></SwiperSlide>
        </Swiper>
      </div>



      <div id='shadowDiscoverworld_heading'>
        
        <div id="Discoverworld_heading">
          <h2>Discovering The Anemia</h2>
          <h7>Here Are Some Pictures Of The Anemia</h7>
        </div>
        <div id='img_discover_world'>

        <div id="img_discover_world1" ><img src="https://healthworkers.medsim.in/static/project/images/learn/anemia.jpg" /></div>
          <div id="img_discover_world1" ><img src="https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Rash/642x361_SLIDE_2.jpg" /></div>
          <div id="img_discover_world1" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQty1QL2fHYhwzh0RSLGwjDPk4OGZN5oKKafb4jzlErAoBvb56acXGmP-60MRC1obBePo8&usqp=CAU" /></div>
          <div id="img_discover_world1" ><img src="https://articles-1mg.gumlet.io/articles/wp-content/uploads/2023/05/Iron-Deficiency-Anemia-1.jpg?compress=true&quality=80&w=640&dpr=2.6" /></div>
          <div id="img_discover_world1" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGpZJL5FAX4wph0-g9y4D9Rr9_CJb4YC7LqV1jk22Sh-wcBAucbajOvAa6cWOmmDmsbY&usqp=CAU" /></div>
          <div id="img_discover_world1" ><img src="https://assets.aboutkidshealth.ca/akhassets/Anemia_MED_ILL_EN.png?RenditionID=19" />
        </div>
        </div>

      </div>

      <div id="Discoverworld_heading">
          <h2>Types Of Anemia</h2>    
        </div>
        <div className='types_h3'>
        <h3 >1. Aplastic anemia
        </h3></div>
      <div id='img_discover_world'>
        
      <div id="img_discover_world1" ><a href=''><img src="https://clf1.medpagetoday.com/assets/images/resource-center/immune-mediated%20thrombotic%20thrombocytopenic%20purpura.jpg" /></a></div>
      </div>
      <div className='types_h3'>
        <h3 >2. Iron deficiency anemia
        </h3></div>
      <div id='img_discover_world'>
        
      <div id="img_discover_world1" ><img src="https://i0.wp.com/aladdincreations.com/wp-content/uploads/2021/05/Anemia-1-scaled.jpg?fit=1024%2C727&ssl=1" /></div>
      </div>
      <div className='types_h3'>
        <h3 >3. Sickle cell anemia
        </h3></div>
      <div id='img_discover_world'>
       
      <div id="img_discover_world1" ><img src="https://www.bmj.com/content/bmj/348/sbmj.g115/F2.medium.jpg" /></div>
      </div>
      <div className='types_h3'>
        <h3 >4. Thalassemia
        </h3></div>
      <div id='img_discover_world'>
       
      <div id="img_discover_world1" ><img src="https://geneticliteracyproject.org/wp-content/uploads/elementor/thumbs/picture_14-14A92D274EE731157AA-pe4vqg0qg0b4e8j2jpvawudajdyujrborlurkk97ro.png" /></div>
      </div>
        <div className='types_h3'>
        <h3 > 5. Vitamin deficiency anemia
        </h3></div>
      <div id='img_discover_world'>
       
      <div id="img_discover_world1" ><img src="https://img.dentistryiq.com/files/base/ebm/diq/image/2021/03/16x9/dreamstime_m_179613568.603d0cbda0443.png?auto=format,compress&fit=fill&fill=blur&w=1200&h=630" /></div>
      </div>


      <div id='where_to_go'>
        <h1>Where to go ...</h1>
      </div>
      
      <div id="swiper_where_to_go">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://www.turbanadventures.com/assets/images/best-rajasthan-tours.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.turbanadventures.com/assets/images/kerala4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.turbanadventures.com/assets/images/tours/amazing-india-journeys.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.turbanadventures.com/assets/images/10-days-rajasthan-desert-tour-package.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.turbanadventures.com/assets/images/tours/alleppey-backwaters-kerala.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.turbanadventures.com/assets/images/fatehpur-sikri-turbanadventures-2.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.turbanadventures.com/assets/images/tours/srinagar-peoples.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.turbanadventures.com/assets/images/tours/hornbill-festival-north-india.jpg" />
          </SwiperSlide>

        </Swiper>
      </div>

    </>
  )
}

export default Home