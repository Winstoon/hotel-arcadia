import { useEffect, useState } from 'react'
import { useCommonStore } from '../../store'
import './index.css'

interface ISlideProps {
    index: number
    prev: number
    ignoreHideIndex: number[]
    children?: React.ReactNode
}

function SwiperSlide (props: ISlideProps) {
    const { index, prev, ignoreHideIndex, children } = props
    
    return (
        <div className='swiper-slide' style={{ opacity: (prev === index && ignoreHideIndex?.every(i => i !== index)) ? 0 : 1 }}>
            {children}
        </div>
    )
}

interface ISlideBgProps {
    index: number
    prev: number
    end: number
    children?: React.ReactNode
}

function SwiperSlideBg (props: ISlideBgProps) {
    const { index, prev, end, children } = props
    return (
        <div className={`swiper-slide ${prev === index ? 'hidding' : ''} ${end === index ? 'show': ''}`} style={{ overflow: 'auto' }}>
            {children}
        </div>
    )
}


interface IProps {
    speed?: number
    ignoreHideIndex: number[]
    sliders: React.ReactNode[]
}

export default function Fullpage (props: IProps) {
    const { speed = 2000, sliders, ignoreHideIndex } = props
    const [active, setActive] = useState({ prev: -1, end: 0 })
    const setPageSectionOrder = useCommonStore(state => state.setPageSectionOrder)

    useEffect(() => {
        setPageSectionOrder(0)

        // @ts-ignore
        const swiper = new Swiper('.swiper-home', {
            speed,
            mousewheel: true,
            slidesPerView: 'auto',
            direction: 'vertical'
        });
        
        swiper.on('slideChangeTransitionStart', (a: any) => {
            setPageSectionOrder(a.activeIndex)
            setActive(atv => ({ ...atv, prev: a.previousIndex}))
        })
        swiper.on('slideChangeTransitionEnd', (a: any) => {
            setActive(atv => ({ ...atv, end: a.activeIndex }))
        })


        swiper.on('scroll', () =>{
            console.log('??????')
        })

        return () => {
            swiper.destroy()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [speed])

    return (
        <>
            {/* @ts-ignore */}
            <div style={{"--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff"}} className="swiper swiper-home">
                <div className="swiper-wrapper swiper-no-swiping">
                    {sliders.filter(Boolean).map((slide, index) => (
                        <SwiperSlide key={index + 'SL'} index={index} prev={active.prev} ignoreHideIndex={ignoreHideIndex}>
                            {slide}
                        </SwiperSlide>
                    ))}
                </div>
            </div>
            <div className='swiper-wrapper-bg'>
                {sliders.filter(Boolean).map((slide, index) => (
                    <SwiperSlideBg key={index + '-BG'} index={index} prev={active.prev} end={active.end}>
                        {slide}
                    </SwiperSlideBg>
                ))}
            </div>
        </>
    )
}
