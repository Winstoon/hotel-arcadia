import { useEffect } from 'react'
import { useFadeSlide3Store } from '../../store'

import './FadeSlide.css'

interface IProps {
    autoplay?: boolean
    waiting?: number
    length: number
    trigger?: 'click' | 'hover'
    paginationClassName?: string
    render: (active: number) => React.ReactNode[]
    renderPaginations: (active: number) => React.ReactNode[]
}

let interval: any = null
export default function FadeSlide3 (props: IProps) {
    const { autoplay, trigger = 'click', waiting, length, paginationClassName, render, renderPaginations } = props
    const [active, setActive, setActiveFn] = useFadeSlide3Store(state => [state.active, state.setActive, state.setActiveFn])

    useEffect(() => {
        if (autoplay) {
            play()
        }

        return () => {
            clearInterval(interval)
            interval = undefined
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const play = () => {
        if (interval) return
        
        interval = setInterval(() => {
            const maxIndex = length - 1
            
            setActiveFn(atv => {
                const next = atv + 1
                return next > maxIndex ? 0 : next
            })
        }, waiting || 3000)
    }

    const handleChangeIdx = (index: number) => {
        setActive(index)
        clearInterval(interval)
        interval = undefined

        interval = setInterval(() => {
            const maxIndex = length - 1
            
            setActiveFn(atv => {
                const next = atv + 1
                return next > maxIndex ? 0 : next
            })
        }, waiting || 3000)
    }

    const handleClickDot = (index: number) => {
        if (trigger === 'click') {
            handleChangeIdx(index)
        }
    }
    
    const handleHoverDot = (index: number) => {
        if (trigger === 'hover') {
            handleChangeIdx(index)
        }
    }

    return (
        <div className="fade-slide">
            <div className="fade-wrapper">
                { render(active).map((slide, index) => 
                    <div
                        key={index}
                        className={`fade-item ${active === index ? 'active' : ''}`}
                    >{slide}</div>
                )}
            </div>
            <div className={`fade-pagination ${paginationClassName || ''}`}>
                { renderPaginations(active).map((dot, index) => 
                    <div
                        key={index}
                        onClick={() => handleClickDot(index)}
                        onMouseEnter={() => handleHoverDot(index)}
                        className={`fade-page-item ${active === index ? 'active' : ''}`}
                    >{dot}</div>
                )}
            </div>
        </div>
    )
}