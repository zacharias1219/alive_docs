import Link from 'next/link'
import Image from 'next/image'
import act from 'react'

type HeaderProps = {
    children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className='header'>
        <Link href='/' className='md:flex-1'>
            <Image 
                src='assets/icons/logo.svg'
                alt='logo with name'
                width={120}
                height={32}
                className='hidden md:block'
            />
            <Image 
                src='assets/icons/logo-icon.svg'
                alt='logo'
                width={32}
                height={32}
                className='hidden md:hidden'
            />
        </Link>
    </div>
  )
}

export default Header