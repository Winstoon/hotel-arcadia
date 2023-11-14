import AnimateBg from './AnimateBg'

interface IProps {
    src: string
    width?: number
    height?: number
    style?: React.CSSProperties
    className?: string
    onClick?: () => void
}

export { AnimateBg }

export default function Image (props: IProps) {
    const { style, ...others } = props
    return <img {...others} alt="img" draggable='false' style={{ ...style, display: 'block'}} />
}