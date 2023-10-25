import { useState } from "react";
import Header from "../../components/Header";
import Image from "../../components/Image";

import './index.css'

const data = [
    { id: 1, url: '' },
    { id: 2, url: '' },
    { id: 3, url: '' },
    { id: 4, url: '' },
    { id: 5, url: '' },
    { id: 6, url: '' },
    { id: 7, url: '' },
    { id: 8, url: '' },
    { id: 9, url: '' },
    { id: 10, url: '' },
    { id: 11, url: '' },
    { id: 12, url: '' }
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
            <div className="ppt-close" onClick={() => onVisibleChange(false)}>x</div>

            <div className="ppt-prev" onClick={handlePrev}>prev ({prevable})</div>
            <div className="ppt-slider">
                { images.map((img, index) =>
                    <div className={`ppt-slider-item ${index === idx ? 'show' : ''}`}>
                        <Image src={img.url} />
                    </div>
                )}
            </div>
            <div className="ppt-next" onClick={handleNext}>next ({nextable})</div>
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
        <div className="container withscroll">
            <Header />
            <div className="scrollview">
                <div className="pictures">
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
        </div>
    )
}