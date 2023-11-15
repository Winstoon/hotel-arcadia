import AmLine from "../../components/AmLine/AmLine";
import Button from "../../components/Button";
import CircleProgress from "../../components/CircleProgress";
import FadeSlide from "../../components/FadeSlide/FadeSlide";
import FadeSlide2 from "../../components/FadeSlide/FadeSlide2";
import FadeSlide3 from "../../components/FadeSlide/FadeSlide3";
import Footer from "../../components/Footer";
import Fullpage from "../../components/FullPage";
import Header from "../../components/Header";
import Image, { AnimateBg } from "../../components/Image";
import SwiperImages2 from "../../components/SwiperImages/SwiperImages2";
import { ILetterSpacing } from "../../letterSpacings";
import { useCommonStore, useOrderDialogStore } from "../../store";

import './index.css'

function Slide1 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const I18N = useCommonStore(state => state.I18N)
    const setOrderVisible = useOrderDialogStore(state => state.setVisible)

    return (
        <div className="section section1">
            <div className="content">
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <Button uppercase onClick={() => setOrderVisible(true)}>{I18N['reserve']}</Button>
            </div>

            <AnimateBg src="/jpgs/env-1.jpg" infinite />
        </div>
    )
}

function Slide2 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order === 1
    const images = [
        '/jpgs/env-2-1.jpg',
        '/jpgs/env-2-2.jpg',
        '/jpgs/env-2-3.jpg'
    ]

    return (
        <div className="section section2">
            <div className={`h2-content ${active ? 'animate' : ''}`}>
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <AmLine active={active} style={{ marginBottom: 40 }} />
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc3}</div>
                <div className="desc"></div>
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
                        <Image src={img} className={active === idx ? 'active' : ''} />
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

function Slide3 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order === 2
    const images = [
        '/jpgs/env-3-1.jpg',
        '/jpgs/env-3-2.jpg',
        '/jpgs/env-3-3.jpg'
    ]

    return (
        <div className="section section3">
            <div className={`h3-content ${active ? 'animate' : ''}`}>
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <AmLine active={active} style={{ marginBottom: 40 }} />
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <div className="desc"></div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc3}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc4}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc5}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc6}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc7}</div>
            </div>
            <FadeSlide2
                autoplay
                length={3}
                waiting={6500}
                trigger='hover'
                render={active => images.map((img, idx) => (
                    <div className="h3-slideitem" key={idx}>
                        <Image src={img} className={active === idx ? 'active' : ''} />
                    </div>
                ))}
                paginationClassName="h3-pagination"
                renderPaginations={active => images.map((img, idx) => (
                    <CircleProgress key={idx} active={active === idx} width={14} height={14} />
                ))}
            />
        </div>
    )
}

function Slide4 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order === 3
    const images = [
        '/jpgs/env-4-1.jpg',
        '/jpgs/env-4-2.jpg',
        '/jpgs/env-4-3.jpg'
    ]

    return (
        <div className="section section4">
            <div className={`h4-content ${active ? 'animate' : ''}`}>
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <AmLine active={active} style={{ marginBottom: 40 }} />
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <div className="desc"></div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc3}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc4}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc5}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc6}</div>
            </div>
            <FadeSlide3
                autoplay
                length={3}
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
    const active = order === 4
    
    return (
        <div className={`section section5 ${active ? 'animate' : ''}`}>
            <SwiperImages2 images={data.images} />
        </div>
    )
}


// 环境
export default function Environment () {
    const I18N = useCommonStore(state => state.I18N)
    const pageSectionOrder = useCommonStore(state => state.pageSectionOrder)
    const letterSpacing = useCommonStore(state => state.letterSpacing)

    const headerConfig = {
        // lightmode: pageSectionOrder === 4,
        mask: pageSectionOrder >= 4,
    }

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
        <div className="container environment">
            <Header {...headerConfig} />
            <Fullpage
                ignoreHideIndex={[5,6]}
                sliders={[
                    <Slide1 ls={letterSpacing} data={data.section1} order={pageSectionOrder} />,
                    <Slide2 ls={letterSpacing} data={data.section2} order={pageSectionOrder} />,
                    <Slide3 ls={letterSpacing} data={data.section3} order={pageSectionOrder} />,
                    <Slide4 ls={letterSpacing} data={data.section4} order={pageSectionOrder} />,
                    <Slide5 ls={letterSpacing} data={data.section5} order={pageSectionOrder} />,
                    <Footer />
                ]}
            />
        </div>
    )
}


