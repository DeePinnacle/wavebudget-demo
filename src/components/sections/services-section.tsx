'use client'
import { 
    zeropay,
    flexipay,
    savesmall
 } from '@/config/data'
 import Image from 'next/image'
 import { Button } from '@/components/ui/button'

 import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

 import 'swiper/css';
 import 'swiper/css/pagination';
 import 'swiper/css/navigation';
 import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const ServicesSection = ()=>{
    return (
        <div className='mt-20'>
            <h1 className='text-center text-2xl font-sans font-bold uppercase mb-8'>Our services</h1>
            <div className=''>
                {/* zero pay mapping */}
                {
                    zeropay.map((items, index)=>(
                    <div key= { index } className='bg-[#EAF6F6] px-2 py-5 my-3'>
                        <div className='lg:grid lg:grid-cols-2 lg:gap-2 lg:px-5 lg:py-4 lg:max-w-[59.375rem] lg:w-full lg:mx-auto lg:my-8'>
                            <div className='text-container p-2'>
                                <h1 className='text-xl font-bold font-sans md:text-2xl'><span className='uppercase'>zero pay: </span>{ items.title }</h1>
                                {
                                    items.list.map((listItem, index)=>(
                                        <ul key={ index } className='my-6'>
                                            <li className='my-2 md:text-[1.375rem] lg:text-base'>{ listItem.month }</li>
                                            <li className='my-2 md:text-[1.375rem] lg:text-base'>{ listItem.delivery }</li>
                                            <li className='my-2 md:text-[1.375rem] lg:text-base'>{ listItem.budget }</li>
                                        </ul>
                                    ))
                                }
                                <div className='bg-white p-2 flex flex-row items-center gap-3 shadow-md lg:relative lg:left-24 lg:z-50'>
                                    <div className='bg-[#008B8B] w-16 h-16 flex items-center justify-center'>
                                        <Image 
                                            src='/logo.png'
                                            alt='logo-image'
                                            width={ 100 }
                                            height={ 100 }
                                            priority
                                        />
                                    </div>
                                    <p className='text-lg md:text-2xl lg:text-base'>Maximum loan of 100,000 Naira</p>
                                </div>
                                <div className='w-3/5 mx-auto my-3 lg:w-1/2'>
                                    <Button className='uppercase bg-white shadow-md hover:bg-white w-full text-[#008B8B] md:text-[1.375rem] md:py-10 lg:py-6 lg:text-base ' size='lg'>start now</Button>
                                </div>
                            </div>
                            <div className=''>
                                <Swiper
                                    slidesPerView = {'auto'}
                                    loop = { true }
                                    autoplay = {{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    modules = {[Autoplay]}
                                    className = 'mySwiper'
                                >                                    
                                    {   
                                        items.images.map((img, index) => (
                                            <SwiperSlide key = {index}>
                                                <div className='relative w-full h-96 overflow-hidden mx-auto md:h-[31.25rem]'>
                                                    <Image 
                                                    src={img.image}
                                                    alt='services-image'
                                                    fill
                                                    priority
                                                    className='object-cover'
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    ))
                }

                {/* flexi pay mapping */}

                {
                    flexipay.map((items, index)=>(
                    <div key= { index } className='bg-[#D7E8F0] px-2 py-5 my-3'>
                        <div className='lg:grid lg:grid-cols-2 lg:gap-2 lg:px-5 lg:py-4 lg:max-w-[59.375rem] lg:w-full lg:mx-auto lg:my-8'>
                            <div className='text-container p-2'>
                                <h1 className='text-xl font-bold font-sans md:text-2xl'><span className='uppercase'>flexi pay: </span>{ items.title }</h1>
                                {
                                    items.list.map((listItem, index)=>(
                                        <ul key={ index } className='my-6'>
                                            <li className='my-2 md:text-[1.375rem] lg:text-base'>{ listItem.duration }</li>
                                            <li className='my-2 md:text-[1.375rem] lg:text-base'>{ listItem.budget }</li>
                                        </ul>
                                    ))
                                }
                                <div className='bg-white p-2 flex flex-row items-center gap-3 z-[999] shadow-md lg:relative lg:right-24'>
                                    <div className='bg-[#008B8B] w-16 h-16 flex items-center justify-center lg:order-first'>
                                        <Image 
                                            src='/logo.png'
                                            alt='logo-image'
                                            width={ 100 }
                                            height={ 100 }
                                            priority
                                        />
                                    </div>
                                    <p className='text-lg md:text-2xl lg:text-base'>Split payment in 4 interest-free installment</p>
                                </div>
                                <div className='w-3/5 mx-auto my-3 shadow-md lg:w-1/2'>
                                    <Button className='uppercase bg-white hover:bg-white w-full text-[#008B8B] md:text-[1.375rem] md:py-10 lg:py-6 lg:text-base' size='lg'>start now</Button>
                                </div>
                            </div>


                            <div className='order-first'>
                                <Swiper
                                    slidesPerView = {'auto'}
                                    loop = { true }
                                    autoplay = {{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    modules = {[Autoplay]}
                                    className = 'mySwiper'
                                >                                    
                                    {   
                                        items.images.map((img, index)=>(
                                            <SwiperSlide key = { index }>
                                                <div className='relative w-full h-96 overflow-hidden mx-auto md:h-[31.25rem]'>
                                                    <Image 
                                                    src={img.image}
                                                    alt='services-image'
                                                    fill
                                                    priority
                                                    className='object-cover'
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    ))
                }

                {/* savesmall mapping */}

                {
                    savesmall.map((items, index)=>(
                    <div key= { index } className='bg-[#0B7E78] px-2 py-5 my-3'>
                        <div className='lg:grid lg:grid-cols-2 lg:gap-2 lg:px-5 lg:py-4 lg:max-w-[59.375rem] lg:w-full lg:mx-auto lg:my-8'>
                            <div className='text-container p-2'>
                                <h1 className='text-xl font-bold font-sans md:text-2xl'><span className='uppercase'>save to buy: </span>{ items.title }</h1>
                                {
                                    items.list.map((listItem, index)=>(
                                        <ul key={ index } className='my-6'>
                                            <li className='my-2 md:text-[1.375rem] lg:text-base'>{ listItem.budget }</li>
                                            <li className='my-2 md:text-[1.375rem] lg:text-base'>{ listItem.discount }</li>
                                            <li className='my-2 md:text-[1.375rem] lg:text-base'>{ listItem.savings }</li>
                                        </ul>
                                    ))
                                }
                                {/* <div className='bg-white p-2 flex flex-row items-center gap-3'>
                                    <div className='bg-[#008B8B] w-16 h-16 flex items-center justify-center'>
                                        <Image 
                                            src='/logo.png'
                                            alt='logo-image'
                                            width={ 100 }
                                            height={ 100 }
                                            priority
                                        />
                                    </div>
                                    <p className='text-lg'>Split payment in 4 interest-free installment</p>
                                </div> */}
                                <div className='w-3/5 mx-auto my-3'>
                                    <Button className='uppercase bg-white shadow-md hover:bg-white w-full text-[#008B8B] md:text-[1.375rem] md:py-10 lg:py-5 lg:text-base' size='lg'>start now</Button>
                                </div>
                            </div>

                            <div className=''>
                                <Swiper
                                    slidesPerView = {'auto'}
                                    loop = { true }
                                    autoplay = {{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    modules = {[Autoplay]}
                                    className = 'mySwiper'
                                >                                    
                                    {   
                                        items.images.map((img, index)=>(
                                            <SwiperSlide key = { index }>
                                                <div className='relative w-full h-96 overflow-hidden mx-auto md:h-[31.25rem]'>
                                                    <Image 
                                                    src={img.image}
                                                    alt='services-image'
                                                    fill
                                                    priority
                                                    className='object-cover'
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>   
        </div>
    )
}

export default ServicesSection;