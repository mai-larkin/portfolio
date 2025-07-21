import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed mx-auto pb-12 top-0 left-0 right-0 z-10 bg-purple-950 bg-opacity-60">
            <div className="flex container lg:py-4 flex-wrap items-end justify-between mx-auto px-4 py-2">
                <div className="menu md:block md:w-auto" id="navbar">
                    <ul className="flex md:flex-row md:space-x-8 mt-0">
                        <li key="about">
                            <Link href="/about">About</Link>
                        </li>
                        <li key="contact">
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;