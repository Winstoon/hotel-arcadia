import { Link } from 'react-router-dom'
import { useCommonStore } from '../../store'

import './index.css'

interface IProps {
    children: React.ReactNode
    size?: 'default' | 'small'
    to?: string
    href?: string
    ghost?: boolean
    uppercase?: boolean
    rightIcon?: boolean
    onClick?: (e: React.MouseEvent) => void
}

export default function Button (props: IProps) {
    const letterSpacing = useCommonStore(state => state.letterSpacing)
    const { children, size, to, href, uppercase, ghost, rightIcon, onClick } = props
    const classname = `button ${size} ${uppercase ? 'uppercase' : ''} ${ghost ? 'ghost' : ''}`
    const style = { letterSpacing: ghost ? 2 : letterSpacing.H2, textIndent: letterSpacing.H2 }

    const newChildren = (
        <>
            {children}
            {rightIcon ? <i className='right-icon' /> : null}
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