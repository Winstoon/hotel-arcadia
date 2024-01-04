import { useState } from "react"
import dayjs from "dayjs"
import { Order, formatDate } from "./Orders"

export default function OrderDialog ({ data, refetch, onClose }: { data: Order, refetch: () => void, onClose: () => void }) {
    const {
        date,
        days,
        adults,
        children,
        entourages,
        name,
        phone,
        email,
        notes
    } = data

    const [newDate, setNewDate] = useState(date)
    const [newDays, setNewDays] = useState(days)
    const [newAdults, setNewAdults] = useState(adults)
    const [newChildren, setNewChildren] = useState(children)
    const [newEntourages, setNewEntourages] = useState(entourages || 0)
    const [newName, setNewName] = useState(name)
    const [newPhone, setNewPhone] = useState(phone)
    const [newEmail, setNewEmail] = useState(email)
    const [newNotes, setNewNotes] = useState(notes)

    const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewDate(dayjs(e.target.value).valueOf())
    }

    const handleSave = () => {
        fetch('/api/updateOrder', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...data,
                date: newDate,
                days: newDays,
                adults: newAdults,
                children: newChildren,
                entourages: newEntourages,
                name: newName,
                phone: newPhone,
                email: newEmail,
                notes: newNotes
            })
        }).then(res => res.json()).then(res => {
            if (res.code === 0) {
                alert('保存成功')
                refetch()
                onClose()
            } else {
                alert(res.message)
            }
        })
    }

    return (
        <div className="admin-order-dialog">
            <div className="aod-content">
                <div className="aod-formline">
                    <div className="aodfl-cpt">预定日期</div>
                    <input type='date' value={formatDate(newDate, 'YYYY-MM-DD')} onChange={handleChangeDate} />
                </div>
                <div className="aod-formline">
                    <div className="aodfl-cpt">预定天数</div>
                    <input type='number' value={newDays} onChange={e => setNewDays(Number(e.target.value))} />
                </div>
                <div className="aod-formline">
                    <div className="aodfl-cpt">成人</div>
                    <input type='number' value={newAdults} onChange={e => setNewAdults(Number(e.target.value))} />
                </div>
                <div className="aod-formline">
                    <div className="aodfl-cpt">儿童</div>
                    <input type='number' value={newChildren} onChange={e => setNewChildren(Number(e.target.value))} />
                </div>
                <div className="aod-formline">
                    <div className="aodfl-cpt">随行人数</div>
                    <input type='number' value={newEntourages} onChange={e => setNewEntourages(Number(e.target.value))} />
                </div>
                <div className="aod-formline">
                    <div className="aodfl-cpt">联系人</div>
                    <input type='text' value={newName} onChange={e => setNewName(e.target.value)} />
                </div>
                <div className="aod-formline">
                    <div className="aodfl-cpt">联系电话</div>
                    <input type='text' value={newPhone} onChange={e => setNewPhone(e.target.value)} />
                </div>
                <div className="aod-formline">
                    <div className="aodfl-cpt">电子邮箱</div>
                    <input type='text' value={newEmail} onChange={e => setNewEmail(e.target.value)} />
                </div>
                <div className="aod-formline">
                    <div className="aodfl-cpt">备注</div>
                    <textarea value={newNotes} onChange={e => setNewNotes(e.target.value)} />
                </div>
                <div className="aod-formline">
                    <div className="aodfl-cpt">&nbsp;</div>
                    <button onClick={handleSave}>保存</button>
                </div>
            </div>
            <div className="close" onClick={onClose}>&times;</div>
        </div>
    )
}
