"use client";

import cardsData from "./lerData";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation} from "swiper/modules";
import 'swiper/css/bundle';
import Link from "next/link";

function Livros() {
  return (
    <section id="livros" className="w-full py-24 bg-[url('/assets/images/ler/bg_livros.png')] bg-center min-h-[615px]">
      <h2 className="text-[1.3rem] lg:text-[2rem] px-4 text-center text-purple">
      Aqui se encontram PDF’s para baixar ou ler online
        </h2>
      <div className="flex items-center pt-10 pl-5 md:pl-8 lg:pl-12 xl:pl-16 w-full mx-auto">
        <Swiper
          freeMode={true}
          autoplay={{
            delay: 5000,
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
         
            <SwiperSlide>
            <div className="swiper-slide" data-hash="slide1">Slide 1</div>
    <div className="swiper-slide" data-hash="slide2">Slide 2</div>
    <div className="swiper-slide" data-hash="slide3">Slide 3</div>
    <div className="swiper-slide" data-hash="slide4">Slide 4</div>
    <div className="swiper-slide" data-hash="slide5">Slide 5</div>
            </SwiperSlide>
        
        </Swiper>
      </div>
    </section>
  );
}

export default Livros;