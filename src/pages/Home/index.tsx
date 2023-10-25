import { useEffect } from "react";
import Button from "../../components/Button";
import CircleProgress from "../../components/CircleProgress";
import FadeSlide from "../../components/FadeSlide/FadeSlide";
import Fullpage from "../../components/FullPage";
import Header from "../../components/Header";
import Image, { AnimateBg } from "../../components/Image";
import { ILetterSpacing } from "../../letterSpacings";
import { useCommonStore, useFadeSlideStore, useOrderDialogStore } from "../../store";

import './index.css'
import Footer from "../../components/Footer";

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
    const I18N = useCommonStore(state => state.I18N)
    const setOrderVisible = useOrderDialogStore(state => state.setVisible)

    const handleOrder = () => {
        setOrderVisible(true)
    }

    return (
        <div className="section section2">
            <div className="content">
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <Button uppercase onClick={handleOrder}>{I18N['reserve']}</Button>
            </div>

            <AnimateBg src="/jpgs/home-2.jpg" infinite />
        </div>
    )
}

function Slide3 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    return (
        <div className="section section3">
            <div className="content">
                <Image className="banner" src={data.banner} />
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
            </div>
        </div>
    )
}

function Slide4 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const images = [
        '/jpgs/home-4-1.jpg',
        '/jpgs/home-4-2.jpg',
        '/jpgs/home-4-1.jpg',
        '/jpgs/home-4-2.jpg',
        '/jpgs/home-4-1.jpg',
    ]
    const I18N = useCommonStore(state => state.I18N)
    const setActive = useFadeSlideStore(state => state.setActive)
    
    useEffect(() => {
        if (order === 3) {
            setActive(0)
        }
    }, [order])

    return (
        <div className="section section4">
            <div className="h4-content">
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <div className="btn-group">
                    <Button to="/residence" uppercase size='small' ghost rightIcon>{I18N['explore']}</Button>
                </div>
            </div>
            <FadeSlide
                autoplay
                length={5}
                waiting={6500}
                trigger='hover'
                render={active => images.map((img, idx) => (
                    <div className="h4-slideitem" key={idx}>
                        <Image src={img} className={active === idx ? 'active' : ''} />
                    </div>
                ))}
                paginationClassName="h4-pagination"
                renderPaginations={active => images.map((img, idx) => (
                    <CircleProgress key={idx} active={active === idx} width={14} height={14} />
                ))}
            />
        </div>
    
    )
}

function Slide5 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const I18N = useCommonStore(state => state.I18N)

    return (
        <div className="section section5">
            <div className="content">
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <Button to="/residence" uppercase size='small' ghost rightIcon>{I18N['explore']}</Button>
            </div>

            <AnimateBg src="/jpgs/home-5.jpg" infinite />
        </div>
    )
}

function Slide6 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    return (
        <div className="section section6">
            <div className="content">
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
                    <div className="info" style={{ letterSpacing: ls.TXT }}>{data.address}<a>{data.viewMap}</a></div>
                    <div className="info" style={{ letterSpacing: ls.TXT }}>{data.phone}</div>
                    <div className="info" style={{ letterSpacing: ls.TXT }}>{data.fax}</div>
                    <div className="info" style={{ letterSpacing: ls.TXT }}>{data.email}</div>
                </div>
            </div>
            <Image className="map" src="/jpgs/home-6.jpg" />
        </div>
    )
}

// 首页
export default function Home () {
    const I18N = useCommonStore(state => state.I18N)
    const letterSpacing = useCommonStore(state => state.letterSpacing)
    const pageSectionOrder = useCommonStore(state => state.pageSectionOrder)
    const headerConfig = {
        hidden: pageSectionOrder === 0,
        lightmode: pageSectionOrder === 2,
        mask: pageSectionOrder >= 5,
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

    return (
        <div className="container home">
            <Header {...headerConfig} />
            <Fullpage
                ignoreHideIndex={[5,6]}
                sliders={[
                    <Slide1 ls={letterSpacing} data={data.section1} order={pageSectionOrder} />,
                    <Slide2 ls={letterSpacing} data={data.section2} order={pageSectionOrder} />,
                    <Slide3 ls={letterSpacing} data={data.section3} order={pageSectionOrder} />,
                    <Slide4 ls={letterSpacing} data={data.section4} order={pageSectionOrder} />,
                    <Slide5 ls={letterSpacing} data={data.section5} order={pageSectionOrder} />,
                    <Slide6 ls={letterSpacing} data={data.section6} order={pageSectionOrder} />,
                    <Footer />
                ]}
            />
        </div>
    )
}