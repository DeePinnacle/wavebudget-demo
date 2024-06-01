import Image from "next/image";
import { data } from "@/config/data";
import { Button } from "../ui/button";
const StepsSection = () => {
  return (
    <div className="bg-[#008B8B] px-2 py-8">
      <h1 className="text-white text-xl text-center font-bold mt-2 mb-10 md:text-3xl">
        Manage and support your budget in 4 simple steps
      </h1>
      <div className='lg:grid lg:grid-cols-2 lg:items-center lg:gap-3'>
        <div className="relative w-96 h-96 overflow-hidden mx-auto lg:order-last">
          <Image
            src="/phone.png"
            alt="steps-image"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="gap-3">
          {data.map((item, index) => (
            <div key={ index } className="p-2 my-3 border-t border-b border-r border-l-[16px] border-s-[#ED9613] border-y-black border-r-black lg:w-4/5">
              <p className="my-4 px-3 text-white text-lg font-medium md:text-2xl md:font-bold lg:text-base">
                {item.title}
              </p>
              <p className="px-3 mb-3 text-white md:text-[1.375rem] md:font-extralight lg:text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='mx-auto w-3/4'>
        <Button className='bg-white text-black px-5 my-5 mx-auto'>Lets split the bills together!</Button>
      </div>
    </div>
  );
};
export default StepsSection;
