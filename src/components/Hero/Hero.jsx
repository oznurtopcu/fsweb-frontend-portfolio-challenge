export default function Hero (props) {

    const {heroData} = props;
    console.log("heroData:::::::::::::::", heroData);
    //const {name, myTitle, myTitleDesc,social} = heroData;
    return(
        <div className="hero-section flex flex-col justify-center items-center bg-[#4731D3] max-w-[1440px] h-auto dark:bg-[#171043]">
            <div className="p-4 m-4 font-bold w-[955px] ">
                <div>
                    <p className="text-[#CBF281] text-3xl">{heroData?.name}</p>
                </div>
                <div className="hero-content flex flex-row justify-center gap-8">
                    <div className="hero-info flex flex-col justify-center text-left text-white gap-8">
                        <p className="text-[#CBF281] text-5xl">{heroData?.myTitle}</p>
                        <p className="text-2xl">{heroData?.myTitleDesc}</p>
                        <div className="flex gap-4">
                            {heroData?.social.map((item, index) => {
                                return <a className="p-2 text-[#3730A3] bg-white rounded-md dark:bg-[#252128] dark:text-white" key={index} href={item.link}>{item.name}</a>
                            })}
                        </div>
                    </div>
                    <img className="w-80 h-80 mb-8 rounded-4xl" src={'../../../images/profile.png'} alt="profile-image" />
                </div>
            </div>
        </div>
    );
}