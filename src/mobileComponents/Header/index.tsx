import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useCommonStore, useOrderDialogStore } from "../../store"
import { ROUTERS } from "../../App"
import Image from "../../mobileComponents/Image"
import Language from "../Language"
import Button from "../Button"

import './index.css'

interface IProps{
    hidden?: boolean
    mask?: boolean
    withbg?: boolean
    lightmode?: boolean
}

export default function Header (props: IProps) {
    const { hidden, lightmode, withbg, mask } = props
    const { pathname } = useLocation()
    const _pathname = pathname.endsWith('/') ? pathname : pathname + '/'
    const [maskVisible, setMaskVisible] = useState(false)
    const lang = useCommonStore(state => state.lang)
    const I18N = useCommonStore(state => state.I18N)
    // const setOrderVisible = useOrderDialogStore(state => state.setVisible)

    // const handleOrder = () => {
    //     setOrderVisible(true)
    // }

    const onClose = () => {
        setMaskVisible(false)
    }

    return (
        <>
            <div className={`mobile-header ${hidden ? 'hidden' : ''} ${lightmode ? 'lightmode' : ''} ${mask ? 'mask' : ''} ${withbg ? 'withbg': ''}`}>
                <div className="header-left">
                    <Image
                        className="more"
                        onClick={() => setMaskVisible(true)}
                        src={lightmode ? '/icons/more.black.svg' : '/icons/more.svg'}
                    />
                </div>
                <div className="header-center">
                    <Link to="/mobile">
                        <Image
                            className="logo"
                            src={lightmode ? '/logo.black.svg' : '/logo.svg'}
                        />
                    </Link>
                </div>
                <div className="header-right">
                    <Language lightmode={!!lightmode} />
                    {/* <Button size='small' uppercase onClick={handleOrder}>{I18N['reserve2']}</Button> */}
                </div>
            </div>
            <div className={`mobile-header-dialog ${maskVisible ? 'show' : ''}`}>
                <div className='close' onClick={onClose}><Image src='/icons/close.svg' /></div>

                <div className="routers">
                    { ROUTERS.map((router, idx) =>
                        <div
                            key={idx}
                            className={`router-item ${'/mobile' + router.path === _pathname ? 'active' : ''}`}
                        >
                            <Link to={'/mobile' + router.path}>{router.label[lang]}</Link>
                        </div>
                    )}
                </div>

                <Language lightmode={!!lightmode} />

                <div>... quick links ...</div>
            </div>
        </>
    )
}