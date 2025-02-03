import { createContext } from "react";
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

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}