import { useEffect, useState } from "react";
import Header from "../../mobileComponents/Header";

import './index.css'
import Image from "../../mobileComponents/Image";
import Footer from "../../mobileComponents/Footer";

export default function MobilePics () {
    const [swiper, setSwiper] = useState<any>()
    const [dialogVisible, setDialogVisible] = useState(false)
    // 15张图
    const images = [
        { preview: '/mobile/pic-1.jpg', origin: '/mobile/bpic-1.png' },
        { preview: '/mobile/pic-2.jpg', origin: '/mobile/bpic-2.png' },
        { preview: '/mobile/pic-3.jpg', origin: '/mobile/bpic-3.png' },
        { preview: '/mobile/pic-4.jpg', origin: '/mobile/bpic-4.png' },
        { preview: '/mobile/pic-5.jpg', origin: '/mobile/bpic-5.png' },
        { preview: '/mobile/pic-6.jpg', origin: '/mobile/bpic-6.png' },
        { preview: '/mobile/pic-7.jpg', origin: '/mobile/bpic-7.png' },
        { preview: '/mobile/pic-8.jpg', origin: '/mobile/bpic-8.png' },
        { preview: '/mobile/pic-9.jpg', origin: '/mobile/bpic-9.png' },
        { preview: '/mobile/pic-10.jpg', origin: '/mobile/bpic-10.png' },
        { preview: '/mobile/pic-11.jpg', origin: '/mobile/bpic-11.png' },
        { preview: '/mobile/pic-12.jpg', origin: '/mobile/bpic-12.png' },
        { preview: '/mobile/pic-13.jpg', origin: '/mobile/bpic-13.png' },
        { preview: '/mobile/pic-14.jpg', origin: '/mobile/bpic-14.png' },
        { preview: '/mobile/pic-15.jpg', origin: '/mobile/bpic-15.png' }
    ]

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
            <Footer />
        </>
    )
}