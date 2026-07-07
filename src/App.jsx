import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import Flashcards from './pages/Flashcards'
import Quiz from './pages/Quiz'
import Progress from './pages/Progress'
import Bookmarks from './pages/Bookmarks'
import './App.css'

export default function App() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Sidebar collapsed={collapsed} onToggleCollapse={() => setCollapsed(c => !c)} mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />
        <div className={`main ${collapsed ? 'collapsed' : ''}`}>
          <Topbar onOpenMobile={() => setMobileOpen(true)} />
          <div className="page">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/flashcards" element={<Flashcards />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}