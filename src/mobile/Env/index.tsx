import { useEffect, useState } from 'react'
import { useCommonStore, useFadeSlideStore } from '../../mobilestore'
import Header from '../../mobileComponents/Header'
import Button from '../../mobileComponents/Button'
import Button2 from '../../mobileComponents/Button2'
import Image, { AnimateBg } from '../../mobileComponents/Image'
import { ILetterSpacing } from '../../letterSpacings'

import './index.css'
import FadeSlide from '../../mobileComponents/FadeSlide/FadeSlide'
import CircleProgress from '../../mobileComponents/CircleProgress'
import FadeSlide2 from '../../mobileComponents/FadeSlide/FadeSlide2'
import Footer from '../../mobileComponents/Footer'

function Slide1 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    return (
        <div className="section section1" style={{ height: window.outerHeight }}>
            <div className='content'>
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
            </div>

            <AnimateBg src="/mobile/env-1.jpg" infinite />
        </div>
    )
}


function Slide2 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    const I18N = useCommonStore(state => state.I18N)

    const images = [
        '/mobile/env-2-1.jpg',
        '/mobile/env-2-2.jpg',
        '/mobile/env-2-3.jpg'
    ]

    return (
        <div className="section section2" style={{ height: window.outerHeight }}>
            <div className='content'>
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc3}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}></div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc4}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc5}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc6}</div>
            </div>

            <FadeSlide
                autoplay
                length={3}
                waiting={6500}
                trigger='hover'
                render={active => images.map((img, idx) => (
                    <div className="h2-slideitem" key={idx}>
                        <AnimateBg infinite src={img} className={active === idx ? 'active' : ''} />
                    </div>
                ))}
                paginationClassName="h2-pagination"
                renderPaginations={active => images.map((img, idx) => (
                    <CircleProgress key={idx} active={active === idx} width={14} height={14} />
                ))}
            />
        </div>
    )
}

function Slide3 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    const I18N = useCommonStore(state => state.I18N)

    return (
        <div className="section section3" style={{ height: window.outerHeight }}>
            <div className="content">
                TODO
            </div>
        </div>
    )
}



function Slide4 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    return (
        <div className="section section4" style={{ height: window.outerHeight }}>
            <div className="content">
                TODO
            </div>
        </div>
    )
}

function Slide5 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    return (
        <div className="section section5" style={{ 'minHeight': window.outerHeight }}>
            <div className="content">
                TODO
            </div>
        </div>
    )
}

export default function MobileEnv () {
    const I18N = useCommonStore(state => state.I18N)
    const letterSpacing = useCommonStore(state => state.letterSpacing)
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const data = {
        section1: {
            title: I18N['environment'],
            desc1: I18N['env.s1.desc1'],
            desc2: I18N['env.s1.desc2']
        },

        section2: {
            title: I18N['env.s2.title'],
            desc1: I18N['env.s2.desc1'],
            desc2: I18N['env.s2.desc2'],
            desc3: I18N['env.s2.desc3'],
            desc4: I18N['env.s2.desc4'],
            desc5: I18N['env.s2.desc5'],
            desc6: I18N['env.s2.desc6'],
        },
        section3: {
            title: I18N['env.s3.title'],
            desc1: I18N['env.s3.desc1'],
            desc2: I18N['env.s3.desc2'],
            desc3: I18N['env.s3.desc3'],
            desc4: I18N['env.s3.desc4'],
            desc5: I18N['env.s3.desc5'],
            desc6: I18N['env.s3.desc6'],
            desc7: I18N['env.s3.desc7'],
        },
        section4: {
            title: I18N['env.s4.title'],
            desc1: I18N['env.s4.desc1'],
            desc2: I18N['env.s4.desc2'],
            desc3: I18N['env.s4.desc3'],
            desc4: I18N['env.s4.desc4'],
            desc5: I18N['env.s4.desc5'],
            desc6: I18N['env.s4.desc6'],
        },
        section5: {
            images: [
                {
                    src: '/jpgs/env-5-1.jpg',
                    caption: I18N['env.s5.image1.cpt'],
                    desc: [
                        I18N['env.s5.image1.desc1'],
                        I18N['env.s5.image1.desc2'],
                        I18N['env.s5.image1.desc3'],
                    ]
                },
                {
                    src: '/jpgs/env-5-2.jpg',
                    caption: I18N['env.s5.image2.cpt'],
                    desc: [
                        I18N['env.s5.image2.desc1'],
                        I18N['env.s5.image2.desc2'],
                        I18N['env.s5.image2.desc3'],
                    ]
                },
                {
                    src: '/jpgs/env-5-3.jpg',
                    caption: I18N['env.s5.image3.cpt'],
                    desc: [
                        I18N['env.s5.image3.desc1'],
                        I18N['env.s5.image3.desc2'],
                        I18N['env.s5.image3.desc3'],
                    ]
                }
            ]
        }
    }

    return (
        <>
            <Header />
            <div className="mobile-container mobile-env">
                <Slide1 ls={letterSpacing} data={data.section1} />
                <Slide2 ls={letterSpacing} data={data.section2} />
                <Slide3 ls={letterSpacing} data={data.section3} />
                <Slide4 ls={letterSpacing} data={data.section4} />
                <Slide5 ls={letterSpacing} data={data.section5} />
                <Footer />
            </div>
        </>
    )
}