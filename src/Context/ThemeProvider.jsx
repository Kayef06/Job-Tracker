import useLocalStorage from "../Hooks/useLocalStorage.js";
import ThemeContext from "./ThemeContext.js";

export default function ThemeProvider({children}){
    const [theme,setTheme]= useLocalStorage(
        "job-tracker-theme",
        "light"
    );
    function toggleTheme(){
        setTheme((current)=> 
        current === "light" ? "dark" : "light");
    }
    const value = {theme,setTheme,toggleTheme}
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}