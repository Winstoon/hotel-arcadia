import { useEffect, useState } from "react"
import Calendar from "react-calendar"
import { Value } from "react-calendar/dist/cjs/shared/types"
import dayjs from "dayjs"

function uniq(arr: string[]) {
    return [...new Set(arr)]
}

export default function CalendarOperation () {
    const [newDates, setNewDates] = useState<string[]>([])
    const [disabledDates, setDisabledDates] = useState<string[]>([])

    const fetchCalendar = () => {
        fetch('/api/getCalendar').then(res => res.json()).then(res => {
            setDisabledDates(res.data.disabled)
            setNewDates([])
        }).catch(err => {
            alert('获取日历数据失败')
        })
    }

    const handleChange = (value: Value) => {
        if (value) {
            // @ts-ignore
            const result = dayjs(value.valueOf()).format('YYYY-MM-DD')
            setNewDates(uniq([...newDates, result]))
        }
    }

    const removeDate = (date: string) => {
        setNewDates(newDates.filter(d => d !== date))
    }

    const handleSave = () => {
        fetch('/api/updateCalendar', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                disabled: uniq([...disabledDates, ...newDates])
            })
        }).then(res => res.json()).then(res => {
            if (res.code === 0) {
                alert('保存成功')
                fetchCalendar()
            } else {
                alert(res.message)
            }
        }).catch(err => {
            alert('保存失败')
        })
    }

    const removeDateInJson = (date: string) => {
        fetch('/api/updateCalendar', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                disabled: disabledDates.filter(d => d !== date)
            })
        }).then(res => res.json()).then(res => {
            if (res.code === 0) {
                alert('删除成功')
                fetchCalendar()
            } else {
                alert(res.message)
            }
        }).catch(err => {
            alert('删除失败')
        })
    }

    useEffect(() => {
        fetchCalendar()
    }, [])

    return (
        <div className="admin-calendar">
            <div className="cld-dates">
                <div className="caption">已禁用日期</div>
                <div className="list">
                    {disabledDates.map(date =>
                        <div key={date} className="date-tag">
                            <span>{date}</span>
                            <span onClick={() => removeDateInJson(date)} className="tag-close">&times;</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="cld-dates">
                <div className="caption">新增禁用日期</div>
                <div className="operation">
                    <div className="calendar">
                        <Calendar
                            value={new Date()}
                            onChange={handleChange}
                            tileClassName={({ date }) => 
                                [...newDates, ...disabledDates]
                                    .includes(dayjs(date.valueOf()).format('YYYY-MM-DD')) ?
                                    'disabled-day' : ''
                            }
                        />
                    </div>

                    <div className="opt-right">
                        <div className="list">
                            {newDates.map(date => 
                                <div key={date} className="date-tag">
                                    <span>{date}</span>
                                    <span onClick={() => removeDate(date)} className="tag-close">&times;</span>
                                </div>
                            )}
                        </div>
                        { newDates.length ?
                            <button className="button" onClick={handleSave}>保存</button> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}