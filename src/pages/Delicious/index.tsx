// 佳肴
import AmLine from "../../components/AmLine/AmLine";
import Button from "../../components/Button";
import CircleProgress from "../../components/CircleProgress";
import FadeSlide from "../../components/FadeSlide/FadeSlide";
import Footer from "../../components/Footer";
import Fullpage from "../../components/FullPage";
import Header from "../../components/Header";
import Image, { AnimateBg } from "../../components/Image";
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
                <Button uppercase size='small' ghost rightIcon onClick={() => setOrderVisible(true)}>{I18N['reserve2']}</Button>
            </div>

            <AnimateBg src="/jpgs/dli-1.jpg" infinite />
        </div>
    )
}

function Slide2 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order === 1
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
    const active = order === 2
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

function Slide4 ({ data, ls, order }: { data: any, ls: ILetterSpacing, order: number }) {
    const active = order === 3
    
    return (
        <div className="section section4">
            <div className={`content ${active ? 'animate' : ''}`}>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                <div className="tip" style={{ letterSpacing: ls.TXT}}>{data.tip}</div>
            </div>

            <AnimateBg src="/jpgs/dli-4.jpg" infinite />
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
        section4: {
            desc1: I18N['dli.s4.desc1'],
            desc2: I18N['dli.s4.desc2'],
            tip: I18N['dli.s4.tip']
        },
    }

    return (
        <div className="container delicious">
            <Header {...headerConfig} />
            <Fullpage
                ignoreHideIndex={[3,4]}
                sliders={[
                    <Slide1 ls={letterSpacing} data={data.section1} order={pageSectionOrder} />,
                    <Slide2 ls={letterSpacing} data={data.section2} order={pageSectionOrder} />,
                    <Slide3 ls={letterSpacing} data={data.section3} order={pageSectionOrder} />,
                    <Slide4 ls={letterSpacing} data={data.section4} order={pageSectionOrder} />,
                    <Footer />
                ]}
            />
        </div>
    )
}


