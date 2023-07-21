import mylogo from '../assets/logo.png';
const Header = () => {
    return (

        <header className='sticky top-0 z-50'>
            <div className="bg-white border-b border-slate-200 relative z-10">
                <div className="container">
                    <div className=" flex justify-between items-center pt-6 mb-2 lg:justify-around">

                        <div className="flex items-center ml-3">
                            <a
                                href="/"
                                className="text-slate-600 inline-block flex-shrink-0"
                            >
                                <img
                                    src={mylogo}
                                    width={68}
                                    height={40}
                                    alt="logo"
                                    className="  h-8 block sm:h-12"
                                />
                            </a>
                        </div>
                        <div className="flex items-center lg:hidden">
                            <button className="text-black p-2.5  flex items-center justify-center focus:outline-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-8"
                                    viewBox="0 0 448 512"
                                    fill="currentColor"
                                >
                                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                                </svg>
                            </button>
                        </div>
                        <ul className='w-1/2 space-x-8 min-[320px]:hidden lg:flex'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Portfiolio</a></li>
                            <li><a href="/">Team</a></li>
                            <li><a href="/">Pricing</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header