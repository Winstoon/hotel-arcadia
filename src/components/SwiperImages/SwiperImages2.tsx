import { useState } from "react"
import Image from "../Image"
import './SwiperImages.css'
import { useCommonStore, useSwiperImage2Store } from "../../store"
import { getFontSize } from "../../App"


interface IImage {
    src: string
    caption: string
    desc: string[]
}

interface IProps{
    images: IImage[]
    className?: string
}

export default function SwiperImages2 (props: IProps) {
    const { images, className } = props
    const ls = useCommonStore(state => state.letterSpacing)
    const lang = useCommonStore(state => state.lang)
    const [active, setActive] = useSwiperImage2Store(state => [state.page, state.setPage]) // 0: 0-2, 3: 3-5

    const btnVisible = images.length > 3

    const prevable = images.length > 3 && active === 3
    const nextable = images.length > 3 && active === 0

    const offsetY = images[0].caption && images[0].desc.length ? -25 : 0

    const onPrev = () => {
        if (prevable) setActive(0)
    }
    
    const onNext = () => {
        if (nextable) setActive(3)
    }

    return (
        <>
            <div className={'swiper-images2 ' + className || ''}>
                { btnVisible &&
                    <Image
                        className={`prev ${prevable ? '' : 'disabled'}`}
                        style={{ top: offsetY }}
                        src="/icons/arrow-left.svg"
                        onClick={onPrev}
                    />
                }
                <div className="images">
                    <div className="wrap" style={{ transform: `translateX(${active === 0 ? 0 : '-100%'})`}}>
                    { images.map((img, idx) =>
                        <div className="img-box" key={idx}>
                            <div className="hover-animate"><Image className="img" src={img.src} /></div>
                            { img.caption ? <div className="img-caption" style={{ letterSpacing: ls.H1, fontSize: getFontSize('desc', lang) }}>{img.caption}</div> : null }
                            { img.desc.map(desc => 
                                <div className="img-desc" style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>{desc}</div>
                            )}
                        </div>
                    )}
                    </div>
                </div>
                { btnVisible &&
                    <Image
                        className={`next ${nextable ? '' : 'disabled'}`}
                        style={{ top: offsetY }}
                        src="/icons/arrow-right.svg"
                        onClick={onNext}
                    />
                }
            </div>
            { images.length > 3 ?
                <div className={`swiper-imagesbar secondSwiper ${active === 3 ? 'secondpage' : ''}`}>
                    <div className="bar"></div>
                </div> : null
            }
        </>
    )
}
