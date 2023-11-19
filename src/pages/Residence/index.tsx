// 居所
import { ReactNode, useState } from "react";
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
import SwiperImages from "../../components/SwiperImages/SwiperImages";
import SwiperImages3 from "../../components/SwiperImages/SwiperImages3";
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
                {/* <Button uppercase onClick={() => setOrderVisible(true)}>{I18N['reserve']}</Button> */}
            </div>

            <AnimateBg src="/jpgs/res-1.jpg" infinite />
        </div>
    )
}

function Slide2 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order === 1
    const images = [
        '/jpgs/res-2-1.jpg',
        '/jpgs/res-2-2.jpg',
        '/jpgs/res-2-3.jpg',
        '/jpgs/res-2-4.jpg',
        '/jpgs/res-2-5.jpg',
        '/jpgs/res-2-6.jpg',
        '/jpgs/res-2-7.jpg',
        '/jpgs/res-2-8.jpg',
    ]

    return (
        <div className="section section2">
            <div className="content">
                <div className={`intros ${active ? 'animate' : ''}`}>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc3}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc4}</div>
                    <div className="desc"></div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc5}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc6}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc7}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc8}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc9}</div>
                </div>
                <div className="images">
                    <SwiperImages images={images} />
                </div>
            </div>
        </div>
    )
}


function Slide3 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order === 2
    const images = [
        '/jpgs/res-3-1.jpg',
        '/jpgs/res-3-2.jpg',
        '/jpgs/res-3-3.jpg'
    ]

    return (
        <div className="section section3">
            <div className={`h3-content ${active ? 'animate' : ''}`}>
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <AmLine active={active} style={{ marginBottom: 40 }} />
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc3}</div>
                <div className="desc"></div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc4}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc5}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc6}</div>
                <div className="tips" style={{ letterSpacing: ls.TXT }}>
                    <div className="tip">{data.tip1}</div>
                    <div className="tip">{data.tip2}</div>
                </div>
            </div>
            <FadeSlide
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
        '/jpgs/res-4-1.jpg',
        '/jpgs/res-4-2.jpg'
    ]

    return (
        <div className="section section4">
            <div className={`h4-content ${active ? 'animate' : ''}`}>
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <AmLine active={active} style={{ marginBottom: 40 }} />
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc3}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc4}</div>
                <div className="desc"></div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc5}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc6}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc7}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc8}</div>
                <div className="tips" style={{ letterSpacing: ls.TXT }}>
                    <div className="tip">{data.tip1}</div>
                    <div className="tip">{data.tip2}</div>
                    <div className="tip">{data.tip3}</div>
                    <div className="tip">{data.tip4}</div>
                </div>
            </div>
            <FadeSlide2
                autoplay
                length={2}
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
    return (
        <div className="section section5">
            <SwiperImages3 images={data.images} />
        </div>
    )
}

function Slide6 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order === 5
    const images = [
        '/jpgs/res-6-1.jpg',
        '/jpgs/res-6-2.jpg',
        '/jpgs/res-6-3.jpg',
        '/jpgs/res-6-4.jpg'
    ]

    return (
        <div className="section section6">
            <div className={`h6-content ${active ? 'animate' : ''}`}>
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <AmLine active={active} style={{ marginBottom: 40 }} />
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc3}</div>
                <div className="desc"></div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc4}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc5}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc6}</div>
                <div className="desc"></div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc7}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc8}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc9}</div>
                <div className="desc"></div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc10}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc11}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc12}</div>

                <div className="tips" style={{ letterSpacing: ls.TXT }}>
                    <div className="tip">{data.tip}</div>
                </div>
            </div>
            <FadeSlide3
                autoplay
                length={4}
                waiting={6500}
                trigger='hover'
                render={active => images.map((img, idx) => (
                    <div className="h6-slideitem" key={idx}>
                        <Image src={img} className={active === idx ? 'active' : ''} />
                    </div>
                ))}
                paginationClassName="h6-pagination"
                renderPaginations={active => images.map((img, idx) => (
                    <CircleProgress key={idx} active={active === idx} width={14} height={14} />
                ))}
            />
        </div>
    )
}

function Tooltip (props: { arrowLeft?: number, label: string, hover: string }) {
    const { label, hover, arrowLeft } = props
    return (
        <div className="list-item hover">
            <span className="tooltip-trigger">{label}</span>
            <div className="tooltip-pop">
                <i className="arrow" style={{ left: arrowLeft || 'auto' }}></i>
                {hover}
            </div>
        </div>
    )
}

function ToggleVisible (props: {
    caption: string,
    children: ReactNode,
    visible: boolean,
    grid?: boolean
    disabled?: boolean
    onChangeVisible?: any
}) {
    const { grid, caption, children, visible, disabled, onChangeVisible } = props
    const ls = useCommonStore(state => state.letterSpacing)

    return (
        <div className={`toggle-item ${visible ? '' : 'hidden'}`}>
            <div className="toggle-title" onClick={onChangeVisible}>
                <span className="toggle-cpt" style={{ letterSpacing: ls.H1 }}>{caption}</span>
                { disabled ? null :
                    <Image
                        className="toggle-btn"
                        src={visible ? '/icons/down.svg' : '/icons/up.svg'}
                    />
                }
            </div>
            <div className={`toggle-body ${grid ? 'grid' : ''}`} style={{ letterSpacing: ls.TXT }}>{children}</div>
        </div>
    )
}

function Slide7 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const [visibles, setVisibles] = useState([true, false, false])
    const [v2, v3, v4] = visibles

    const onToggleV2 = () => {
        if (v2) {
            setVisibles([false, v3, v4])
        } else {
            setVisibles([true, false, false])
        }
    }

    const onToggleV3 = () => {
        if (v3) {
            setVisibles([v2, false, v4])
        } else {
            setVisibles([false, true, false])
        }
    }

    const onToggleV4 = () => {
        if (v4) {
            setVisibles([v2, v3, false])
        } else {
            setVisibles([false, false, true])
        }
    }

    return (
        <div className="section section7">
            <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
            <div className="h7-content">
                <ToggleVisible
                    visible
                    disabled
                    caption={data.basic.cpt}
                >
                    {data.basic.desc}
                </ToggleVisible>

                <ToggleVisible
                    visible={v2}
                    caption={data.suite.cpt}
                    onChangeVisible={onToggleV2}
                >
                    {data.suite.desc.map((desc: string) =>
                        <div className="suite-item" style={{ letterSpacing: ls.TXT }}>{desc}</div>
                    )}
                </ToggleVisible>

                <ToggleVisible
                    grid
                    visible={v3}
                    caption={data.facility.cpt}
                    onChangeVisible={onToggleV3}
                >
                    {data.facility.list.map((fac: any) =>
                        fac.hover ?
                        <Tooltip {...fac} /> :
                        <div className="list-item" style={{ letterSpacing: ls.TXT }}>{fac.label}</div>
                    )}
                </ToggleVisible>

                <ToggleVisible
                    grid
                    visible={v4}
                    caption={data.service.cpt}
                    onChangeVisible={onToggleV4}
                >
                    {data.service.list.map((sv: any) =>
                        sv.hover ?
                        <Tooltip {...sv} /> :
                        <div className="list-item" style={{ letterSpacing: ls.TXT }}>{sv.label}</div>
                    )}
                </ToggleVisible>
            </div>
        </div>
    )
}


export default function Residence () {
    const I18N = useCommonStore(state => state.I18N)
    const pageSectionOrder = useCommonStore(state => state.pageSectionOrder)
    const letterSpacing = useCommonStore(state => state.letterSpacing)

    const headerConfig = {
        lightmode: pageSectionOrder === 1,
        mask: pageSectionOrder >= 6,
    }

    const data = {
        section1: {
            title: I18N['residence'],
            desc1: I18N['res.s1.desc1'],
            desc2: I18N['res.s1.desc2']
        },
        section2: {
            desc1: I18N['res.s2.desc1'],
            desc2: I18N['res.s2.desc2'],
            desc3: I18N['res.s2.desc3'],
            desc4: I18N['res.s2.desc4'],
            desc5: I18N['res.s2.desc5'],
            desc6: I18N['res.s2.desc6'],
            desc7: I18N['res.s2.desc7'],
            desc8: I18N['res.s2.desc8'],
            desc9: I18N['res.s2.desc9'],
        },
        section3: {
            title: I18N['res.s3.title'],
            desc1: I18N['res.s3.desc1'],
            desc2: I18N['res.s3.desc2'],
            desc3: I18N['res.s3.desc3'],
            desc4: I18N['res.s3.desc4'],
            desc5: I18N['res.s3.desc5'],
            desc6: I18N['res.s3.desc6'],
            tip1: I18N['res.s3.tip1'],
            tip2: I18N['res.s3.tip2'],
        },
        section4: {
            title: I18N['res.s4.title'],
            desc1: I18N['res.s4.desc1'],
            desc2: I18N['res.s4.desc2'],
            desc3: I18N['res.s4.desc3'],
            desc4: I18N['res.s4.desc4'],
            desc5: I18N['res.s4.desc5'],
            desc6: I18N['res.s4.desc6'],
            desc7: I18N['res.s4.desc7'],
            desc8: I18N['res.s4.desc8'],
            tip1: I18N['res.s4.tip1'],
            tip2: I18N['res.s4.tip2'],
            tip3: I18N['res.s4.tip3'],
            tip4: I18N['res.s4.tip4'],
        },
        section5: {
            images: [
                {
                    src: '/jpgs/res-5-1.jpg',
                    caption: I18N['res.s5.image1.cpt'],
                    desc: [
                        I18N['res.s5.image1.desc1'],
                        // I18N['res.s5.image1.desc2'],
                    ]
                },
                {
                    src: '/jpgs/res-5-2.jpg',
                    caption: I18N['res.s5.image2.cpt'],
                    desc: [
                        I18N['res.s5.image2.desc1'],
                        // I18N['res.s5.image2.desc2'],
                    ]
                },
                {
                    src: '/jpgs/res-5-3.jpg',
                    caption: I18N['res.s5.image3.cpt'],
                    desc: [
                        I18N['res.s5.image3.desc1'],
                        // I18N['res.s5.image3.desc2'],
                    ]
                },
                {
                    src: '/jpgs/res-5-4.jpg',
                    caption: I18N['res.s5.image4.cpt'],
                    desc: [
                        I18N['res.s5.image4.desc1'],
                        // I18N['res.s5.image4.desc2'],
                    ]
                },
                {
                    src: '/jpgs/res-5-5.jpg',
                    caption: I18N['res.s5.image5.cpt'],
                    desc: [
                        I18N['res.s5.image5.desc1'],
                        // I18N['res.s5.image5.desc2'],
                    ]
                }
            ]
        },
        section6: {
            title: I18N['res.s6.title'],
            desc1: I18N['res.s6.desc1'],
            desc2: I18N['res.s6.desc2'],
            desc3: I18N['res.s6.desc3'],
            desc4: I18N['res.s6.desc4'],
            desc5: I18N['res.s6.desc5'],
            desc6: I18N['res.s6.desc6'],
            desc7: I18N['res.s6.desc7'],
            desc8: I18N['res.s6.desc8'],
            desc9: I18N['res.s6.desc9'],
            desc10: I18N['res.s6.desc10'],
            desc11: I18N['res.s6.desc11'],
            desc12: I18N['res.s6.desc12'],
            tip: I18N['res.s6.tip'],
        },
        section7: {
            title: I18N['res.s7.title'],
            basic: {
                cpt: I18N['res.s7.cpt1'],
                desc: [I18N['res.s7.cpt1.1']],
            },
            suite: {
                cpt: I18N['res.s7.cpt2'],
                desc: [
                    I18N['res.s7.cpt2.1'],
                    I18N['res.s7.cpt2.2'],
                    I18N['res.s7.cpt2.3'],
                    I18N['res.s7.cpt2.4'],
                    I18N['res.s7.cpt2.5'],
                    I18N['res.s7.cpt2.6'],
                    I18N['res.s7.cpt2.7'],
                ]
            },
            facility: {
                cpt: I18N['res.s7.cpt3'],
                list: [
                    { label: I18N['res.s7.cpt3.1'], },
                    { label: I18N['res.s7.cpt3.2'], arrowLeft: 24, hover: I18N['res.s7.cpt3.2.hover'] },
                    { label: I18N['res.s7.cpt3.3'], arrowLeft: 30, hover: I18N['res.s7.cpt3.3.hover'] },
                    { label: I18N['res.s7.cpt3.4'] },
                    { label: I18N['res.s7.cpt3.5'] },
                    { label: I18N['res.s7.cpt3.6'] },
                    { label: I18N['res.s7.cpt3.7'] },
                    { label: I18N['res.s7.cpt3.8'], arrowLeft: 15, hover: I18N['res.s7.cpt3.8.hover'] },
                    { label: I18N['res.s7.cpt3.9'] },
                    { label: I18N['res.s7.cpt3.10'], arrowLeft: 24, hover: I18N['res.s7.cpt3.10.hover'] },
                    { label: I18N['res.s7.cpt3.11'], arrowLeft: 15, hover: I18N['res.s7.cpt3.11.hover'] },
                    { label: I18N['res.s7.cpt3.12'], arrowLeft: 10, hover: I18N['res.s7.cpt3.12.hover'] },
                    { label: I18N['res.s7.cpt3.13'] },
                    { label: I18N['res.s7.cpt3.14'] },
                    { label: I18N['res.s7.cpt3.15'] },

                ]
            },
            service: {
                cpt: I18N['res.s7.cpt4'],
                list: [
                    { label: I18N['res.s7.cpt4.1'] },
                    { label: I18N['res.s7.cpt4.2'], arrowLeft: 24, /*hover: I18N['res.s7.cpt4.2.hover'] */},
                    { label: I18N['res.s7.cpt4.3'], arrowLeft: 24, /*hover: I18N['res.s7.cpt4.3.hover'] */},
                    { label: I18N['res.s7.cpt4.4'], arrowLeft: 24, /*hover: I18N['res.s7.cpt4.4.hover'] */},
                    { label: I18N['res.s7.cpt4.5'], arrowLeft: 24, /*hover: I18N['res.s7.cpt4.5.hover'] */},
                    { label: I18N['res.s7.cpt4.6'] },
                    { label: I18N['res.s7.cpt4.7'], arrowLeft: 36, /*hover: I18N['res.s7.cpt4.7.hover'] */},
                    { label: I18N['res.s7.cpt4.8'] },
                    { label: I18N['res.s7.cpt4.9'] },
                    { label: I18N['res.s7.cpt4.10'] },
                ]
            }
        }
    }

    return (
        <div className="container residence">
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
                    <Slide7 ls={letterSpacing} data={data.section7} order={pageSectionOrder} />,
                    <Footer />
                ]}
            />
        </div>
    )
}


