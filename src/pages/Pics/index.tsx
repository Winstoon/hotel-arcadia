import { useState } from "react";
import Header from "../../components/Header";
import Image from "../../components/Image";

import './index.css'
import Footer from "../../components/Footer";

const data = [
    { id: 1, url: '/jpgs/pic-1.jpg', burl: '/pngs/bpic-1.png' },
    { id: 2, url: '/jpgs/pic-2.jpg', burl: '/pngs/bpic-2.png' },
    { id: 3, url: '/jpgs/pic-3.jpg', burl: '/pngs/bpic-3.png' },
    { id: 4, url: '/jpgs/pic-4.jpg', burl: '/pngs/bpic-4.png' },
    { id: 5, url: '/jpgs/pic-5.jpg', burl: '/pngs/bpic-5.png' },
    { id: 6, url: '/jpgs/pic-6.jpg', burl: '/pngs/bpic-6.png' },
    { id: 7, url: '/jpgs/pic-7.jpg', burl: '/pngs/bpic-7.png' },
    { id: 8, url: '/jpgs/pic-8.jpg', burl: '/pngs/bpic-8.png' },
    { id: 9, url: '/jpgs/pic-9.jpg', burl: '/pngs/bpic-9.png' },
    { id: 10, url: '/jpgs/pic-10.jpg', burl: '/pngs/bpic-10.png' },
    { id: 11, url: '/jpgs/pic-11.jpg', burl: '/pngs/bpic-11.png' },
    { id: 12, url: '/jpgs/pic-12.jpg', burl: '/pngs/bpic-12.png' },
    { id: 13, url: '/jpgs/pic-13.jpg', burl: '/pngs/bpic-13.png' },
    { id: 14, url: '/jpgs/pic-14.jpg', burl: '/pngs/bpic-14.png' },
    { id: 15, url: '/jpgs/pic-15.jpg', burl: '/pngs/bpic-15.png' },
]

function PPT ({
    idx,
    visible,
    images,
    onIdxChange,
    onVisibleChange
}: {
    idx: number,
    visible: boolean,
    images: any[],
    onIdxChange: (idx: number) => void,
    onVisibleChange: (bool: boolean) => void

}) {
    const prevIdx = idx - 1
    const nextIdx = idx + 1
    const prevImage = images[prevIdx]
    const nextImage = images[nextIdx]
    const prevable = !!prevImage
    const nextable = !!nextImage

    const handlePrev = () => {
        if (prevable) onIdxChange(prevIdx)
    }

    const handleNext = () => {
        if (nextable) onIdxChange(nextIdx)
    }

    return (
        <div className={`ppt ${visible ? 'show' : ''}`}>
            <div className="close" onClick={() => onVisibleChange(false)}>
                <Image src="/icons/close.svg" />
            </div>

            <div className={`ppt-btn ${prevable ? '': 'disabled'}`} onClick={handlePrev}>
                <Image src="/icons/prev.svg" />
            </div>
            <div className="ppt-imgs">
                {images.map((img, index) =>
                    <div className={`ppt-item ${index === idx ? 'active' : ''}`}>
                        <Image src={img.burl} />
                    </div>
                )}
            </div>
            <div className={`ppt-btn ${nextable ? '': 'disabled'}`} onClick={handleNext}>
                <Image src="/icons/next.svg" />
            </div>
        </div>
    )
}

// 影像
export default function Pictures () {
    const [pptMode, setPPTMode] = useState(false)
    const [pptIdx, setPPTIdx] = useState(0)

    const handleClick = (idx: number) => {
        setPPTIdx(idx)
        setPPTMode(true)
    }

    return (
        <>
            <Header withbg />
            <div className="pictures">
                <div className="pictures-center">
                    {data.map((img, idx) => 
                        <div key={img.id} className="picbox">
                            <Image onClick={() => handleClick(idx)} className="picture" src={img.url} />
                        </div>
                    )}
                </div>
            </div>
            
            <PPT
                visible={pptMode}
                images={data}
                idx={pptIdx}
                onIdxChange={setPPTIdx}
                onVisibleChange={setPPTMode}
            />
            <Footer noborder />
        </>
    )
}