import { useEffect, useState } from 'react'
import { useCommonStore } from '../../mobilestore'
import Header from '../../mobileComponents/Header'
import Button from '../../mobileComponents/Button'
import Button2 from '../../mobileComponents/Button2'
import Image, { AnimateBg } from '../../mobileComponents/Image'
import { ILetterSpacing } from '../../letterSpacings'

import './index.css'

function Slide1 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    return (
        <div className="section section1" style={{ height: window.innerHeight }}>
            <div className='content'>
                <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
            </div>

            <AnimateBg src="/jpgs/home-2.jpg" infinite />
        </div>
    )
}

function Slide2 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    const I18N = useCommonStore(state => state.I18N)

    return (
        <div className="section section2" style={{ height: window.innerHeight }}>
            <div className="content">
                <Image className="banner" src={data.banner} />
                <div className='paragraph'>
                    <div className="title" style={{ letterSpacing: ls.H1 }}>{data.title}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
                    <Button2 to="/env" dark>{I18N['explore']}</Button2>
                </div>
            </div>
        </div>
    )
}

export default function MobileHome () {
    const [lpHide, setLPHide] = useState(false)
    const [lpRemoved, setLPRemoved] = useState(false)
    const I18N = useCommonStore(state => state.I18N)
    const letterSpacing = useCommonStore(state => state.letterSpacing)
    const pageSectionOrder = useCommonStore(state => state.pageSectionOrder)
    const setPageSectionOrder = useCommonStore(state => state.setPageSectionOrder)

    const data = {
        section1: {
            title: I18N['home.s2.title'],
            desc1: I18N['home.s2.desc1'],
            desc2: I18N['home.s2.desc2'],
        },
        section2: {
            banner: '/mobile/home-3.jpg',
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
        <>
            <Header />
            <div className={`loading-page ${lpHide ? 'hide' : ''} ${lpRemoved ? 'remove' : ''}`}>
                <video src='/lp.mp4' autoPlay muted playsInline />
            </div>

            <div className="mobile-container mobile-home">
                { lpHide ?
                    <>
                        <Slide1 ls={letterSpacing} data={data.section1} />
                        <Slide2 ls={letterSpacing} data={data.section2} />
                    </> : null
                }
            </div>
        </>
    )
}