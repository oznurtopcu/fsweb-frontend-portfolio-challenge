import { useContext } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import { LanguageContext } from './contexts/LanguageContext';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const {lang, toggleLang, pageData} = useContext(LanguageContext);
  console.log("theme::::::::::::::", theme);
  console.log("lang:::::::::::::::", lang);
  console.log("pageData:::::::::::::::", pageData);

  const {langSetting} = pageData;

  return (
    <div>
      <div className='bg-[#4731D3] flex justify-center p-4 max-w-[1440px]'>
      <header className="flex items-center justify-end p-4 font-bold w-[955px]">
        <div className="flex font-bold gap-4 ">
            <p className="text-white text-sm">{lang==='tr' && langSetting?.langSuffix} <span onClick={toggleLang} className="text-[#CBF281] cursor-pointer">{langSetting?.lang}</span>{lang==='en' && langSetting?.langSuffix}</p>
            {/* düzeltilmesi gerekiyor, şu anda biraz yavaş çalışıyor gibi, her seferinde istek atıyor */}
            <label className="relative inline-block w-10 h-5">
              <input type="checkbox" className="peer hidden" onClick={toggleTheme} checked={theme==='dark'} />
              <span className="absolute inset-0 cursor-pointer bg-[#8F88FF] rounded-full transition peer-checked:bg-[#3730A3] peer-focus:ring-2 peer-focus:ring-blue-500"></span>
              <span className="absolute top-0.5 left-0.5 w-4 h-4 bg-[#FFE86E] rounded-full transition-transform peer-checked:translate-x-5"></span>
            </label>
            <p className="text-[#CBF281] text-sm w-28">{theme === 'dark' ? 'DARK' : 'LIGHT' } MODE</p>
        </div>
      </header> 
      </div>
      <Hero heroData={pageData.heroSection}/>
      <Skills/>
    </div>
  )
}

export default App
