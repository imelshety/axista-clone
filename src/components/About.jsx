
const About = () => {
    return (

        <section className="mt-20">
            <div className="py-10 flex flex-col justify-center items-start lg:flex-row flex-wrap-reverse">
                <div className="w-full h-[550px]  bg-gradient-to-r from-[#ffecd9] to-[#ecf1f4] flex justify-center items-center rounded lg:w-1/2 lg:rounded-tr-[150px] lg:rounded-bl-[150px]">
                    <img src="/img/about1.png" alt="" />
                </div>
                <div className="flex flex-col items-start lg:w-1/2 lg:items-center"><h2 className="font-bold text-3xl pt-12 px-4 lg:text-4xl ">About Our Agency</h2>
                    <p className="text-slate-500 text-sm leading-7 px-4 py-8 lg:max-w-xl">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that
                        it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.</p>
                    <p className="text-slate-500 text-sm leading-7 px-4 py-8 lg:max-w-xl">making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                        as their default model text, and a search , will uncover many web sites still.</p></div>

            </div>
            <div className="py-10 flex flex-col justify-center items-start lg:flex-row flex-wrap-reverse">
                <div className="flex flex-col items-start lg:w-1/2 lg:items-center"><h2 className="font-bold text-3xl px-4 lg:text-4xl">Mission Company</h2>
                    <p className="text-slate-500 text-sm leading-7 px-4 py-8 lg:max-w-xl">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that
                        it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.</p>
                    <p className="text-slate-500 text-sm leading-7 px-4 py-8 lg:max-w-xl">making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                        as their default model text, and a search , will uncover many web sites still.</p>
                    <button className="h-12  px-12 mx-4 mb-10 text-white  bg-gradient-to-r from-blue-800 to-blue-400 rounded hover:bg-blue-950">
                        See Features</button>
                </div>
                <div className="w-full h-[550px]  bg-gradient-to-r from-[#ffecd9] to-[#ecf1f4] flex justify-center items-center rounded lg:w-1/2 lg:rounded-tl-[150px] lg:rounded-br-[150px]">
                    <img src="/img/about2.png" alt="" />
                </div>


            </div>
        </section>
    )
}

export default About