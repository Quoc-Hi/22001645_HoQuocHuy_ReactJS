import { useState } from 'react'
import { useRecoilValue } from "recoil"; // <--- thêm dòng này
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Display from "./components/Display";
import Controls from "./components/Controls";
import ThemeToggle from './components/ThemeToggle'
import { themeState } from "./state/themeState"

function App() {
  const theme = useRecoilValue(themeState)

  return (
    <div className={theme}>
      <h1>My App</h1>
      <ThemeToggle />
      
      <Display />
      <Controls />
    </div>
  )
}

export default App