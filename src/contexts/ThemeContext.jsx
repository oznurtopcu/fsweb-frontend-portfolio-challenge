import { createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext();
const initialTheme = 'light';

export default function ThemeContextProvider({children}) {
    const [theme, setTheme] = useLocalStorage('theme', initialTheme);
    //const [theme, setTheme] = useState('light');
    //useLocalStorage kullanarak localstorage içinden theme bilgisini çekeceğiz ve sayfayı geçerli temaya göre açacağız

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    //direkt olarak html tagine dark classını ekliyoruz
    useEffect(() => {
        if (theme === 'dark') {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}