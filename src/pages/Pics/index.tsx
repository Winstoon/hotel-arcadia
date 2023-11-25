import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Image from "../../components/Image";

import './index.css'
import Footer from "../../components/Footer";
import { VideoSrc } from "../../App";

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

function VideoModal ({ visible, onClose }: { visible: boolean, onClose: () => void }) {
    const handleClose = () => {
        onClose()
    }

    useEffect(() => {
        var video = document.getElementById("firstVideo")
        if (!video) return

        if (visible) {
            // @ts-ignore
            video.currentTime = 0
            // @ts-ignore
            video.play()
        } else {
            try {
                // @ts-ignore
                video.pause()
            } catch (error) {
                console.log(error)
            }
        }
    }, [visible])

    return (
        <div className={`ppt ${visible ? 'show' : ''}`}>
            <div className="close" onClick={() => handleClose()}>
                <Image src="/icons/close.svg" />
            </div>
            { visible ?
                <video controls id="firstVideo" style={{ width: 960 }}>
                    <source src={VideoSrc} type="video/mp4" />
                </video> : null
            }
        </div>
    )
}

// 影像
export default function Pictures () {
    const [pptMode, setPPTMode] = useState(false)
    const [pptIdx, setPPTIdx] = useState(0)

    const [videoVisible, setVideoVisible] = useState(false)

    const handleClick = (idx: number) => {
        setPPTIdx(idx)
        setPPTMode(true)
    }

    // 15张图
    const getImages = () => {
        return Array.from({ length: 63 }).map((_, index) => {
            return {
                id: index+ 1,
                url: `/pics/pic-${index + 1}.jpg`,
                burl: `/pngs/bpic-${index + 1}.png`
            }
        })
    }

    const data = getImages()

    const handlePlayVideo = () => {
        setVideoVisible(true)
    }

    const handleCloseVideo = () => {
        setVideoVisible(false)
    }

    return (
        <>
            <Header withbg />
            <div className="pictures">
                <div className="pictures-center">
                    <div className="picbox">
                        <Image src="/icons/play.svg" className="play" />
                        <Image className="picture" src="/pics/pic-0.jpg" onClick={() => handlePlayVideo()} />
                    </div>
                    {data.map((img, idx) => 
                        <div key={img.id} className="picbox">
                            <Image className="picture" src={img.url} onClick={() => handleClick(idx)} />
                        </div>
                    )}
                </div>
            </div>

            <VideoModal visible={videoVisible} onClose={handleCloseVideo} />
            
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