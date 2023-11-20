import { useEffect, useState } from "react"
import Image from "../../mobileComponents/Image"
import { I18N, I18N_LABELS } from "../../i18n"
import { useCommonStore } from "../../mobilestore"

import './index.css'

export default function Language ({ lightmode }: { lightmode: boolean }) {
    const [lang, setLang] = useCommonStore(state => [state.lang, state.setLang])
    const letterSpacing = useCommonStore(state => state.letterSpacing)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        document.body.onclick = () => {
            setVisible(false)
        }
    }, [])

    const handleTrigger = (e: any) => {
        e.stopPropagation()
        setVisible(!visible)
    }

    return (
        <div className={`mobile-language ${lightmode ? 'lightmode' : ''}`}>
            <div className="trigger" style={{ letterSpacing: letterSpacing.TXT }} onClick={handleTrigger}>
                {I18N_LABELS[lang]}
                <Image src={lightmode ? '/icons/arrow-down-black.svg' : '/icons/arrow-down.svg'} />
            </div>
            <div className={`dropdown ${visible ? 'show' : ''}`} style={{ letterSpacing: letterSpacing.TXT }}>
                {Object.entries(I18N_LABELS).filter(([key]) => key !== lang).map(([key, label]) =>
                    <div key={key} className={"dp-item"} onClick={() => setLang(key as I18N)}>{label}</div>
                )}
            </div>
        </div>
    )
}

export function RadioLanguage ({ onChange }: { onChange: () => void }) {
    const [lang, setLang] = useCommonStore(state => [state.lang, state.setLang])
    const letterSpacing = useCommonStore(state => state.letterSpacing)

    const handleChangeLang = (lang: I18N) => {
        onChange()
        setLang(lang)
    }

    return (
        <div className="radio-language">
            {Object.entries(I18N_LABELS).map(([key, label]) =>
                <div
                    key={key}
                    className={`radio-item ${lang === key ? 'active' : ''}`}
                    onClick={() => handleChangeLang(key as I18N)}
                    style={{ letterSpacing: letterSpacing.TXT }}
                >{label}</div>
            )}
        </div>
    )
}