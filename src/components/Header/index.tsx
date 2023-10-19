import { Link, useLocation } from "react-router-dom"
import { ROUTERS } from "../../App"

import './index.css'

export default function Header () {
    // 获取当前路由
    const { pathname } = useLocation()

    return (
        <div className="header">
            { ROUTERS.map(router =>
                <Link to={router.path} style={{ color: 'white', opacity: router.path === pathname ? 1 : 0.2}}>{router.label}</Link>
            )}
        </div>
    )
}