import { useEffect, useState } from "react";
import Header from "../../mobileComponents/Header";
import Image from "../../mobileComponents/Image";
import Footer from "../../mobileComponents/Footer";

import './index.css'
import { VideoSrc } from "../../App";


function VideoModal ({ visible, onClose }: { visible: boolean, onClose: () => void }) {
    const handleClose = () => {
        onClose()
    }

    useEffect(() => {
        var video = document.getElementById("mfirstVideo")
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
        <div className={`org-dialog ${visible ? 'show' : ''}`}>
            <div className="close" onClick={() => handleClose()}>
                <Image src="/icons/close.svg" />
            </div>
            { visible ?
                <iframe width="100%" height="220" src="https://www.youtube.com/embed/CyFCuyXI7rE" title="ARCADIA 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> : null
                // <video controls id="firstVideo" style={{ width: 960 }}>
                //     <source src={VideoSrc} type="video/mp4" />
                // </video> : null
            }
        </div>
    )
}


export default function MobilePics () {
    const [swiper, setSwiper] = useState<any>()
    const [dialogVisible, setDialogVisible] = useState(false)
    const [videoVisible, setVideoVisible] = useState(false)
    
    // 15张图
    const getImages = () => {
        return Array.from({ length: 73 }).map((_, index) => {
            return {
                preview: `/pics/pic-${index + 1}.jpg`,
                origin: `/pngs/bpic-${index + 1}.png`
            }
        })
    }

    const images = getImages()

    const handleClick = (idx: number) => {
        setDialogVisible(true)
        swiper.slideTo(idx, 0, false)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        // @ts-ignore
        const swiperIns = new Swiper('.bigimg', { speed: 200, spaceBetween: 30 });
        setSwiper(swiperIns)
    }, [])

    return (
        <>
            <Header />
            <div className="mobile-container mobile-pic">
                <div className="pics">
                    <div className="pic-box">
                        <Image src="/icons/play.svg" className="play" />
                        <Image src="/pics/pic-0.jpg" onClick={() => setVideoVisible(true)} />
                    </div>

                    {images.map((item, index) =>
                        <Image
                            src={item.preview}
                            onClick={() => handleClick(index)}
                        />
                    )}
                </div>
            </div>

            <div className={`org-dialog ${dialogVisible ? 'show' : ''}`}>
                <div className="close" onClick={() => setDialogVisible(false)}>
                    <Image src="/icons/close.svg" />
                </div>
                <div className="swiper bigimg">
                    <div className="swiper-wrapper">
                        {images.map((imgSrc, index) => (
                            <div className='swiper-slide'>
                                <Image src={imgSrc.origin} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <VideoModal visible={videoVisible} onClose={() => setVideoVisible(false)} />
            <Footer />
        </>
    )
}