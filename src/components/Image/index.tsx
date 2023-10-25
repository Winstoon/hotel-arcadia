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
    return <img {...props} alt="img" draggable='false' style={{ display: 'block'}} />
}