import Image from "."
import './index.css'

interface IProps {
    src: string
    width?: number
    height?: number
    style?: React.CSSProperties
    className?: string
    infinite?: boolean
    reverse?: boolean
    onClick?: () => void
}

export default function AnimateBg (props: IProps) {
    const { infinite, reverse, ...others } = props
    return (
        <div className={`mobile-bgimg ${infinite ? 'infinite' : ''}`}>
            <Image {...others} className={reverse ? 'reverse' : ''} />
        </div>
    )
}