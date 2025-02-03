import { createContext, useState } from "react";

export const LanguageContext = createContext();

const systemLang = navigator.language === 'tr-TR' ? 'tr' : 'en';
console.log("systemLang:::::::::::::::::::", systemLang);
//burada tarayıcı dilini tam olarak algılayamadık

export default function LanguageContextProvider({children}) {
    const [lang, setLang] = useState('tr');

    const toggleLang = () => {
        setLang(lang === 'en' ? 'tr' : 'en');
        //setLang((item) => (item === 'en' ? 'tr' : 'en'));
    }

    return (
        <LanguageContext.Provider value={{lang, toggleLang}}>
            {children}
        </LanguageContext.Provider>
    );
}