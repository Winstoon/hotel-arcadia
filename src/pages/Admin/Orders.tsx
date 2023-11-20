import { useEffect, useState } from "react"
import dayjs from "dayjs"

export type NewOrder = {
    date: string        // 预订日期
    days: number        // 预订天数
    adults: number      // 成人数
    children: number    // 儿童数
    name: string        // 姓名
    phone: string       // 电话
    email: string       // 邮箱
    notes: string       // 备注
}

export type Order = {
    id: number
    addDate: string
    processed: boolean  // 已处理
} & NewOrder

function formatDate (date: string, format = 'YYYY/MM/DD') {
    return dayjs(date).format(format)
}

function OrderItem ({ data, refetch }: { data: Order, refetch: () => void }) {
    const {
        date,
        days,
        adults,
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

    useEffect(() => {
        setIProcessed(processed)
    }, [processed])

    return (
        <div className="order-item">
            <div className="order-caption">
                <label className="checkbox"><input type="checkbox" checked={iprocessed} onChange={handleChangeProcessed} /> 标为已处理</label>
                <div className="order-date">下单时间：{addDate}</div>
            </div>
            <div className="order-basic">
                <div className="order-info">
                    <div className="order-attr">
                        <div className="os-cpt">预订日期：</div>
                        <div>{formatDate(date)} - {formatDate(dayjs(date).add(days, 'day').toString())}</div>
                    </div>
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
                        <div>{children} 人</div>
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

    const fetchOrders = () => {
        fetch('/api/getOrders').then(res => res.json()).then(res => {
            setOrders(res.data)
        }).catch(err => {
            alert('获取订单列表失败')
        })
    }

    useEffect(() => {
        fetchOrders()
    }, [])

    return (
        <div className="orders">
            <label className="checkbox"><input type="checkbox" checked={hide} onChange={() => setHide(!hide)} /> 隐藏已处理订单</label>
            <div className="order-list">
                { orders
                    .filter(o => hide ? !o.processed : true)
                    .sort((a, b) => dayjs(b.addDate).valueOf() - dayjs(a.addDate).valueOf())
                    .map((order: Order) => (
                        <OrderItem data={order} refetch={fetchOrders} />
                    ))
                }
            </div>
        </div>
    )
}
