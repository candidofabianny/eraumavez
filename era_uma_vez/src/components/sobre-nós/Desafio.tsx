import React from "react";
import sobreData from "./sobreData";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation} from "swiper/modules";
import 'swiper/css/bundle';
const Desafio = () => {
  return ( 
    <section
      id="desafio"
      className="bg-[#D4FBFF]/50 flex flex-col justify-center min-h-[450px] w-full">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-aclonica text-purple mx-12 pt-2 lg:max-w-[900px] text-center md:text-left text-[1.4rem] md:text-[1.45rem]">
          Desafio da leitura infantil
          </h2>
        </div>
        <div className="flex items-center justify-center pt-6 md:pt-10 mx-8 md:mx-10 lg:mx-24">
        <Swiper
          freeMode={true}
          autoplay={{
            delay: 3500,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          spaceBetween={1}
          navigation={false}
          modules={[Autoplay, FreeMode, Pagination, Navigation]}
          breakpoints={{
           400:{
              slidesPerView: 1.2,
            },
            500:{
              slidesPerView: 1.3,
            },
            630:{
              slidesPerView: 1.8,
            },
            768:{
              slidesPerView: 1,
            },
            880:{
              slidesPerView: 1.05,
            },
            950:{
              slidesPerView: 1.15,
            },
            1024:{
              slidesPerView: 0.9,
            },
            1160:{
              slidesPerView: 1.1,
            },
            1300:{
              slidesPerView: 1.2,
            },
          }}
          className="flex justify-center items-center">
          {sobreData.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="bg-white flex items-center justify-center border border-gray_smooth shadow-lg w-[278px] h-[280px] lg:w-[895px] md:w-[725px] md:h-[200px] rounded-2xl">
                    <div className="flex px-7 lg:px-14">
                      <p className="text-darkpurple text-[0.9rem] lg:text-[1.2rem]">
                        {card.text}
                      </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </section>
  );
};

export default Desafio;
