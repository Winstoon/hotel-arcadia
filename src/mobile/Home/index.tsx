import { useEffect, useState } from 'react'
import { useCommonStore, useOrderDialogStore } from '../../mobilestore'
import { ILetterSpacing } from '../../letterSpacings'
import Header from '../../mobileComponents/Header'
import Button2 from '../../mobileComponents/Button2'
import Image, { AnimateBg } from '../../mobileComponents/Image'
// import FadeSlide from '../../mobileComponents/FadeSlide/FadeSlide'
// import CircleProgress from '../../mobileComponents/CircleProgress'
// import FadeSlide2 from '../../mobileComponents/FadeSlide/FadeSlide2'
import Footer from '../../mobileComponents/Footer'

import './index.css'

function Slide1 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    return (
        <div className="section section1" style={{ height: window.innerHeight }}>
            <div className='content'>
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
            </div>

            <AnimateBg src="/mobile/home-1.jpg" infinite />
        </div>
    )
}

function Slide2 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    const I18N = useCommonStore(state => state.I18N)

    return (
        <div className="section section2" style={{ height: window.innerHeight }}>
            <div className="content">
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <Button2 to="/mobile/env">{I18N['explore']}</Button2>
            </div>
            
            <AnimateBg src='/mobile/home-2.jpg' infinite />
        </div>
    )
}


function Slide3 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    const I18N = useCommonStore(state => state.I18N)

    return (
        <div className="section section3" style={{ height: window.innerHeight }}>
            <div className='content'>
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <Button2 to="/mobile/residence">{I18N['explore']}</Button2>
            </div>

            <AnimateBg src="/mobile/home-3.jpg" infinite />

            {/* <FadeSlide
                autoplay
                length={3}
                waiting={6500}
                trigger='hover'
                render={active => images.map((img, idx) => (
                    <div className="h3-slideitem" key={idx}>
                        <AnimateBg infinite src={img} className={active === idx ? 'active' : ''} />
                    </div>
                ))}
                paginationClassName="h3-pagination"
                renderPaginations={active => images.map((img, idx) => (
                    <CircleProgress key={idx} active={active === idx} width={14} height={14} />
                ))}
            /> */}
        </div>
    )
}

function Slide4 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    const I18N = useCommonStore(state => state.I18N)

    // const images = [
    //     '/mobile/home-4-1.jpg',
    //     '/mobile/home-4-2.jpg',
    //     '/mobile/home-4-3.jpg'
    // ]

    return (
        <div className="section section4" style={{ height: window.innerHeight }}>
            <div className='content'>
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <Button2 to="/mobile/delicious">{I18N['explore']}</Button2>
            </div>

            <AnimateBg src="/mobile/home-4.jpg" infinite />


            {/* <FadeSlide2
                autoplay
                length={3}
                waiting={6500}
                trigger='hover'
                render={active => images.map((img, idx) => (
                    <div className="h4-slideitem" key={idx}>
                        <AnimateBg infinite src={img} className={active === idx ? 'active' : ''} />
                    </div>
                ))}
                paginationClassName="h4-pagination"
                renderPaginations={active => images.map((img, idx) => (
                    <CircleProgress key={idx} active={active === idx} width={14} height={14} />
                ))}
            /> */}
        </div>
    )
}

function Slide5 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    return (
        <div className="section section5">
            <div className='content'>
                <div className="title" style={{ letterSpacing: ls.TXT }}>{data.cpt}</div>
                
                <div className='group'>
                    <div className="info" style={{ letterSpacing: ls.TXT }}>{data.location}</div>
                </div>
                <div className="group">
                    <div className="info" style={{ letterSpacing: ls.TXT }}>{data.distance1}</div>
                    <div className="info" style={{ letterSpacing: ls.TXT }}>{data.distance2}</div>
                </div>
                <div className="group">
                    <div className="info" style={{ letterSpacing: ls.TXT }}>{data.distance3}</div>
                    <div className="info" style={{ letterSpacing: ls.TXT }}>{data.distance4}</div>
                    <div className="info" style={{ letterSpacing: ls.TXT }}>{data.distance5}</div>
                </div>
                <div className="lgg">
                    <div className="info" style={{ letterSpacing: ls.TXT }}>{data.address}</div>
                    <div className="info" style={{ letterSpacing: ls.TXT }}>{data.phone}</div>
                    {/* <div className="info" style={{ letterSpacing: ls.TXT }}>{data.fax}</div> */}
                    <div className="info" style={{ letterSpacing: ls.TXT }}>{data.email}</div>
                </div>
            </div>
            <Image className='map' src="/mobile/home-5.jpg" />
        </div>
    )
}

function SlidePics ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    return (
        <div className='section sectionpics'>
            <div className='content'>
                <div className='title' style={{ letterSpacing: ls.TXT }}>{data.title}</div>
                <div className='imgs'>
                    <Image src='/mobile/home-p-1.jpg' />
                    <Image src='/mobile/home-p-2.jpg' />
                    <Image src='/mobile/home-p-3.jpg' />
                </div>
                <Button2 to="/mobile/pics">{data.btntxt}</Button2>
            </div>
        </div>
    )
}

export default function MobileHome () {
    const orderVisible = useOrderDialogStore(state => state.visible)
    const [lpHide, setLPHide] = useState(false)
    const [lpRemoved, setLPRemoved] = useState(false)
    const I18N = useCommonStore(state => state.I18N)
    const letterSpacing = useCommonStore(state => state.letterSpacing)

    const data = {
        section1: {
            title: I18N['home.s2.title'],
            desc1: I18N['home.s2.desc1'],
            desc2: I18N['home.s2.desc2'],
        },
        section2: {
            title: I18N['environment'],
            desc1: I18N['home.s3.desc1'],
            desc2: I18N['home.s3.desc2'],
        },
        section3: {
            title: I18N['residence'],
            desc1: I18N['home.s4.desc1'],
            desc2: I18N['home.s4.desc2'],
        },
        section4: {
            title: I18N['delicious'],
            desc1: I18N['home.s5.desc1'],
            desc2: I18N['home.s5.desc2'],
        },
        section5: {
            cpt: I18N['home.s6.cpt'],
            location: I18N['home.s6.location'],
            distance1: I18N['home.s6.desc1'],
            distance2: I18N['home.s6.desc2'],
            distance3: I18N['home.s6.desc3'],
            distance4: I18N['home.s6.desc4'],
            distance5: I18N['home.s6.desc5'],
            address: I18N['home.s6.desc6'],
            viewMap: I18N['home.s6.desc7'],
            phone: I18N['home.s6.desc8'],
            fax: I18N['home.s6.desc9'],
            email: I18N['home.s6.desc10'],
        },
        sectionpics: {
            title: I18N['home.pics.title'],
            btntxt: I18N['home.pics.btntxt'],
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setLPHide(true)
        }, 4000);
        setTimeout(() => {
            setLPRemoved(true)
        }, 5100)
    }, [])

    useEffect(() => {
        if (orderVisible) {
            setLPHide(true)
            setLPRemoved(true)
        }
    }, [orderVisible])

    return (
        <>
            { lpHide ? <Header /> : null }
            { orderVisible ? null :
                <div className={`mobile-loading-page ${lpHide ? 'hide' : ''} ${lpRemoved ? 'remove' : ''}`}>
                    {/* @ts-ignore */}
                    <Image className='logo' src='/logo.mobile.svg' />
                    <AnimateBg src='/mobile/home-0.jpg' reverse />
                </div>
            }

            <div className="mobile-container mobile-home">
                { lpHide ?
                    <>
                        <Slide1 ls={letterSpacing} data={data.section1} />
                        <Slide2 ls={letterSpacing} data={data.section2} />
                        <Slide3 ls={letterSpacing} data={data.section3} />
                        <Slide4 ls={letterSpacing} data={data.section4} />
                        <SlidePics ls={letterSpacing} data={data.sectionpics} />
                        <Slide5 ls={letterSpacing} data={data.section5} />
                        <Footer />
                    </> : null
                }
            </div>
        </>
    )
}