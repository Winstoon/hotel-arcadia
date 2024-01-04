import { useEffect, useState } from "react"
import dayjs from "dayjs"
import OrderDialog from "./OrderDialog"

export type NewOrder = {
    date: number        // 预订日期
    days: number        // 预订天数
    adults: number      // 成人数
    children: number    // 儿童数
    entourages: number  // 随行人数
    name: string        // 姓名
    phone: string       // 电话
    email: string       // 邮箱
    notes: string       // 备注
    deleted?: boolean   // 已删除
}

export type Order = {
    id: number
    addDate: number
    processed: boolean  // 已处理
} & NewOrder

export function formatDate (date: string | number, format = 'YYYY/MM/DD') {
    return dayjs(date).format(format)
}

function OrderItem ({ data, refetch, onEdit }: { data: Order, refetch: () => void, onEdit: (o: Order) => void }) {
    const {
        id,
        date,
        days,
        adults,
        entourages,
        children,
        name,
        phone,
        email,
        notes,
        processed,
        addDate
    } = data

    const [iprocessed, setIProcessed] = useState<boolean>(processed)
    const handleChangeProcessed = () => {
        fetch('/api/updateOrder', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...data,
                processed: !iprocessed
            })
        }).then(res => res.json()).then(res => {
            if (res.code === 0) {
                setIProcessed(!iprocessed)
                refetch()
            } else {
                alert(res.message)
            }
        })
    }

    const deleteOrder = () => {
        if (window.confirm('确定删除该订单？')) {
            fetch('/api/deleteOrder', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    oid: id
                })
            }).then(res => res.json()).then(res => {
                if (res.code === 0) {
                    alert('删除成功')
                    refetch()
                } else {
                    alert(res.message)
                }
            })
        }
    }

    const editOrder = () => {
        onEdit(data)
    }

    useEffect(() => {
        setIProcessed(processed)
    }, [processed])

    return (
        <div className="order-item">
            <div className="order-caption">
                <label className="checkbox"><input type="checkbox" checked={iprocessed} onChange={handleChangeProcessed} /> 标为已处理</label>
                <div className="order-time">下单时间：{formatDate(addDate, 'YYYY-MM-DD HH:mm')}</div>
            </div>
            <div className="order-basic">
                <div className="order-operation">
                    <button className="btn" onClick={editOrder}>编辑</button>
                    <button className="btn" onClick={deleteOrder}>删除</button>
                </div>
                <div className="order-date">
                    <div className="order-attr">
                        <div className="os-cpt">预订日期：</div>
                        <div>{formatDate(date)} - {formatDate(dayjs(date).add(days, 'day').toString())}</div>
                    </div>
                </div>
                <div className="order-info">
                    <div className="order-attr">
                        <div className="os-cpt">预订天数：</div>
                        <div>{days+1}天 {days}晚</div>
                    </div>
                    <div className="order-attr">
                        <div className="os-cpt">成 人：</div>
                        <div>{adults} 人</div>
                    </div>
                    <div className="order-attr">
                        <div className="os-cpt">儿 童：</div>
                        <div>{children ? `${children} 人` : '无'}</div>
                    </div>
                    <div className="order-attr">
                        <div className="os-cpt">随行人数：</div>
                        <div>{entourages ? `${entourages} 人` : '无'}</div>
                    </div>
                </div>
                <div className="order-contact">
                    <div className="order-attr">
                        <div className="os-cpt">联系人：</div>
                        <div>{name}</div>
                    </div>
                    <div className="order-attr">
                        <div className="os-cpt">联系电话：</div>
                        <div>{phone}</div>
                    </div>
                    <div className="order-attr">
                        <div className="os-cpt">电子邮箱：</div>
                        <div>{email || '--'}</div>
                    </div>
                </div>
                <div className="order-notes">
                    <div className="os-cpt">备注：</div>
                    <div>{notes || '--'}</div>
                </div>
            </div>
        </div>
    )
}

export default function Orders () {
    const [orders, setOrders] = useState<Order[]>([])
    const [hide, setHide] = useState(false)
    const [editOrder, setEditOrder] = useState<Order | null>(null)

    const fetchOrders = () => {
        fetch('/api/getOrders').then(res => res.json()).then(res => {
            setOrders(res.data)
        }).catch(err => {
            alert('获取订单列表失败')
        })
    }

    const handleEdit = (o: Order) => {
        setEditOrder(o)
    }

    useEffect(() => {
        fetchOrders()
    }, [])

    return (
        <>
            <div className="orders">
                <label className="checkbox"><input type="checkbox" checked={hide} onChange={() => setHide(!hide)} /> 隐藏已处理订单</label>
                <div className="order-list">
                    { orders
                        .filter(o => hide ? !o.processed : true)
                        .sort((a, b) => dayjs(b.addDate).valueOf() - dayjs(a.addDate).valueOf())
                        .map((order: Order) => (
                            <OrderItem
                                data={order}
                                refetch={fetchOrders}
                                onEdit={handleEdit}
                            />
                        ))
                    }
                </div>

            </div>
            { editOrder ?
                <OrderDialog
                    data={editOrder}
                    onClose={() => setEditOrder(null)}
                    refetch={fetchOrders}
                />  : null
            }
        </>
    )
}
