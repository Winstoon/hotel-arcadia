import Image from '../Image'
import './index.css'

interface VSData {
    url: string
    title?: string
    descs?: string[]
    width?: number
    height?: number
}

interface IProps {
    data: VSData[]
    lightmode?:boolean
}

export function VScroll (props: IProps) {
    const { data, lightmode } = props
    const defWidth = 313
    const defHeight = 330

    return (
        <div className={`v-scroll ${lightmode ? 'lightmode' : ''}`}>
            <div className='v-scrollinner'>
                { data.map(({ url, title, descs, width = defWidth, height = defHeight }) =>
                    <div className='vs-item' style={{ width, maxHeight: height }}>
                        <Image className='vs-img' src={url} />
                        { title ? <div>{title}</div> : null }
                        { descs ? descs.map(desc => <div>{desc}</div>) : null }
                    </div>
                )}
            </div>
        </div>
    )
}