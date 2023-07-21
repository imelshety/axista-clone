const Form = () => {
    return (
        <div className="container mt-8">
            <h2 className="text-2xl font-semibold text-center lg:text-4xl lg:mt-12">Getting Touch</h2>
            <form className="my-5 ml-4 lg:grid lg:grid-cols-2 lg:gap-4">
                <input type="text" name="userName" placeholder="Enter Name" className="w-[95%] text-sm text-slate-300 p-2 mb-8 border-b-[2px] border-[#2a31a3] " />
                <input type="email" name="userEmail" placeholder="Enter Email" className="w-[95%] text-sm text-slate-300 p-2 mb-8 border-b-[2px] border-[#2a31a3]" />
                <input type="address" name="userAddress" placeholder="Enter Address" className="w-[95%] text-sm text-slate-300 p-2 mb-8 border-b-[2px] border-[#2a31a3]" />
                <input type="phone" name="userPhone" placeholder="Mobile No" className="w-[95%] text-sm text-slate-300 p-2 mb-8 border-b-[2px] border-[#2a31a3]" />
                <textarea name="massege" cols="30" rows="10" required placeholder="Write Your message" className="w-[95%] h-[90px] text-sm text-slate-300 p-2 mb-8 border-b-[2px] border-[#2a31a3] lg:col-span-2"></textarea>
                <button className="w-[95%] text-center text-white text-xl font-semibold bg-[#ffc400] p-2 mx-auto rounded hover:bg-[#2a31a3]">Send message</button>
            </form>
        </div>
    )
}

export default Form