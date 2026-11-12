import  { useContext } from 'react'
import ThemeContext from './ThemeContext'

export default function useTheme() {
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("UseTheme Must be inside ThemeProvider")
    }
  return context ;
   
}
