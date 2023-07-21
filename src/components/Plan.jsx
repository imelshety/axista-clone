export const Plan = () => {
    return (
        <section className="mt-8 text-center">
            <h2 className="text-3xl font-bold py-10">Choose Your Right Plan</h2>

            <ul className="flex justify-center mb-8 ">
                <li className="p-3 bg-[#ffc400]  rounded-full ">
                    <a className=" text-white" href="/">Monthly</a>
                </li>
                <li className="p-3 hover:bg-[#ffc400] rounded-full hover:text-white">
                    <a href="/">Annually</a>
                </li>
            </ul>
            <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-6">
                <div className="mt-5 w-11/12 bg-white py-5 mb-10 rounded shadow-2xl flex flex-col justify-center items-center lg:w-1/4">
                    <h2 className="w-1/2 text-2xl font-bold py-2 border-b-[3px] border-[#2a31a3]">Starter</h2>
                    <p className="p-3 text-slate-500 text-sm"><span className="text-[18px] text-black font-semibold">$200/</span>month </p>
                    <ul className="w-11/12 space-y-3">
                        <li className="w-full flex justify-center space-x-5 text-slate-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
                                className="mt-1">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                            <p>Reponsive Desgin</p>
                        </li>
                        <li className="w-full flex justify-center space-x-5 text-slate-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
                                className="mt-1">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                            <p> 5 Pages Website </p>
                        </li>
                        <li className="w-full flex justify-center space-x-5 text-slate-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
                                className="mt-1">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                            <p> Basic Features</p>
                        </li>
                        <li className="text-slate-500 text-sm">Community Support</li>
                        <li className="text-slate-500 text-sm">SEO Optimize</li>
                        <li className="text-slate-500 text-sm">Premium Support</li>
                        <li className="text-slate-500 text-sm">Hosting Provide</li>
                        <li><button className="h-12 px-12 mt-5 text-white  bg-gradient-to-r from-blue-800 to-blue-400 rounded">
                            See Features</button></li>
                    </ul>
                </div>
                <div className="w-11/12 bg-white py-5 mb-5 rounded shadow-2xl flex flex-col justify-center items-center lg:w-1/4">
                    <h2 className="w-1/2 text-2xl font-bold py-2 border-b-[3px] border-[#2a31a3]">Business</h2>
                    <p className="p-3 text-slate-500 text-sm"><span className="text-[18px] text-black font-semibold">$500/</span>month </p>
                    <ul className="w-11/12 space-y-3">
                        <li className="w-full flex justify-center space-x-5 text-slate-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
                                className="mt-1">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                            <p>Reponsive Desgin</p>
                        </li>
                        <li className="w-full flex justify-center space-x-5 text-slate-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
                                className="mt-1">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                            <p> 5 Pages Website </p>
                        </li>
                        <li className="w-full flex justify-center space-x-5 text-slate-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
                                className="mt-1">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                            <p> Basic Features</p>
                        </li>
                        <li className="w-full flex justify-center space-x-5 text-slate-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
                                className="mt-1">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                            <p> Community Support</p>
                        </li>
                        <li className="w-full flex justify-center space-x-5 text-slate-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
                                className="mt-1">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                            <p>  SEO Optimize   </p>
                        </li>
                        <li className="text-slate-500 text-sm">Premium Support</li>
                        <li className="text-slate-500 text-sm">Hosting Provide</li>
                        <li><button className="h-12 px-12 mt-5 text-white  bg-gradient-to-r from-blue-800 to-blue-400 rounded">
                            See Features</button></li>
                    </ul>
                </div>
                <div className="w-11/12 bg-white py-5 mb-5 rounded shadow-2xl flex flex-col justify-center items-center lg:w-1/4">
                    <h2 className="w-1/2 text-2xl font-bold py-2 border-b-[3px] border-[#2a31a3]">Professional</h2>
                    <p className="p-3 text-slate-500 text-sm"><span className="text-[18px] text-black font-semibold">$700/</span>month </p>
                    <ul className="w-11/12 space-y-3">
                        <li className="w-full flex justify-center space-x-5 text-slate-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
                                className="mt-1">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                            <p>Reponsive Desgin</p>
                        </li>
                        <li className="w-full flex justify-center space-x-5 text-slate-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
                                className="mt-1">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                            <p> 5 Pages Website </p>
                        </li>
                        <li className="w-full flex justify-center space-x-5 text-slate-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
                                className="mt-1">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                            <p> Basic Features</p>
                        </li>
                        <li className="w-full flex justify-center space-x-5 text-slate-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
                                className="mt-1">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                            <p> Community Support</p>
                        </li>
                        <li className="w-full flex justify-center space-x-5 text-slate-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
                                className="mt-1">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                            <p> SEO Optimize</p>
                        </li>
                        <li className="w-full flex justify-center space-x-5 text-slate-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
                                className="mt-1">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                            <p>Premium Support</p>
                        </li>
                        <li className="w-full flex justify-center space-x-5 text-slate-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
                                className="mt-1">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                            <p>Hosting Provide</p>
                        </li>
                        <li><button className="h-12 px-12 mt-5 text-white  bg-gradient-to-r from-blue-800 to-blue-400 rounded">
                            See Features</button></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
