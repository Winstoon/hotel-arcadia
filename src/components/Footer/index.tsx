import Image from '../Image'

import './index.css'

export default function Footer({ noborder }: {noborder?:boolean}) {
    return (
        <div className='footer' style={{ borderTop: noborder ? 'none' : '3px solid rgba(255, 255, 255, .3);'}}>
            <div className='footer-basic'>
                <Image className='comlogo' src="/logos/com.logo.svg" />
                <div className='divider'></div>
                <div className='otherlogos'>
                    <Image src="/logos/foot.logo1.svg" />
                    <Image src="/logos/foot.logo2.svg" />
                    <Image src="/logos/foot.logo3.svg" />
                    <Image src="/logos/foot.logo4.svg" />
                    <Image src="/logos/foot.logo5.svg" />
                </div>
            </div>
            <div className='footer-btm'>
                <div className='quick-links'>
                    <Image src="/icons/wechat.svg" />
                    <Image src="/icons/redbook.svg" />
                    <Image src="/icons/ins.arcadia.svg" />
                </div>
                <div className='copyright'>
                    Copyright © 2023 Ryowha group
                </div>
            </div>
        </div>
    )
}