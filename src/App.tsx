import { Routes, Route } from 'react-router-dom'
import { useCommonStore, useOrderDialogStore } from './store';
import { I18N } from './i18n';
import Home from './pages/Home'
import Environment from './pages/Env';
import Residence from './pages/Residence';
import Delicious from './pages/Delicious';
import Pictures from './pages/Pics';
import Admin from './pages/Admin';
import OrderDialog from './components/OrderDialog';

import './App.css';
import 'react-calendar/dist/Calendar.css';
import WeChatDialog from './components/WeChatDialog/WeChatDialog';

export const ROUTERS = [
    {
        label: { [I18N.EN]: '览', [I18N.ZH]: '览', [I18N.JP]: '览' },
        path: '/', element: <Home />
    },
    {
        label: { [I18N.EN]: '境', [I18N.ZH]: '境', [I18N.JP]: '境' },
        path: '/env', element: <Environment />
    },
    {
        label: { [I18N.EN]: '居', [I18N.ZH]: '居', [I18N.JP]: '居' },
        path: '/residence', element: <Residence />
    },
    {
        label: { [I18N.EN]: '肴', [I18N.ZH]: '肴', [I18N.JP]: '肴' },
        path: '/delicious', element: <Delicious />
    },
    {
        label: { [I18N.EN]: '映', [I18N.ZH]: '映', [I18N.JP]: '映' },
        path: '/pics', element: <Pictures />
    }
]

const FontFamilies = {
    [I18N.EN]: 'EBGaramond',
    [I18N.ZH]: 'NotoSerifSC',
    [I18N.JP]: 'ShipporiMinchoB1'
}

function App() {
    const lang = useCommonStore(state => state.lang)
    const fontFamily = FontFamilies[lang]
    const orderDialogVisible = useOrderDialogStore(state => state.visible)

    return (
        <div style={{ fontFamily: `EBGaramond, ${fontFamily}` }}>
            <Routes>
                { ROUTERS.map(router =>
                    <Route key={router.path} path={router.path} element={router.element} />
                )}

                <Route path='/admin' element={<Admin />} />
            </Routes>
            <OrderDialog visible={orderDialogVisible} />
            <WeChatDialog />
        </div>
    )
}

export default App;
