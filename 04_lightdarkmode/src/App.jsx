import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './context/theme'
import Button from "./components/Button"
import Card from "./components/Card"

function App() {
  const [theme, setTheme] = useState("light");

  const darkTheme = ()=> setTheme("dark");

  const lightTheme = ()=> setTheme("light")

  useEffect(()=> {
    const htmlElement = document.querySelector("html");

    htmlElement.classList.remove("light", "dark")

    htmlElement.classList.add(theme)

  }, [theme])

  return (
    <>
      <ThemeContextProvider value={{theme, darkTheme, lightTheme}}>
          <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                 <Button />
              </div>

              <div className="w-full max-w-sm mx-auto">
                <Card />
              </div>
            </div>
          </div>
      </ThemeContextProvider>
  </>
      )
}

export default App
