import React, { useState } from 'react'
import { FocusTrap } from 'focus-trap-react'
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, BanknotesIcon, ChartBarIcon, GlobeAltIcon, TruckIcon, BoltIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export interface NavItem {
    label: string
    href: string
    colorClass?: string
    icon?: React.ReactNode
}

export interface GlobalHeaderProps {
    logo?: React.ReactNode
    navItems?: NavItem[]
    accentColor?: string // hex or tailwind class fallback
}

const defaultNav: NavItem[] = [
    { label: 'Banking', href: '/banking', colorClass: 'text-blue-600', icon: <BanknotesIcon className="w-5 h-5 mr-2 text-current" /> },
    { label: 'Finance', href: '/finance', colorClass: 'text-red-600', icon: <ChartBarIcon className="w-5 h-5 mr-2 text-current" /> },
    { label: 'Sustainable Products', href: '/sustainable', colorClass: 'text-green-600', icon: <GlobeAltIcon className="w-5 h-5 mr-2 text-current" /> },
    { label: 'Logistics & Supply Chain', href: '/logistics', colorClass: 'text-orange-500', icon: <TruckIcon className="w-5 h-5 mr-2 text-current" /> },
    { label: 'Energy Solutions', href: '/energy', colorClass: 'text-yellow-500', icon: <BoltIcon className="w-5 h-5 mr-2 text-current" /> },
]

export const GlobalHeader: React.FC<GlobalHeaderProps> = ({
    logo,
    navItems = defaultNav,
    accentColor = '#28a745',
}) => {
    const [open, setOpen] = useState(false)
    const [dark, setDark] = useState<boolean>(() => {
        try {
            const stored = localStorage.getItem('theme')
            if (stored) return stored === 'dark'
        } catch {
            // ignore
        }
        return false
    })

    const safeLocalSet = (k: string, v: string) => {
        try {
            localStorage.setItem(k, v)
        } catch {
            void 0
        }
    }

    React.useEffect(() => {
        const root = document.documentElement
        if (dark) {
            root.classList.add('dark')
            safeLocalSet('theme', 'dark')
        } else {
            root.classList.remove('dark')
            safeLocalSet('theme', 'light')
        }
    }, [dark])

    const handleKey = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-gray-900 shadow-sm" onKeyDown={handleKey}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-16 flex items-center justify-between">
                    {/* Logo left */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center space-x-3">
                            {logo ?? <img src="/src/assets/logo.svg" alt="Integrated Corp" className="h-8 w-auto" />}
                            <span className="sr-only">Integrated Corp.</span>
                        </a>
                    </div>

                    {/* Center nav - desktop */}
                    <nav className="hidden md:flex space-x-6" aria-label="Primary navigation">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`inline-flex items-center px-3 py-2 rounded-full font-medium header-btn ${item.colorClass ?? ''}`}
                            >
                                {item.icon}
                                <span className="text-sm">{item.label}</span>
                            </a>
                        ))}
                    </nav>

                    {/* Right actions */}
                    <div className="flex items-center space-x-4">
                        {/* Mobile menu button */}
                        <button
                            className="md:hidden p-2 rounded-md header-btn"
                            aria-label="Toggle menu"
                            aria-expanded={open}
                            onClick={() => setOpen((v) => !v)}
                        >
                            {open ? <XMarkIcon className="w-6 h-6 text-gray-200" /> : <Bars3Icon className="w-6 h-6 text-gray-200" />}
                        </button>

                        {/* Search icon */}
                        <button aria-label="Search" className="p-2 rounded-md header-btn hidden sm:inline-flex">
                            <MagnifyingGlassIcon className="w-5 h-5 text-gray-200" />
                        </button>

                        {/* Dark mode toggle */}
                        <button
                            aria-label="Toggle dark mode"
                            onClick={() => setDark((v) => !v)}
                            className="icon-btn btn-accent header-btn"
                            style={{ backgroundColor: undefined }}
                        >
                            {dark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                        </button>

                        <a href="/login" className="text-sm text-gray-300 header-btn hidden sm:inline">
                            Login
                        </a>

                        <a
                            href="/signup"
                            className="btn-accent inline-flex items-center text-sm text-white rounded-md shadow header-btn"
                            style={{ backgroundColor: accentColor ?? 'var(--accent)' }}
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile nav panel */}
            {open && (
                <FocusTrap active={open} focusTrapOptions={{ allowOutsideClick: true }}>
                    <div className="md:hidden bg-gray-800 shadow-inner" role="dialog" aria-modal="true">
                        <div className="px-4 pt-2 pb-4 space-y-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={`flex items-center px-3 py-2 rounded-md font-medium ${item.colorClass ?? 'text-gray-300'}`}
                                    onClick={() => setOpen(false)}
                                >
                                    {item.icon}
                                    <span className="ml-2">{item.label}</span>
                                </a>
                            ))}
                            <div className="pt-2 border-t">
                                <a href="/login" className="block px-3 py-2 text-sm text-gray-300">Login</a>
                                <a href="/signup" className="block px-3 py-2 mt-1 text-sm text-white rounded-md" style={{ backgroundColor: accentColor }}>Sign Up</a>
                            </div>
                        </div>
                    </div>
                </FocusTrap>
            )}
        </header>
    )
}

export default GlobalHeader
