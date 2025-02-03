export default function Hero () {
    return(
        <div className="hero-section flex flex-col justify-center items-center bg-[#4731D3] max-w-[1440px] h-auto">
            <div className="p-4 m-4 font-bold w-[955px] ">
            <header className="flex items-center justify-end p-2">
                    <div className="flex font-bold gap-4 ">
                        <p className="text-white text-sm"><span className="text-[#CBF281]">TÜRKÇE</span>'YE GEÇ</p>
                        <p className="text-[#CBF281] text-sm">DARK MODE</p>
                    </div>
            </header> 
                <div>
                    <p className="text-[#CBF281] text-3xl">Öznur</p>
                </div>
                <div className="hero-content flex flex-row justify-center gap-8">
                    <div className="hero-info flex flex-col justify-center text-left text-white gap-8">
                        <p className="text-[#CBF281] text-5xl">I am a frontend-developer</p>
                        <p className="text-2xl">...who likes to craft solid and scalable frontend products with great user experiences.</p>
                        <div className="flex gap-4">
                            <a className="p-2 text-[#3730A3] bg-white rounded-md" href="#">Github</a>
                            <a className="p-2 text-[#3730A3] bg-white rounded-md" href="#">LinkedIn</a>
                        </div>
                    </div>
                    <img className="w-96 h-96 " src='../../images/profile.png' alt="profile-image" />
                </div>
            </div>
        </div>
    );
}