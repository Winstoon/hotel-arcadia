import { useState } from 'react'
import { useCommonStore } from '../../store'
import './index.css'
import Image from '../Image'

export default function PageNavgation ({ lightmode }: { lightmode?: boolean }) {
    const swiper = useCommonStore(state => state.swiper)
    const active = useCommonStore(state => state.pageSectionOrder)
    const maxIdx = swiper?.slides.length - 1
    const prevable = active > 0
    const nextable = active < maxIdx

    const [loading, setLoading] = useState(false)

    const handleChangeIdx = (dir: 'prev' | 'next') => {
        setLoading(true)
        setTimeout(() => setLoading(false), 2000)

        if (dir === 'prev') {
            swiper.slidePrev()
        }
        
        if (dir === 'next') {
            swiper.slideNext()
        }
    }

    const handlePrev = () => {
        if (loading || !prevable) return
        handleChangeIdx('prev')
    }
    const handleNext = () => {
        if (loading || !nextable) return
        handleChangeIdx('next')
    }

    return (
        <div className={`page-nav ${!!swiper ? 'show' : ''}`}>
            <div onClick={handlePrev} className={prevable ? '' : 'disabled'}>
                { lightmode ?
                    <Image src='/icons/p.arrow.prev.black.svg' /> :
                    <Image src='/icons/p.arrow.prev.svg' />
                }
            </div>
            <div onClick={handleNext} className={nextable ? '' : 'disabled'}>
                { lightmode ?
                    <Image src='/icons/p.arrow.next.black.svg' /> :
                    <Image src='/icons/p.arrow.next.svg' />
                }
            </div>
        </div>
    )
}