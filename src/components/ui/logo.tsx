import Image from 'next/image'
import ImageLogo from '/public/logo.png'
const Logo = () => {
    return (
        <div className='relative -left-14 w-36 h-10 flex flex-row items-center'>
            <Image 
                src={ ImageLogo }
                alt='logo image'
                priority
                fill
                className='object-cover'
                
            />
            <span className='text-white font-bold text-xs uppercase absolute left-28'>Wave<br />Budget</span>
        </div>
    )
}

export default Logo;