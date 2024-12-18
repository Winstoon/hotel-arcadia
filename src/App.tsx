import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import { useCommonStore, useOrderDialogStore } from './store';
import {
    useCommonStore as useMobileCommonStore,
    useOrderDialogStore as useMobileOrderDialogStore
} from './mobilestore'
import { I18N } from './i18n';

import Home from './pages/Home'
import Environment from './pages/Env';
import Residence from './pages/Residence';
import Delicious from './pages/Delicious';
import Pictures from './pages/Pics';
import Admin from './pages/Admin';

import MobileHome from './mobile/Home';
import MobileEnv from './mobile/Env';
import MobileResidence from './mobile/Residence';
import MobileDelicious from './mobile/Delicious';
import MobilePics from './mobile/Pics';

import OrderDialog from './components/OrderDialog';
import WeChatDialog from './components/WeChatDialog/WeChatDialog';

import MobileOrderDialog from './mobileComponents/OrderDialog';
import MobileWeChatDialog from './mobileComponents/WeChatDialog';

import 'react-calendar/dist/Calendar.css';
import './App.css';
import MenuDialog from './components/MenuDialog';
import PageNavgation from './components/PageNavgation';

export const VideoSrc = 'https://www.youtube.com/watch?v=CyFCuyXI7rE'

export const ROUTERS = [
    {
        label: { [I18N.EN]: 'View', [I18N.ZH]: '览', [I18N.JP]: '覧' },
        path: '/', element: <Home />, mobile: <MobileHome />
    },
    {
        label: { [I18N.EN]: 'Locale', [I18N.ZH]: '境', [I18N.JP]: '境' },
        path: '/env', element: <Environment />, mobile: <MobileEnv />
    },
    {
        label: { [I18N.EN]: 'Residence', [I18N.ZH]: '居', [I18N.JP]: '居' },
        path: '/residence', element: <Residence />, mobile: <MobileResidence />
    },
    {
        label: { [I18N.EN]: 'Dining', [I18N.ZH]: '肴', [I18N.JP]: '肴' },
        path: '/delicious', element: <Delicious />, mobile: <MobileDelicious />
    },
    {
        label: { [I18N.EN]: 'Gallery', [I18N.ZH]: '映', [I18N.JP]: '映' },
        path: '/pics', element: <Pictures />, mobile: <MobilePics />
    }
]

const FontFamilies = {
    [I18N.EN]: 'LeagueSpartan',
    [I18N.ZH]: 'SourceHanSansSC',
    [I18N.JP]: 'NotoSansJP'
}

export function mobileCheck () {
    // @ts-ignore
    const ua = navigator.userAgent||navigator.vendor||window.opera
    const regx1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
    const regx2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i
    
    return regx1.test(ua) || regx2.test(ua.substr(0,4))
}

export function getFontSize (type: 'title' | 'desc', lang: I18N) {
    if (lang !== I18N.EN) return ''

    const fontSize = {
        title: 24,
        desc: 17
    }

    return fontSize[type]
}

function App() {
    const lang = useCommonStore(state => state.lang)
    const setLang = useCommonStore(state => state.setLang)
    const pcPageOrder = useCommonStore(state => state.pageSectionOrder)
    const mobileLang = useMobileCommonStore(state => state.lang)

    const fontFamily = FontFamilies[lang]
    const mobileFontFamily = FontFamilies[mobileLang]
    
    const orderDialogVisible = useOrderDialogStore(state => state.visible)
    const setOrderDialogVisible = useOrderDialogStore(state => state.setVisible)
    const mobileOrderDialogVisible = useMobileOrderDialogStore(state => state.visible)
    const setMobileOrderDialogVisible = useMobileOrderDialogStore(state => state.setVisible)
    
    const isMobile = mobileCheck()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const isOrder = !!searchParams.get('order');
    const langFromParams = searchParams.get('lang') as I18N
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (isMobile && !location.pathname.startsWith('/mobile')) {
            window.location.href = `/mobile${location.pathname}` + location.search
        } else if (!isMobile && location.pathname.startsWith('/mobile')) {
            window.location.href = location.pathname.replace('/mobile', '') + location.search
        }
    }, [isMobile, location.pathname])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 0);
    }, [])

    useEffect(() => {
        const titles = {
            [I18N.ZH]: 'ARCADIA 二世谷 雪屋',
            [I18N.EN]: 'ARCADIA Chalet Niseko',
            [I18N.JP]: 'ARCADIA ニセコ雪屋',
        }
        document.title = isMobile ? titles[mobileLang] : titles[lang]
    }, [isMobile, lang, mobileLang])

    useEffect(() => {
        if (isMobile) {
            setMobileOrderDialogVisible(isOrder)
        } else {
            setOrderDialogVisible(isOrder)
        }
    }, [isOrder])

    useEffect(() => {
        if (langFromParams) {
            setLang(langFromParams)
        }
    }, [langFromParams])

    return (
        <div style={{ fontFamily: `EBGaramond, ${isMobile ? mobileFontFamily : fontFamily}` }}>
            { loading ? null :
                <Routes>
                    { ROUTERS.map(router =>
                        <Route key={`/mobile${router.path}`} path={`/mobile${router.path}`} element={router.mobile} />
                    )}

                    { ROUTERS.map(router =>
                        <Route key={router.path} path={router.path} element={router.element} />
                    )}

                    <Route path='/admin' element={<Admin />} />
                    <Route path='/mobile/admin' element={<Admin />} />
                </Routes>
            }
            <OrderDialog visible={orderDialogVisible} />
            <WeChatDialog />

            <MobileOrderDialog visible={mobileOrderDialogVisible} />
            <MobileWeChatDialog />

            <MenuDialog />

            { isMobile ? null : <PageNavgation lightmode={location.pathname.startsWith('/residence') && pcPageOrder === 1} /> }
        </div>
    )
}

export default App;
