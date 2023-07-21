const Home = () => {
    return (

        <section className="h-screen py-20 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url(/img/hero-bg.jpg)" }}>
            <div className="container">

                <div className="space-y-8 px-3 lg:mx-[12rem] lg:py-24">
                    <h1 className="text-4xl font-bold leading-10 lg:text-[52px] lg:pb-5">WE ARE WEB AGENCY</h1>
                    <p className="text-slate-500 p-3 border-l-4 border-[#115e59] max-w-md lg:pb-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accou santium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.</p>
                    <button className="h-12  px-12 text-white  bg-gradient-to-r from-blue-800 to-blue-400 rounded lg:px-20 lg:text-lg">
                        See Features</button>
                </div>

            </div>

        </section>
    )
}

export default Home;