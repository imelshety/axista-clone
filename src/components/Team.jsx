const Team = () => {
    return (
        <section className="mt-8">
            <div className="container space-y-6 mt-16 mb-5 text-center ">
                <h2 className="text-3xl font-bold "> Team Members</h2>
                <p className="text-slate-500 text-sm text-center max-w-2xl leading-6 mx-auto mb-15">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,</p>
                <div className="flex flex-col justify-center items-center mt-20 lg:flex-row lg:gap-5    ">
                    <div className=" space-y-4 text-center">
                        <img src="./img/member1.png" alt="member1" />
                        <h3 className="font-semibold text-lg">Anila Lexi</h3>
                        <p className=" text-slate-500 text-sm">Co - Founder</p>
                    </div>
                    <div className=" space-y-4 text-center">
                        <img src="./img/member2.png" alt="member2" />
                        <h3 className="font-semibold text-lg">Anila Lexi</h3>
                        <p className=" text-slate-500 text-sm">Co - Founder</p>
                    </div>
                    <div className=" space-y-4 text-center">
                        <img src="./img/member3.png" alt="member3" />
                        <h3 className="font-semibold text-lg">Anila Lexi</h3>
                        <p className=" text-slate-500 text-sm">Co - Founder</p>
                    </div>
                    <div className=" space-y-4 text-center">
                        <img src="./img/member4.png" alt="member4" />
                        <h3 className="font-semibold text-lg">Anila Lexi</h3>
                        <p className=" text-slate-500 text-sm">Co - Founder</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team