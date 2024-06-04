"use client";
import { UserIcon, DollarIcon, VanIcon } from "@/components/icons/icons";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

import { heropagedata } from "@/config/data";
import Image from "next/image";

import { Button } from "../ui/button";

import Header from "@/components/ui/header";

import { 
  motion,
  useScroll,
  useTransform,
  } from "framer-motion";


  import { useRef } from 'react'

const HeroSection = () => {
  // const ref = useRef<HTMLDivElement>(null)
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0 1", "1.33 1"]
  // })
  // const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  return (
    <>
      <motion.section 
      initial = {{
        scale: 0,
        opacity: 0
      }}
      animate = {{
        scale: 1,
        opacity: 1
      }}
      transition = {{
        duration: 1
      }}
      className="bg-[#174E4B] w-full min-h-[34.375rem] p-2">
        <Header />
        <div className="p-2">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {heropagedata.map((content, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-between gap-8 md:gap-16">
                  <div className="hero-text-image-wrapper lg:flex lg:flex-row lg:justify-around lg:gap-3">
                    <div className="text-wrapper text-white md:max-w-[53.125rem] md:w-full lg:max-w-[28.125rem] lg:w-4/5">
                      <h1 className="font-bold text-4xl leading-normal my-3 md:text-5xl md:leading-relaxed">
                        {content.herotext}
                      </h1>
                      <p className="text-base leading-normal mb-4 md:text-xl md:leading-relaxed">
                        {content.tagline}
                      </p>
                      <div className="flex flex-row gap-3 my-5 md:flex-col">
                        <Button
                          className="bg-[#008B8B] w-2/5 hover:bg-[#008B8B] md:w-3/5 md:py-8 md:text-xl"
                          size="lg"
                        >
                          Start shopping now
                        </Button>
                        <Button
                          className="bg-white w-1/2 hover:bg-white text-[#008B8B] md:w-3/5 md:py-8 md:text-xl"
                          size="lg"
                        >
                          I have a question
                        </Button>
                      </div>
                    </div>
                    <div className="hidden md:block relative w-11/12 h-96 border border-solid border-white mx-auto lg:w-5/6 lg:max-w-[37.5rem] lg:h-[25rem]">
                      <div className="absolute w-full min-h-96 top-4 left-5 border border-solid border-amber-500 p-2 lg:w-11/12 lg:left-16">
                        <div className="image-wrapper relative top-4 left-4 md:top-5 md:left-5 w-full h-[25rem] overflow-hidden">
                          <Image
                            src={content.image}
                            alt="hero-image"
                            fill
                            priority
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="image-wrapper relative w-full h-[25rem] mx-auto overflow-hidden md:hidden">
                      <Image
                        src={content.image}
                        alt="hero-image"
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="herobase-image flex flex-row gap-3 my-10 items-center justify-between">
                    {content.herobaseImages.map((baseimage, index) => (
                      <div
                        key={index}
                        className="relative overflow-hidden text-white w-full h-16 lg:h-24"
                      >
                        <Image
                          src={baseimage.image}
                          alt="base image"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>
      <div className="b-white p-2 my-5">
        <div className="flex flex-col items-center lg:w-3/5 lg:mx-auto">
          <h2 className="text-2xl text-center font-bold max-w-prose md:text-4xl md:mt-5 lg:text-[2.375rem]">
            Wavebudget is easier , affordable, faster and reliable
          </h2>
        </div>
        <div 
          className="lg:grid lg:grid-cols-3">
          <motion.div
          initial = {{
            x: '-100%',
          }}
          whileInView={{
            x: 0,
          }}
          transition = {{
            duration: 1,
            ease: "easeIn"
          }}
            className="mt-28 mb-10 p-2"
          >
            <div className="relative bg-[#008B8B] min-h-20 mx-auto p-2 rounded-md mt-14 lg:h-96">
              <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 bg-[#F5F5F5] w-[9.375rem] h-[9.375rem] rounded-full flex flex-col items-center justify-center lg:-top-20">
                <UserIcon />
              </div>
              <div className="flex flex-col justify-end md:gap-3">
                <div className="mt-20">
                  <p className="text-white text-lg text-center font-medium mb-3 md:text-3xl md:mb-8 lg:text-lg">
                    Easy Registration in 10 minutes!
                  </p>
                  <ul className="item-list md:ml-24 lg:ml-3">
                    <li className="text-white ml-10 py-2 md:text-2xl md:my-3 lg:text-sm">
                      Basic information
                    </li>
                    <li className="text-white ml-10 py-2 md:text-2xl md:my-3 lg:text-sm">
                      Two STN guarantors
                    </li>
                    <li className="text-white ml-10 py-2 md:text-2xl md:my-3 lg:text-sm">
                      Choose a savings plan
                    </li>
                  </ul>
                </div>
                <div className="mx-auto w-1/2 mt-6 mb-10">
                  <Button className="bg-white text-[#008B8B] hover:bg-[white] w-full md:h-20 md:text-2xl lg:h-10 lg:text-base">
                    Start now
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
          <div
            className="mt-16 mb-10 p-2 md:mt-28">
            <motion.div 
              initial = {{
                x: '100%'
              }}
              whileInView={{
                x: 0,
              }}
              transition = {{
                duration: 1,
                ease: "circIn"
              }}
              className="relative bg-[#008B8B] min-h-20 mx-auto p-2 rounded-md mt-14 lg:h-96">
              <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 bg-[#F5F5F5] w-[9.375rem] h-[9.375rem] rounded-full flex flex-col items-center justify-center lg:-top-20">
                <DollarIcon />
              </div>
              <div className="flex flex-col justify-end md:gap-3">
                <div className="mt-20">
                  <p className="text-white text-lg text-center font-medium mb-3 md:text-3xl lg:text-lg">
                    0% interest on loan repayments
                  </p>
                  <p className="text-white text-center mx-5 my-4 md:text-2xl md:mt-11 md:font-extralight lg:text-sm">
                    Buy items at 8% markup price and payback in 4 minutes free
                    installments.
                  </p>
                </div>
                <div className="mx-auto w-1/2 mt-6 mb-10 md:mt-20 lg:mt-24">
                  <Button className="bg-white text-[#008B8B] hover:bg-[white] w-full md:h-20 md:text-2xl lg:h-10 lg:text-base">
                    Start now
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
          <div
            className="mt-16 mb-10 p-2 md:mt-28">
            <motion.div 
              initial={{
                x: "-100%",
              }}
              whileInView = {{
                x: 0
              }}
              transition = {{
                duration: 1,
                ease: "easeIn"
              }}
              className="relative bg-[#008B8B] min-h-20 mx-auto p-2 rounded-md mt-14 lg:h-96">
              <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 bg-[#F5F5F5] w-[9.375rem] h-[9.375rem] rounded-full flex flex-col items-center justify-center lg:-top-20">
                <VanIcon />
              </div>
              <div className="flex flex-col justify-end md:gap-3">
                <div className="mt-20">
                  <p className="text-white text-lg text-center font-medium mb-3 md:text-3xl lg:text-lg">
                    Instant delivery/ Pickup of items
                  </p>
                  <p className="text-white text-center mx-5 my-4 md:text-2xl md:mt-11 md:font-extralight lg:text-sm">
                    Receive your purchased item instantly upon making initial
                    payment.
                  </p>
                </div>
                <div className="mx-auto w-1/2 mt-6 mb-10 md:mt-[5.9375rem]">
                  <Button className="bg-white text-[#008B8B] hover:bg-[white] w-full md:h-20 md:text-2xl lg:h-10 lg:text-base">
                    Start now
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
