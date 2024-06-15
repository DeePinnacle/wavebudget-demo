import { 
    HeadPhoneIcon,
    PhoneIcon,
    WhatsappIcon 
} from "@/components/icons/icons"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
const TopNav = () => {
    return (
        <div className="hidden md:bg-white md:py-2 md:px-5 md:flex md:flex-row md:gap-3 md:items-center md:justify-between">
            <div className="contact-info-wrapper md:flex md:flex-row md:gap-8 md:items-center">
                <div className="flex flex-row gap-2 items-center my-3">
                    <HeadPhoneIcon />
                    <p className="font-bold">Contact us via:</p>
                </div>
                <div className="flex flex-row gap-2 items-center my-3">
                    <PhoneIcon />
                    <Link href='tel:https://wa.me/+2348137960202' className="font-bold"> 08137960202</Link>
                </div>
                <div className="flex flex-row gap-2 items-center my-3">
                    <WhatsappIcon />
                    <Link href='tel:https://wa.me/+2348137960202' className="font-bold"> 08137960202</Link>
                </div>
            </div>
            <Button className='bg-[#008B8B] text-white hover:bg-[#008B8B]'>Check loan eligibility</Button>
        </div>
    )
}
export default TopNav;