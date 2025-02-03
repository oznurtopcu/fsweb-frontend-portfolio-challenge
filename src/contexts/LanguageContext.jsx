import axios from "axios";
import { createContext, useEffect, useState } from "react";
import jsonData from '../data.json';

export const LanguageContext = createContext();

const systemLang = navigator.language === 'tr-TR' ? 'tr' : 'en';
console.log("systemLang:::::::::::::::::::", systemLang);
//burada tarayıcı dilini tam olarak algılayamadım, detaylandıracağım

export default function LanguageContextProvider({children}) {
    const [lang, setLang] = useState('tr');
    const [pageData, setPageData] = useState({});

    const toggleLang = () => {
        setLang(lang === 'en' ? 'tr' : 'en');
    }

    //useEffect kullanarak lang değiştiğinde bir axios.get isteği yapsam olur sanırım
    useEffect(() => {
        axios.post('https://reqres.in/api/workintech', jsonData)
        .then((response) => {
            setPageData(response.data[lang]);
        })
    }, [lang]);

    return (
        <LanguageContext.Provider value={{lang, toggleLang, pageData}}>
            {children}
        </LanguageContext.Provider>
    );
}