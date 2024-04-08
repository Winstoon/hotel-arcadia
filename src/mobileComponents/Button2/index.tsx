import { Link } from 'react-router-dom'
import { useCommonStore } from '../../mobilestore'

import './index.css'
import { getFontSize } from '../../App'

interface IProps {
    children: React.ReactNode
    to?: string
    href?: string
    dark?: boolean
    onClick?: (e: React.MouseEvent) => void
}

export default function Button2 (props: IProps) {
    const letterSpacing = useCommonStore(state => state.letterSpacing)
    const lang = useCommonStore(state => state.lang)
    const { children, dark, to, href, onClick } = props
    const classname = `mobile-button2 ${dark ? 'dark' : ''}`
    const style = { letterSpacing: letterSpacing.TXT, textIndent: letterSpacing.TXT, fontSize: getFontSize('desc', lang) }

    const newChildren = (
        <>
            {children}
            <i className='right-icon' />
        </>
    )

    if (href) {
        return (
            <a style={style} href={href} rel='noreferrer' target='_blank' className={classname}>{newChildren}</a>
        )
    }

    if (to) {
        return (
            <Link style={style} className={classname} to={to}>{newChildren}</Link>
        )
    }

    return <div style={style} className={classname} onClick={onClick}>{newChildren}</div>
}