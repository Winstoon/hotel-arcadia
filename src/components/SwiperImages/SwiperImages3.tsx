import { useEffect, useState } from "react"
import Image from "../Image"
import { useCommonStore, useSwiperImage3Store } from "../../store"
import './SwiperImages.css'


interface IImage {
    src: string
    caption: string
    desc: string[]
}

interface IProps{
    images: IImage[]
}

export default function SwiperImages3 (props: IProps) {
    const { images } = props
    const ls = useCommonStore(state => state.letterSpacing)
    const [page, setPage] = useSwiperImage3Store(state => [state.page, state.setPage])
    const [activeIdx, setActiveIdx] = useState<number[]>([])


    useEffect(() => {
        if (page === 1) {
            setActiveIdx([0, 1])
        } else if (page === 2) {
            setActiveIdx([2, 3])
        } else if (page === 3) {
            setActiveIdx([3, 4])
        }
    }, [page])

    const isDisableClick = (idx: number) => {
        return activeIdx.includes(idx)
    }


    const handleClick = (idx: number) => {
        if (page === 1 && idx === 2) {
            setPage(2)
        }

        if (page === 2 && idx === 1) {
            setPage(1)
        } 

        if (page === 2 && idx === 4) {
            setPage(3)
        }

        if (page === 3 && idx === 2) {
            setPage(2)
        }
    }

    return (
        <>
            <div className={`swiper-images3 ${page === 2 ? 'secondpage' : page === 3 ? 'thridpage':''}`}>
                { images.map((img, index) => 
                    <div
                        key={index}
                        className={`swiper-item ${isDisableClick(index) ? 'nopointer' : '' }`}
                        onClick={() => handleClick(index)}
                    >
                        <Image src={img.src} />
                        <div className="intros" style={{ letterSpacing: ls.TXT}}>
                            { img.caption ? <div className="img-caption">{img.caption}</div> : null }
                            { img.desc.map(desc => 
                                <div className="img-desc">{desc}</div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <div className={`swiper-imagesbar ${page === 2 ? 'secondpage' : page === 3 ? 'thridpage' : ''}`}>
                <div className="bar"></div>
            </div>
        </>
    )
}
