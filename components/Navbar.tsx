'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { authClient } from "@/lib/auth-client"

const Navbar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    router.push('/sign-in');
  };

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
                onClick={() => router.push(`/profile/${user.id}`)}>
                    <Image 
                      src={user.image || "/assets/images/dummy.jpg"} 
                      alt='user profile' 
                      width={36} 
                      height={36} 
                      className='rounded-full aspect-square' 
                    />
                </button>
                <button className='cursor-pointer' onClick={handleLogout}>
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