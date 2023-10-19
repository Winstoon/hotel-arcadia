import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import './App.css';
import Header from './components/Header';
import Environment from './pages/Env';
import Residence from './pages/Residence';
import Delicious from './pages/Delicious';
import Pictures from './pages/Pics';

export const ROUTERS = [
    { label: '览', path: '/', element: <Home /> },
    { label: '境', path: '/env', element: <Environment /> },
    { label: '居', path: '/residence', element: <Residence /> },
    { label: '肴', path: '/delicious', element: <Delicious /> },
    { label: '映', path: '/pics', element: <Pictures /> }
]

function App() {
    return (
        // <div style={{ fontFamily: `EBGaramond, ${fontFamily}` }}>
        <div>
            <Header />
            <Routes>
                { ROUTERS.map(router =>
                    <Route path={router.path} element={router.element} />
                )}
            </Routes>
        </div>
    )
}

export default App;
