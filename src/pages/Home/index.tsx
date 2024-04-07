import { useEffect, useState } from "react";
import { useCommonStore, useFadeSlideStore, useOrderDialogStore } from "../../store";
import { ILetterSpacing } from "../../letterSpacings";
import Fullpage from "../../components/FullPage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button2 from "../../components/Button2";
import Image, { AnimateBg } from "../../components/Image";

import './index.css'
import { getFontSize } from "../../App";

// function Slide1 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
//     return (
//         <div className="section section1">
//             <Image src="/logo.svg" />
//             <Image className="scroll-down" src="/icons/scroll-down.svg" />

//             <AnimateBg src="/jpgs/home-1.jpg" infinite />
//         </div>
//     )
// }

function Slide2 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order === 0
    const lang = useCommonStore(state => state.lang)
    // const setOrderVisible = useOrderDialogStore(state => state.setVisible)

    // const handleOrder = () => {
    //     setOrderVisible(true)
    // }

    return (
        <div className="section section2">
            <div className={`content ${active ? 'animate' : ''}`}>
                <div className="title" style={{ letterSpacing: ls.H1, fontSize: getFontSize('title', lang) }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>{data.desc2}</div>
                {/* <Button uppercase onClick={handleOrder}>{I18N['reserve']}</Button> */}
            </div>

            <AnimateBg src="/jpgs/home-2.jpg" infinite />
        </div>
    )
}

function Slide3 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order === 1
    const I18N = useCommonStore(state => state.I18N)
    const lang = useCommonStore(state => state.lang)

    return (
        <div className="section section3">
            <div className={`content ${active ? 'animate' : ''}`}>
                {/* <Image className="banner" src={data.banner} /> */}
                {/* <div className={`paragraph ${active ? 'animate' : ''}`}>
                </div> */}
                <div className="title" style={{ letterSpacing: ls.H1, fontSize: getFontSize('title', lang) }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>{data.desc2}</div>
                <Button2 to="/env">{I18N['explore']}</Button2>
            </div>
            <AnimateBg src="/jpgs/home-3.jpg" infinite />
        </div>
    )
}

function Slide4 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order === 2
    const I18N = useCommonStore(state => state.I18N)
    const lang = useCommonStore(state => state.lang)
    const setActive = useFadeSlideStore(state => state.setActive)
    
    useEffect(() => {
        if (active) {
            setActive(0)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active])

    return (
        <div className="section section4">
            <div className={`content ${active ? 'animate' : ''}`}>
                <div className="title" style={{ letterSpacing: ls.H1, fontSize: getFontSize('title', lang) }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>{data.desc2}</div>
                <Button2 to="/residence">{I18N['explore']}</Button2>
            </div>

            <AnimateBg src="/jpgs/home-4.jpg" infinite />
        </div>
    )
}

function Slide5 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order === 3
    const I18N = useCommonStore(state => state.I18N)
    const lang = useCommonStore(state => state.lang)

    return (
        <div className="section section5">
            <div className={`content ${active ? 'animate' : ''}`}>
                <div className="title" style={{ letterSpacing: ls.H1, fontSize: getFontSize('title', lang) }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>{data.desc2}</div>
                <Button2 to="/delicious">{I18N['explore']}</Button2>
            </div>

            <AnimateBg src="/jpgs/home-5.jpg" infinite />
        </div>
    )
}

function SlidePics ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order === 4
    const lang = useCommonStore(state => state.lang)

    return (
        <div className="section sectionpics">
            <div className={`content ${active ? 'animate' : ''}`}>
                <div className="title" style={{ letterSpacing: ls.H1, fontSize: getFontSize('title', lang) }}>{data.title}</div>
                <Button2 to="/pics">{data.btntxt}</Button2>

                <div className="imgs">
                    <Image src="/jpgs/home-p-1.jpg" />
                    <Image src="/jpgs/home-p-2.jpg" />
                    <Image src="/jpgs/home-p-3.jpg" />
                </div>
            </div>
        </div>
    )
}

function Slide6 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order >= 5
    const lang = useCommonStore(state => state.lang)

    return (
        <div className="section section6">
            <div className={`content ${active ? 'animate' : ''}`}>
                <div className="info" style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>{data.title}</div>
                <div className="group">
                    <div className="info" style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>{data.distance1}</div>
                    <div className="info" style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>{data.distance2}</div>
                </div>
                <div className="group">
                    <div className="info" style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>{data.distance3}</div>
                    <div className="info" style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>{data.distance4}</div>
                    <div className="info" style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>{data.distance5}</div>
                </div>
                <div className="lgg">
                    <div className="info" style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>{data.address}<a rel='noreferrer' href="https://www.google.com/maps/place/Arcadia/@42.8560658,140.7098538,19z/data=!4m6!3m5!1s0x5f0ab1e1c27b18d7:0x859d2d73d7f8c9d7!8m2!3d42.8560295!4d140.7099628!16s%2Fg%2F11v59_lb4z?entry=ttu" target="_blank">{data.viewMap}</a></div>
                    <div className="info" style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>{data.phone}</div>
                    {/* <div className="info" style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>{data.fax}</div> */}
                    <div className="info" style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>{data.email}</div>
                </div>
            </div>
            <Image className={`map ${active ? 'animate' : ''}`} src="/jpgs/home-6.jpg" />
        </div>
    )
}

// 首页
export default function Home () {
    const orderDialogVisible = useOrderDialogStore(state => state.visible)
    const [lpHide, setLPHide] = useState(false)
    const [lpRemoved, setLPRemoved] = useState(false)
    const I18N = useCommonStore(state => state.I18N)
    const letterSpacing = useCommonStore(state => state.letterSpacing)
    const pageSectionOrder = useCommonStore(state => state.pageSectionOrder)
    const setPageSectionOrder = useCommonStore(state => state.setPageSectionOrder)
    const headerConfig = {
        // lightmode: pageSectionOrder === 1,
        mask: pageSectionOrder >= 4,
    }

    const data = {
        section1: {},
        section2: {
            title: I18N['home.s2.title'],
            desc1: I18N['home.s2.desc1'],
            desc2: I18N['home.s2.desc2'],
        },
        section3: {
            title: I18N['environment'],
            desc1: I18N['home.s3.desc1'],
            desc2: I18N['home.s3.desc2'],
        },
        section4: {
            title: I18N['residence'],
            desc1: I18N['home.s4.desc1'],
            desc2: I18N['home.s4.desc2'],
        },
        section5: {
            title: I18N['delicious'],
            desc1: I18N['home.s5.desc1'],
            desc2: I18N['home.s5.desc2'],
        },
        section6: {
            title: I18N['home.s6.title'],
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
        pics: {
            title: I18N['home.pics.title'],
            btntxt: I18N['home.pics.btntxt']
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
        if (orderDialogVisible) {
            setLPHide(true)
            setLPRemoved(true)
        }
    }, [orderDialogVisible])

    return (
        <div className="container home">
            <Header {...headerConfig} />

            { orderDialogVisible ? null :
                <div className={`loading-page ${lpHide ? 'hide' : ''} ${lpRemoved ? 'remove' : ''}`}>
                    {/* @ts-ignore */}
                    <Image className='logo' src='/logo.mobile.svg' />
                    <AnimateBg src='/jpgs/home-0.jpg' />
                </div>
            }

            { lpHide ?
                <Fullpage
                    ignoreHideIndex={[5,6]}
                    sliders={[
                        // <Slide1 ls={letterSpacing} data={data.section1} order={pageSectionOrder} />,
                        <Slide2 ls={letterSpacing} data={data.section2} order={pageSectionOrder} />,
                        <Slide3 ls={letterSpacing} data={data.section3} order={pageSectionOrder} />,
                        <Slide4 ls={letterSpacing} data={data.section4} order={pageSectionOrder} />,
                        <Slide5 ls={letterSpacing} data={data.section5} order={pageSectionOrder} />,
                        <SlidePics ls={letterSpacing} data={data.pics} order={pageSectionOrder} />,
                        <Slide6 ls={letterSpacing} data={data.section6} order={pageSectionOrder} />,
                        <Footer />
                    ]}
                /> : null
            }
        </div>
    )
}