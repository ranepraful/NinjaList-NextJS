import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/vercel.svg" width={128} height={77}/>
            </div>
            <Link href="/" legacyBehavior><a>Home</a></Link>
            <Link href="/about" legacyBehavior><a>About</a></Link>
            <Link href="/ninjas" legacyBehavior><a>Ninja Listing</a></Link>
        </nav>
     );
}
 
export default Navbar;