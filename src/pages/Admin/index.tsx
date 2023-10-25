import { FormEvent, useEffect, useState } from 'react'
import cookie from 'react-cookies'
import Orders from './Orders'
import CalendarOperation from './OrderCalendar'

import './index.css'

enum Pages {
    OR = 'orders',
    CO = 'calendarOperation'
}

export default function Admin () {
    const [loged, setLoged] = useState(false)
    const [page, setPage] = useState(Pages.OR)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const auth = cookie.load('passauth')

    useEffect(() => {
        setLoged(auth)
    }, [auth])

    const handleLogin = (e: FormEvent) => {
        e.preventDefault()
        fetch('/api/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password
            })
        }).then(res => res.json()).then(res => {
            if (res.code === 0) {
                cookie.save('passauth', res.message, {
                    path: '/',
                    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
                })
                setLoged(true)
            } else {
                alert(res.message)
            }
        }).catch(err => {
            alert('登录失败')
        })
    }

    const handleLogout = () => {
        cookie.remove('passauth')
        setLoged(false)
    }

    return (loged ? 
        <div className="admin">
            <div className='left-nav'>
                <div className='caption'>菜单</div>
                <div style={{ flex: 1 }}>
                    <div className={`nav ${page === Pages.OR ? 'active' : ''}`} onClick={() => setPage(Pages.OR)}>订单列表</div>
                    <div className={`nav ${page === Pages.CO ? 'active' : ''}`} onClick={() => setPage(Pages.CO)}>日历管理</div>
                </div>
                <div className='logout' onClick={handleLogout}>注销</div>
            </div>
            <div className='right-cont'>
                { page === Pages.OR && <Orders />}
                { page === Pages.CO && <CalendarOperation /> }
            </div>
        </div> :
        <form className='admin-login' onSubmit={handleLogin}>
            <h2>后台登录</h2>
            <label className='form-line'>账号<input type='text' value={username} onChange={e => setUsername(e.target.value)} /></label>
            <label className='form-line'>密码<input type='password' value={password} onChange={e => setPassword(e.target.value)} /></label>
            
            <input type='submit' value='登录' />
        </form>
    )
}