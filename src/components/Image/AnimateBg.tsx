import Image from "."
import './index.css'

interface IProps {
    src: string
    width?: number
    height?: number
    style?: React.CSSProperties
    className?: string
    infinite?: boolean
    onClick?: () => void
}

export default function AnimateBg (props: IProps) {
    const { infinite } = props
    return (
        <div className={`bgimg ${infinite ? 'infinite' : ''}`}>
            <Image {...props} />
        </div>
    )
}