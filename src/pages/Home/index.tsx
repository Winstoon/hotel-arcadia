import { useEffect, useState } from "react";
import { useCommonStore, useFadeSlideStore, useOrderDialogStore } from "../../store";
import { ILetterSpacing } from "../../letterSpacings";
import Fullpage from "../../components/FullPage";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image, { AnimateBg } from "../../components/Image";

import './index.css'
import Button2 from "../../components/Button2";

function Slide1 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    return (
        <div className="section section1">
            <Image src="/logo.svg" />
            <Image className="scroll-down" src="/icons/scroll-down.svg" />

            <AnimateBg src="/jpgs/home-1.jpg" infinite />
        </div>
    )
}

function Slide2 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order === 0
    const I18N = useCommonStore(state => state.I18N)
    const setOrderVisible = useOrderDialogStore(state => state.setVisible)

    const handleOrder = () => {
        setOrderVisible(true)
    }

    return (
        <div className="section section2">
            <div className={`content ${active ? 'animate' : ''}`}>
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                {/* <Button uppercase onClick={handleOrder}>{I18N['reserve']}</Button> */}
            </div>

            <AnimateBg src="/jpgs/home-2.jpg" infinite />
        </div>
    )
}

function Slide3 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order === 1
    const I18N = useCommonStore(state => state.I18N)

    return (
        <div className="section section3">
            <div className="content">
                <Image className="banner" src={data.banner} />
                <div className={`paragraph ${active ? 'animate' : ''}`}>
                    <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                    <Button2 to="/env" dark>{I18N['explore']}</Button2>
                </div>
            </div>
        </div>
    )
}

function Slide4 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order === 2
    const I18N = useCommonStore(state => state.I18N)
    const setActive = useFadeSlideStore(state => state.setActive)
    
    useEffect(() => {
        if (active) {
            setActive(0)
        }
    }, [active])

    return (
        <div className="section section4">
            <div className={`content ${active ? 'animate' : ''}`}>
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <Button2 to="/residence">{I18N['explore']}</Button2>
            </div>

            <AnimateBg src="/jpgs/home-4.jpg" infinite />
        </div>
    )
}

function Slide5 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order === 3
    const I18N = useCommonStore(state => state.I18N)

    return (
        <div className="section section5">
            <div className={`content ${active ? 'animate' : ''}`}>
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <Button2 to="/delicious">{I18N['explore']}</Button2>
            </div>

            <AnimateBg src="/jpgs/home-5.jpg" infinite />
        </div>
    )
}

function Slide6 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order === 4

    return (
        <div className="section section6">
            <div className={`content ${active ? 'animate' : ''}`}>
                <div className="info" style={{ letterSpacing: ls.TXT }}>{data.title}</div>
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
                    <div className="info" style={{ letterSpacing: ls.TXT }}>{data.address}<a href="https://www.google.com/maps/place/1+Chome+Minami+6+Jonishi,+%E4%BF%B1%E7%9F%A5%E5%AE%89%E7%94%BA%E8%99%BB%E7%94%B0%E9%83%A1%E5%8C%97%E6%B5%B7%E9%81%93+044-0036%E6%97%A5%E6%9C%AC/@42.8957696,140.749132,17.66z" target="_blank">{data.viewMap}</a></div>
                    <div className="info" style={{ letterSpacing: ls.TXT }}>{data.phone}</div>
                    {/* <div className="info" style={{ letterSpacing: ls.TXT }}>{data.fax}</div> */}
                    <div className="info" style={{ letterSpacing: ls.TXT }}>{data.email}</div>
                </div>
            </div>
            <Image className={`map ${active ? 'animate' : ''}`} src="/jpgs/home-6.jpg" />
        </div>
    )
}

// 首页
export default function Home () {
    const [lpHide, setLPHide] = useState(false)
    const [lpRemoved, setLPRemoved] = useState(false)
    const I18N = useCommonStore(state => state.I18N)
    const letterSpacing = useCommonStore(state => state.letterSpacing)
    const pageSectionOrder = useCommonStore(state => state.pageSectionOrder)
    const setPageSectionOrder = useCommonStore(state => state.setPageSectionOrder)
    const headerConfig = {
        lightmode: pageSectionOrder === 1,
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
            banner: '/jpgs/home-3.jpg',
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
        }
    }

    useEffect(() => {
        setPageSectionOrder(0)
        // eslint-disable-next-line react-hooks/exhaustive-deps

        setTimeout(() => {
            setLPHide(true)
        }, 4000);

        setTimeout(() => {
            setLPRemoved(true)
        }, 5600);
    }, [])

    return (
        <div className="container home">
            <Header {...headerConfig} />

            <div className={`loading-page ${lpHide ? 'hide' : ''} ${lpRemoved ? 'remove' : ''}`}>
                <video src='/lp.mp4' autoPlay muted playsInline />
            </div>

            { lpHide ?
                <Fullpage
                    ignoreHideIndex={[4,5]}
                    sliders={[
                        // <Slide1 ls={letterSpacing} data={data.section1} order={pageSectionOrder} />,
                        <Slide2 ls={letterSpacing} data={data.section2} order={pageSectionOrder} />,
                        <Slide3 ls={letterSpacing} data={data.section3} order={pageSectionOrder} />,
                        <Slide4 ls={letterSpacing} data={data.section4} order={pageSectionOrder} />,
                        <Slide5 ls={letterSpacing} data={data.section5} order={pageSectionOrder} />,
                        <Slide6 ls={letterSpacing} data={data.section6} order={pageSectionOrder} />,
                        <Footer />
                    ]}
                /> : null
            }
        </div>
    )
}