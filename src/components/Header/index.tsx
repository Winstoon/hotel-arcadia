import { Link, useLocation } from "react-router-dom"
import { useCommonStore, useOrderDialogStore } from "../../store"
import { ROUTERS } from "../../App"
import Image from "../Image"
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
    const lang = useCommonStore(state => state.lang)
    const I18N = useCommonStore(state => state.I18N)
    const setOrderVisible = useOrderDialogStore(state => state.setVisible)

    const handleOrder = () => {
        setOrderVisible(true)
    }

    return (
        <div className={`header ${hidden ? 'hidden' : ''} ${lightmode ? 'lightmode' : ''} ${mask ? 'mask' : ''} ${withbg ? 'withbg': ''}`}>
            <div className="header-left">
                <Link to="/">
                    <Image
                        className="logo"
                        src={lightmode ? '/logo.black.svg' : '/logo.svg'}
                    />
                </Link>
            </div>
            <div className="header-center">
                { ROUTERS.map((router, idx) =>
                    <div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                        { idx === 0 ? null : <span className="divider">|</span> }
                        <Link
                            to={router.path}
                            className={router.path === pathname ? 'active' : ''}
                        >{router.label[lang]}</Link>
                    </div>
                )}
            </div>
            <div className="header-right">
                <Language lightmode={!!lightmode} />
                <Button size='small' uppercase to={pathname + '?order=true'}>{I18N['reservebtn']}</Button>
            </div>
        </div>
    )
}