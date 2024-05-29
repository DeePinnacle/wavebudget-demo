'use client'
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { testimonies } from '@/config/data'

import { Check } from 'lucide-react'

const TestimonySection = () => {

  return (
    <div className='p-2 bg-[#EAF6F6] lg:py-32'>
          {/* testimonial wrapper */}
          <div className='testimonial-wrapper my-5 p-2 md:w-4/5 md: mx-auto'>
              <Swiper
                 slidesPerView = { 1 }
                 spaceBetween =  { 10 }
                 breakpoints = {{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 40
                    }
                }}
                loop = { true }
                autoplay = {{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                
                modules = {[Autoplay]}
                className = 'mySwiper'
              >
              {testimonies.map((item, index) => (
                  <SwiperSlide key={ index }>
                      {/* slider containere starts here */}
                        <div className='p-2 lg:grid lg:grid-cols-2 lg:gap-3'>
                            <div className='testimony-text'>
                                <p className='italic'><b>“</b>{ item.testimony }<b>’’</b></p>
                            </div>
                            <div className='bg-white shadow-md rounded-md px-3 py-5 my-3 lg:my-0'>
                                <div className='flex flex-row items-center justify-between gap-3'>
                                    <div className='relative w-20 h-20 rounded-full overflow-hidden'>
                                        <Image src='/testimonialImage.png' alt='testimonial image' fill priority className='object-cover' />
                                    </div>
                                    <h1 className='text-3xl font-bold lg:text-5xl'>{ item.amount }Naira</h1>
                                    <div className='w-8 h-8 rounded-full bg-[#85e98d] flex flex-row items-center justify-center'>
                                        <Check className='text-[#4ECB71]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4p-2 mx-auto mt-5 w-1/2 text-center'>
                            <p>{ item.state }</p>
                        </div>
                      {/* slider container ends here */}
                  </SwiperSlide>
              ))}
            </Swiper>
          {/* navigation buttons */}
            
            {/* <div className='btn-wrapper lg:mt-5'>
             <div className='swiper-pagination'></div>
          </div> */}
      </div>
        {/* testimonial wrapper ends here */}
    </div>
  )
}

export default TestimonySection

