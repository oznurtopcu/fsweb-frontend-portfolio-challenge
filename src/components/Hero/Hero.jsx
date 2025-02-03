export default function Hero () {
    return(
        <div className="hero-section justify-center bg-[#4731D3] max-w-[1440px] h-auto border">
            {/* <header className="flex flex-col bg text-red-500 max-w-[955px]">
                <div className="flex justify-end">
                    <p>Türkçe'ye Geç</p>
                    <p>Dark Mode</p>
                </div>
            </header> */}
            <div className="hero-content flex flex-row justify-center p-4 m-8 gap-8">
                <div className="hero-info flex flex-col justify-center text-left text-white gap-8">
                    <p className="text-[#CBF281] text-3xl">Öznur</p>
                    <p className="text-[#CBF281] text-5xl">I am a frontend-developer</p>
                    <p className="text-2xl">...who likes to craft solid and scalable frontend products with great user experiences.</p>
                    <div className="flex gap-4">
                        <a className="p-2 text-[#3730A3] bg-white rounded-md" href="#">Github</a>
                        <a className="p-2 text-[#3730A3] bg-white rounded-md" href="#">LinkedIn</a>
                    </div>
                </div>
                <img className="w-96 h-96 bg-white" src='../../images/profile-image.jpg' alt="profile-image" />
            </div>

        
        </div>
    );
}