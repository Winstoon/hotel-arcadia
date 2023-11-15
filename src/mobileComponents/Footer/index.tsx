import { useCommonStore, useOrderDialogStore } from '../../mobilestore'
import Button3 from '../Button3'
import Image from '../Image'

import './index.css'

export default function Footer() {
    const I18N = useCommonStore(state => state.I18N)
    const setOrderDialogVisible = useOrderDialogStore(state => state.setVisible)
    const setWeChatDialogVisible = useCommonStore(state => state.setWeChatDialogVisible)

    return (
        <>
            <div className='mobile-footer'>
                <div className='footer-basic'>
                    <Image className='comlogo' src="/logos/com.logo.svg" />
                    <div className='divider'></div>
                    <div className='otherlogos'>
                        <div><Image src="/logos/foot.logo1.svg" /></div>
                        <div><Image src="/logos/foot.logo2.svg" style={{ width: 170 }} /></div>
                        <div><Image src="/logos/foot.logo4.svg" /></div>
                        <div><Image src="/logos/foot.logo3.svg" /></div>
                        <div><Image src="/logos/foot.logo5.svg" /></div>
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
                <Button3 onClick={() => setOrderDialogVisible(true)}>
                    {I18N['reserve']}
                    <Image src="/icons/right-arrow.svg" />
                </Button3>
            </div>
        </>
    )
}