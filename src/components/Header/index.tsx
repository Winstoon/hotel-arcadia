import { Link, useLocation } from "react-router-dom"
import { useCommonStore, useOrderDialogStore } from "../../store"
import { ROUTERS } from "../../App"
import Image from "../Image"
import Language from "../Language"
import Button from "../Button"

import './index.css'

interface IProps{
    hidden?: boolean
    lightmode?: boolean
}

export default function Header (props: IProps) {
    const { hidden, lightmode } = props
    const { pathname } = useLocation()
    const lang = useCommonStore(state => state.lang)
    const I18N = useCommonStore(state => state.I18N)
    const setOrderVisible = useOrderDialogStore(state => state.setVisible)

    const handleOrder = () => {
        setOrderVisible(true)
    }

    if (hidden) return null

    return (
        <div className={`header ${lightmode ? 'lightmode' : ''}`}>
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
                    <>
                        { idx === 0 ? null : <span className="divider">|</span> }
                        <Link
                            to={router.path}
                            className={router.path === pathname ? 'active' : ''}
                        >{router.label[lang]}</Link>
                    </>
                )}
            </div>
            <div className="header-right">
                <Language lightmode={!!lightmode} />
                <Button size='small' uppercase onClick={handleOrder}>{I18N['reserve']}</Button>
            </div>
        </div>
    )
}