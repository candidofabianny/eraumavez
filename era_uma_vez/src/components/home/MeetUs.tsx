"use client";

import { useRef, useState } from "react";
import cardsData from "./cardsData";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation} from "swiper/modules";
import 'swiper/css/bundle';

function MeetUs() {
  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });

  const SlideRef = useRef<any>();

  const handleNext = () => {
    if (SlideRef.current) {
      SlideRef.current.swiper?.slideNext();
    }
  };

  const handlePrev = () => {
    if (SlideRef.current) {
      SlideRef.current.swiper?.slidePrev();
    }
  };

  const onSlideChange = (swiper: any) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  const { isLast, isFirst } = slideBegOrNot;

  return (
    <section id="meet-us" className="w-full py-24 bg-[url('/assets/images/hero/bg_meetUs.png')] bg-center min-h-[615px]">
      <header className="w-full py-1 bg-opacity-95 bg-grey">
      <h2 className="text-[2rem] text-center text-purple">
          Conheça o nosso projeto
        </h2>
        </header>
      <div className="w-[90%] px-5 pt-6 mx-auto flex justify-between items-center">        
        <div className="hidden md:flex gap-6 mr-[2rem]">
          <button
            onClick={handlePrev}
            className={`${
              isFirst ? "hidden" : "flex"
            } w-5 h-5 rounded-full bg-gray-400 hover:scale-[1.15] flex items-center justify-center text-center opacity-50`}
          >
            {""}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#000000"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className={`${
              isLast ? "hidden" : "flex"
            } w-5 h-5 rounded-full bg-gray-400 hover:scale-[1.15] flex items-center justify-center text-center opacity-50`}
          >
            {""}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#000000"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center pt-10 pl-5 md:pl-8 lg:pl-12 xl:pl-16 w-full mx-auto">
        <Swiper
          freeMode={true}
          ref={SlideRef}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1.5}
          spaceBetween={3}
          onSlideChange={onSlideChange}
          navigation={false}
          modules={[Autoplay, FreeMode, Pagination, Navigation]}
          breakpoints={{
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
          className="flex items-center justify-center mx-auto"
        >
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