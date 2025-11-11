import React, { useEffect, useRef, useState } from 'react'

interface Props {
    children: React.ReactNode
}

export const PageWrapper: React.FC<Props> = ({ children }) => {
    const headerRef = useRef<HTMLElement | null>(null)
    const [paddingTop, setPaddingTop] = useState<number>(64)

    useEffect(() => {
        // Find header element by role or tag
        const header = document.querySelector('header') as HTMLElement | null
        headerRef.current = header

        const calc = () => {
            const h = headerRef.current ? headerRef.current.getBoundingClientRect().height : 64
            setPaddingTop(Math.ceil(h))
        }

        calc()
        window.addEventListener('resize', calc)
        return () => window.removeEventListener('resize', calc)
    }, [])

    return (
        <div style={{ paddingTop }}>
            {children}
        </div>
    )
}

export default PageWrapper
