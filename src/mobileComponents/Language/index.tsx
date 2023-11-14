import Image from "../../mobileComponents/Image"
import { I18N, I18N_LABELS } from "../../i18n"
import { useCommonStore } from "../../store"

import './index.css'

export default function Language ({ lightmode }: { lightmode: boolean }) {
    const [lang, setLang] = useCommonStore(state => [state.lang, state.setLang])
    const letterSpacing = useCommonStore(state => state.letterSpacing)

    return (
        <div className={`language ${lightmode ? 'lightmode' : ''}`}>
            <div className="trigger" style={{ letterSpacing: letterSpacing.TXT }}>
                {I18N_LABELS[lang]}
                <Image src={lightmode ? '/icons/arrow-down-black.svg' : '/icons/arrow-down.svg'} />
            </div>
            <div className="dropdown" style={{ letterSpacing: letterSpacing.TXT }}>
                {Object.entries(I18N_LABELS).filter(([key]) => key !== lang).map(([key, label]) =>
                    <div key={key} className={"dp-item"} onClick={() => setLang(key as I18N)}>{label}</div>
                )}
            </div>
        </div>
    )
}
