// 佳肴
import AmLine from "../../components/AmLine/AmLine";
import CircleProgress from "../../components/CircleProgress";
import FadeSlide from "../../components/FadeSlide/FadeSlide";
import Footer from "../../components/Footer";
import Fullpage from "../../components/FullPage";
import Header from "../../components/Header";
import Image, { AnimateBg } from "../../components/Image";
import { ILetterSpacing } from "../../letterSpacings";
import { useCommonStore } from "../../store";

import './index.css'

function Slide1 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    // const I18N = useCommonStore(state => state.I18N)
    // const setOrderVisible = useOrderDialogStore(state => state.setVisible)

    return (
        <div className="section section1">
            <div className="content">
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                {/* <Button uppercase onClick={() => setOrderVisible(true)}>{I18N['reserve']}</Button> */}
            </div>

            <AnimateBg src="/jpgs/dli-1.jpg" infinite />
        </div>
    )
}



function SlideMenu ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order === 1
    const { title, menuGroup } = data
    const setActiveMenu = useCommonStore(state => state.setActiveMenu)
    const setVisible = useCommonStore(state => state.setMenuDialogVisible)

    const handleClickDetail = (menu: any) => {
        setActiveMenu(menu)
        setVisible(true)
    }

    return (
        <>
            <div className="section section-menu">
                <div className={`content ${active ? 'animate' : ''}`}>
                    <div className="title" style={{ letterSpacing: ls.H1 }}>{title}</div>
                    <div className="menu-group" style={{ letterSpacing: ls.TXT }}>
                        { menuGroup.map((group: any) => (
                            <div>
                                <div className="group-title">{group.title}</div>
                                <div className="group-body">
                                    {group.detail.map((detail: any) => (
                                        <div>
                                            <span
                                                className="detail-item"
                                                onClick={() => handleClickDetail(detail)}
                                            >{detail.type}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

function Slide2 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order === 2
    const images = [
        '/jpgs/dli-2-1.jpg',
        '/jpgs/dli-2-2.jpg',
        '/jpgs/dli-2-3.jpg'
    ]

    return (
        <div className="section section2">
            <div className={`h2-content ${active ? 'animate' : ''}`}>
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
    const active = order === 3
    const images = [
        '/jpgs/dli-3-1.jpg',
        '/jpgs/dli-3-2.jpg',
        '/jpgs/dli-3-3.jpg'
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

export default function Delicious () {
    const I18N = useCommonStore(state => state.I18N)
    const pageSectionOrder = useCommonStore(state => state.pageSectionOrder)
    const letterSpacing = useCommonStore(state => state.letterSpacing)

    const headerConfig = {
        mask: pageSectionOrder >= 3,
    }

    const data = {
        section1: {
            title: I18N['delicious'],
            desc1: I18N['dli.s1.desc1'],
            desc2: I18N['dli.s1.desc2']
        },
        sectionMenu: {
            title: I18N['dli.menu.cpt'],
            menuGroup: [
                {
                    // 早餐
                    title: I18N['dli.menu.breakfast'],
                    detail: [
                        {
                            // 和式早餐 A
                            type: I18N['dli.menu.bf.1.cpt'],
                            menu: [
                                I18N['dli.menu.bf.1.food1'],
                                I18N['dli.menu.bf.1.food2'],
                                I18N['dli.menu.bf.1.food3'],
                                I18N['dli.menu.bf.1.food4'],
                                I18N['dli.menu.bf.1.food5'],
                                I18N['dli.menu.bf.1.food6'],
                            ],
                            tips: [I18N['dli.menu.bf.1.tip1']]
                        },
                        {
                            // 和式早餐 B
                            type: I18N['dli.menu.bf.2.cpt'],
                            menu: [
                                I18N['dli.menu.bf.2.food1'],
                                I18N['dli.menu.bf.2.food2'],
                                I18N['dli.menu.bf.2.food3'],
                                I18N['dli.menu.bf.2.food4'],
                                I18N['dli.menu.bf.2.food5'],
                                I18N['dli.menu.bf.2.food6'],
                                I18N['dli.menu.bf.2.food7'],
                                I18N['dli.menu.bf.2.food8'],
                                I18N['dli.menu.bf.2.food9'],
                            ],
                            tips: [I18N['dli.menu.bf.2.tip1']]
                        },
                        {},
                        {
                            // 西式早餐 A
                            type: I18N['dli.menu.bf.3.cpt'],
                            menu: [
                                I18N['dli.menu.bf.3.food1'],
                                I18N['dli.menu.bf.3.food2'],
                                I18N['dli.menu.bf.3.food3'],
                                I18N['dli.menu.bf.3.food4'],
                                I18N['dli.menu.bf.3.food5'],
                                I18N['dli.menu.bf.3.food6'],
                                I18N['dli.menu.bf.3.food7'],
                                I18N['dli.menu.bf.3.food8']
                            ],
                            tips: [I18N['dli.menu.bf.3.tip1']]
                        },
                        {
                            // 西式早餐 B
                            type: I18N['dli.menu.bf.4.cpt'],
                            menu: [
                                I18N['dli.menu.bf.4.food1'],
                                I18N['dli.menu.bf.4.food2'],
                                I18N['dli.menu.bf.4.food3'],
                                I18N['dli.menu.bf.4.food4'],
                                I18N['dli.menu.bf.4.food5'],
                                I18N['dli.menu.bf.4.food6'],
                                I18N['dli.menu.bf.4.food7']
                            ],
                            tips: [I18N['dli.menu.bf.4.tip1']]
                        },
                        {
                            // 西式早餐 C
                            type: I18N['dli.menu.bf.5.cpt'],
                            menu: [
                                I18N['dli.menu.bf.5.food1'],
                                I18N['dli.menu.bf.5.food2'],
                                I18N['dli.menu.bf.5.food3'],
                                I18N['dli.menu.bf.5.food4'],
                                I18N['dli.menu.bf.5.food5'],
                                I18N['dli.menu.bf.5.food6'],
                                I18N['dli.menu.bf.5.food7']
                            ],
                            tips: [I18N['dli.menu.bf.5.tip1']]
                        },
                    ]
                },
                {
                    // 晚餐
                    title: I18N['dli.menu.dinner'],
                    detail: [
                        {
                            // 西洋料理
                            type: I18N['dli.menu.dinner.1.cpt'],
                            menu: [
                                I18N['dli.menu.dinner.1.food1'],
                                I18N['dli.menu.dinner.1.food2'],
                                I18N['dli.menu.dinner.1.food3'],
                                I18N['dli.menu.dinner.1.food4'],
                                I18N['dli.menu.dinner.1.food5'],
                                I18N['dli.menu.dinner.1.food6'],
                                I18N['dli.menu.dinner.1.food7'],
                                I18N['dli.menu.dinner.1.food8'],
                                I18N['dli.menu.dinner.1.food9'],
                            ],
                            tips: [
                                I18N['dli.menu.dinner.1.tip1'],
                                I18N['dli.menu.dinner.1.tip2'],
                                I18N['dli.menu.dinner.1.tip3'],
                            ]
                        },
                        {
                            // 锅物套餐
                            type: I18N['dli.menu.dinner.2.cpt'],
                            menu: [
                                I18N['dli.menu.dinner.2.food1'],
                                I18N['dli.menu.dinner.2.food2'],
                                I18N['dli.menu.dinner.2.food3'],
                                I18N['dli.menu.dinner.2.food4'],
                                I18N['dli.menu.dinner.2.food5'],
                                I18N['dli.menu.dinner.2.food6'],
                                I18N['dli.menu.dinner.2.food7'],
                                I18N['dli.menu.dinner.2.food8'],
                                I18N['dli.menu.dinner.2.food9'],
                                I18N['dli.menu.dinner.2.food10'],
                                I18N['dli.menu.dinner.2.food11'],
                                I18N['dli.menu.dinner.2.food12'],
                                I18N['dli.menu.dinner.2.food13'],
                                I18N['dli.menu.dinner.2.food14'],
                                I18N['dli.menu.dinner.2.food15'],
                                I18N['dli.menu.dinner.2.food16'],
                            ],
                            tips: [
                                I18N['dli.menu.dinner.2.tip1'],
                                I18N['dli.menu.dinner.2.tip2'],
                                I18N['dli.menu.dinner.2.tip3'],
                            ]
                        },
                        {
                            // 怀石套餐
                            type: I18N['dli.menu.dinner.3.cpt'],
                            menu: [
                                I18N['dli.menu.dinner.3.food1'],
                                I18N['dli.menu.dinner.3.food2'],
                                I18N['dli.menu.dinner.3.food3'],
                                I18N['dli.menu.dinner.3.food4'],
                                I18N['dli.menu.dinner.3.food5'],
                                I18N['dli.menu.dinner.3.food6'],
                                I18N['dli.menu.dinner.3.food7'],
                                I18N['dli.menu.dinner.3.food8'],
                                I18N['dli.menu.dinner.3.food9'],
                                I18N['dli.menu.dinner.3.food10'],
                                I18N['dli.menu.dinner.3.food11'],
                                I18N['dli.menu.dinner.3.food12'],
                                I18N['dli.menu.dinner.3.food13'],
                                I18N['dli.menu.dinner.3.food14'],
                                I18N['dli.menu.dinner.3.food15'],
                                I18N['dli.menu.dinner.3.food16'],
                            ],
                            tips: [
                                I18N['dli.menu.dinner.3.tip1'],
                                I18N['dli.menu.dinner.3.tip2'],
                                I18N['dli.menu.dinner.3.tip3'],
                            ]
                        },
                        {
                            // 河豚套餐
                            type: I18N['dli.menu.dinner.4.cpt'],
                            menu: [
                                I18N['dli.menu.dinner.4.food1'],
                                I18N['dli.menu.dinner.4.food2'],
                                I18N['dli.menu.dinner.4.food3'],
                                I18N['dli.menu.dinner.4.food4'],
                                I18N['dli.menu.dinner.4.food5'],
                                I18N['dli.menu.dinner.4.food6'],
                                I18N['dli.menu.dinner.4.food7'],
                                I18N['dli.menu.dinner.4.food8'],
                                I18N['dli.menu.dinner.4.food9'],
                                I18N['dli.menu.dinner.4.food10'],
                                I18N['dli.menu.dinner.4.food11'],
                                I18N['dli.menu.dinner.4.food12'],
                                I18N['dli.menu.dinner.4.food13'],
                                I18N['dli.menu.dinner.4.food14'],
                                I18N['dli.menu.dinner.4.food15'],
                                I18N['dli.menu.dinner.4.food16'],
                            ],
                            tips: [
                                I18N['dli.menu.dinner.4.tip1'],
                                I18N['dli.menu.dinner.4.tip2'],
                                I18N['dli.menu.dinner.4.tip3'],
                            ]
                        },
                        {
                            // 怀石菜单-高级
                            type: I18N['dli.menu.dinner.5.cpt'],
                            menu: [
                                I18N['dli.menu.dinner.5.food1'],
                                I18N['dli.menu.dinner.5.food2'],
                                I18N['dli.menu.dinner.5.food3'],
                                I18N['dli.menu.dinner.5.food4'],
                                I18N['dli.menu.dinner.5.food5'],
                                I18N['dli.menu.dinner.5.food6'],
                                I18N['dli.menu.dinner.5.food7'],
                                I18N['dli.menu.dinner.5.food8'],
                                I18N['dli.menu.dinner.5.food9'],
                                I18N['dli.menu.dinner.5.food10'],
                                I18N['dli.menu.dinner.5.food11'],
                                I18N['dli.menu.dinner.5.food12'],
                                I18N['dli.menu.dinner.5.food13'],
                                I18N['dli.menu.dinner.5.food14'],
                                I18N['dli.menu.dinner.5.food15'],
                                I18N['dli.menu.dinner.5.food16'],
                            ],
                            tips: [
                                I18N['dli.menu.dinner.5.tip1'],
                                I18N['dli.menu.dinner.5.tip2'],
                                I18N['dli.menu.dinner.5.tip3'],
                            ]
                        },
                        {
                            // 寿司套餐 - 高级
                            type: I18N['dli.menu.dinner.6.cpt'],
                            menu: [
                                I18N['dli.menu.dinner.6.food1'],
                                I18N['dli.menu.dinner.6.food2'],
                                I18N['dli.menu.dinner.6.food3'],
                                I18N['dli.menu.dinner.6.food4'],
                                I18N['dli.menu.dinner.6.food5'],
                                I18N['dli.menu.dinner.6.food6'],
                                I18N['dli.menu.dinner.6.food7'],
                                I18N['dli.menu.dinner.6.food8'],
                                I18N['dli.menu.dinner.6.food9'],
                                I18N['dli.menu.dinner.6.food10'] + '、' + I18N['dli.menu.dinner.6.food11'] + '、' + I18N['dli.menu.dinner.6.food12'] + '、' + I18N['dli.menu.dinner.6.food13'],
                                I18N['dli.menu.dinner.6.food14'] + '、' + I18N['dli.menu.dinner.6.food15'] + '、' + I18N['dli.menu.dinner.6.food16'],
                                I18N['dli.menu.dinner.6.food17'] + '、' + I18N['dli.menu.dinner.6.food18'] + '、' + I18N['dli.menu.dinner.6.food19'] + '、' + I18N['dli.menu.dinner.6.food20'],
                                I18N['dli.menu.dinner.6.food21'],
                                I18N['dli.menu.dinner.6.food22'],
                            ],
                            tips: [
                                I18N['dli.menu.dinner.6.tip1'],
                                I18N['dli.menu.dinner.6.tip2'],
                                I18N['dli.menu.dinner.6.tip3'],
                            ]
                        }
                    ]
                },
                {
                    // 下午茶
                    title: I18N['dli.menu.tea'],
                    detail: [
                        {
                            type: I18N['dli.menu.teamenu'],
                            menu: [
                                I18N['dli.menu.tea.d1'] + '：' + I18N['dli.menu.tea.d1.tea'],
                                I18N['dli.menu.tea.d2'] + '：' + I18N['dli.menu.tea.d2.tea'],
                                I18N['dli.menu.tea.d3'] + '：' + I18N['dli.menu.tea.d3.tea'],
                                I18N['dli.menu.tea.d4'] + '：' + I18N['dli.menu.tea.d4.tea'],
                                I18N['dli.menu.tea.d5'] + '：' + I18N['dli.menu.tea.d5.tea'],
                                I18N['dli.menu.tea.d6'] + '：' + I18N['dli.menu.tea.d6.tea'],
                                I18N['dli.menu.tea.d7'] + '：' + I18N['dli.menu.tea.d7.tea'],
                            ],
                            tips: [I18N['dli.menu.tea.tip1']]
                        }
                    ]
                }
            ]
        },
        section2: {
            title: I18N['dli.s2.cpt'],
            desc1: I18N['dli.s2.desc1'],
            desc2: I18N['dli.s2.desc2'],
            desc3: I18N['dli.s2.desc3'],
            desc4: I18N['dli.s2.desc4'],
            desc5: I18N['dli.s2.desc5'],
            desc6: I18N['dli.s2.desc6'],
            desc7: I18N['dli.s2.desc7'],
        },
        section3: {
            title: I18N['dli.s3.cpt'],
            desc1: I18N['dli.s3.desc1'],
            desc2: I18N['dli.s3.desc2'],
            desc3: I18N['dli.s3.desc3'],
            desc4: I18N['dli.s3.desc4'],
            desc5: I18N['dli.s3.desc5'],
            desc6: I18N['dli.s3.desc6'],
        },
        // section4: {
        //     desc1: I18N['dli.s4.desc1'],
        //     desc2: I18N['dli.s4.desc2'],
        //     tip: I18N['dli.s4.tip']
        // },
    }

    return (
        <div className="container delicious">
            <Header {...headerConfig} />
            <Fullpage
                ignoreHideIndex={[3,4]}
                sliders={[
                    <Slide1 ls={letterSpacing} data={data.section1} order={pageSectionOrder} />,
                    <SlideMenu ls={letterSpacing} data={data.sectionMenu} order={pageSectionOrder} />,
                    <Slide2 ls={letterSpacing} data={data.section2} order={pageSectionOrder} />,
                    <Slide3 ls={letterSpacing} data={data.section3} order={pageSectionOrder} />,
                    // <Slide4 ls={letterSpacing} data={data.section4} order={pageSectionOrder} />,
                    <Footer />
                ]}
            />
        </div>
    )
}


