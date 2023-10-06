"use client";

import cardsData from "./cardsData";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation} from "swiper/modules";
import 'swiper/css/bundle';

function MeetUs() {
  return (
    <section id="conheça-nos" className="w-full py-24 bg-[url('/assets/images/hero/bg_meetUs.png')] bg-center min-h-[615px]">
      <header className="w-full py-1 bg-opacity-95 bg-grey">
      <h2 className="text-[2rem] text-center text-purple">
          Conheça o nosso projeto
        </h2>
        </header>
      <div className="flex items-center pt-10 pl-5 md:pl-8 lg:pl-12 xl:pl-16 w-full mx-auto">
        <Swiper
          freeMode={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1.2}
          spaceBetween={3}
          navigation={false}
          modules={[Autoplay, FreeMode, Pagination, Navigation]}
          breakpoints={{
            400:{
              slidesPerView: 1.4,
            },
           500:{
              slidesPerView: 1.9,
            },
            556:{
              slidesPerView: 2.1,
            },
            730:{
              slidesPerView: 2.8,
            },
            992:{
              slidesPerView: 3,
            },
            1200:{
              slidesPerView: 4,
            },
          }}
          className="flex items-center justify-center mx-auto">
          {cardsData.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="bg-white border border-gray_smooth shadow-lg w-[225px] h-[308px] rounded-2xl py-6 px-1">
                  <div className="flex justify-center items-center">
                    <Image
                      src={card.image}
                      alt={card.name}
                      width={170}
                      height={170}
                      className="rounded-full"
                    />
                    </div>
                    <div className="text-center pt-4">
                      <h2 className="font-aclonica text-[1rem] text-black">
                        {card.name}
                      </h2>
                      <p className="text-black text-[0.75rem]">
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
}

export default MeetUs;