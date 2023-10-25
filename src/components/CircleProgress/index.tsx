import './index.css'

interface IProps {
    active: boolean
    width?: number
    height?: number
    className?: string
}

export default function CircleProgress (props: IProps) {
    const { active, className, width = 40, height = 40 } = props

    if (!active) return (
        <div className='dotprogress' style={{ width, height }}>
            <div className='dot'></div>
        </div>
    )

    return (
        <svg viewBox="0 0 160 160" width={width} height={height} className={`svgprogress ${className}`}>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70" stroke-linecap="round"></circle>
        </svg>
    )
}
