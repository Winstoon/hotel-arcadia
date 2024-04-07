import { InputHTMLAttributes, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCommonStore, useOrderDialogStore } from '../../store'
import Image from '../Image'
import CalendarInput, { formatCalendarDate } from './CalendarInput'
import DaysInput, { MINDAYS } from './DaysInput'
import Dropdown from './Dropdown'
import Button from '../Button'

import './index.css'
import { getFontSize } from '../../App'

interface IProps {
    visible: boolean
}

function getChildrenNums (adultNums: number) {
    if (adultNums <= 11) {
        const length = 15 - adultNums + 1

        return Array.from({ length }, (_, i) => i)
    } else {
        return []
    }
}

function Input (props: InputHTMLAttributes<HTMLInputElement>) {
    return <input className='form-input' type='text' {...props} />
}

export default function OrderDialog (props: IProps) {
    const { pathname } = useLocation()
    const I18N = useCommonStore(state => state.I18N)
    const ls = useCommonStore(state => state.letterSpacing)
    const lang = useCommonStore(state => state.lang)
    const visible = useOrderDialogStore(state => state.visible)
    const setVisible = useOrderDialogStore(state => state.setVisible)
    const [entourageDpVisible, setEntourageDpVisible] = useState(false)
    
    const [success, setSuccess] = useState(false)
    const [calendarVisible, setCalendarVisible] = useState(false)
    const [adultsDpVisible, setAdultsDpVisible] = useState(false)
    const [childrenDpVisible, setChildrenDpVisible] = useState(false)
    
    const [reserveDate, setReserveDate] = useState<string>(formatCalendarDate(new Date()))
    const [reserveDays, setReserveDays] = useState(MINDAYS)
    const [reserveAdults, setReserveAdults] = useState(1)
    const [reserveChildren, setReserveChildren] = useState(0)
    const [entourages, setEntourages] = useState(0)
    const [reserveName, setReserveName] = useState('')
    const [reservePhone, setReservePhone] = useState('')
    const [reserveEmail, setReserveEmail] = useState('')
    const [reserveNotes, setReserveNotes] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    
    const onClose = () => {
        setVisible(false)
    }

    const handleSubmit = () => {
        if (!reserveName) {
            setErrorMsg(I18N['reserve.form.name.error'])
            return
        }
        if (!reservePhone) {
            setErrorMsg(I18N['reserve.form.phone.error'])
            return
        }
        if (!reserveEmail) {
            setErrorMsg(I18N['reserve.form.email.error'])
            return
        }

        fetch('/api/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                date: reserveDate,
                days: reserveDays,
                adults: reserveAdults,
                children: reserveChildren,
                entourages,
                name: reserveName,
                phone: reservePhone,
                email: reserveEmail,
                notes: reserveNotes
            })
        }).then(res => res.json()).then(res => {
            if (res.code === 0) {
                setSuccess(true)
            } else {
                alert(res.message)
            }
        }).catch(err => {
            alert(err)
        })
    }

    const handleHideAll = () => {
        setCalendarVisible(false)
        setAdultsDpVisible(false)
        setChildrenDpVisible(false)
        setEntourageDpVisible(false)
    }

    useEffect(() => {
        if (calendarVisible) {
            setAdultsDpVisible(false)
            setChildrenDpVisible(false)
            setEntourageDpVisible(false)
        }
        if (adultsDpVisible) {
            setCalendarVisible(false)
            setChildrenDpVisible(false)
            setEntourageDpVisible(false)
        }
        if (childrenDpVisible) {
            setCalendarVisible(false)
            setAdultsDpVisible(false)
            setEntourageDpVisible(false)
        }
        if (entourageDpVisible) {
            setCalendarVisible(false)
            setAdultsDpVisible(false)
            setChildrenDpVisible(false)
        }
    }, [calendarVisible, adultsDpVisible, childrenDpVisible, entourageDpVisible])

    useEffect(() => {
        setReserveChildren(0)
    }, [reserveAdults])

    return (
        <>
            <div className={`order-dialog ${visible ? 'show' : ''}`} onClick={handleHideAll}>
                <Link className='close' to={pathname}><Image src='/icons/close.svg' /></Link>
                <div className='order-form'>
                    <div className='form-header'>
                        <h2 style={{ letterSpacing: ls.H1, fontSize: getFontSize('title', lang) }}>{I18N['reserve']}</h2>
                        <div className='cpts' style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>
                            <div>{I18N['reserve.cpt1']}</div>
                            <div>{I18N['reserve.cpt2']}</div>
                            <div>{I18N['reserve.cpt3']}</div>
                        </div>
                    </div>

                    <div className='form-body' style={{ letterSpacing: ls.TXT }}>
                        <div className='form-items'>
                            <div className='form-item'>
                                <span>* {I18N['reserve.form.date']}</span>
                                <CalendarInput
                                    popVisible={calendarVisible}
                                    setPopVisible={setCalendarVisible}
                                    reserveDate={reserveDate}
                                    setReserveDate={setReserveDate}
                                />
                            </div>
                            <div className='form-item'>
                                <span>* {I18N['reserve.form.days']}</span>
                                <DaysInput
                                    days={reserveDays}
                                    setDays={setReserveDays}
                                />
                            </div>
                            <div className='form-item'>
                                <span>* {I18N['reserve.form.adults']}</span>
                                <Dropdown
                                    dpVisible={adultsDpVisible}
                                    setDpVisible={setAdultsDpVisible}
                                    setValue={setReserveAdults}
                                    displayValue={`${reserveAdults} ${I18N['adults']}`}
                                    numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                                />
                            </div>
                            <div className='form-item'>
                                <span>* {I18N['reserve.form.children']}</span>
                                <Dropdown
                                    dpVisible={childrenDpVisible}
                                    setDpVisible={setChildrenDpVisible}
                                    setValue={setReserveChildren}
                                    displayValue={`${reserveChildren} ${I18N['children']}`}
                                    numbers={getChildrenNums(reserveAdults)}
                                />
                            </div>
                            <div className='form-item'>
                                <span>* {I18N['reserve.form.entourage']}</span>
                                <Dropdown
                                    dpVisible={entourageDpVisible}
                                    setDpVisible={setEntourageDpVisible}
                                    setValue={setEntourages}
                                    displayValue={`${entourages} ${I18N['person']}`}
                                    numbers={[0,1,2]}
                                />
                            </div>
                            <div className='form-item'>
                                <span>* {I18N['reserve.form.name']}</span>
                                <Input
                                    value={reserveName}
                                    placeholder={I18N['reserve.form.name.placeholder']}
                                    onChange={e => setReserveName(e.target.value)}
                                    style={{ letterSpacing: ls.TXT }}
                                />
                            </div>
                            <div className='form-item'>
                                <span>* {I18N['reserve.form.phone']}</span>
                                <Input
                                    value={reservePhone}
                                    placeholder={I18N['reserve.form.phone.placeholder']}
                                    onChange={e => setReservePhone(e.target.value)}
                                    style={{ letterSpacing: ls.TXT }}
                                />
                            </div>
                            <div className='form-item'>
                                <span>* {I18N['reserve.form.email']}</span>
                                <Input
                                    value={reserveEmail}
                                    placeholder={I18N['reserve.form.email.placeholder']}
                                    onChange={e => setReserveEmail(e.target.value)}
                                    style={{ letterSpacing: ls.TXT }}
                                />
                            </div>
                            <div className='form-item full'>
                                <span>{I18N['reserve.form.notes']}</span>
                                <Input
                                    value={reserveNotes}
                                    placeholder={I18N['reserve.form.notes.placeholder']}
                                    onChange={e => setReserveNotes(e.target.value)}
                                    style={{ letterSpacing: ls.TXT }}
                                />
                            </div>
                        </div>

                        <div className='button' onClick={handleSubmit} style={{ letterSpacing: ls.H1 }}>{I18N['submit']}</div>
                        <div className={`error-msg ${errorMsg ? 'show' : ''}`}>{errorMsg}</div>
                    </div>

                    <div className='form-footer' style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>
                        <div className='policy-title'>{I18N['reserve.policy.title']}</div>
                        <ul>
                            <li>{I18N['reserve.policy.desc1']}</li>
                            <li>{I18N['reserve.policy.desc2']}</li>
                            {/* <li>{I18N['reserve.policy.desc3']}</li> */}
                            <li>{I18N['reserve.policy.desc4']}</li>
                            <li>{I18N['reserve.policy.desc5']}</li>
                            <li>{I18N['reserve.policy.desc6']}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`success-dialog ${success ? 'show' : ''}`}>
                <div className='cpt' style={{ letterSpacing: ls.H1, fontSize: getFontSize('title', lang) }}>
                    <Image src='/icons/success.svg' />
                    {I18N['reserve.form.success.cpt']}
                </div>
                <div className='desc'style={{ letterSpacing: ls.TXT, fontSize: getFontSize('desc', lang) }}>{I18N['reserve.form.success.desc']}</div>
                <Button onClick={() => {
                    setSuccess(false)
                    setVisible(false)
                    window.location.href = pathname
                }}>{I18N['reserve.form.ok']}</Button>
            </div>
        </>
    )
}
