import Image from "../Image"

interface IProps {
    numbers: number[]
    dpVisible: boolean
    setDpVisible: (visible: boolean) => void
    setValue: (value: number) => void
    displayValue: string
}

export default function Dropdown (props: IProps) {
    const { numbers, dpVisible, setDpVisible, setValue, displayValue } = props

    return (
        <>
            <div className="form-input dp-input" onClick={e => { e.stopPropagation(); setDpVisible(!dpVisible) }}>
                <span className="dp-value">{displayValue}</span>
                <Image src={dpVisible ? '/icons/up.svg' : 'icons/down.svg'} />
            </div>
            <div className={`form-dropdown ${dpVisible ? 'show' : ''}`}>
                { numbers.map(num =>
                    <div key={num} className="form-dp-item" onClick={() => setValue(num)}>{num}</div>
                )}
            </div>
        </>
    )
}