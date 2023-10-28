import { useEffect, useState } from "react"
import Image from "../Image"
import './SwiperImages.css'
import { useSwiperImageStore } from "../../store"

interface IProps{
    images: string[]
}

export default function SwiperImages (props: IProps) {
    const { images } = props
    const [page, setPage] = useSwiperImageStore(state => [state.page, state.setPage])
    
    const [activeIdx, setActiveIdx] = useState<number[]>([])


    useEffect(() => {
        if (page === 1) {
            setActiveIdx([0, 1, 2, 3])
        } else if (page === 2) {
            setActiveIdx([2, 3, 4, 5])
        } else if (page === 3) {
            setActiveIdx([4, 5, 6, 7])
        }
    }, [page])

    const isDisableClick = (idx: number) => {
        return activeIdx.includes(idx)
    }


    const handleClick = (idx: number) => {
        if (page === 1 && idx === 4) {
            setPage(2)
        }

        if (page === 2 && idx === 1) {
            setPage(1)
        }

        if (page === 2 && idx === 6) {
            setPage(3)
        }

        if (page === 3 && idx === 3) {
            setPage(2)
        }
    }

    return (
        <>
            <div className={`swiper-images ${page === 2 ? 'secondpage' : page === 3 ? 'thridpage':''}`}>
                { images.map((img, index) => 
                    <div
                        key={index}
                        className={`swiper-item ${isDisableClick(index) ? 'nopointer' : '' }`}
                        onClick={() => handleClick(index)}
                    >
                        <Image src={img} />
                    </div>
                )}
            </div>
            <div className={`swiper-imagesbar ${page === 2 ? 'secondpage' : page === 3 ? 'thridpage' : ''}`}>
                <div className="bar"></div>
            </div>
        </>
    )
}
