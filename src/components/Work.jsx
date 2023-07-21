const Work = () => {
    return (
        <section className="container mt-8">

            <div className=" flex flex-col items-center">
                <h2 className="text-3xl font-bold">Our Work</h2>
                <p className="w-2/3 text-slate-500 text-sm text-center py-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint occaecati cupiditate non provident,</p>
            </div>
            <ul className="py-8 px-5 text-sm mb-8 text-center grid gap-4 grid-cols-3 items-center">
                <li className="w-20 p-2 text-center text-white  bg-gradient-to-r from-blue-800 to-blue-400 rounded-full"><a href="/">All</a></li>
                <li><a href="/">Graphic</a></li>
                <li ><a href="/">Web Design</a></li>
                <li className=" col-span-2"><a href="/">E-commerce</a></li>
                <li ><a href="/">Branding</a></li>
                <li className="col-span-3 mx-auto"><a href="/">Markting</a></li>
            </ul>
            <div className="contaienr flex flex-col justify-center items-center lg:flex-wrap lg:flex-row lg:gap-1">
                <div className="w-[90%] mx-auto rounded lg:w-1/4">
                    <div>
                        {/* bg-image XXXXXX*/}
                        {/* <a href="/" className=" bg-[url('./img/port1.jpg')]"></a> */}
                        <a href="/">
                            <img src="./img/port1.jpg" alt="port-1" className="pb-5" />
                            {/* Event hover XXXXX */}
                            {/* <span className="w-full h-full absolute top-1/2 left-1/2 font-semibold text-sm text-white hidden  hover:block hover:bg-slate-500 hover:transition-all">View Deatils</span> */}
                        </a>
                    </div>
                </div>
                <div className="w-[90%] mx-auto rounded lg:w-1/4">
                    <div>
                        {/* bg-image XXXXXX*/}
                        {/* <a href="/" className=" bg-[url('./img/port1.jpg')]"></a> */}
                        <a href="/">
                            <img src="./img/port2.jpg" alt="port-1" className="pb-5" />
                            {/* Event hover XXXXX */}
                            {/* <span className="w-full h-full absolute top-1/2 left-1/2 font-semibold text-sm text-white hidden  hover:block hover:bg-slate-500 hover:transition-all">View Deatils</span> */}
                        </a>
                    </div>
                </div>
                <div className="w-[90%] mx-auto rounded lg:w-1/4">
                    <div>
                        {/* bg-image XXXXXX*/}
                        {/* <a href="/" className=" bg-[url('./img/port1.jpg')]"></a> */}
                        <a href="/">
                            <img src="./img/port3.jpg" alt="port-3" className="pb-5" />
                            {/* Event hover XXXXX */}
                            {/* <span className="w-full h-full absolute top-1/2 left-1/2 font-semibold text-sm text-white hidden  hover:block hover:bg-slate-500 hover:transition-all">View Deatils</span> */}
                        </a>
                    </div>
                </div>
                <div className="w-[90%] mx-auto rounded lg:w-1/4">
                    <div>
                        {/* bg-image XXXXXX*/}
                        {/* <a href="/" className=" bg-[url('./img/port1.jpg')]"></a> */}
                        <a href="/">
                            <img src="./img/port4.jpg" alt="port-4" className="pb-5" />
                            {/* Event hover XXXXX */}
                            {/* <span className="w-full h-full absolute top-1/2 left-1/2 font-semibold text-sm text-white hidden  hover:block hover:bg-slate-500 hover:transition-all">View Deatils</span> */}
                        </a>
                    </div>
                </div>
                <div className="w-[90%] mx-auto rounded lg:w-1/4">
                    <div>
                        {/* bg-image XXXXXX*/}
                        {/* <a href="/" className=" bg-[url('./img/port1.jpg')]"></a> */}
                        <a href="/">
                            <img src="./img/port5.jpg" alt="port-5" className="pb-5" />
                            {/* Event hover XXXXX */}
                            {/* <span className="w-full h-full absolute top-1/2 left-1/2 font-semibold text-sm text-white hidden  hover:block hover:bg-slate-500 hover:transition-all">View Deatils</span> */}
                        </a>
                    </div>
                </div>
                <div className="w-[90%] mx-auto rounded lg:w-1/4">
                    <div>
                        {/* bg-image XXXXXX*/}
                        {/* <a href="/" className=" bg-[url('./img/port1.jpg')]"></a> */}
                        <a href="/">
                            <img src="./img/port6.jpg" alt="port-6" className="pb-5" />
                            {/* Event hover XXXXX */}
                            {/* <span className="w-full h-full absolute top-1/2 left-1/2 font-semibold text-sm text-white hidden  hover:block hover:bg-slate-500 hover:transition-all">View Deatils</span> */}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work