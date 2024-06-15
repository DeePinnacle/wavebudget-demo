import Link from "next/link";
import {
  HeadPhoneIcon,
  PhoneIcon,
  WhatsappIcon,
} from "@/components/icons/icons";
const Footer = () => {
  return (
    <div className="px-2 py-8 bg-[#008B8B] md:flex md:flex-col md:justify-end md:gap-10 md:p-4">
      <div className="lg:grid lg:grid-cols-4 lg:justify-between">
        <div className="address p-2 text-white">
          <h3 className="capitalize mb-10 font-bold text-lg md:text-2xl lg:text-center lg:text-xl">
            our address
          </h3>
          <h4 className="my-4 font-bold capitalize md:text-xl lg:text-lg lg:text-center">
            Head office
          </h4>
          <p className="md:text-[1.375rem] lg:text-base lg:text-center">
            {/* Saint James House, Ademola Adetokunbo, Wuse 2, Abuja. */}
            Shop 27, Nulge shoppin complex,Tunga, Minna, Niger state.
          </p>
          {/* <h4 className="my-4 font-bold capitalize md:text-xl lg:text-md lg:text-center">
            laison office
          </h4> */}
          {/* <p className="md:text-[1.375rem] lg:text-base lg:text-center"> */}
            {/* Suite 23 Nugle complex, Minna, Niger State. */}
            {/* ******************************************** */}
          {/* </p> */}
        </div>
        <div className="services text-white p-2">
          <h3 className="capitalize mb-10 font-bold text-lg md:text-2xl lg:text-center lg:text-xl">
            our services
          </h3>
          <ul>
            <li className="capitalize p-1 md:text-[1.375rem] lg:text-base lg:text-center">
              Flexi Pay
            </li>
            <li className="capitalize p-1 md:text-[1.375rem] lg:text-base lg:text-center">
              zero pay
            </li>
            <li className="capitalize p-1 md:text-[1.375rem] lg:text-base lg:text-center">
              save to buy
            </li>
          </ul>
        </div>
        <div className="products text-white p-2">
          <h3 className="capitalize mb-10 font-bold text-lg md:text-2xl lg:text-center lg:text-xl">
            about product
          </h3>
          <ul>
            <li className="capitalize p-1 md:text-[1.375rem] lg:text-base lg:text-center">
              updates
            </li>
            <li className="capitalize p-1 md:text-[1.375rem] lg:text-base lg:text-center">
              beta test
            </li>
            <li className="capitalize p-1 md:text-[1.375rem] lg:text-base lg:text-center">
              stn
            </li>
          </ul>
        </div>
        <div className="resources text-white p-2">
          <h3 className="capitalize mb-10 font-bold text-lg md:text-2xl lg:text-center lg:text-xl">
            resources
          </h3>
          <ul>
            <li className="capitalize p-1 md:text-[1.375rem] lg:text-base lg:text-center">
              help center
            </li>
            <li className="capitalize p-1 md:text-[1.375rem] lg:text-base lg:text-center">
              partners
            </li>
            <li className="capitalize p-1 md:text-[1.375rem] lg:text-base lg:text-center">
              news letter
            </li>
          </ul>
        </div>
      </div>
      <div className='text-white md:hidden'>
        <div className="flex flex-row gap-2 items-center my-3">
          <HeadPhoneIcon className='text-white' />
          <p className="font-bold">Contact us via:</p>
        </div>
        <div className="flex flex-row gap-2 items-center my-3">
          <PhoneIcon className='text-white' />
          <Link href='tel:https://wa.me/+2348137960202'> 08137960202</Link>
        </div>
        <div className="flex flex-row gap-2 items-center my-3">
          <WhatsappIcon />
          <Link href='tel:https://wa.me/+2348137960202'> 08137960202</Link>
        </div>
      </div>
      <div className="text-white p-2 flex flex-row gap-2 items-center mt-28 mb-6 md:justify-between md:text-xl lg:text-base">
        <p>Copyright 2023. All rights reserved</p>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};
export default Footer;
