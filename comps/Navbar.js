import Link from 'next/link'
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h2>I am a navbar</h2>
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