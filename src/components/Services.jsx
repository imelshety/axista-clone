const Services = () => {
    return (

        <div className="container space-y-9 mt-16 mb-5 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold lg:text-[40px]">Featured Services</h2>
            <p className="w-2/3 text-slate-500 text-sm text-center leading-6 lg:text-[16px] lg:max-w-3xl lg:py-5">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,</p>
            <div className="flex flex-col gap-4 lg:flex-row lg:justify-center">
                <div className="w-11/12 bg-[#f8fafb] p-10 rounded flex flex-col items-start border-b-4 border-b-[#328d84] lg:w-1/4">
                    <div className="w-20 h-20 bg-[#ffeafc] rounded-full mb-2 flex justify-center items-center">
                        <img src="/img/icon1.png" alt="icon-1" />
                    </div>
                    <h3 className="text-xl font-semibold py-3">Web Desgin</h3>
                    <p className="text-slate-500 text-sm py-3">At vero eos et accusamus et iusto odio digniss imos ducimus qui blanditiis
                        praesentium volu ptatum deleniti atque corrupti quos.</p>
                </div>
                <div className="w-11/12 bg-[#f8fafb] p-10 rounded flex flex-col items-start border-b-4 border-b-[#328d84] lg:w-1/4">
                    <div className="w-20 h-20 bg-[#ffeafc] rounded-full mb-2 flex justify-center items-center">
                        <img src="/img/icon2.png" alt="icon-1" />
                    </div>
                    <h3 className="text-xl font-semibold py-3">App Design</h3>
                    <p className="text-slate-500 text-sm py-3">At vero eos et accusamus et iusto odio digniss imos ducimus qui blanditiis
                        praesentium volu ptatum deleniti atque corrupti quos.</p>
                </div>
                <div className="w-11/12 bg-[#f8fafb] p-10 rounded flex flex-col items-start border-b-4 border-b-[#7479ce] lg:w-1/4">
                    <div className="w-20 h-20 bg-[#ffeafc] rounded-full mb-2 flex justify-center items-center">
                        <img src="/img/icon3.png" alt="icon-1" />
                    </div>
                    <h3 className="text-xl font-semibold py-3">Digital Marketing</h3>
                    <p className="text-slate-500 text-sm py-3">At vero eos et accusamus et iusto odio digniss imos ducimus qui blanditiis
                        praesentium volu ptatum deleniti atque corrupti quos.</p>
                </div>
            </div>
        </div>

    )
}

export default Services