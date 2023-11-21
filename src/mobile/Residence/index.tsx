import { useEffect, useState } from 'react'
import { useCommonStore } from '../../mobilestore'
import { ILetterSpacing } from '../../letterSpacings'
import Header from '../../mobileComponents/Header'
import Image, { AnimateBg } from '../../mobileComponents/Image'
import Footer from '../../mobileComponents/Footer'
import { VScroll } from '../../mobileComponents/VScroll'

import './index.css'

function Slide1 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    return (
        <div className="section section1" style={{ height: window.innerHeight }}>
            <div className='content'>
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
            </div>

            <AnimateBg src="/mobile/res-1.jpg" infinite />
        </div>
    )
}


function Slide2 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    const imgs = [
        { url: '/mobile/res-2-1.jpg', width: 260 },
        { url: '/mobile/res-2-2.jpg', width: 360 },
        { url: '/mobile/res-2-3.jpg', width: 250 },
        { url: '/mobile/res-2-4.jpg', width: 220 },
        { url: '/mobile/res-2-5.jpg', width: 360 },
        { url: '/mobile/res-2-6.jpg', width: 186 },
        { url: '/mobile/res-2-7.jpg', width: 250 },
        { url: '/mobile/res-2-8.jpg', width: 300 }
    ]

    return (
        <div className="section section2">
            <div className="content">
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}></div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc3}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc4}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc5}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc6}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc7}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc8}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc9}</div>
            </div>
            <VScroll data={imgs} lightmode />
        </div>
    )
}

function Slide3 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    const imgs = [
        { url: '/mobile/res-3-1.jpg' },
        { url: '/mobile/res-3-2.jpg' },
        { url: '/mobile/res-3-3.jpg' }
    ]

    return (
        <div className="section section3">
            <div className="content">
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc3}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}></div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc4}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc5}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc6}</div>
                <div className="tip" style={{ letterSpacing: ls.TXT }}>{data.tip}</div>
            </div>
            <VScroll data={imgs} />
        </div>
    )
}

function Slide4 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    const imgsA = [
        { url: '/mobile/res-4-1.jpg' },
        { url: '/mobile/res-4-2.jpg' }
    ]
    const imgsB = [
        { url: '/mobile/res-4-3.jpg' },
        { url: '/mobile/res-4-4.jpg' }
    ]

    return (
        <div className="section section4">
            <div className="content">
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className='cont-group'>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>▸ {data.desc1}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc3}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc4}</div>
                    <VScroll data={imgsA} />
                </div>

                <div className='cont-group' style={{ marginBottom: 32 }}>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>▸ {data.desc5}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc6}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc7}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc8}</div>
                    <VScroll data={imgsB} />
                </div>
                <div className="tip" style={{ letterSpacing: ls.TXT }}>{data.tip1}</div>
                <div className="tip" style={{ letterSpacing: ls.TXT }}>{data.tip2}</div>
                <div className="tip" style={{ letterSpacing: ls.TXT }}>{data.tip3}</div>
                <div className="tip" style={{ letterSpacing: ls.TXT }}>{data.tip4}</div>
            </div>
        </div>
    )
}

function Slide5 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    return (
        <div className="section section5">
            <div className="content">
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className='groups'>
                    { data.images.map((img: any, idx: number) => (
                        <div className='img-group' key={idx}>
                            <div className='desc' style={{ letterSpacing: ls.TXT }}>{img.caption}</div>
                            { img.desc.map((desc: any) =>
                                <div className='desc' style={{ letterSpacing: ls.TXT }}>{desc}</div>
                            )}
                            
                            <VScroll data={img.srcs} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function Slide6 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    const imgs = [
        { url: '/mobile/res-6-1.jpg' },
        { url: '/mobile/res-6-2.jpg' },
        { url: '/mobile/res-6-3.jpg' },
        { url: '/mobile/res-6-4.jpg' },
        { url: '/mobile/res-6-5.jpg' },
        { url: '/mobile/res-6-6.jpg' }
    ]

    return (
        <div className="section section6">
            <div className="content">
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc3}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}></div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc4}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc5}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc6}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}></div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc7}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc8}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc9}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}></div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc10}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc11}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc12}</div>
                <div className="tip" style={{ letterSpacing: ls.TXT }}>{data.tip}</div>
            </div>
            <VScroll data={imgs} />
        </div>
    )
}

function ToggleContainer ({ label, children }: { label: string, children: React.ReactNode }) {
    const [visible, setVisible] = useState(true)

    return (
        <div className='toggle-container'>
            <div className='toggle-header' onClick={() => setVisible(!visible)}>
                {label}
                { visible ?
                    <Image src='/icons/up.svg' /> :
                    <Image src='/icons/down.svg' />
                }
            </div>
            <div className={`toggle-body ${visible ? '' : 'hidden'}`}>
                {children}
            </div>
        </div>
    )
}
function Slide7 ({ data, ls }: { data: any, ls: ILetterSpacing }) {

    const getStyle = (width?: number, right?: boolean) => {
        return {
            width: width || 'auto',
            right: right ? 0 : 'unset',
            left: right ? 'unset' : 0
        }
    }
    return (
        <div className="section section7">
            <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
            <ToggleContainer label={data.basic.cpt}>
                {data.basic.desc.map((desc: any) =>
                    <div className="desc" style={{ letterSpacing: 1 }}>{desc}</div>
                )}
            </ToggleContainer>

            <ToggleContainer label={data.suite.cpt}>
                {data.suite.desc.map((desc: any) =>
                    <div className="desc" style={{ letterSpacing: 1 }}>{desc}</div>
                )}
            </ToggleContainer>

            <ToggleContainer label={data.facility.cpt}>
                <div className='table'>
                    {data.facility.list.map((item: any) =>
                        <div className={`box ${item.hover ? 'hoverable': ''}`} style={{ letterSpacing: 1 }}>
                            {item.label}
                            {item.hover ?
                                <div
                                    className='tip'
                                    style={getStyle(item.tipWidth, !!item.right)}
                                >{item.hover}</div> : null
                            }
                        </div>
                    )}
                </div>
            </ToggleContainer>

            <ToggleContainer label={data.facility.cpt}>
                <div className='table'>
                    {data.service.list.map((item: any) =>
                        <div className={`box ${item.hover ? 'hoverable': ''}`} style={{ letterSpacing: 1 }}>
                            {item.label}
                            {item.hover ?
                                <div
                                    className='tip'
                                    style={getStyle(item.tipWidth, !!item.right)}
                                >{item.hover}</div> : null
                            }
                        </div>
                    )}
                </div>
            </ToggleContainer>
        </div>
    )
}


export default function MobileResidence () {
    const I18N = useCommonStore(state => state.I18N)
    const letterSpacing = useCommonStore(state => state.letterSpacing)
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
            tip: I18N['res.s3.tip'],
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
            title: I18N['res.s5.title'],
            images: [
                {
                    srcs: [{ url:'/mobile/res-5-1.jpg'}, { url:'/mobile/res-5-1-2.jpg'}],
                    caption: I18N['res.s5.image1.cpt'],
                    desc: [
                        I18N['res.s5.image1.desc1'],
                        // I18N['res.s5.image1.desc2'],
                    ]
                },
                {
                    srcs: [{ url:'/mobile/res-5-2.jpg'}, { url:'/mobile/res-5-3.jpg'}, { url:'/mobile/res-5-4.jpg'}, { url:'/mobile/res-5-5.jpg'}],
                    caption: I18N['res.s5.image2.cpt'],
                    desc: [
                        I18N['res.s5.image2.desc1'],
                        // I18N['res.s5.image2.desc2'],
                    ]
                },
                {
                    srcs: [{ url:'/mobile/res-5-6.jpg'}, { url:'/mobile/res-5-7.jpg'}, { url:'/mobile/res-5-8.jpg'}, { url:'/mobile/res-5-9.jpg'}],
                    caption: I18N['res.s5.image3.cpt'],
                    desc: [
                        I18N['res.s5.image3.desc1'],
                        // I18N['res.s5.image3.desc2'],
                    ]
                },
                {
                    srcs: [{ url:'/mobile/res-5-10.jpg'}, { url:'/mobile/res-5-11.jpg'}, { url:'/mobile/res-5-12.jpg'}],
                    caption: I18N['res.s5.image4.cpt'],
                    desc: [
                        I18N['res.s5.image4.desc1'],
                        // I18N['res.s5.image4.desc2'],
                    ]
                },
                {
                    srcs: [{ url:'/mobile/res-5-13.jpg'}, { url:'/mobile/res-5-14.jpg'}],
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
                    { label: I18N['res.s7.cpt3.2'], tipWidth: 200, arrowLeft: 24, hover: I18N['res.s7.cpt3.2.hover'] },
                    { label: I18N['res.s7.cpt3.3'], tipWidth: 145, right: true, arrowLeft: 30, hover: I18N['res.s7.cpt3.3.hover'] },
                    { label: I18N['res.s7.cpt3.4'] },
                    { label: I18N['res.s7.cpt3.5'] },
                    { label: I18N['res.s7.cpt3.6'] },
                    { label: I18N['res.s7.cpt3.7'] },
                    { label: I18N['res.s7.cpt3.8'], tipWidth: 175, arrowLeft: 15, hover: I18N['res.s7.cpt3.8.hover'] },
                    { label: I18N['res.s7.cpt3.10'], tipWidth: 300, right: true, arrowLeft: 24, hover: I18N['res.s7.cpt3.10.hover'] },
                    { label: I18N['res.s7.cpt3.9'] },
                    { label: I18N['res.s7.cpt3.11'], tipWidth: 225, arrowLeft: 15, hover: I18N['res.s7.cpt3.11.hover'] },
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
        <>
            <Header />
            <div className="mobile-container mobile-res">
                <Slide1 ls={letterSpacing} data={data.section1} />
                <Slide2 ls={letterSpacing} data={data.section2} />
                <Slide3 ls={letterSpacing} data={data.section3} />
                <Slide4 ls={letterSpacing} data={data.section4} />
                <Slide5 ls={letterSpacing} data={data.section5} />
                <Slide6 ls={letterSpacing} data={data.section6} />
                <Slide7 ls={letterSpacing} data={data.section7} />
                <Footer />
            </div>
        </>
    )
}