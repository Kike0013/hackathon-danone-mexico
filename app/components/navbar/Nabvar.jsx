import Link from "next/link"
import Logo from "./Logo"

const Nabvar = () => {
    return (
        <nav className="flex justify-center p-5 bg-d-light-blue">
            <div className="flex justify-between items-center w-full max-w-7xl">
                <Logo />
                <ul className="flex gap-36">
                    <li className="hover:shadow-xl"><Link href="/">Home</Link></li>
                    <li className="hover:shadow-xl"><Link href="/products">Products</Link></li>
                    <li className="hover:shadow-xl"><Link href="/diary">Diary</Link></li>
                    <li className="hover:shadow-xl"><Link href="/contact">Contact</Link></li>
                </ul>
                <span>
                    <button className="border rounded-full bg-d-violet-blue text-white p-4 hover:shadow-2xl">Login/Sign up</button>
                </span>
            </div>
        </nav>
    )
}

export default Nabvar