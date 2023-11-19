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
    const disabled = numbers.length === 0

    const handleClick = (e: any) => {
        if (disabled) return
        e.stopPropagation()
        setDpVisible(!dpVisible)
    }

    return (
        <>
            <div className={`form-input dp-input ${disabled ? 'disabled': ''}`} onClick={handleClick}>
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