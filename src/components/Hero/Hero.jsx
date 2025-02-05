import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { LanguageContext } from "../../contexts/LanguageContext";

export default function Hero (props) {
    // const {pageData} = props;
    // const {theme, toggleTheme} = useContext(ThemeContext);
    // const {lang, toggleLang} = useContext(LanguageContext);
    // console.log("theme::::::::::::::", theme);
    // console.log("lang:::::::::::::::", lang);
    // console.log("pageData:::::::::::::::", pageData);

    const {heroData} = props;
    console.log("heroData:::::::::::::::", heroData);
    //const {name, myTitle, myTitleDesc,social} = heroData;
    return(
        <div className="hero-section flex flex-col justify-center items-center bg-[#4731D3] max-w-[1440px] h-auto dark:bg-[#171043]">
            <div className="p-4 m-4 font-bold w-[955px] ">
            {/* <header className="flex items-center justify-end p-2">
                    <div className="flex font-bold gap-4 ">
                    <p className="text-[#CBF281] text-sm">{lang}</p>
                        <p className="text-white text-sm"><span onClick={toggleLang} className="text-[#CBF281] cursor-pointer">TÜRKÇE</span>'YE GEÇ</p>
                        <label className="relative inline-block w-10 h-5">
                            <input type="checkbox" className="peer hidden" onClick={toggleTheme} checked={theme==='dark'} />
                            <span className="absolute inset-0 cursor-pointer bg-[#8F88FF] rounded-full transition peer-checked:bg-[#3730A3] peer-focus:ring-2 peer-focus:ring-blue-500"></span>
                            <span className="absolute top-0.5 left-0.5 w-4 h-4 bg-[#FFE86E] rounded-full transition-transform peer-checked:translate-x-5"></span>
                        </label>
                        <p className="text-[#CBF281] text-sm">DARK MODE</p>
                        <p className="text-[#CBF281] text-sm">{theme}</p>
                    </div>
            </header>  */}
                <div>
                    <p className="text-[#CBF281] text-3xl">{heroData?.name}</p>
                </div>
                <div className="hero-content flex flex-row justify-center gap-8">
                    <div className="hero-info flex flex-col justify-center text-left text-white gap-8">
                        <p className="text-[#CBF281] text-5xl">{heroData?.myTitle}</p>
                        <p className="text-2xl">{heroData?.myTitleDesc}</p>
                        <div className="flex gap-4">
                            {heroData?.social.map((item, index) => {
                                return <a className="p-2 text-[#3730A3] bg-white rounded-md" key={index} href={item.link}>{item.name}</a>
                            })}
                        </div>
                    </div>
                    <img className="w-80 h-80 mb-8 rounded-4xl" src={'../../../images/profile.png'} alt="profile-image" />
                </div>
            </div>
        </div>
    );
}