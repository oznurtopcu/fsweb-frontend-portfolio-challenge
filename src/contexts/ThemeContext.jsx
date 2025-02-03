import { createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState('light');
    //const [theme, setTheme] = useLocalStorage('theme','');
    //useLocalStorage kullanarak localstorage içinden theme bilgisini çekeceğiz ve sayfayı geçerli temaya göre açacağız

    const toggleTheme = () => {
        setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}