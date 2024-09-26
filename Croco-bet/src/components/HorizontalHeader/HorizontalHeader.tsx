import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "./HorizontalHeader.css";
import "swiper/css/navigation";
import PromoImg1 from "./hHeader-img/promo-img-1.png";
import PromoImg2 from "./hHeader-img/promo-img-2.png";
import PromoImg3 from "./hHeader-img/promo-img-3.png";
import PromoImg4 from "./hHeader-img/promo-img-4.png";
import PromoImg5 from "./hHeader-img/promo-img-5.png";
import PromoImg6 from "./hHeader-img/promo-img-6.png";
import PromoImg7 from "./hHeader-img/promo-img-7.webp";
import PromoImg8 from "./hHeader-img/promo-img-8.png";
import RegBtn from "../regBtn/RegBtn";

interface HorizontalHeaderProps {
  onRegBtnClick: () => void; // Define the prop type
}

const HorizontalHeader: React.FC<HorizontalHeaderProps> = ({
  onRegBtnClick,
}) => {
  return (
    <div className="horizontal-header">
      <div className="horizontal-header__swiper">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={4.2}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="promoSlide">
              <img src={PromoImg1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="promoSlide">
              <img src={PromoImg2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="promoSlide">
              <img src={PromoImg3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="promoSlide">
              <img src={PromoImg4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="promoSlide">
              <img src={PromoImg5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="promoSlide">
              <img src={PromoImg6} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="promoSlide">
              <img src={PromoImg7} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="promoSlide">
              <img src={PromoImg8} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
      <RegBtn onClick={onRegBtnClick} /> {/* Pass the onRegBtnClick prop */}
      <p>aloha</p>
    </div>
  );
};

export default HorizontalHeader;
