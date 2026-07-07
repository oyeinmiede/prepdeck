import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Layers, ClipboardCheck, TrendingUp, Bookmark, ChevronsLeft, X } from 'lucide-react'
import './Sidebar.css'

const links = [
    { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
    { to: '/flashcards', label: 'Flashcards', icon: Layers },
    { to: '/quiz', label: 'Quiz', icon: ClipboardCheck },
    { to: '/progress', label: 'Progress', icon: TrendingUp },
    { to: '/bookmarks', label: 'Bookmarks', icon: Bookmark },
]

export default function Sidebar({ collapsed, onToggleCollapse, mobileOpen, onCloseMobile }) {
    return (
        <>
            {mobileOpen && <div className="sidebar-overlay" onClick={onCloseMobile} />}
            <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
                <div className="sidebar-header">
                    {!collapsed && <span className="sidebar-logo">PrepDeck</span>}
                    <button className="icon-btn mobile-only" onClick={onCloseMobile}><X size={18} /></button>
                    <button className="icon-btn desktop-only" onClick={onToggleCollapse}><ChevronsLeft size={18} className={collapsed ? 'flipped' : ''} /></button>
                </div>
                <nav className="sidebar-nav">
                    {links.map(({ to, label, icon: Icon, end }) => (
                        <NavLink key={to} to={to} end={end} className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`} onClick={onCloseMobile}>
                            <Icon size={19} />
                            {!collapsed && <span>{label}</span>}
                        </NavLink>
                    ))}
                </nav>
            </aside>
        </>
    )
}