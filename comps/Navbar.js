import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                
                <Image src="/1200px-Nextjs-logo.svg.png" width={128} height={77} />
            </div>
            <Link href='/about'>About</Link>
            <br />
            <Link href="/">Home</Link>
           <br />
           <Link href="/ninjas">Ninjas listening</Link>
        </nav>
     );
}
 
export default Navbar;