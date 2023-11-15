import { useEffect } from 'react'
import { useFadeSlide2Store } from '../../mobilestore'

import './FadeSlide.css'

interface IProps {
    autoplay?: boolean
    waiting?: number
    trigger?: 'hover' | 'click'
    length: number
    paginationClassName?: string
    render: (active: number) => React.ReactNode[]
    renderPaginations: (active: number) => React.ReactNode[]
}

let interval: any = null
export default function FadeSlide (props: IProps) {
    const { autoplay, waiting, trigger = 'click', length, paginationClassName, render, renderPaginations } = props
    const [active, setActive, setActiveFn] = useFadeSlide2Store(state => [state.active, state.setActive, state.setActiveFn])

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

    const handleClickDot = (index: number) => {
        if (trigger === 'click') {
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
    }

    const handleHoverDot = (index: number) => {
        if (trigger === 'hover') {
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
    }

    return (
        <div className="mobile-fade-slide">
            <div className="mobile-fade-wrapper">
                { render(active).map((slide, index) => 
                    <div
                        key={index}
                        className={`fade-item ${active === index ? 'active' : ''}`}
                    >{slide}</div>
                )}
            </div>
            <div className={`mobile-fade-pagination ${paginationClassName || ''}`}>
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