import { useEffect } from 'react'
import { useCommonStore } from '../../mobilestore'
import { ILetterSpacing } from '../../letterSpacings'
import Header from '../../mobileComponents/Header'
import { AnimateBg } from '../../mobileComponents/Image'
import FadeSlide from '../../mobileComponents/FadeSlide/FadeSlide'
import CircleProgress from '../../mobileComponents/CircleProgress'
import Footer from '../../mobileComponents/Footer'
import { VScroll } from '../../mobileComponents/VScroll'

import './index.css'

function Slide1 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    return (
        <div className="section section1" style={{ height: window.outerHeight }}>
            <div className='content'>
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
            </div>

            <AnimateBg src="/mobile/dli-1.jpg" infinite />
        </div>
    )
}

function Slide2 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    return (
        <div className="section section1" style={{ height: window.outerHeight }}>
            <div className='content'>TODO: 菜单</div>
        </div>
    )
}


function Slide3 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    const imgs = [
        { url: '/mobile/dli-3-1.jpg' },
        { url: '/mobile/dli-3-2.jpg' },
        { url: '/mobile/dli-3-3.jpg' }
    ]

    return (
        <div className="section section3" style={{ minHeight: 770 }}>
            <div className="content">
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc3}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc4}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}></div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc5}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc6}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc7}</div>
            </div>
            <VScroll data={imgs} />
        </div>
    )
}


function Slide4 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    const images = [
        '/mobile/dli-4-1.jpg',
        '/mobile/dli-4-2.jpg',
        '/mobile/dli-4-3.jpg'
    ]

    return (
        <div className="section section4" style={{ height: window.outerHeight }}>
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

export default function MobileDelicious () {
    const I18N = useCommonStore(state => state.I18N)
    const letterSpacing = useCommonStore(state => state.letterSpacing)
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const data = {
        section1: {
            title: I18N['delicious'],
            desc1: I18N['dli.s1.desc1'],
            desc2: I18N['dli.s1.desc2']
        },
        section2: {},
        section3: {
            title: I18N['dli.s2.cpt'],
            desc1: I18N['dli.s2.desc1'],
            desc2: I18N['dli.s2.desc2'],
            desc3: I18N['dli.s2.desc3'],
            desc4: I18N['dli.s2.desc4'],
            desc5: I18N['dli.s2.desc5'],
            desc6: I18N['dli.s2.desc6'],
            desc7: I18N['dli.s2.desc7'],
        },
        section4: {
            title: I18N['dli.s3.cpt'],
            desc1: I18N['dli.s3.desc1'],
            desc2: I18N['dli.s3.desc2'],
            desc3: I18N['dli.s3.desc3'],
            desc4: I18N['dli.s3.desc4'],
            desc5: I18N['dli.s3.desc5'],
            desc6: I18N['dli.s3.desc6'],
        }
    }

    return (
        <>
            <Header />
            <div className="mobile-container mobile-delicious">
                <Slide1 ls={letterSpacing} data={data.section1} />
                <Slide2 ls={letterSpacing} data={data.section2} />
                <Slide3 ls={letterSpacing} data={data.section3} />
                <Slide4 ls={letterSpacing} data={data.section4} />
                <Footer />
            </div>
        </>
    )
}