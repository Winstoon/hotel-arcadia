import { useEffect, useState } from "react"
import Calendar from "react-calendar"
import { Value } from "react-calendar/dist/cjs/shared/types"
import dayjs from "dayjs"
import { I18N } from "../../i18n"
import { useCommonStore } from "../../store"

const CalendarLocale = {
    [I18N.ZH]: 'zh-CN',
    [I18N.EN]: 'en-US',
    [I18N.JP]: 'ja'
}

const CalendarWeekday = {
    [I18N.ZH]: ['日', '一', '二', '三', '四', '五', '六'],
    [I18N.EN]: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    [I18N.JP]: ['日', '月', '火', '水', '木', '金', '土']
}

export function formatCalendarDate (date: Date, format = 'YYYY-MM-DD') {
    return dayjs(date.valueOf()).format(format)
}

const formatInputDate = (date: string, lang: I18N) => {
    const weeks = {
        [I18N.ZH]: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        [I18N.EN]: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        [I18N.JP]: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日']
    }

    const week = weeks[lang][new Date(date).getDay()]
    switch (lang) {
        case I18N.ZH:
            return dayjs(date).format('YYYY年MM月DD日') + ' ' + week
        case I18N.EN:
            return dayjs(date).format('YYYY-MM-DD') + ' ' + week
        case I18N.JP:
            return dayjs(date).format('YYYY年MM月DD日') + ' ' + week
        default:
            return date
    }
}

interface IProps {
    popVisible: boolean
    setPopVisible: (visible: boolean) => void
    reserveDate: string
    setReserveDate: (date: string) => void
}

export default function CalendarInput (props: IProps) {
    const { popVisible, setPopVisible, reserveDate, setReserveDate } = props
    const lang = useCommonStore(state => state.lang)
    const [disabledDates, setDisabledDates] = useState<string[]>([])

    const handleChangeDate = (value: Value) => {
        if (value) {
            // @ts-ignore
            setReserveDate(formatCalendarDate(value))
            setPopVisible(false)
        }
    }

    useEffect(() => {
        fetch('/api/getCalendar').then(res => res.json()).then(res => {
            setDisabledDates(res.data.disabled)
        })
    }, [])

    return (
        <>
            <div
                className='form-input'
                onClick={e => { e.stopPropagation(); setPopVisible(true) }}
            >{formatInputDate(reserveDate, lang)}</div>
            <div className={`calendar-pop ${popVisible ? 'show' : ''}`} onClick={e => e.stopPropagation()}>
                <Calendar
                    value={reserveDate}
                    locale={CalendarLocale[lang]}
                    onChange={handleChangeDate}
                    formatDay={(locale, date) => date.getDate().toString()}
                    formatShortWeekday={(locale, date) => CalendarWeekday[lang][date.getDay()]}
                    tileDisabled={({date}) => 
                        date.valueOf() + 24 * 1000 * 3600 < dayjs().valueOf() ||
                        disabledDates.includes(formatCalendarDate(date))
                    }
                />
            </div>
        </>
    )
}