import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { LanguageContext } from "../../contexts/LanguageContext";

export default function Header(props) {
    const {langSetting} = props;
      const {theme, toggleTheme} = useContext(ThemeContext);
      const {lang, toggleLang} = useContext(LanguageContext);
    return(
        //className={theme ==='dark' ? 'dark' : ''}
        <>
            <div className='bg-[#4731D3] dark:bg-[#171043] flex justify-center p-4 max-w-[1440px]'>
                <header className="flex items-center justify-end p-4 font-bold w-[955px]">
                    <div className="flex font-bold gap-4 ">
                        <button onClick={toggleLang} className="text-white text-sm cursor-pointer dark:text-[#777777]">{lang==='tr' && langSetting?.langSuffix} <span className="text-[#CBF281] dark:text-[#BAB2E7]">{langSetting?.lang}</span>{lang==='en' && langSetting?.langSuffix}</button>
                        {/* düzeltilmesi gerekiyor, şu anda biraz yavaş çalışıyor gibi */}
                        <label className="relative inline-block w-10 h-5">
                        <input type="checkbox" className="peer hidden" onClick={toggleTheme} checked={theme==='dark'} />
                        <span className="absolute inset-0 cursor-pointer bg-[#8F88FF] rounded-full transition peer-checked:bg-[#3730A3] peer-focus:ring-2 peer-focus:ring-blue-500"></span>
                        <span className="absolute top-0.5 left-0.5 w-4 h-4 bg-[#FFE86E] rounded-full transition-transform peer-checked:translate-x-5"></span>
                        </label>
                        <p className="text-[#CBF281] text-sm w-28 dark:text-[#D9D9D9]">{theme === 'dark' ? 'DARK' : 'LIGHT' } MODE</p>
                    </div>
                </header> 
            </div> 
        </>
    ); 
}