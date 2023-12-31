import { useLocation } from 'react-router-dom'
import { useCommonStore } from '../../mobilestore'
import Button3 from '../Button3'
import Image from '../Image'

import './index.css'

export default function Footer() {
    const loc = useLocation()
    const I18N = useCommonStore(state => state.I18N)
    const setWeChatDialogVisible = useCommonStore(state => state.setWeChatDialogVisible)

    return (
        <>
            <div className='mobile-footer'>
                <div className='footer-basic'>
                    <Image className='comlogo' src="/logos/com.logo.svg" />
                    <div className='divider'></div>
                    <div className='otherlogos'>
                        <div>
                            <a rel="noreferrer" target="_blank" href="https://www.ishibekojimuan.com">
                                <Image src="/logos/mobile.foot.logo1.svg" />
                            </a>
                        </div>
                        <div><Image src="/logos/mobile.foot.logo2.svg" /></div>
                        <div><Image src="/logos/mobile.foot.logo3.svg" /></div>
                        <div><Image src="/logos/mobile.foot.logo4.svg" /></div>
                        <div><Image src="/logos/mobile.foot.logo5.svg" /></div>
                    </div>
                </div>
                <div className='footer-btm'>
                    <div className='quick-links'>
                        <Image src="/icons/m.wechat.svg" onClick={() => setWeChatDialogVisible(true)} />
                        <a rel="noreferrer" target="_blank" href="https://www.xiaohongshu.com/user/profile/63656b45000000001f01575f">
                            <Image src="/icons/m.redbook.svg" />
                        </a>
                        <a rel="noreferrer" target="_blank" href="https://instagram.com/arcadiaryowhajapan?igshid=NTc4MTIwNjQ2YQ==">
                            <Image src="/icons/m.ins.arcadia.svg" />
                        </a>
                    </div>
                    <div className='copyright'>
                        Copyright © 2023 Ryowha group
                    </div>
                </div>
                
            </div>
            <div className='footer-btn-group'>
                <Button3 to={loc.pathname + '?order=true'}>
                    {I18N['reservebtn']}
                    <Image src="/icons/right-arrow.svg" />
                </Button3>
            </div>
        </>
    )
}