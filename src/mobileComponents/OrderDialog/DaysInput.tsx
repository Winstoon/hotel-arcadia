import { useCommonStore } from "../../mobilestore"
import Image from "../Image"

export const MINDAYS = 5

interface IProps {
    days: number
    setDays: (days: number) => void
}

export default function DaysInput (props: IProps) {
    const { days, setDays } = props
    const I18N = useCommonStore(state => state.I18N)

    const handleMinus = () => {
        if (days > MINDAYS) {
            setDays(days - 1)
        }
    }

    const handlePlus = () => {
        setDays(days + 1)
    }

    return (
        <div className="form-input days-input">
            <Image onClick={handleMinus} src='/icons/minus.svg' className={`days-minus ${days <= MINDAYS ? 'disabled' : ''}`} />
            <span className="days-value">{days + 1} {I18N['days']} {days} {I18N['night']}</span>
            <Image onClick={handlePlus} src='/icons/plus.svg' className='days-plus' />
        </div>
    )
}