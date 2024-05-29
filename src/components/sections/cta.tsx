import { Button } from "../ui/button";

const CTA = () =>{
    return (
        <div className='bg-[#EAF6F6] py-10 px-3'>
            <h1 className='text-2xl text-center font-bold md:text-4xl'>We can’t wait to start supporting your shopping budget</h1>
            <h4 className='text-lg text-center font-bold my-10 md:text-2xl md:font-extralight lg:text-lg'>Shop on credit from stores near you, with immediate item pickup/delivery</h4>
            <div className='w-4/5 mx-auto my-16 lg:w-1/4'>
                <Button className='capitalize w-full bg-white text-black text-lg py-5 shadow-md hover:bg-white md:py-8 md:text-2xl lg:text-base' size='lg'>register now</Button>
            </div>
        </div>
    )
}

export default CTA;