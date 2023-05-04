import Link from 'next/link' // import the Link component from next/link to link to other pages in the app 
import { FaUserAlt, FaSearch, FaHeart } from 'react-icons/fa' // import the icons from react-icons/fa 
import { BsCartFill } from 'react-icons/bs' // import the icons from react-icons/bs 

export default function Header() {

    return (
        <header className='m-3'>
            <nav className='flex items-center justify-between px-24 h-24 hover:'>
                <ul className="flex gap-6 w-2/6">
                    <li><Link href="/" className="uppercase">Home</Link></li>
                    <li><Link href="#" className="uppercase">About</Link></li>
                    <li><Link href="#" className="uppercase">Shop</Link></li>
                    <li><Link href="/blog" className="uppercase">Blogs</Link></li>
                    <li><Link href="/contact" className="uppercase">Contact</Link></li>
                </ul>

                <Link href="/" className='uppercase text-xl w-2/6 text-center'>Swanky<span className='text-orange-600'>.</span></Link>
                <div className='flex justify-between gap-4 w-2/6'>
                    <div className='flex items-center gap-2'>
                        <FaUserAlt />
                        <p className='uppercase'>Login</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <FaSearch />
                        <input type="search" name="search" placeholder="SEARCH..." className='w-24 placeholder-black' />
                    </div>

                    <div className='flex items-center gap-2'>
                        <FaHeart />
                        <p>(0)</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <BsCartFill />
                        <p>(0)</p>
                    </div>
                </div>
            </nav>
        </header>

    )

}