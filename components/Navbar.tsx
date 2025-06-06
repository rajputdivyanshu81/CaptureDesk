'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const user = {};

const Navbar = () => {
  const router = useRouter();
  return (
    <header className='navbar'>
      <nav>
        <Link href="/">
          <div className="flex items-center">
            <Image 
              src="/assets/icons/logo.svg" 
              alt="logo" 
              width={32} 
              height={32}
            />
            <h1>CaptureDesk</h1>
          </div>
        </Link>

        {user && (
            <figure>
                <button 
                onClick={() => router.push('/profile/123')}>
                    <Image 
                      src="/assets/images/dummy.jpg" 
                      alt='user profile' 
                      width={36} 
                      height={36} 
                      className='rounded-full aspect-square' 
                    />
                </button>
                <button className='cursor-pointer'>
                    <Image 
                      src="/assets/icons/logout.svg" 
                      alt='logout' 
                      width={24} 
                      height={24} 
                      className='rotate-180'
                    />
                </button>
            </figure>
        )}
      </nav>
    </header>
  )
}

export default Navbar