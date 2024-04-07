import { getFontSize } from "../../App"
import { useCommonStore } from "../../store"
import Image from "../Image"

import './index.css'

export default function MenuDialog () {
    const ls = useCommonStore(state => state.letterSpacing)
    const lang = useCommonStore(state => state.lang)
    const [visible, setVisible] = useCommonStore(state => [state.menuDialogVisible, state.setMenuDialogVisible])
    const [activeMenu, setActiveMenu] = useCommonStore(state => [state.activeMenu, state.setActiveMenu])

    const handleClose = () => {
        setActiveMenu(undefined)
        setVisible(false)
    }

    return (
        <div className={`menu-dialog ${visible && activeMenu ? 'show' : ''}`}>
            { activeMenu ? (
                <div className="dialog-body">
                    <Image className="dialog-close" src='/icons/close.svg' onClick={handleClose} />
                    <div className="menu-title" style={{ letterSpacing: ls.H1, fontSize: getFontSize('title', lang) }}>{activeMenu.type}</div>
                    <div className="menu-items" style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>
                        {activeMenu.menu.map((item: string) => (
                            <div>{item}</div>
                        ))}
                    </div>
                    <div className="menu-tips">
                        {activeMenu.tips.map((tip: string) => (
                            <div>{tip}</div>
                        ))}
                    </div>
                </div>
            ) : null }
        </div>
    )
}