'use client'
import { stnData } from '@/config/data'
import { Button } from '../ui/button';

import { motion } from 'framer-motion'
const StnSection = () =>{
    return (
        <motion.div 
            initial = {{
                x: '-100%'
            }}
            whileInView = {{
                x: 0
            }}
            transition = {{
                duration: 1,
                ease: "easeIn"
            }}
            className='bg-[#C0DDDB] px-2 py-6 lg:grid lg:grid-cols-2 lg:gap-3'>
            <div className='stn p-2'>
                <h1 className='uppercase font-bold font-sans text-xl text-center md:text-2xl lg:mt-8'>SOCIAL TRUST NETWORK (STN)</h1>
                <p className='text-center my-5 md:text-[1.375rem] lg:text-lg'>Bank on your TRUST to access affordable loans </p>
                {
                    stnData.map((data, index)=>(
                        <div key={ index } className='px-2 py-4 my-2 border border-solid border-slate-200 md:text-xl md:leading-normal lg:text-base'>
                            <p><span className='text-md font-bold'>{ data.title }:</span> { data.content } </p>
                        </div>
                    ))
                }
                <p className='text-center my-4 md:text-[1.375rem] lg:text-base'>If your friends and family can trust you, then we can trust you too.</p>
                <div className='w-4/5 mx-auto lg:w-1/2'>
                    <Button className='uppercase w-full bg-white text-[#008B8B] hover:bg-white md:py-8 md:text-2xl lg:py-5 lg:text-base' size='lg'>get started</Button>
                </div>
            </div>
            <div className='gad p-2 my-6 lg:border-l border-solid border-slate-200'>
                <h1 className='uppercase font-bold font-sans text-xl text-center md:text-2xl'>GAD savings (guaranteed amount deposited)</h1>
                <p className='font-bold my-4 px-3 text-lg md:text-[1.375rem] lg:mt-20'>Let your savings save you!</p>
                <p className='my-4 px-3 md:text-[1.375rem] lg:text-base'>
                    Save with us to seamlessly improve your savings culture and access
                    affordable loans to support your financial needs. Select a savings plan
                    today and be consistent towards it.
                </p>
            </div>
        </motion.div>
    )
}
export default StnSection;