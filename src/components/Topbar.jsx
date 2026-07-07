import { Menu, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import './Topbar.css'

export default function Topbar({ onOpenMobile }) {
    const { theme, toggleTheme } = useTheme()
    return (
        <header className="topbar">
            <button className="icon-btn mobile-only" onClick={onOpenMobile}><Menu size={20} /></button>
            <div className="topbar-spacer" />
            <button className="icon-btn theme-toggle" onClick={toggleTheme}>
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
        </header>
    )
}