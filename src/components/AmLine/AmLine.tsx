import { CSSProperties } from 'react'
import './AmLine.css'

interface IProps {
    active?: boolean
    style?: CSSProperties
}

export default function AmLine (props: IProps) {
    const { active, style } = props

    return <div style={style} className={`am-line ${active ? 'active' : ''}`}>
        <i></i>
    </div>
}
