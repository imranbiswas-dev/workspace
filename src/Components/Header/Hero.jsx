// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import WebDevSlider from "../Slider/WebDevSlider";
import Graphic from "../Slider/Graphic";
import DigitalMarketing from "../Slider/DigitalMarketing";
import Freelance from "../Slider/Freelance";

const Hero = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
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
        {/* Freelance slider */}
        <SwiperSlide>
          <Freelance />
        </SwiperSlide>

        {/* Web Development slider */}
        <SwiperSlide>
          <WebDevSlider />
        </SwiperSlide>

        {/* Graphic Design slider */}
        <SwiperSlide>
          <Graphic />
        </SwiperSlide>

        {/* Digital Marketing slider */}
        <SwiperSlide>
          <DigitalMarketing />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
