export enum I18N {
    EN = 'EN',
    ZH = 'ZH',
    JP = 'JP'
}

export const I18N_LABELS = {
    [I18N.EN]: 'ENGLISH',
    [I18N.JP]: '日本語',
    [I18N.ZH]: '中文',
}

type I18NItem = {
    [I18N.EN]: string,
    [I18N.JP]: string,
    [I18N.ZH]: string,
}

type I18NFullData = {
    [key: string]: I18NItem
}

export const I18NS: I18NFullData = {
    'reserve': {
        [I18N.ZH]: '预订',
        [I18N.EN]: 'Reservation',
        [I18N.JP]: 'ご予約',
    },

    'reservebtn': {
        [I18N.ZH]: '预订',
        [I18N.EN]: 'Reserve',
        [I18N.JP]: '予約',
    },

    'reserve2': {
        [I18N.ZH]: '立即预订',
        [I18N.EN]: 'Reservation',
        [I18N.JP]: 'ご予約',
    },

    'explore': {
        [I18N.ZH]: '探索',
        [I18N.EN]: 'Explore',
        [I18N.JP]: '探索',
    },

    'environment': {
        [I18N.ZH]: '境',
        [I18N.EN]: 'Locale',
        [I18N.JP]: '境',
    },

    'residence': {
        [I18N.ZH]: '居',
        [I18N.EN]: 'Residence',
        [I18N.JP]: '居',
    },

    'delicious': {
        [I18N.ZH]: '肴',
        [I18N.EN]: 'Dining',
        [I18N.JP]: '肴',
    },

    'adults': {
        [I18N.ZH]: '成人',
        [I18N.EN]: 'Adults',
        [I18N.JP]: '大人',
    },

    'children': {
        [I18N.ZH]: '儿童',
        [I18N.EN]: 'Children',
        [I18N.JP]: '子供',
    },
    'person': {
        [I18N.ZH]: '人',
        [I18N.EN]: 'Person',
        [I18N.JP]: '人',
    },

    'night': {
        [I18N.ZH]: '晚',
        [I18N.EN]: 'Night',
        [I18N.JP]: '晩',
    },

    'days': {
        [I18N.ZH]: '天',
        [I18N.EN]: 'Days',
        [I18N.JP]: '天',
    },

    'submit': {
        [I18N.ZH]: '提交',
        [I18N.EN]: 'Submit',
        [I18N.JP]: '送信',
    },

    'wechat.desc': {
        [I18N.ZH]: '打开微信扫描二维码，关注我们',
        [I18N.EN]: 'Open WeChat to scan the QR code and follow us',
        [I18N.JP]: 'WeChatを開いてQRコードをスキャンしてフォローしてください',
    },

    'home.s2.title': {
        [I18N.ZH]: 'ARCADIA 二世谷 雪屋',
        [I18N.EN]: 'ARCADIA Chalet Niseko',
        [I18N.JP]: 'ARCADIA ニセコ 雪屋',
    },
    'home.s2.desc1': {
        [I18N.ZH]: '滑雪盛揽 银白之梦',
        [I18N.EN]: 'Skiing in a dreamy slivery white view.',
        [I18N.JP]: 'スキーを存分に楽しめる 白銀の中に身を委ねる',
    },
    'home.s2.desc2': {
        [I18N.ZH]: '绵延叠嶂中探寻羊蹄山麓',
        [I18N.EN]: 'Explore the Mount Yotei in the rolling mountains.',
        [I18N.JP]: '壮大な羊蹄山の山々を探検',
    },

    'home.s3.desc1': {
        [I18N.ZH]: '登临旷美雪岭 穿梭山林',
        [I18N.EN]: 'Up to the astounding snow hill.\nCross the mountain forest.',
        [I18N.JP]: '最高のパウダースノーの中で',
    },
    'home.s3.desc2': {
        [I18N.ZH]: '探秘晶莹皎洁的非凡之旅',
        [I18N.EN]: 'A sparkling and marvellous journey awaits you.',
        [I18N.JP]: '林の中を滑走する素敵な旅が広がります',
    },

    'home.s4.desc1': {
        [I18N.ZH]: '建筑与人文的灵动交融',
        [I18N.EN]: 'When architecture intertwines with humanity,',
        [I18N.JP]: '建築とアートのダイナミックな融合',
    },
    'home.s4.desc2': {
        [I18N.ZH]: '尽享超然物外的无尽惬意',
        [I18N.EN]: 'its cosiness transcends this world.',
        [I18N.JP]: 'ゆったりとした空間で特別な心地よさをお楽しみください',
    },

    'home.s5.desc1': {
        [I18N.ZH]: '私享主厨的雕琢呈献',
        [I18N.EN]: 'Private chef proudly presents',
        [I18N.JP]: '季節感と独創性にあふれた美味ぞろい',
    },
    'home.s5.desc2': {
        [I18N.ZH]: '回响技艺与珍馐的高定赏味',
        [I18N.EN]: 'the high-end gastronomy with top skills and delicacies.',
        [I18N.JP]: 'プライベートシェフの上質な技による創作料理をお楽しみください',
    },

    'home.s6.title': {
        [I18N.ZH]: 'ARCADIA 坐落于北海道二世谷地区最富盛名的比罗夫镇',
        [I18N.EN]: 'ARCADIA is located at the renowned Hirafu Town in Niseko, Hokkaido.',
        [I18N.JP]: 'ARCADIA は、北海道のニセコ地方で最も有名なエリアのひとつであるひらふ地区に位置しています',
    },
    'home.s6.cpt': {
        [I18N.ZH]: '联系我们',
        [I18N.EN]: 'Contact us',
        [I18N.JP]: 'お問い合わせ',
    },
    'home.s6.location': {
        [I18N.ZH]: 'ARCADIA 坐落于北海道二世谷地区最富盛名的比罗夫镇',
        [I18N.EN]: 'ARCADIA is located at the renowned Hirafu Town in Niseko, Hokkaido',
        [I18N.JP]: 'ARCADIA は、北海道のニセコ地方で最も有名なエリアのひとつであるひらふ地区に位置しています',
    },
    'home.s6.desc1': {
        [I18N.ZH]: '距离札幌新千岁机场约2小时车程',
        [I18N.EN]: '2-hour drive to New Chitose Airport',
        [I18N.JP]: '札幌·新千歳空港から車で約2時間',
    },
    'home.s6.desc2': {
        [I18N.ZH]: '距离北海道札幌市约2小时车程',
        [I18N.EN]: '2-hour drive to Sapporo, Hokkaido',
        [I18N.JP]: '北海道札幌市から車で約2時間',
    },
    'home.s6.desc3': {
        [I18N.ZH]: '距离比罗夫镇游客中心步行约5分钟',
        [I18N.EN]: '5-min walk to Central Hirafu Village',
        [I18N.JP]: 'ひらふ村ビジターセンターから徒歩約5分',
    },
    'home.s6.desc4': {
        [I18N.ZH]: '距离比罗夫镇缆车中心车程约5分钟',
        [I18N.EN]: '5-min drive to Ace Family Chair Lift',
        [I18N.JP]: 'ひらふエースファミリーチェアリフトより車で約5分',
    },
    'home.s6.desc5': {
        [I18N.ZH]: '距离 YUKORO 温泉 (预计2025年开业) 步行约1分钟',
        [I18N.EN]: '1-min walk to YUKORO Spring (est. to open in 2025)',
        [I18N.JP]: 'ゆころ温泉 (2025年オープン予定) より徒歩約1分',
    },
    
    'home.s6.desc6': {
        [I18N.ZH]: '地址：〒044-0089 日本国北海道虻田郡俱知安町二世谷比罗夫镇2条2丁目7番地18号',
        [I18N.EN]: 'Add: 7-18, 2-chome, 2-jo, Nisekohirafu, Kutchan-cho, Abuta-gun, Hokkaido 044-0089 Japan',
        [I18N.JP]: '住所: 〒044-0089 北海道虻田郡倶知安町ニセコひらふ2条2丁目7番地18号',
    },
    'home.s6.desc7': {
        [I18N.ZH]: '查看地图>',
        [I18N.EN]: 'Map>',
        [I18N.JP]: '地図を見る>',
    },
    
    'home.s6.desc8': {
        [I18N.ZH]: '电话: +81 136 55 8917',
        [I18N.EN]: 'Tel: +81 136 55 8917',
        [I18N.JP]: '電話: 0136-55-7559',
    },
    // 不展示
    'home.s6.desc9': {
        [I18N.ZH]: '传真：+81 136 55 8927',
        [I18N.EN]: 'Fax: +81 136 55 8927',
        [I18N.JP]: 'FAX：+81 136 55 8927',
    },

    'home.s6.desc10': {
        [I18N.ZH]: '邮箱: info@ryowhagroup.com',
        [I18N.EN]: 'E-mail: info@ryowhagroup.com',
        [I18N.JP]: '電子メール: info@ryowhagroup.com'
    },

    'home.pics.title': {
        [I18N.ZH]: '映',
        [I18N.EN]: 'Gallery',
        [I18N.JP]: '映',
    },
    'home.pics.btntxt': {
        [I18N.ZH]: '更多',
        [I18N.EN]: 'MORE',
        [I18N.JP]: '詳細',
    },

    // 环境

    'env.s1.desc1': {
        [I18N.ZH]: '登临旷美雪岭 穿梭山林',
        [I18N.EN]: 'Up to the astounding snow hill.\nCross the mountain forest.',
        [I18N.JP]: '最高のパウダースノーの中で',
    },
    'env.s1.desc2': {
        [I18N.ZH]: '探秘晶莹皎洁的非凡之旅',
        [I18N.EN]: 'A sparkling and marvellous journey awaits you.',
        [I18N.JP]: '林の中を滑走する素敵な旅が広がります',
    },

    'env.s2.title': {
        [I18N.ZH]: '追逐',
        [I18N.EN]: 'Rush',
        [I18N.JP]: '追跡',
    },
    'env.s2.desc1': {
        [I18N.ZH]: '霜风骤起 正当雪时',
        [I18N.EN]: 'Frosty wind gushes up the snow.',
        [I18N.JP]: '吹けば飛んで行ってしまう程に軽い雪が',
    },
    'env.s2.desc2': {
        [I18N.ZH]: '身随滑雪的激情与灵动',
        [I18N.EN]: 'Your body rocks passionately in skiing.',
        [I18N.JP]: '毎日のように天から地へと降り注ぐ',
    },
    'env.s2.desc3': {
        [I18N.ZH]: '体味内心的怦然与明朗',
        [I18N.EN]: 'Your heart is pumping and soaring,',
        [I18N.JP]: '情熱なスキーヤーだちの\n心の鼓動と喜びを味わおう',
    },
    'env.s2.desc4': {
        [I18N.ZH]: '驰骋于冬日的主场',
        [I18N.EN]: 'as you gallop down the slope.',
        [I18N.JP]: '冬のメインフィールドを滑走する',
    },
    'env.s2.desc5': {
        [I18N.ZH]: '闻道有风 遁入皑皑',
        [I18N.EN]: 'So, go with the wind, into the pure whiteness.',
        [I18N.JP]: 'パウダースノーを味わいながら',
    },
    'env.s2.desc6': {
        [I18N.ZH]: '随心而去 乘雪飞扬',
        [I18N.EN]: 'To follow your heart, and ride the snow.',
        [I18N.JP]: '心のゆくまでに、林の中を滑っていく',
    },

    'env.s3.title': {
        [I18N.ZH]: '沉浸',
        [I18N.EN]: 'Immersion',
        [I18N.JP]: '没入',
    },
    'env.s3.desc1': {
        [I18N.ZH]: '佇立于羊蹄山麓的宅邸',
        [I18N.EN]: 'The villa is standing at the foot of Mount Yotei,',
        [I18N.JP]: '羊蹄山の麓に佇むリゾートハウス',
    },
    'env.s3.desc2': {
        [I18N.ZH]: '勾勒一段雪的追风逐日',
        [I18N.EN]: 'Beholding the rushing down the snow.',
        [I18N.JP]: '冬は上質なパウダースノーを求めてここへ',
    },
    'env.s3.desc3': {
        [I18N.ZH]: '目之所及',
        [I18N.EN]: 'Within the reach of your sight,',
        [I18N.JP]: '見渡す限り',
    },
    'env.s3.desc4': {
        [I18N.ZH]: '银装素裹 比比皆是',
        [I18N.EN]: 'Everything glitters in silvery white,',
        [I18N.JP]: 'あたり一面を白く覆い隠す銀世界',
    },
    'env.s3.desc5': {
        [I18N.ZH]: '穿透无边窗景的光耀',
        [I18N.EN]: 'sparkling through the frameless windows.',
        [I18N.JP]: '床から天井まで広がる窓から差し込む光で',
    },
    'env.s3.desc6': {
        [I18N.ZH]: '在自然景致的簇拥下',
        [I18N.EN]: 'Immersed in the natural scenery,',
        [I18N.JP]: '壮大な自然に囲まれて',
    },
    'env.s3.desc7': {
        [I18N.ZH]: '探秘晶莹皎洁的非凡之旅',
        [I18N.EN]: 'a sparkling and marvellous journey awaits you.',
        [I18N.JP]: '大地を白く染める雪のなかで旅が広がります',
    },

    'env.s4.title': {
        [I18N.ZH]: '四季',
        [I18N.EN]: 'Four Seasons',
        [I18N.JP]: '四季',
    },
    'env.s4.desc1': {
        [I18N.ZH]: '四季皆宜的度假胜地',
        [I18N.EN]: 'A holiday utopia for all seasons.',
        [I18N.JP]: '四季折々のニセコの自然が楽しめるリゾートにて',
    },
    'env.s4.desc2': {
        [I18N.ZH]: '毗邻羊蹄山无限风光',
        [I18N.EN]: 'Mount Yotei is at your doorstep.',
        [I18N.JP]: '羊蹄山の壮大な絶景に抱かれて',
    },
    'env.s4.desc3': {
        [I18N.ZH]: '大地复苏的时节',
        [I18N.EN]: 'In the season when the earth awakens,',
        [I18N.JP]: '大地や生き物が蘇る季節に',
    },
    'env.s4.desc4': {
        [I18N.ZH]: '一探茂盛幽深的森林',
        [I18N.EN]: 'Explore the flourishing and deep forest,',
        [I18N.JP]: '思う存分緑あふれる森への探検',
    },
    'env.s4.desc5': {
        [I18N.ZH]: '踏车纵览山顶花田',
        [I18N.EN]: 'Ride to the flower field on the mountain top,',
        [I18N.JP]: 'のんびり丘の上の花畑にて爽快なサイクリング',
    },
    'env.s4.desc6': {
        [I18N.ZH]: '挥杆畅享高尔夫乐趣',
        [I18N.EN]: 'Or have fun in golfing.',
        [I18N.JP]: '至福のリゾートゴルフなどのアクティビティを満喫できます',
    },

    'env.s5.title': {
        [I18N.ZH]: "知·行",
        [I18N.EN]: 'Itinerary',
        [I18N.JP]: '知·行',
    },

    'env.s5.image1.cpt': {
        [I18N.ZH]: '私享专车',
        [I18N.EN]: 'Private Chauffeur',
        [I18N.JP]: '専用車',
    },
    'env.s5.image1.desc1': {
        [I18N.ZH]: '专属商务车及司机',
        [I18N.EN]: 'Private MPV and chauffeur',
        [I18N.JP]: 'ドライバー付きの貸切の専用車',
    },
    'env.s5.image1.desc2': {
        [I18N.ZH]: '往返机场 五大雪场专车 探索周边',
        [I18N.EN]: 'Between airport and five ski resorts.',
        [I18N.JP]: '空港と 5つのスキーリゾートの間の送迎もございます',
    },
    'env.s5.image1.desc3': {
        [I18N.ZH]: '行程无忧 出行尽在掌握',
        [I18N.EN]: 'Enjoy your travel worry-free.',
        [I18N.JP]: '専用車で自由にエリアを探索できる旅をお任せください',
    },

    'env.s5.image2.cpt': {
        [I18N.ZH]: '一站预约',
        [I18N.EN]: 'One-stop reservation',
        [I18N.JP]: 'ワンストップ予約',
    },
    'env.s5.image2.desc1': {
        [I18N.ZH]: '滑雪私教 雪票 缆车 餐厅',
        [I18N.EN]: 'Ski private coach, snow ticket, cable car and restaurant.',
        [I18N.JP]: 'スキーレッスン、スキーチケット、リフト、 レストランなどの手配',
    },
    'env.s5.image2.desc2': {
        [I18N.ZH]: '一站式预约服务',
        [I18N.EN]: 'One-stop reservation,',
        [I18N.JP]: 'ワンストップの予約サービスをご提供',
    },
    'env.s5.image2.desc3': {
        [I18N.ZH]: '个性定制 尽享怡然舒心',
        [I18N.EN]: 'Personalized service, so you can relax and enjoy.',
        [I18N.JP]: 'お客様に合わせたカスタマイズされた旅をお約束いたします',
    },

    'env.s5.image3.cpt': {
        [I18N.ZH]: '专人陪同',
        [I18N.EN]: 'Personal assistance',
        [I18N.JP]: '専門コンシェルジェチーム',
    },
    'env.s5.image3.desc1': {
        [I18N.ZH]: '专人陪同租购雪具',
        [I18N.EN]: 'Ski equipment rental or purchase\nwith personal assistance.',
        [I18N.JP]: '専門コンシェルジェによるスキーレンタルとご購入',
    },
    'env.s5.image3.desc2': {
        [I18N.ZH]: '当地出行的顾问或陪同',
        [I18N.EN]: 'Local travel advisor or companion.',
        [I18N.JP]: '現地旅行ガイドやエスコートも対応し',
    },
    'env.s5.image3.desc3': {
        [I18N.ZH]: '至臻体慰 佐候不时之需',
        [I18N.EN]: 'Ready to serve you whenever you need.',
        [I18N.JP]: 'いつでも安心できるサポートをお届けします',
    },

    // 居所

    'res.s1.desc1': {
        [I18N.ZH]: '建筑与人文的灵动交融',
        [I18N.EN]: 'When architecture intertwines with humanity,',
        [I18N.JP]: '建築とアートのダイナミックな融合',
    },
    'res.s1.desc2': {
        [I18N.ZH]: '尽享超然物外的无尽惬意',
        [I18N.EN]: 'its cosiness transcends this world.',
        [I18N.JP]: 'ゆったりとした空間で特別な心地よさをお楽しみください',
    },

    'res.s2.desc1': {
        [I18N.ZH]: '意大利建筑巨匠',
        [I18N.EN]: 'Designed by the Italian master architect,',
        [I18N.JP]: 'イタリア人の建築巨匠',
    },
    'res.s2.desc2': {
        [I18N.ZH]: 'RICCARDO RUBELLIA 倾心之作',
        [I18N.EN]: 'Riccardo Rubellia,',
        [I18N.JP]: 'RICCARDO RUBELLIA が手掛けた傑作',
    },
    'res.s2.desc3': {
        [I18N.ZH]: '极简外廓与内里木石灵动交融',
        [I18N.EN]: 'Minimalist façade and karesansui inside.',
        [I18N.JP]: 'ミニマルなデザインと木と石の素材のインテリアを上手く調和された',
    },
    'res.s2.desc4': {
        [I18N.ZH]: '如临世外之境',
        [I18N.EN]: 'A utopia beyond this world.',
        [I18N.JP]: '落ち着きのある洗練された空間をお楽しみください',
    },
    'res.s2.desc5': {
        [I18N.ZH]: '独立三层宅邸',
        [I18N.EN]: 'Detached three-floor villa.',
        [I18N.JP]: '3階建ての独立リゾートハウス',
    },
    'res.s2.desc6': {
        [I18N.ZH]: '全屋6间全套房卧室',
        [I18N.EN]: 'Six en-suite bedrooms.',
        [I18N.JP]: '全館6室のスイートベッドルーム',
    },
    'res.s2.desc7': {
        [I18N.ZH]: '双层挑高客厅',
        [I18N.EN]: 'Double height living room.',
        [I18N.JP]: 'ダブルハイトのリビングスペース',
    },
    'res.s2.desc8': {
        [I18N.ZH]: '双通道壁炉与专属酒窖',
        [I18N.EN]: 'Double-sided fireplace and private cellar.',
        [I18N.JP]: '二重通路の暖炉と専属ワインセラー',
    },
    'res.s2.desc9': {
        [I18N.ZH]: '独享整栋家外之家',
        [I18N.EN]: 'This is your home away from home.',
        [I18N.JP]: '非日常の極上の寛ぎがここにあります',
    },

    'res.s3.title': {
        [I18N.ZH]: '会客起居',
        [I18N.EN]: 'Living Space',
        [I18N.JP]: 'リビング ',
    },
    'res.s3.desc1': {
        [I18N.ZH]: '独立的三层宅邸',
        [I18N.EN]: 'A detached three-floor villa',
        [I18N.JP]: '3階建ての独立なリゾートハウス',
    },
    'res.s3.desc2': {
        [I18N.ZH]: '生活区与休憩区和恰相融',
        [I18N.EN]: 'integrates living and relaxing space,',
        [I18N.JP]: '生活エリアとリラクセーションエリアが調和される空間',
    },
    'res.s3.desc3': {
        [I18N.ZH]: '诠释线性美学之韵',
        [I18N.EN]: 'the charm of linear aesthetics.',
        [I18N.JP]: 'デザイン性に優れた建築美学が特徴的。',
    },
    'res.s3.desc4': {
        [I18N.ZH]: '开阔尺度 无边窗景',
        [I18N.EN]: 'Wide open vista in frameless windows.',
        [I18N.JP]: '開放感のある空間を堪能できる、',
    },
    'res.s3.desc5': {
        [I18N.ZH]: '壁炉渐燃 远眺羊蹄',
        [I18N.EN]: 'Dancing flames in the fireplace,\noverlooking the Mount Yotei.',
        [I18N.JP]: '広がる窓からは羊蹄山を望むことができる眺め',
    },
    'res.s3.desc6': {
        [I18N.ZH]: '心随飞雪舞动远去',
        [I18N.EN]: 'Let your mind flow with the snow.',
        [I18N.JP]: '心は雪とともに踊り出す',
    },
    'res.s3.tip': {
        [I18N.ZH]: '· 智能 APPLE TV 和 DEVIALET 音响 尽享无限娱乐',
        [I18N.EN]: '· Apple TV & DEVIALET Speaker, Unlimited entertainment in your palm',
        [I18N.JP]: '· APPLE TV と DEVIALET スピーカーによる ワンランク上のエンターテインメント体験を',
    },
    'res.s3.tip1': {
        [I18N.ZH]: '· 智能 APPLE TV 和 DEVIALET 音响',
        [I18N.EN]: '· Apple TV & DEVIALET Speaker',
        [I18N.JP]: '· APPLE TV と DEVIALET スピーカーによる',
    },
    'res.s3.tip2': {
        [I18N.ZH]: '尽享无限娱乐',
        [I18N.EN]: 'Unlimited entertainment in your palm',
        [I18N.JP]: 'ワンランク上のエンターテインメント体験を',
    },

    'res.s4.title': {
        [I18N.ZH]: '主人房',
        [I18N.EN]: 'Master Room',
        [I18N.JP]: 'マスタールーム',
    },
    'res.s4.desc1': {
        [I18N.ZH]: 'MASTER ROOM I',
        [I18N.EN]: 'Master Room I',
        [I18N.JP]: 'マスタールーム I',
    },
    'res.s4.desc2': {
        [I18N.ZH]: '私享65平方米开阔空间',
        [I18N.EN]: '65 sqm wide space.',
        [I18N.JP]: '65平方メートルの広々としたプライベート空間',
    },
    'res.s4.desc3': {
        [I18N.ZH]: '独立阳台直面羊蹄山麓',
        [I18N.EN]: 'Balcony facing Mount Yotei.',
        [I18N.JP]: '羊蹄山の麓に面した個室のバルコニーにて',
    },
    'res.s4.desc4': {
        [I18N.ZH]: '举目皆为恢弘至美',
        [I18N.EN]: 'Magnificence all in your eyes.',
        [I18N.JP]: '雄大な絶景をお楽しみください',
    },
    'res.s4.desc5': {
        [I18N.ZH]: 'MASTER ROOM II',
        [I18N.EN]: 'Master Room II',
        [I18N.JP]: 'マスタールームII',
    },
    'res.s4.desc6': {
        [I18N.ZH]: '独享55平方米静谧空间',
        [I18N.EN]: '55 sqm private space.',
        [I18N.JP]: '55平方メートルの落ち着きのある空間',
    },
    'res.s4.desc7': {
        [I18N.ZH]: '雅致格局',
        [I18N.EN]: 'Elegance in layout.',
        [I18N.JP]: 'エレガントなインテリアで',
    },
    'res.s4.desc8': {
        [I18N.ZH]: '尽享怡然私密',
        [I18N.EN]: 'Perfect for your me-time.',
        [I18N.JP]: '穏やかな時間を過ごしたい方に最適',
    },
    'res.s4.tip1': {
        [I18N.ZH]: '· 智能温控全屋地暖',
        [I18N.EN]: '· Smart underfloor heating with temperature control',
        [I18N.JP]: '· 全室温度調節可能な床暖房',
    },
    'res.s4.tip2': {
        [I18N.ZH]: '· 步入式衣帽间',
        [I18N.EN]: '· Walk-in closet',
        [I18N.JP]: '· ウォークインクロゼット',
    },
    'res.s4.tip3': {
        [I18N.ZH]: '· 意大利进口家居',
        [I18N.EN]: '· Italian made furniture',
        [I18N.JP]: '· イタリア製輸入家具',
    },
    'res.s4.tip4': {
        [I18N.ZH]: '· 意大利顶奢品牌 AGAPE 浴缸',
        [I18N.EN]: '· Italian Agape bathtub',
        [I18N.JP]: '· イタリアメーカー AGAPE バスタブ',
    },

    
    'res.s5.title': {
        [I18N.ZH]: '客房',
        [I18N.EN]: 'Guest Room',
        [I18N.JP]: 'ゲストルーム',
    },

    'res.s5.image1.cpt': {
        [I18N.ZH]: 'ROOM A',
        [I18N.EN]: 'ROOM A',
        [I18N.JP]: 'ルームA',
    },
    'res.s5.image1.desc1': {
        [I18N.ZH]: '25平方米空间，榻榻米房',
        [I18N.EN]: '25 sqm. Tatami Bed Room.',
        [I18N.JP]: '25平方メートル、和室',
    },

    'res.s5.image1.desc2': {
        [I18N.ZH]: '全屋地暖',
        [I18N.EN]: 'Full underfloor heating.',
        [I18N.JP]: '全室床暖房',
    },
    'res.s5.image1.desc3': {
        [I18N.ZH]: 'VOLA 丹麦顶奢卫浴设施',
        [I18N.EN]: 'VOLA bathroom facilities from Denmark.',
        [I18N.JP]: 'デンマーク VOLA 高級バスルーム',
    },
    'res.s5.image1.desc4': {
        [I18N.ZH]: '配有步入式更衣室',
        [I18N.EN]: 'Walk-in closet.',
        [I18N.JP]: 'ウォークイン・ドレッシングルーム',
    },
    'res.s5.image1.desc5': {
        [I18N.ZH]: '意大利进口家具',
        [I18N.EN]: 'Italian made furniture',
        [I18N.JP]: 'イタリア製家具',
    },

    'res.s5.image2.cpt': {
        [I18N.ZH]: 'ROOM B',
        [I18N.EN]: 'ROOM B',
        [I18N.JP]: 'ルームB',
    },
    'res.s5.image2.desc1': {
        [I18N.ZH]: '36平方米空间，KING SIZE 双人床房',
        [I18N.EN]: '36 sqm. King-size Room.',
        [I18N.JP]: '36平方メートル、キングサイズダブルルーム',
    },

    'res.s5.image2.desc2': {
        [I18N.ZH]: '全屋地暖',
        [I18N.EN]: 'Full underfloor heating.',
        [I18N.JP]: '全室床暖房',
    },
    'res.s5.image2.desc3': {
        [I18N.ZH]: 'VOLA 丹麦顶奢卫浴设施',
        [I18N.EN]: 'VOLA bathroom facilities from Denmark.',
        [I18N.JP]: 'デンマーク VOLA 高級バスルーム',
    },
    'res.s5.image2.desc4': {
        [I18N.ZH]: '双台盆洗手台',
        [I18N.EN]: 'Double basin unit.',
        [I18N.JP]: 'デュアル洗面台',
    },
    'res.s5.image2.desc5': {
        [I18N.ZH]: '配有步入式更衣室',
        [I18N.EN]: 'Walk-in closet.',
        [I18N.JP]: 'ウォークイン・ドレッシングルーム',
    },
    'res.s5.image2.desc6': {
        [I18N.ZH]: '意大利进口家具',
        [I18N.EN]: 'Italian made furniture.',
        [I18N.JP]: 'イタリア製家具',
    },
    
    'res.s5.image3.cpt': {
        [I18N.ZH]: 'ROOM C',
        [I18N.EN]: 'ROOM C',
        [I18N.JP]: 'ルームC',
    },
    'res.s5.image3.desc1': {
        [I18N.ZH]: '36平方米空间，双拼床房',
        [I18N.EN]: '36 sqm. Twin Bed Room.',
        [I18N.JP]: '36平方メートル、ダブルルーム'
    },

    'res.s5.image3.desc2': {
        [I18N.ZH]: '全屋地暖',
        [I18N.EN]: 'Full underfloor heating.',
        [I18N.JP]: '全室床暖房',
    },
    'res.s5.image3.desc3': {
        [I18N.ZH]: 'VOLA 丹麦顶奢卫浴设施',
        [I18N.EN]: 'VOLA bathroom facilities from Denmark.',
        [I18N.JP]: 'デンマーク VOLA 高級バスルーム',
    },
    'res.s5.image3.desc4': {
        [I18N.ZH]: '双台盆洗手台',
        [I18N.EN]: 'Double basin unit.',
        [I18N.JP]: 'デュアル洗面台',
    },
    'res.s5.image3.desc5': {
        [I18N.ZH]: '配有步入式更衣室',
        [I18N.EN]: 'Walk-in closet.',
        [I18N.JP]: 'ウォークインドレスルーム',
    },
    'res.s5.image3.desc6': {
        [I18N.ZH]: '意大利进口家具',
        [I18N.EN]: 'Italian made furniture.',
        [I18N.JP]: 'イタリア製家具',
    },

    'res.s5.image4.cpt': {
        [I18N.ZH]: 'ROOM D',
        [I18N.EN]: 'ROOM D',
        [I18N.JP]: 'ルームD',
    },
    'res.s5.image4.desc1': {
        [I18N.ZH]: '28平方米空间，KING SIZE 双人房',
        [I18N.EN]: '28 sqm. King-size Room.',
        [I18N.JP]: '28平方メートル、キングサイズダブルルーム',
    },

    'res.s5.image4.desc2': {
        [I18N.ZH]: '全屋地暖',
        [I18N.EN]: 'Full underfloor heating.',
        [I18N.JP]: '全室床暖房',
    },
    'res.s5.image4.desc3': {
        [I18N.ZH]: 'VOLA 丹麦顶奢卫浴设施',
        [I18N.EN]: 'VOLA bathroom facilities from Denmark.',
        [I18N.JP]: 'デンマーク VOLA 高級バスルーム',
    },
    'res.s5.image4.desc4': {
        [I18N.ZH]: '配有步入式更衣室',
        [I18N.EN]: 'Walk-in closet.',
        [I18N.JP]: 'ウォークインドレスルーム',
    },
    'res.s5.image4.desc5': {
        [I18N.ZH]: '意大利进口家具',
        [I18N.EN]: 'Italian made furniture.',
        [I18N.JP]: 'イタリア製家具',
    },

    'res.s5.image5.cpt': {
        [I18N.ZH]: '随行人员房',
        [I18N.EN]: 'Entourage Room',
        [I18N.JP]: 'ゲストルーム'
    },
    'res.s5.image5.desc1': {
        [I18N.ZH]: '位于地下一层，高低床房',
        [I18N.EN]: 'Lower ground floor. Bunk bed.',
        [I18N.JP]: '地下1階に位置する、2段ベッドのお部屋です',
    },

    'res.s5.image5.desc2': {
        [I18N.ZH]: '整洁有序的空间',
        [I18N.EN]: 'Organized space.',
        [I18N.JP]: 'きれいで整頓されたスペース',
    },
    'res.s5.image5.desc3': {
        [I18N.ZH]: '既能有效与主人区分隔',
        [I18N.EN]: 'Isolated from master bedrooms.',
        [I18N.JP]: 'マスターエリアと効果的に分離可能',
    },
    'res.s5.image5.desc4': {
        [I18N.ZH]: '又随时满足所需',
        [I18N.EN]: 'Ready to provide full service',
        [I18N.JP]: 'いつでもお客様のニーズに応える',
    },
    'res.s5.image5.desc5': {
        [I18N.ZH]: '提供全方位服务',
        [I18N.EN]: 'To meet your needs.',
        [I18N.JP]: '充実したサービスを提供する',
    },

    'res.s6.title': {
        [I18N.ZH]: '私享设施',
        [I18N.EN]: 'Private Facilities',
        [I18N.JP]: 'プライベート施設',
    },
    'res.s6.desc1': {
        [I18N.ZH]: '酒窖',
        [I18N.EN]: 'Cellar',
        [I18N.JP]: 'ワインセラー',
    },
    'res.s6.desc2': {
        [I18N.ZH]: '专业级酒窖空间',
        [I18N.EN]: 'Pro cellar space, Ideal location for your wine collection.',
        [I18N.JP]: 'プロ仕様のワインセラー',
    },
    'res.s6.desc3': {
        [I18N.ZH]: '为名酒佳酿提供卓越窖藏',
        [I18N.EN]: '',
        [I18N.JP]: '高級ワイン用のワインセラー・スペースをご用意しています',
    },
    'res.s6.desc4': {
        [I18N.ZH]: '温泉 SPA 房',
        [I18N.EN]: 'Hot Spring SPA',
        [I18N.JP]: '温泉・スパルーム',
    },
    'res.s6.desc5': {
        [I18N.ZH]: '康体养生 平心疗愈',
        [I18N.EN]: 'Heal your body and recover your wellness. Soothe your physical and spiritual state.',
        [I18N.JP]: '体の疲れを癒すために、',
    },
    'res.s6.desc6': {
        [I18N.ZH]: '由身至心 开启舒缓之境',
        [I18N.EN]: '',
        [I18N.JP]: '心身を解きほぐす心地よいやすらぎを存分にお楽しみいただけます',
    },
    'res.s6.desc7': {
        [I18N.ZH]: '滑雪用具干燥室',
        [I18N.EN]: 'Ski Drying Room',
        [I18N.JP]: 'スキー乾燥室',
    },
    'res.s6.desc8': {
        [I18N.ZH]: '全套法国自动加热烘干设备',
        [I18N.EN]: 'Auto-heating and drying equipment from France. For your ultimate skiing experience.',
        [I18N.JP]: 'フランス製の自動加熱乾燥機で',
    },
    'res.s6.desc9': {
        [I18N.ZH]: '纵享至臻滑雪之旅',
        [I18N.EN]: '',
        [I18N.JP]: '最高のスキー旅をお手伝いします',
    },
    'res.s6.desc10': {
        [I18N.ZH]: '健身房',
        [I18N.EN]: 'Fitness Room',
        [I18N.JP]: 'ジム',
    },
    'res.s6.desc11': {
        [I18N.ZH]: '全套 TECHNOGYM 设备',
        [I18N.EN]: 'Full TECHNOGYM equipment, For diversified physique needs.',
        [I18N.JP]: 'TECHNOGYM 設備が完備され',
    },
    'res.s6.desc12': {
        [I18N.ZH]: '满足多样体调需求',
        [I18N.EN]: '',
        [I18N.JP]: '幅広いフィットネス・ニーズに対応',
    },

    'res.s6.tip': {
        [I18N.ZH]: '· 功能设施亦包含中西厨房、洗衣房，\n尽享便捷无缝的居住体验',
        [I18N.EN]: '· Chinese/Western kitchen, laundry room are included in facilities. A convenient and seamless living experience.',
        [I18N.JP]: '· 和式・洋式キッチン、ランドリールームなど、\nシームレスで快適な暮らしをお届けする機能的な設備を揃っております',
    },



    'res.s7.title': {
        [I18N.ZH]: '宅邸详情',
        [I18N.EN]: 'Villa Information',
        [I18N.JP]: '宅邸详情',
    },

    'res.s7.cpt1': {
        [I18N.ZH]: '基本信息',
        [I18N.EN]: 'Basic information',
        [I18N.JP]: '基本情報',
    },
    'res.s7.cpt1.1': {
        [I18N.ZH]: '全屋三层，地面二层，地下一层，建筑总面积740平方米；',
        [I18N.EN]: 'Three floors. Two floors above ground. One floor under the ground. A total building area of 740 sqm.',
        [I18N.JP]: '地上二階と地下1階の全館三階建てで、総建築面積740平方メートル',
    },

    'res.s7.cpt2': {
        [I18N.ZH]: '套房信息',
        [I18N.EN]: 'Suite Information',
        [I18N.JP]: 'スイート情報',
    },


    'res.s7.cpt2.1': {
        [I18N.ZH]: 'MASTER ROOM I: 65平方米，KING SIZE 双人床',
        [I18N.EN]: 'Master Room I: 65 sqm. King-sized bed.',
        [I18N.JP]: 'マスタールームI：65平方メートル、キングサイズベッド付',
    },
    'res.s7.cpt2.2': {
        [I18N.ZH]: 'MASTER ROOM II: 55平方米，KING SIZE 双人床',
        [I18N.EN]: 'Master Room II: 55 sqm. King-sized bed.',
        [I18N.JP]: 'マスタールームII：55平方メートル、キングサイズベッド付',
    },
    'res.s7.cpt2.3': {
        [I18N.ZH]: 'ROOM A: 25平方米，榻榻米',
        [I18N.EN]: 'Room A: 25 sqm. Tatami Bed.',
        [I18N.JP]: 'ルームA: 25平方メートル、和室',
    },
    'res.s7.cpt2.4': {
        [I18N.ZH]: 'ROOM B: 36平方米，KING SIZE 双人床',
        [I18N.EN]: 'Room B: 36 sqm. King-sized bed.',
        [I18N.JP]: 'ルームB: 36平方メートル、キングサイズベッド付',
    },
    'res.s7.cpt2.5': {
        [I18N.ZH]: 'ROOM C: 36平方米，双拼床',
        [I18N.EN]: 'Room C: 36 sqm. Twin Bed.',
        [I18N.JP]: 'ルームC：36平方メートル、ダブルルーム',
    },
    'res.s7.cpt2.6': {
        [I18N.ZH]: 'ROOM D: 28平方米，KING SIZE 双人床',
        [I18N.EN]: 'Room D: 28 sqm. King-sized bed.',
        [I18N.JP]: 'ルームD：28平方メートル、キングサイズベッド付',
    },
    'res.s7.cpt2.7': {
        [I18N.ZH]: '随行人员房: 位于地下一层，高低床',
        [I18N.EN]: 'Entourage Room: Lower ground floor. Double-decker bed.',
        [I18N.JP]: 'ゲストルーム：地下1階に位置する、2段ベッドのお部屋です',
    },

    'res.s7.cpt3': {
        [I18N.ZH]: '设施信息',
        [I18N.EN]: 'Facilities Information',
        [I18N.JP]: '館内施設',
    },
    'res.s7.cpt3.1': {
        [I18N.ZH]: '全屋地暖',
        [I18N.EN]: 'Full Underfloor Heating',
        [I18N.JP]: '全室床暖房',
    },
    'res.s7.cpt3.2': {
        [I18N.ZH]: '全屋卫浴',
        [I18N.EN]: 'Full Bathroom Facilities',
        [I18N.JP]: '全室バスルーム',
    },
    'res.s7.cpt3.2.hover': {
        [I18N.ZH]: '全屋卫浴 (VOLA)、全屋坐便 (卫洗丽 WASHLET)',
        [I18N.EN]: 'Bathroom Facilities (VOLA), Toilet (Washlet)',
        [I18N.JP]: '全室バスルーム（VOLA）、全室トイレ（ウォシュレット付き）',
    },
    'res.s7.cpt3.3': {
        [I18N.ZH]: '双通道壁炉',
        [I18N.EN]: 'Double-sided Fireplace',
        [I18N.JP]: '二重通路暖炉',
    },
    'res.s7.cpt3.3.hover': {
        [I18N.ZH]: '燃木壁炉、酒精壁炉',
        [I18N.EN]: 'Wood burning, Ethanol burning',
        [I18N.JP]: '薪暖炉、バイオエタノール暖炉',
    },
    'res.s7.cpt3.4': {
        [I18N.ZH]: '酒窖',
        [I18N.EN]: 'Cellar',
        [I18N.JP]: 'ワインセラー',
    },
    'res.s7.cpt3.5': {
        [I18N.ZH]: '滑雪用具干燥室',
        [I18N.EN]: 'Ski Drying Room',
        [I18N.JP]: 'スキー乾燥室',
    },
    'res.s7.cpt3.6': {
        [I18N.ZH]: '温泉 SPA 房',
        [I18N.EN]: 'Hot Spring SPA',
        [I18N.JP]: '温泉・スパルーム',
    },
    'res.s7.cpt3.7': {
        [I18N.ZH]: '干蒸房',
        [I18N.EN]: 'Steam Room',
        [I18N.JP]: 'ドライスチームルーム',
    },
    'res.s7.cpt3.8': {
        [I18N.ZH]: '健身房',
        [I18N.EN]: 'Fitness Room',
        [I18N.JP]: 'ジム',
    },
    'res.s7.cpt3.8.hover': {
        [I18N.ZH]: '全套 TECHNOGYM 设备',
        [I18N.EN]: 'Full Technogym equipment',
        [I18N.JP]: 'TECHNOGYM 設備完備',
    },
    'res.s7.cpt3.9': {
        [I18N.ZH]: '娱乐室',
        [I18N.EN]: 'Entertainment Room',
        [I18N.JP]: 'レクリエーションルーム',
    },
    'res.s7.cpt3.10': {
        [I18N.ZH]: '中西厨房',
        [I18N.EN]: 'Chinese/Western Kitchen',
        [I18N.JP]: '和式・洋式キッチン',
    },
    'res.s7.cpt3.10.hover': {
        [I18N.ZH]: '洗碗机、内置式烤箱、蒸箱 (米勒 MIELE)、内置冰箱 (利勃海尔 LIEBHERR)、咖啡机 (SMEG)',
        [I18N.EN]: 'Dishwasher, Built-in steam oven (Miele), Built-in fridge (Liebherr), Coffee machine (Smeg)',
        [I18N.JP]: '食器洗い機、ビルトインオーブン、スチーマー (MIELE)、ビルトイン冷蔵庫 (LIEBHERR)、コーヒーメーカー (SMEG)',
    },
    'res.s7.cpt3.11': {
        [I18N.ZH]: '洗衣房',
        [I18N.EN]: 'Laundry Room',
        [I18N.JP]: 'ランドリールーム',
    },
    'res.s7.cpt3.11.hover': {
        [I18N.ZH]: '双洗衣机、双烘干机 (米勒 MIELE)',
        [I18N.EN]: 'Two washing machines, two dryers (Miele)',
        [I18N.JP]: 'ダブル洗濯機、ダブル乾燥機 (MIELE)',
    },
    'res.s7.cpt3.12': {
        [I18N.ZH]: '车库',
        [I18N.EN]: 'Garage',
        [I18N.JP]: 'ガレージ',
    },
    'res.s7.cpt3.12.hover': {
        [I18N.ZH]: '双车位',
        [I18N.EN]: 'Two parking spaces',
        [I18N.JP]: 'ガレージ > ダブル駐車場',
    },
    'res.s7.cpt3.13': {
        [I18N.ZH]: 'APPLE TV',
        [I18N.EN]: 'Apple TV',
        [I18N.JP]: 'APPLE TV',
    },
    'res.s7.cpt3.14': {
        [I18N.ZH]: 'DEVIALET音响',
        [I18N.EN]: 'DEVIALET Speaker',
        [I18N.JP]: 'DEVIALET オーディオ',
    },
    'res.s7.cpt3.15': {
        [I18N.ZH]: '无障碍设施',
        [I18N.EN]: 'Accessible Facilities',
        [I18N.JP]: 'バリアフリー設備',
    },
    




    'res.s7.cpt4': {
        [I18N.ZH]: '服务信息',
        [I18N.EN]: 'Service Info',
        [I18N.JP]: 'サービス案内',
    },
    'res.s7.cpt4.1': {
        [I18N.ZH]: '专属管家',
        [I18N.EN]: 'All-day exclusive butler',
        [I18N.JP]: '専属バトラーサービス',
    },
    'res.s7.cpt4.2': {
        [I18N.ZH]: '专车服务',
        [I18N.EN]: 'Chauffeur service',
        [I18N.JP]: '専用車サービス',
    },
    'res.s7.cpt4.2.hover': {
        [I18N.ZH]: '一辆 10 座或 7 座机场往返专车服务 (1次，仅限二世谷地区)',
        [I18N.EN]: 'A 10-seater or 7-seater airport round-trip car service (1 time, only in Niseko area)',
        [I18N.JP]: '10人乗りまたは7人乗りの空港往復車サービス（1回、ニセコ地域のみ）',
    },
    'res.s7.cpt4.3': {
        [I18N.ZH]: '欢迎礼遇',
        [I18N.EN]: 'Welcome gifts',
        [I18N.JP]: 'ウェルカムアメニティ',
    },
    'res.s7.cpt4.3.hover': {
        [I18N.ZH]: '含欢迎小食、香槟、软饮',
        [I18N.EN]: 'Including welcome snacks, champagne, soft drinks',
        [I18N.JP]: '歓迎スナック、シャンパン、ソフトドリンクを含む',
    },
    'res.s7.cpt4.4': {
        [I18N.ZH]: '私厨早餐',
        [I18N.EN]: 'Private chef breakfast',
        [I18N.JP]: 'シェフの朝食',
    },
    'res.s7.cpt4.4.hover': {
        [I18N.ZH]: '私人厨师免费早餐服务 (日式或西式)',
        [I18N.EN]: 'Free breakfast service with private chef (Japanese or Western style)',
        [I18N.JP]: 'プライベートシェフ（日本食または洋食）付きの無料朝食サービス',
    },
    'res.s7.cpt4.5': {
        [I18N.ZH]: '私厨晚宴',
        [I18N.EN]: 'Private chef dinner',
        [I18N.JP]: 'シェフのプライベートディナーコース',
    },
    'res.s7.cpt4.5.hover': {
        [I18N.ZH]: '在您的入住方案中，含前三晚私厨定制晚餐；如需提供其他入住日的晚餐服务，将另行收取费用（需入住前提前预订）',
        [I18N.EN]: 'In your stay plan, it includes a private chef custom dinner for the first three nights; if you need to provide dinner service for other stay days, an additional fee will be charged (advance reservation is required before check-in)',
        [I18N.JP]: 'あなたの滞在計画では、最初の3泊のプライベートシェフカスタムディナーが含まれています。他の滞在日のディナーサービスを提供する必要がある場合は、追加料金が請求されます（チェックイン前に事前予約が必要です）',
    },
    'res.s7.cpt4.6': {
        [I18N.ZH]: '水吧畅饮',
        [I18N.EN]: 'Bottomless drinks',
        [I18N.JP]: 'ウォーターバーでのドリンクサービス',
    },
    'res.s7.cpt4.7': {
        [I18N.ZH]: '客房清洁',
        [I18N.EN]: 'Room cleaning service',
        [I18N.JP]: 'ルームクリーニングサービス',
    },
    'res.s7.cpt4.7.hover': {
        [I18N.ZH]: '每日提供客房清洁家政服务；床单与毛巾每隔三日将会更换一次',
        [I18N.EN]: 'Daily room cleaning housekeeping service; bed sheets and towels will be replaced every three days',
        [I18N.JP]: '毎日のルームクリーニングの家政サービス。ベッドシーツとタオルは3日ごとに交換されます',
    },
    'res.s7.cpt4.8': {
        [I18N.ZH]: '夜床服务',
        [I18N.EN]: 'Turndown service',
        [I18N.JP]: 'ナイトベッドサービス',
    },
    'res.s7.cpt4.9': {
        [I18N.ZH]: '多语言服务',
        [I18N.EN]: 'Multilingual service',
        [I18N.JP]: '多言語サービス',
    },
    'res.s7.cpt4.10': {
        [I18N.ZH]: 'WI-FI',
        [I18N.EN]: 'Wi-Fi',
        [I18N.JP]: 'WI-FI',
    },

    'dli.s1.desc1': {
        [I18N.ZH]: '私享主厨的雕琢呈献',
        [I18N.EN]: 'Private chef proudly presents',
        [I18N.JP]: '季節感と独創性にあふれた美味ぞろい'
    },
    'dli.s1.desc2': {
        [I18N.ZH]: '回响技艺与珍馐的高定赏味',
        [I18N.EN]: 'the high-end gastronomy with top skills and delicacies.',
        [I18N.JP]: 'プライベートシェフの上質な技による創作料理をお楽しみください'
    },

    'dli.menu.cpt': {
        [I18N.ZH]: '菜单',
        [I18N.EN]: 'Menu',
        [I18N.JP]: 'メニュー'
    },
    // 早餐菜单
    'dli.menu.breakfast': {
        [I18N.ZH]: '早餐',
        [I18N.EN]: 'Breakfast',
        [I18N.JP]: '朝食'
    },
    // 中式 A
    'dli.menu.bf.1.cpt': {
        [I18N.ZH]: '和式早餐 A',
        [I18N.EN]: 'Asian Style Breakfast A',
        [I18N.JP]: '和朝食 A'
    },
    'dli.menu.bf.1.food1': {
        [I18N.ZH]: '皮蛋粥',
        [I18N.EN]: 'Congee with preserved egg',
        [I18N.JP]: 'ピータン入りおかゆ'
    },
    'dli.menu.bf.1.food2': {
        [I18N.ZH]: '花卷',
        [I18N.EN]: 'Chinese Flower Rolls (Hua Juan)',
        [I18N.JP]: '中華風蒸しパン'
    },
    'dli.menu.bf.1.food3': {
        [I18N.ZH]: '香辣叉烧包子',
        [I18N.EN]: 'Steamed Bun with Spicy Barbecue Pork',
        [I18N.JP]: '蒸し饅頭とバーベキューポーク'
    },
    'dli.menu.bf.1.food4': {
        [I18N.ZH]: '烧卖',
        [I18N.EN]: 'Shao Mai',
        [I18N.JP]: 'シュウマイ'
    },
    'dli.menu.bf.1.food5': {
        [I18N.ZH]: '季节性水果',
        [I18N.EN]: 'Fruits',
        [I18N.JP]: '季節果物'
    },
    'dli.menu.bf.1.food6': {
        [I18N.ZH]: '饮料 (牛奶、果汁、咖啡、茶)',
        [I18N.EN]: 'Drinks (Milk, Juice, Coffee, Tea)',
        [I18N.JP]: '飲み物 (ミルク、ジュース、コーヒー、お茶)'
    },
    'dli.menu.bf.1.tip1': {
        [I18N.ZH]: '※ 菜单上的食材可能会根据采购情况变更，请知悉',
        [I18N.EN]: '※ Please be noted that ingredients on the menu may vary depending on the availability status',
        [I18N.JP]: '※ メニューは仕入状況等により食材変更となる場合がございます。予めご了承ください'
    },

    // 中式 B
    'dli.menu.bf.2.cpt': {
        [I18N.ZH]: '和式早餐 B',
        [I18N.EN]: 'Asian Style Breakfast B',
        [I18N.JP]: '和朝食 B'
    },
    'dli.menu.bf.2.food1': {
        [I18N.ZH]: '饭团 (辣明太子、腌酸梅、黑芝麻)',
        [I18N.EN]: 'Onigiri (Spicy Pollack Roe, Pickled Pum, Black Sesami) ',
        [I18N.JP]: 'お握り (明太子、梅干し、黒ゴマ)'
    },
    'dli.menu.bf.2.food2': {
        [I18N.ZH]: '烤日本三文鱼',
        [I18N.EN]: 'Grilled Japanese Salmon',
        [I18N.JP]: '鮭'
    },
    'dli.menu.bf.2.food3': {
        [I18N.ZH]: '日式蛋卷',
        [I18N.EN]: 'Japanese Style Egg Rolls',
        [I18N.JP]: '卵焼き'
    },
    'dli.menu.bf.2.food4': {
        [I18N.ZH]: '韩式煎饼',
        [I18N.EN]: 'Korean Style Pancake',
        [I18N.JP]: 'チヂミ'
    },
    'dli.menu.bf.2.food5': {
        [I18N.ZH]: '蒸蔬菜',
        [I18N.EN]: 'Steamed Vegetable with Miso',
        [I18N.JP]: '蒸し野菜'
    },
    'dli.menu.bf.2.food6': {
        [I18N.ZH]: '泡菜 (萝卜干、芹菜)',
        [I18N.EN]: 'Pickles (Dried Radish Kimchi, Celery)',
        [I18N.JP]: '漬物 (切り干し大根、セロリー) '
    },
    'dli.menu.bf.2.food7': {
        [I18N.ZH]: '味噌汤',
        [I18N.EN]: 'Miso Soup',
        [I18N.JP]: '味噌汁'
    },
    'dli.menu.bf.2.food8': {
        [I18N.ZH]: '季节性水果',
        [I18N.EN]: 'Fruits',
        [I18N.JP]: '季節果物'
    },
    'dli.menu.bf.2.food9': {
        [I18N.ZH]: '饮料 (牛奶、果汁、咖啡、茶)',
        [I18N.EN]: 'Drinks (Milk, Juice, Coffee, Tea)',
        [I18N.JP]: '飲み物 (ミルク、ジュース、コーヒー、お茶)'
    },
    'dli.menu.bf.2.tip1': {
        [I18N.ZH]: '※ 菜单上的食材可能会根据采购情况变更，请知悉',
        [I18N.EN]: '※ Please be noted that ingredients on the menu may vary depending on the availability status',
        [I18N.JP]: '※ メニューは仕入状況等により食材変更となる場合がございます。予めご了承ください'
    },

    // 西式 A
    'dli.menu.bf.3.cpt': {
        [I18N.ZH]: '西式早餐 A',
        [I18N.EN]: 'Western Style Breakfast A',
        [I18N.JP]: '洋朝食 A'
    },
    'dli.menu.bf.3.food1': {
        [I18N.ZH]: '烤面包配果酱 (草莓、橙子)',
        [I18N.EN]: 'Toasted Bread Served with Jam (Strawberry, Orange)',
        [I18N.JP]: 'トースターパンとジャム (いちご、オレンジ)'
    },
    'dli.menu.bf.3.food2': {
        [I18N.ZH]: '炒鸡蛋 或 荷包蛋',
        [I18N.EN]: 'Scrambled Eggs or Sunny-Side-Up Eggs',
        [I18N.JP]: 'スクランブル 或いは 目玉焼き'
    },
    'dli.menu.bf.3.food3': {
        [I18N.ZH]: '香肠 或 烤培根',
        [I18N.EN]: 'Sausage or Grilled Bacon',
        [I18N.JP]: 'ソーセージ 或いは ベーコン'
    },
    'dli.menu.bf.3.food4': {
        [I18N.ZH]: '绿叶蔬菜和胡萝卜沙拉配自制芥末酱',
        [I18N.EN]: 'Green Leaf and Carrot Salad Served with Homemade Mustard Dressing',
        [I18N.JP]: 'グリーンリーフとキャロットサラダ (自家製マスタードドレッシング)'
    },
    'dli.menu.bf.3.food5': {
        [I18N.ZH]: '季节性水果',
        [I18N.EN]: 'Fruits',
        [I18N.JP]: '季節果物'
    },
    'dli.menu.bf.3.food6': {
        [I18N.ZH]: '酸奶',
        [I18N.EN]: 'Yogurt',
        [I18N.JP]: 'ヨーグルト'
    },
    'dli.menu.bf.3.food7': {
        [I18N.ZH]: '有机谷类食',
        [I18N.EN]: 'Organic Cereal',
        [I18N.JP]: 'オーガニックシリアル'
    },
    'dli.menu.bf.3.food8': {
        [I18N.ZH]: '饮料 (牛奶、果汁、咖啡、茶)',
        [I18N.EN]: 'Drinks (Milk, Juice, Coffee, Tea)',
        [I18N.JP]: '飲み物 (ミルク、ジュース、コーヒー、お茶)'
    },
    'dli.menu.bf.3.tip1': {
        [I18N.ZH]: '※ 菜单上的食材可能会根据采购情况变更，请知悉',
        [I18N.EN]: '※ Please be noted that ingredients on the menu may vary depending on the availability status',
        [I18N.JP]: '※ メニューは仕入状況等により食材変更となる場合がございます。予めご了承ください'
    },
    
    // 西式 B
    'dli.menu.bf.4.cpt': {
        [I18N.ZH]: '西式早餐 B',
        [I18N.EN]: 'Western Style Breakfast B',
        [I18N.JP]: '洋朝食 B'
    },
    'dli.menu.bf.4.food1': {
        [I18N.ZH]: '意式烤面包配马苏里拉奶酪、番茄和罗勒',
        [I18N.EN]: 'Bruschetta with Mozzarella, Tomato, and Basil',
        [I18N.JP]: 'ブルスケッタ'
    },
    'dli.menu.bf.4.food2': {
        [I18N.ZH]: '土豆罗斯蒂',
        [I18N.EN]: 'Potato Rosti',
        [I18N.JP]: 'ロスティ'
    },
    'dli.menu.bf.4.food3': {
        [I18N.ZH]: '烤培根和自制肉丸',
        [I18N.EN]: 'Grilled Bacon and Homemade Meatballs',
        [I18N.JP]: 'ベーコンとミートボール'
    },
    'dli.menu.bf.4.food4': {
        [I18N.ZH]: '季节性水果',
        [I18N.EN]: 'Fruits',
        [I18N.JP]: '季節果物'
    },
    'dli.menu.bf.4.food5': {
        [I18N.ZH]: '酸奶',
        [I18N.EN]: 'Yogurt',
        [I18N.JP]: 'ヨーグルト'
    },
    'dli.menu.bf.4.food6': {
        [I18N.ZH]: '有机谷类食',
        [I18N.EN]: 'Organic Cereal',
        [I18N.JP]: 'オーガニックシリアル'
    },
    'dli.menu.bf.4.food7': {
        [I18N.ZH]: '饮料 (牛奶、果汁、咖啡、茶)',
        [I18N.EN]: 'Drinks (Milk, Juice, Coffee, Tea)',
        [I18N.JP]: '飲み物 (ミルク、ジュース、コーヒー、お茶)'
    },
    'dli.menu.bf.4.tip1': {
        [I18N.ZH]: '※ 菜单上的食材可能会根据采购情况变更，请知悉',
        [I18N.EN]: '※ Please be noted that ingredients on the menu may vary depending on the availability status',
        [I18N.JP]: '※ メニューは仕入状況等により食材変更となる場合がございます。予めご了承ください'
    },

    // 西式 C
    'dli.menu.bf.5.cpt': {
        [I18N.ZH]: '西式早餐 C',
        [I18N.EN]: 'Western Style Breakfast C',
        [I18N.JP]: '洋朝食 C'
    },
    'dli.menu.bf.5.food1': {
        [I18N.ZH]: '法式烤面包配焦糖香蕉',
        [I18N.EN]: 'French Toasted Served with Caramelized Banana',
        [I18N.JP]: 'フレンチトーストとキャラメルバナナ'
    },
    'dli.menu.bf.5.food2': {
        [I18N.ZH]: '烤培根和香肠',
        [I18N.EN]: 'Grilled Bacon and Sausage',
        [I18N.JP]: 'ベーコンとソーセージ'
    },
    'dli.menu.bf.5.food3': {
        [I18N.ZH]: '沙拉 (生菜、蘑菇、番茄、炸洋葱)',
        [I18N.EN]: 'Salad (Lettuce, Mushroom, Tomato, Fried onion)',
        [I18N.JP]: 'サラダ (レタス、マッシュルーム、トマト、フライドオニオン)'
    },
    'dli.menu.bf.5.food4': {
        [I18N.ZH]: '季节性水果',
        [I18N.EN]: 'Fruits',
        [I18N.JP]: '季節果物'
    },
    'dli.menu.bf.5.food5': {
        [I18N.ZH]: '酸奶',
        [I18N.EN]: 'Yogurt',
        [I18N.JP]: 'ヨーグルト'
    },
    'dli.menu.bf.5.food6': {
        [I18N.ZH]: '有机谷类食',
        [I18N.EN]: 'Organic Cereal',
        [I18N.JP]: 'オーガニックシリアル'
    },
    'dli.menu.bf.5.food7': {
        [I18N.ZH]: '饮料 (牛奶、果汁、咖啡、茶)',
        [I18N.EN]: 'Drinks (Milk, Juice, Coffee, Tea)',
        [I18N.JP]: '飲み物 (ミルク、ジュース、コーヒー、お茶)'
    },
    'dli.menu.bf.5.tip1': {
        [I18N.ZH]: '※ 菜单上的食材可能会根据采购情况变更，请知悉',
        [I18N.EN]: '※ Please be noted that ingredients on the menu may vary depending on the availability status',
        [I18N.JP]: '※ メニューは仕入状況等により食材変更となる場合がございます。予めご了承ください'
    },


    // 晚餐菜单
    'dli.menu.dinner': {
        [I18N.ZH]: '晚餐',
        [I18N.EN]: 'Dinner',
        [I18N.JP]: '夕食'
    },
    // 西洋料理
    'dli.menu.dinner.1.cpt': {
        [I18N.ZH]: '西洋料理菜单',
        [I18N.EN]: 'French Menu',
        [I18N.JP]: '西洋料理コース'
    },
    'dli.menu.dinner.1.food1': {
        [I18N.ZH]: '开胃菜',
        [I18N.EN]: 'Amuse Bouche',
        [I18N.JP]: 'アミューズブーシュ'
    },
    'dli.menu.dinner.1.food2': {
        [I18N.ZH]: '橄榄油渍岩牡蛎',
        [I18N.EN]: 'Oil-marinated Iwagaki Oyster',
        [I18N.JP]: '山と海 岩牡蠣'
    },
    'dli.menu.dinner.1.food3': {
        [I18N.ZH]: '毛蟹 油桃果南瓜酱 渍三文鱼籽',
        [I18N.EN]: 'Hair Crab, Butternut Squash, Salmon Roe',
        [I18N.JP]: '毛蟹 バターナッツ イクラ'
    },
    'dli.menu.dinner.1.food4': {
        [I18N.ZH]: '海胆 汤叶豆腐',
        [I18N.EN]: 'Urchin Sea and Tofu Skin',
        [I18N.JP]: '雲丹と湯葉 '
    },
    'dli.menu.dinner.1.food5': {
        [I18N.ZH]: '煎鲍鱼 绿色稻饭 西葫芦',
        [I18N.EN]: 'Abalone, Green Rice, Zucchini',
        [I18N.JP]: '鮑 グリーンライス ズッキーニ '
    },
    'dli.menu.dinner.1.food6': {
        [I18N.ZH]: '甘鲷鳞烧 秋葵汁',
        [I18N.EN]: 'Tilefish grilled with oil “Matsukasa Yaki”',
        [I18N.JP]: '甘鯛の鱗焼き '
    },
    'dli.menu.dinner.1.food7': {
        [I18N.ZH]: '炸和牛 北海道扇贝 山椒',
        [I18N.EN]: 'Beef Cutlet with Hokkaido Scallops',
        [I18N.JP]: '牛と北海道帆立'
    },
    'dli.menu.dinner.1.food8': {
        [I18N.ZH]: '和栗勃朗峰',
        [I18N.EN]: 'Mont Blanc',
        [I18N.JP]: 'モンブラン'
    },
    'dli.menu.dinner.1.food9': {
        [I18N.ZH]: '餐后点心',
        [I18N.EN]: 'Petit Four',
        [I18N.JP]: 'プチフール'
    },
    'dli.menu.dinner.1.tip1': {
        [I18N.ZH]: '※ 成年人及8岁以上的儿童价格为每位¥35,000 (含税)',
        [I18N.EN]: '※ Adults & 8-year-olds and the above: ¥35,000 (Tax included)/person',
        [I18N.JP]: '※ 大人料金 (35,000円税・サ込み/名) とさせて頂きます'
    },
    'dli.menu.dinner.1.tip2': {
        [I18N.ZH]: '※ 特殊日期 12/24~12/26、12/30~1/1 价格上浮10%',
        [I18N.EN]: '※ Prices up by 10% during special events including 12/24~12/26, 12/30~1/1',
        [I18N.JP]: '※ 特別期間 (12/24-26、12/30-1/1) は通常料金より10%値上げさせていただきます'
    },
    'dli.menu.dinner.1.tip3': {
        [I18N.ZH]: '※ 菜单上的食材可能会根据采购情况变更，请知悉',
        [I18N.EN]: '※ Please be noted that ingredients on the menu may vary depending on the availability status',
        [I18N.JP]: '※ メニューは仕入状況等により食材変更となる場合がございます。予めご了承ください'
    },

    // 锅物套餐
    'dli.menu.dinner.2.cpt': {
        [I18N.ZH]: '锅物菜单',
        [I18N.EN]: 'Nabe Menu',
        [I18N.JP]: '鍋物コース'
    },
    'dli.menu.dinner.2.food1': {
        [I18N.ZH]: '前菜',
        [I18N.EN]: 'Appetizers',
        [I18N.JP]: '前菜'
    },
    'dli.menu.dinner.2.food2': {
        [I18N.ZH]: '三文鱼籽、海胆、柚子',
        [I18N.EN]: 'Salmon Roe, Sea Urchin, Yuzu',
        [I18N.JP]: 'いくら雲丹の柚子釜'
    },
    'dli.menu.dinner.2.food3': {
        [I18N.ZH]: '炸物',
        [I18N.EN]: 'Deep-fried Dish',
        [I18N.JP]: '揚げ物'
    },
    'dli.menu.dinner.2.food4': {
        [I18N.ZH]: '龙田炸鸡、灯笼椒',
        [I18N.EN]: '“Tori no Tatsuta-age” Deep-fried Chicken Thigh',
        [I18N.JP]: '鶏の竜田揚げ'
    },
    'dli.menu.dinner.2.food5': {
        [I18N.ZH]: '刺身',
        [I18N.EN]: 'Sashimi',
        [I18N.JP]: 'お造り'
    },
    'dli.menu.dinner.2.food6': {
        [I18N.ZH]: '真鲷薄切、北寄贝、酢橘',
        [I18N.EN]: 'Sea Bream, Surf Clam',
        [I18N.JP]: '真鯛そぎ作りと北寄貝'
    },
    'dli.menu.dinner.2.food7': {
        [I18N.ZH]: '烧物',
        [I18N.EN]: 'Grilled Dish',
        [I18N.JP]: '焼き物'
    },
    'dli.menu.dinner.2.food8': {
        [I18N.ZH]: '盐烧河豚白子',
        [I18N.EN]: 'Fugu Shirako with Salt',
        [I18N.JP]: 'ふぐ白子塩焼き'
    },
    'dli.menu.dinner.2.food9': {
        [I18N.ZH]: '寿司',
        [I18N.EN]: 'Sushi',
        [I18N.JP]: 'お寿司'
    },
    'dli.menu.dinner.2.food10': {
        [I18N.ZH]: '金枪鱼腹、扇贝、蟹肉',
        [I18N.EN]: 'Tuna Belly, Hokkaido Scallop, Crab',
        [I18N.JP]: '大トロ 帆立 かに'
    },
    'dli.menu.dinner.2.food11': {
        [I18N.ZH]: '主菜',
        [I18N.EN]: 'Main Dish',
        [I18N.JP]: '主菜'
    },
    'dli.menu.dinner.2.food12': {
        [I18N.ZH]: '顶级北海道十胜和牛寿喜锅 茼蒿 1⁄2豆腐 蒟蒻',
        [I18N.EN]: '“Sukiyaki” Beef Hot Pot',
        [I18N.JP]: '牛肉のすき焼き'
    },
    'dli.menu.dinner.2.food13': {
        [I18N.ZH]: '主食',
        [I18N.EN]: 'Rice Dish',
        [I18N.JP]: '御飯'
    },
    'dli.menu.dinner.2.food14': {
        [I18N.ZH]: '松茸陶锅饭',
        [I18N.EN]: 'Matsutake Mushroom Rice',
        [I18N.JP]: '松茸飯'
    },
    'dli.menu.dinner.2.food15': {
        [I18N.ZH]: '甜点',
        [I18N.EN]: 'Dessert',
        [I18N.JP]: '甘味'
    },
    'dli.menu.dinner.2.food16': {
        [I18N.ZH]: '椰子冻、抹茶',
        [I18N.EN]: 'Coconut blancmange, Matcha',
        [I18N.JP]: '椰子ブラマンジェ'
    },
    'dli.menu.dinner.2.tip1': {
        [I18N.ZH]: '※ 成年人及8岁以上的儿童价格为每位¥35,000 (含税)',
        [I18N.EN]: '※ Adults & 8-year-olds and the above: ¥35,000 (Tax included)/person',
        [I18N.JP]: '※ 大人料金 (35,000円税・サ込み/名) とさせて頂きます'
    },
    'dli.menu.dinner.2.tip2': {
        [I18N.ZH]: '※ 特殊日期 12/24~12/26、12/30~1/1 价格上浮10%',
        [I18N.EN]: '※ Prices up by 10% during special events including 12/24~12/26, 12/30~1/1',
        [I18N.JP]: '※ 特別期間 (12/24-26、12/30-1/1) は通常料金より10%値上げさせていただきます'
    },
    'dli.menu.dinner.2.tip3': {
        [I18N.ZH]: '※ 菜单上的食材可能会根据采购情况变更，请知悉',
        [I18N.EN]: '※ Please be noted that ingredients on the menu may vary depending on the availability status',
        [I18N.JP]: '※ メニューは仕入状況等により食材変更となる場合がございます。予めご了承ください'
    },

    // 怀石套餐
    'dli.menu.dinner.3.cpt': {
        [I18N.ZH]: '怀石菜单',
        [I18N.EN]: 'Kaiseki Menu',
        [I18N.JP]: '懐石コース'
    },
    'dli.menu.dinner.3.food1': {
        [I18N.ZH]: '前菜',
        [I18N.EN]: 'Appetizers',
        [I18N.JP]: '先付'
    },
    'dli.menu.dinner.3.food2': {
        [I18N.ZH]: '鲍鱼软炖、鲑鱼子酱油渍',
        [I18N.EN]: 'Softly Simmered Abalone, Marinade Salmon Roe',
        [I18N.JP]: '鮑柔煮 いくらの醤油漬け'
    },
    'dli.menu.dinner.3.food3': {
        [I18N.ZH]: '生鱼片',
        [I18N.EN]: 'Sashimi',
        [I18N.JP]: '向付'
    },
    'dli.menu.dinner.3.food4': {
        [I18N.ZH]: '昆布盛 – 真鲷、山葵、鲣鱼酱油',
        [I18N.EN]: 'Seabream Kobujime with Wasabi and Tosa Soy Sauce',
        [I18N.JP]: '鯛の昆布締め ワサビ 土佐醤油'
    },
    'dli.menu.dinner.3.food5': {
        [I18N.ZH]: '汤品',
        [I18N.EN]: 'Steamed',
        [I18N.JP]: '煮もの椀'
    },
    'dli.menu.dinner.3.food6': {
        [I18N.ZH]: '虾肉丸子、松茸、柚子、青萝卜',
        [I18N.EN]: 'Steamed Prawn, Matsutake Mushroom, Yuzu, Radish',
        [I18N.JP]: '海老真蒸 松茸 柚子 青味大根'
    },
    'dli.menu.dinner.3.food7': {
        [I18N.ZH]: '醋物',
        [I18N.EN]: 'Vinegar Dish',
        [I18N.JP]: '替り鉢'
    },
    'dli.menu.dinner.3.food8': {
        [I18N.ZH]: '长芋冷面、北海道毛蟹',
        [I18N.EN]: 'Nagaimo Somen with Crab and Yuzu Vinegar Dressing',
        [I18N.JP]: '長芋そうめん かに ふりゆず 合わせ酢'
    },
    'dli.menu.dinner.3.food9': {
        [I18N.ZH]: '烧物',
        [I18N.EN]: 'Grilled Dish',
        [I18N.JP]: '焼き物'
    },
    'dli.menu.dinner.3.food10': {
        [I18N.ZH]: '金目鲷松笠烧、酢橘',
        [I18N.EN]: 'Red Eye Amberjack Matsukasa Yaki',
        [I18N.JP]: '金目鯛 松笠焼き'
    },
    'dli.menu.dinner.3.food11': {
        [I18N.ZH]: '炸物',
        [I18N.EN]: 'Deep-fried Dish',
        [I18N.JP]: '揚げ物'
    },
    'dli.menu.dinner.3.food12': {
        [I18N.ZH]: '十胜和牛肉排、花山椒酱',
        [I18N.EN]: 'Beef Cutlet with Sansho Pepper Sauce',
        [I18N.JP]: '牛肉かつ 山椒タレ'
    },
    'dli.menu.dinner.3.food13': {
        [I18N.ZH]: '主食',
        [I18N.EN]: 'Rice Dish',
        [I18N.JP]: '御飯'
    },
    'dli.menu.dinner.3.food14': {
        [I18N.ZH]: '松茸饭',
        [I18N.EN]: 'Matsutake Mushroom Rice',
        [I18N.JP]: '松茸飯'
    },
    'dli.menu.dinner.3.food15': {
        [I18N.ZH]: '甜点',
        [I18N.EN]: 'Dessert',
        [I18N.JP]: '甘味'
    },
    'dli.menu.dinner.3.food16': {
        [I18N.ZH]: '椰子、北海道牛乳冻、宇治抹茶',
        [I18N.EN]: 'Coconut blancmange',
        [I18N.JP]: '椰子ブラマンジェ'
    },
    'dli.menu.dinner.3.tip1': {
        [I18N.ZH]: '※ 成年人及8岁以上的儿童价格为每位¥35,000 (含税)',
        [I18N.EN]: '※ Adults & 8-year-olds and the above: ¥35,000 (Tax included)/person',
        [I18N.JP]: '※ 大人料金 (35,000円税・サ込み/名) とさせて頂きます'
    },
    'dli.menu.dinner.3.tip2': {
        [I18N.ZH]: '※ 特殊日期 12/24~12/26、12/30~1/1 价格上浮10%',
        [I18N.EN]: '※ Prices up by 10% during special events including 12/24~12/26, 12/30~1/1',
        [I18N.JP]: '※ 特別期間 (12/24-26、12/30-1/1) は通常料金より10%値上げさせていただきます'
    },
    'dli.menu.dinner.3.tip3': {
        [I18N.ZH]: '※ 菜单上的食材可能会根据采购情况变更，请知悉',
        [I18N.EN]: '※ Please be noted that ingredients on the menu may vary depending on the availability status',
        [I18N.JP]: '※ メニューは仕入状況等により食材変更となる場合がございます。予めご了承ください'
    },
    
    // 河豚套餐
    'dli.menu.dinner.4.cpt': {
        [I18N.ZH]: '河豚菜单',
        [I18N.EN]: 'Fugu Blowfish Menu',
        [I18N.JP]: 'ふぐコース'
    },
    'dli.menu.dinner.4.food1': {
        [I18N.ZH]: '珍味',
        [I18N.EN]: 'Delicacies',
        [I18N.JP]: '珍味'
    },
    'dli.menu.dinner.4.food2': {
        [I18N.ZH]: '河豚鱼鳍温酒',
        [I18N.EN]: 'Hirezake - Grilled Blowfish Fin Sake',
        [I18N.JP]: 'ヒレさけ'
    },
    'dli.menu.dinner.4.food3': {
        [I18N.ZH]: '刺身',
        [I18N.EN]: 'Sashimi',
        [I18N.JP]: 'お造り'
    },
    'dli.menu.dinner.4.food4': {
        [I18N.ZH]: '虎河豚刺身、昆布熟成',
        [I18N.EN]: 'Fugu Kobujime - Blowfish aged on Kelp',
        [I18N.JP]: 'フグ昆布じめ'
    },
    'dli.menu.dinner.4.food5': {
        [I18N.ZH]: '汤品',
        [I18N.EN]: 'Soup',
        [I18N.JP]: '吸い物'
    },
    'dli.menu.dinner.4.food6': {
        [I18N.ZH]: '清汁白子豆腐、日本柚子',
        [I18N.EN]: 'Shirako Tofu Clear Soup',
        [I18N.JP]: '白子豆腐 清まし仕立て'
    },
    'dli.menu.dinner.4.food7': {
        [I18N.ZH]: '炸物',
        [I18N.EN]: 'Deep-fried Dish',
        [I18N.JP]: '揚げ物'
    },
    'dli.menu.dinner.4.food8': {
        [I18N.ZH]: '河豚天妇罗、狮子头椒',
        [I18N.EN]: 'Deep fried Fugu tempura',
        [I18N.JP]: 'ふぐ天ぷら'
    },
    'dli.menu.dinner.4.food9': {
        [I18N.ZH]: '蒸物',
        [I18N.EN]: 'Steamed',
        [I18N.JP]: '蒸し物'
    },
    'dli.menu.dinner.4.food10': {
        [I18N.ZH]: '河豚萝卜蒸',
        [I18N.EN]: 'Fugu Kaburamushi - Steamed Blowfish with Turnips',
        [I18N.JP]: 'ふぐ蕪蒸し'
    },
    'dli.menu.dinner.4.food11': {
        [I18N.ZH]: '烧物',
        [I18N.EN]: 'Grilled Dish',
        [I18N.JP]: '焼き物'
    },
    'dli.menu.dinner.4.food12': {
        [I18N.ZH]: '盐烧河豚白子',
        [I18N.EN]: 'Fugu Shirako with Salt',
        [I18N.JP]: 'ふぐ白子塩焼き'
    },
    'dli.menu.dinner.4.food13': {
        [I18N.ZH]: '主食',
        [I18N.EN]: 'Rice Dish',
        [I18N.JP]: '御飯'
    },
    'dli.menu.dinner.4.food14': {
        [I18N.ZH]: '酱油渍三文鱼籽海胆饭',
        [I18N.EN]: 'Salmon Roe and Sea Urchin on rice',
        [I18N.JP]: '筋子雲丹ご飯'
    },
    'dli.menu.dinner.4.food15': {
        [I18N.ZH]: '甜点',
        [I18N.EN]: 'Dessert',
        [I18N.JP]: '甘味'
    },
    'dli.menu.dinner.4.food16': {
        [I18N.ZH]: '日式蕨饼',
        [I18N.EN]: 'Dessert Bracken - Starch mochi rice cake',
        [I18N.JP]: 'わらび餅'
    },
    'dli.menu.dinner.4.tip1': {
        [I18N.ZH]: '※ 成年人及8岁以上的儿童价格为每位¥35,000 (含税)',
        [I18N.EN]: '※ Adults & 8-year-olds and the above: ¥35,000 (Tax included)/person',
        [I18N.JP]: '※ 大人料金 (35,000円税・サ込み/名) とさせて頂きます'
    },
    'dli.menu.dinner.4.tip2': {
        [I18N.ZH]: '※ 特殊日期 12/24~12/26、12/30~1/1 价格上浮10%',
        [I18N.EN]: '※ Prices up by 10% during special events including 12/24~12/26, 12/30~1/1',
        [I18N.JP]: '※ 特別期間 (12/24-26、12/30-1/1) は通常料金より10%値上げさせていただきます'
    },
    'dli.menu.dinner.4.tip3': {
        [I18N.ZH]: '※ 菜单上的食材可能会根据采购情况变更，请知悉',
        [I18N.EN]: '※ Please be noted that ingredients on the menu may vary depending on the availability status',
        [I18N.JP]: '※ メニューは仕入状況等により食材変更となる場合がございます。予めご了承ください'
    },

    // 怀石菜单-高级
    'dli.menu.dinner.5.cpt': {
        [I18N.ZH]: '怀石菜单 – 高级',
        [I18N.EN]: 'Kaiseki Menu - Premium',
        [I18N.JP]: '懷石コース – 高級メニュー'
    },
    'dli.menu.dinner.5.food1': {
        [I18N.ZH]: '前菜',
        [I18N.EN]: 'Appetizers',
        [I18N.JP]: '先付'
    },
    'dli.menu.dinner.5.food2': {
        [I18N.ZH]: '鲍鱼软炖、贝尔加鱼子酱、鲑鱼子酱油渍',
        [I18N.EN]: 'Softly Simmered Abalone, Beluga Caviar, Marinade Salmon Roe',
        [I18N.JP]: '鮑柔煮 ベルーガキャビア いくらの醤油漬け'
    },
    'dli.menu.dinner.5.food3': {
        [I18N.ZH]: '生鱼片',
        [I18N.EN]: 'Sashimi',
        [I18N.JP]: '向付'
    },
    'dli.menu.dinner.5.food4': {
        [I18N.ZH]: '昆布盛 – 比目鱼、红鲷、花枝、海胆、车虾、扇贝、柚子冻',
        [I18N.EN]: 'Kombu-Infused Assortment: Flounder, Red Snapper, Squid, Sea Urchin, Tiger Prawn, and Scallop with Kombu Dashi Yuzu Jelly',
        [I18N.JP]: '昆布じめ盛り ひらめ 真鯛 いか 雲丹 車海老 帆立 昆布だし柚子ゼリー'
    },
    'dli.menu.dinner.5.food5': {
        [I18N.ZH]: '汤品',
        [I18N.EN]: 'Steamed',
        [I18N.JP]: '煮もの椀'
    },
    'dli.menu.dinner.5.food6': {
        [I18N.ZH]: '伊势龙虾、松茸、柚子、青萝卜',
        [I18N.EN]: 'Steamed lobster, Matsutake Mushroom, Yuzu, Radish',
        [I18N.JP]: '伊勢海老 松茸 柚子 青味大根'
    },
    'dli.menu.dinner.5.food7': {
        [I18N.ZH]: '醋物',
        [I18N.EN]: 'Vinegar Dish',
        [I18N.JP]: '替り鉢'
    },
    'dli.menu.dinner.5.food8': {
        [I18N.ZH]: '长芋冷面、北海道毛蟹',
        [I18N.EN]: 'Nagaimo Somen with Crab and Yuzu Vinegar Dressing',
        [I18N.JP]: '長芋そうめん かに ふりゆず 合わせ酢'
    },
    'dli.menu.dinner.5.food9': {
        [I18N.ZH]: '烧物',
        [I18N.EN]: 'Grilled Dish',
        [I18N.JP]: '焼き物'
    },
    'dli.menu.dinner.5.food10': {
        [I18N.ZH]: '金目鲷松笠烧、酢橘',
        [I18N.EN]: 'Red Eye Amberjack Matsukasa Yaki',
        [I18N.JP]: '金目鯛 松笠焼き'
    },
    'dli.menu.dinner.5.food11': {
        [I18N.ZH]: '炸物',
        [I18N.EN]: 'Deep-fried Dish',
        [I18N.JP]: '揚げ物'
    },
    'dli.menu.dinner.5.food12': {
        [I18N.ZH]: '十胜和牛肉排、花山椒酱',
        [I18N.EN]: 'Beef Cutlet with Sansho Pepper Sauce',
        [I18N.JP]: '牛肉かつ 山椒タレ'
    },
    'dli.menu.dinner.5.food13': {
        [I18N.ZH]: '主食',
        [I18N.EN]: 'Rice Dish',
        [I18N.JP]: '御飯'
    },
    'dli.menu.dinner.5.food14': {
        [I18N.ZH]: '炙烧金枪鱼腹、松露玉米饭',
        [I18N.EN]: 'Truffle, tuna belly, sweet corn rice',
        [I18N.JP]: '鮪 松露玉米飯'
    },
    'dli.menu.dinner.5.food15': {
        [I18N.ZH]: '甜点',
        [I18N.EN]: 'Dessert',
        [I18N.JP]: '甘味'
    },
    'dli.menu.dinner.5.food16': {
        [I18N.ZH]: '椰子、北海道牛乳冻、宇治抹茶',
        [I18N.EN]: 'Coconut blancmange, Matcha',
        [I18N.JP]: '椰子ブラマンジェ'
    },
    'dli.menu.dinner.5.tip1': {
        [I18N.ZH]: '※ 成年人及8岁以上的儿童价格为每位¥55,000 (含税)',
        [I18N.EN]: '※ Adults & 8-year-olds and the above: ¥55,000 (Tax included)/person',
        [I18N.JP]: '※ 大人料金 (55,000円税・サ込み/名) とさせて頂きます'
    },
    'dli.menu.dinner.5.tip2': {
        [I18N.ZH]: '※ 特殊日期 12/24~12/26、12/30~1/1 价格上浮10%',
        [I18N.EN]: '※ Prices up by 10% during special events including 12/24~12/26, 12/30~1/1',
        [I18N.JP]: '※ 特別期間 (12/24-26、12/30-1/1) は通常料金より10%値上げさせていただきます'
    },
    'dli.menu.dinner.5.tip3': {
        [I18N.ZH]: '※ 菜单上的食材可能会根据采购情况变更，请知悉',
        [I18N.EN]: '※ Please be noted that ingredients on the menu may vary depending on the availability status',
        [I18N.JP]: '※ メニューは仕入状況等により食材変更となる場合がございます。予めご了承ください'
    },
    // 寿司套餐 - 高级
    'dli.menu.dinner.6.cpt': {
        [I18N.ZH]: '寿司菜单 – 高级',
        [I18N.EN]: 'Sushi Menu - Premium',
        [I18N.JP]: '寿司コース – 高級メニュー'
    },
    'dli.menu.dinner.6.food1': {
        [I18N.ZH]: '前菜',
        [I18N.EN]: 'Appetizers',
        [I18N.JP]: '前肴'
    },
    'dli.menu.dinner.6.food2': {
        [I18N.ZH]: '鲍鱼软炖、贝尔加鱼子酱',
        [I18N.EN]: 'Softly Simmered Abalone with Beluga Caviar',
        [I18N.JP]: '鮑柔煮 ベルーガキャビア'
    },
    'dli.menu.dinner.6.food3': {
        [I18N.ZH]: '蒸物',
        [I18N.EN]: 'Steamed',
        [I18N.JP]: '蒸し物'
    },
    'dli.menu.dinner.6.food4': {
        [I18N.ZH]: '茶碗蒸、鲑鱼子酱油渍、北海道虾夷马粪海胆',
        [I18N.EN]: 'Steamed Egg Custard, Salmon Roe, Sea Urchin',
        [I18N.JP]: '茶碗蒸 いくらの醤油漬け 雲丹'
    },
    'dli.menu.dinner.6.food5': {
        [I18N.ZH]: '刺身',
        [I18N.EN]: 'Sashimi',
        [I18N.JP]: 'お造り'
    },
    'dli.menu.dinner.6.food6': {
        [I18N.ZH]: '河豚、白子、柑橘醋、紫苏花穗',
        [I18N.EN]: 'Blowfish Sashimi with Shirako, Shiso Flowers, Purple Sprouts',
        [I18N.JP]: '河豚薄造り 白子 ポン酢 はなほ 紫芽'
    },
    'dli.menu.dinner.6.food7': {
        [I18N.ZH]: '汤品',
        [I18N.EN]: 'Steamed',
        [I18N.JP]: '煮もの椀'
    },
    'dli.menu.dinner.6.food8': {
        [I18N.ZH]: '冬瓜、毛蟹丸子、轮切青柚子',
        [I18N.EN]: 'Clear Dashi Soup, Hairy Crab with Winter Melon, Crab Tofu, Green Yuzu',
        [I18N.JP]: '毛蟹だししゃぶ 冬瓜 毛蟹真薯 輪青柚子'
    },
    'dli.menu.dinner.6.food9': {
        [I18N.ZH]: '寿司',
        [I18N.EN]: 'Sushi',
        [I18N.JP]: '寿司'
    },
    'dli.menu.dinner.6.food10': {
        [I18N.ZH]: '金枪鱼赤身',
        [I18N.EN]: 'Lean Tuna',
        [I18N.JP]: '赤身'
    },
    'dli.menu.dinner.6.food11': {
        [I18N.ZH]: '金枪鱼腹',
        [I18N.EN]: 'Tuna Belly',
        [I18N.JP]: '中トロ'
    },
    'dli.menu.dinner.6.food12': {
        [I18N.ZH]: '鰤鱼鱼腹',
        [I18N.EN]: 'Yellow Tail',
        [I18N.JP]: 'はまち'
    },
    'dli.menu.dinner.6.food13': {
        [I18N.ZH]: '比目鱼',
        [I18N.EN]: 'Flounder',
        [I18N.JP]: 'ひらめ'
    },
    'dli.menu.dinner.6.food14': {
        [I18N.ZH]: '扇贝',
        [I18N.EN]: 'Scallop',
        [I18N.JP]: '扇贝'
    },
    'dli.menu.dinner.6.food15': {
        [I18N.ZH]: '花枝',
        [I18N.EN]: 'Squid',
        [I18N.JP]: 'イカ'
    },
    'dli.menu.dinner.6.food16': {
        [I18N.ZH]: '海胆',
        [I18N.EN]: 'Sea urchin',
        [I18N.JP]: '雲丹'
    },
    'dli.menu.dinner.6.food17': {
        [I18N.ZH]: '炙烧金枪鱼',
        [I18N.EN]: 'Seared tuna bell',
        [I18N.JP]: '炙燒大トロ'
    },
    'dli.menu.dinner.6.food18': {
        [I18N.ZH]: '鳗鱼手卷',
        [I18N.EN]: 'Eel handroll',
        [I18N.JP]: '鰻手巻き'
    },
    'dli.menu.dinner.6.food19': {
        [I18N.ZH]: '金枪鱼手卷',
        [I18N.EN]: 'Tuna belly handroll',
        [I18N.JP]: '鮪手巻き'
    },
    'dli.menu.dinner.6.food20': {
        [I18N.ZH]: '玉子烧',
        [I18N.EN]: 'Layered Egg',
        [I18N.JP]: '卵焼き'
    },
    'dli.menu.dinner.6.food21': {
        [I18N.ZH]: '甜点',
        [I18N.EN]: 'Dessert',
        [I18N.JP]: '甘味'
    },
    'dli.menu.dinner.6.food22': {
        [I18N.ZH]: '豆粉牛乳冻、葛饼、黑糖',
        [I18N.EN]: 'Soybean blancmange, arrowroots mochi',
        [I18N.JP]: 'きなこブラマンジェ 葛餅'
    },
    'dli.menu.dinner.6.tip1': {
        [I18N.ZH]: '※ 成年人及8岁以上的儿童价格为每位¥55,000 (含税)',
        [I18N.EN]: '※ Adults & 8-year-olds and the above: ¥55,000 (Tax included)/person',
        [I18N.JP]: '※ 大人料金 (55,000円税・サ込み/名) とさせて頂きます'
    },
    'dli.menu.dinner.6.tip2': {
        [I18N.ZH]: '※ 特殊日期 12/24~12/26、12/30~1/1 价格上浮10%',
        [I18N.EN]: '※ Prices up by 10% during special events including 12/24~12/26, 12/30~1/1',
        [I18N.JP]: '※ 特別期間 (12/24-26、12/30-1/1) は通常料金より10%値上げさせていただきます'
    },
    'dli.menu.dinner.6.tip3': {
        [I18N.ZH]: '※ 菜单上的食材可能会根据采购情况变更，请知悉',
        [I18N.EN]: '※ Please be noted that ingredients on the menu may vary depending on the availability status',
        [I18N.JP]: '※ メニューは仕入状況等により食材変更となる場合がございます。予めご了承ください'
    },


    // 下午茶菜单
    'dli.menu.tea': {
        [I18N.ZH]: '下午茶',
        [I18N.EN]: 'Afternoon Tea',
        [I18N.JP]: 'アフタヌーンティー'
    },
    'dli.menu.teamenu': {
        [I18N.ZH]: '下午茶菜单',
        [I18N.EN]: 'Afternoon Tea Menu',
        [I18N.JP]: 'アフタヌーンティーメニュー'
    },
    'dli.menu.tea.d1': {
        [I18N.ZH]: '周一',
        [I18N.EN]: 'Mon.',
        [I18N.JP]: '月曜日'
    },
    'dli.menu.tea.d1.tea': {
        [I18N.ZH]: '英式烤饼',
        [I18N.EN]: 'Scone',
        [I18N.JP]: 'スコーン'
    },
    'dli.menu.tea.d2': {
        [I18N.ZH]: '周二',
        [I18N.EN]: 'Thu.',
        [I18N.JP]: '火曜日'
    },
    'dli.menu.tea.d2.tea': {
        [I18N.ZH]: '乳酪蛋糕',
        [I18N.EN]: 'Cheese Cake',
        [I18N.JP]: 'チーズケーキ'
    },
    'dli.menu.tea.d3': {
        [I18N.ZH]: '周三',
        [I18N.EN]: 'Wed.',
        [I18N.JP]: '水曜日'
    },
    'dli.menu.tea.d3.tea': {
        [I18N.ZH]: '巧克力干饼',
        [I18N.EN]: 'Chocolate Chip Cookies',
        [I18N.JP]: 'チョコレートチップクッキー'
    },
    'dli.menu.tea.d4': {
        [I18N.ZH]: '周四',
        [I18N.EN]: 'Thur.',
        [I18N.JP]: '木曜日'
    },
    'dli.menu.tea.d4.tea': {
        [I18N.ZH]: '烤苹果奶酥',
        [I18N.EN]: 'Apple Crumble',
        [I18N.JP]: 'アップルクランブル'
    },

    'dli.menu.tea.d5': {
        [I18N.ZH]: '周五',
        [I18N.EN]: 'Fri.',
        [I18N.JP]: '金曜日'
    },
    'dli.menu.tea.d5.tea': {
        [I18N.ZH]: '英式椰棗太妃蛋糕',
        [I18N.EN]: 'Sticky Toffee Pudding',
        [I18N.JP]: 'スティッキートフィープディング'
    },
    'dli.menu.tea.d6': {
        [I18N.ZH]: '周六',
        [I18N.EN]: 'Sat.',
        [I18N.JP]: '土曜日'
    },
    'dli.menu.tea.d6.tea': {
        [I18N.ZH]: '桂皮卷',
        [I18N.EN]: 'Cinnamon Roll',
        [I18N.JP]: 'シナモンロール'
    },
    'dli.menu.tea.d7': {
        [I18N.ZH]: '周日',
        [I18N.EN]: 'Sun.',
        [I18N.JP]: '日曜日'
    },
    'dli.menu.tea.d7.tea': {
        [I18N.ZH]: '巧克力布朗尼',
        [I18N.EN]: 'Chocolate Brownie',
        [I18N.JP]: 'ブラウニー'
    },
    'dli.menu.tea.tip1': {
        [I18N.ZH]: '※ 菜单上的食材可能会根据采购情况变更，请知悉',
        [I18N.EN]: '※ Please be noted that ingredients on the menu may vary depending on the availability status',
        [I18N.JP]: '※ メニューは仕入状況等により食材変更となる場合がございます。予めご了承ください'
    },



    'dli.s2.cpt': {
        [I18N.ZH]: '品赏',
        [I18N.EN]: 'Tasting',
        [I18N.JP]: '味わい'
    },
    'dli.s2.desc1': {
        [I18N.ZH]: '对佳馔的执着',
        [I18N.EN]: 'Persistence in the best viands.',
        [I18N.JP]: '極上なお料理へのこだわり'
    },
    'dli.s2.desc2': {
        [I18N.ZH]: '更精粹的技艺',
        [I18N.EN]: 'Refined cooking craft.',
        [I18N.JP]: 'シェフたちが最高の食材を用い'
    },
    'dli.s2.desc3': {
        [I18N.ZH]: '更新鲜的食材',
        [I18N.EN]: 'Freshest ingredient.',
        [I18N.JP]: '匠の技を発揮した珠玉の一品で'
    },
    'dli.s2.desc4': {
        [I18N.ZH]: '只为诠释独道的料理创作',
        [I18N.EN]: 'All for the most exceptional culinary creation.',
        [I18N.JP]: '特別なオリジナル食体験を創り出します'
    },
    'dli.s2.desc5': {
        [I18N.ZH]: '以 OMAKASE 形式',
        [I18N.EN]: 'Presented in Omakase,',
        [I18N.JP]: '自然の恵みをふんだんに使用したおまかせコース'
    },
    'dli.s2.desc6': {
        [I18N.ZH]: '融汇自然的至臻馈赠',
        [I18N.EN]: 'it is the ultimate gift of nature,',
        [I18N.JP]: 'お客様に楽しんでいただけるように'
    },
    'dli.s2.desc7': {
        [I18N.ZH]: '承载匠心的料理之魂',
        [I18N.EN]: 'carrying the soul of cooking artisanship.',
        [I18N.JP]: 'シェフが一皿一皿に丁寧に心を込めて'
    },

    'dli.s3.cpt': {
        [I18N.ZH]: '甄选',
        [I18N.EN]: 'Selecting',
        [I18N.JP]: 'セレクション'
    },
    'dli.s3.desc1': {
        [I18N.ZH]: '探寻北海道在地珍馐',
        [I18N.EN]: 'Explore the local delicacies in Hokkaido,',
        [I18N.JP]: '厳選した北海道産の食の宝庫を味わえる'
    },
    'dli.s3.desc2': {
        [I18N.ZH]: '尊重食材的四季休憩',
        [I18N.EN]: 'where the marine habitat is respected,',
        [I18N.JP]: '四季折々の旬の味わいを大切にする料理で'
    },
    'dli.s3.desc3': {
        [I18N.ZH]: '捕捉自然之味',
        [I18N.EN]: 'To catch the most natural flavour.',
        [I18N.JP]: '自然の幸を存分にご満喫ください'
    },
    'dli.s3.desc4': {
        [I18N.ZH]: '深思土壤 共鸣万物',
        [I18N.EN]: 'With in-depth awareness and respect of\neverything from the earth,',
        [I18N.JP]: '土にも恵まれている地元食材を極め'
    },
    'dli.s3.desc5': {
        [I18N.ZH]: '久炼技艺 潜心雕琢',
        [I18N.EN]: 'Chef’s skill is honed with dedication',
        [I18N.JP]: 'シェフが素材の味を最大限に引き出した'
    },
    'dli.s3.desc6': {
        [I18N.ZH]: '终就无穷回味',
        [I18N.EN]: 'to attain the umami on your tongue.',
        [I18N.JP]: '趣向を凝らした美しい料理をお召あげりください'
    },

    // 'dli.s4.desc1': {
    //     [I18N.ZH]: '悦享朝晨，赏味西式或日式私厨早餐',
    //     [I18N.EN]: 'Enjoy the morning and taste the Western or Japanese private chef breakfast',
    //     [I18N.JP]: '朝を楽しみ、西洋または日本のプライベートシェフの朝食を味わう'
    // },
    // 'dli.s4.desc2': {
    //     [I18N.ZH]: '珍稀食材，品味私人高定晚宴',
    //     [I18N.EN]: 'Rare ingredients, taste private high-end dinner',
    //     [I18N.JP]: '珍しい食材、プライベートな高級ディナーを味わう'
    // },
    // 'dli.s4.tip': {
    //     [I18N.ZH]: '在您的入住方案中，含前三晚私厨定制晚宴',
    //     [I18N.EN]: 'In your stay plan, it includes a private chef custom dinner for the first three nights',
    //     [I18N.JP]: 'あなたの滞在計画では、最初の3泊のプライベートシェフカスタムディナーが含まれています'
    // },

    // 预订
    'reserve.cpt1': {
        [I18N.ZH]: '管家将于提交后1个工作日内，以邮件形式与您联系具体事宜',
        [I18N.EN]: 'The housekeeper will contact you via email within 1 working day after your submission.',
        [I18N.JP]: '送信後1営業日以内にコンシェルジュよりメールにてご連絡いたします',
    },
    'reserve.cpt2': {
        [I18N.ZH]: '您也可以拨打预订电话 +81 136 55 8917',
        [I18N.EN]: 'You can also make a reservation by calling +81 136 55 8917',
        [I18N.JP]: 'ご予約は+81 136 55 8917までお電話でも承ります',
    },
    'reserve.cpt3': {
        [I18N.ZH]: '或发送邮件至 info@ryowhagroup.com 进行预订',
        [I18N.EN]: 'or email info@ryowhagroup.com',
        [I18N.JP]: 'または info@ryowhagroup.com までメールにてご予約ください',
    },

    'reserve.policy.title': {
        [I18N.ZH]: '入住政策:',
        [I18N.EN]: 'Check-in Policies:',
        [I18N.JP]: 'チェックインポリシー:',
    },

    'reserve.policy.desc1': {
        [I18N.ZH]: '· 2023年12月1日起开放入住预订，6天5晚起订',
        [I18N.EN]: '· Reservation opens from 1 December 2023, 5 nights minimum.',
        [I18N.JP]: '· 2023年12月1日より予約受付開始、5泊からのご予約を承ります。',
    },
    'reserve.policy.desc2': {
        [I18N.ZH]: '· 入住时间: 16点后；退房时间: 10点前',
        [I18N.EN]: '· Check-in time: after 16:00; check-out time: before 10:00',
        [I18N.JP]: '· チェックイン：16:00以降、チェックアウト：10:00以前',
    },
    // 'reserve.policy.desc3': {
    //     [I18N.ZH]: '· 入住人数: 最多 15 位住客 (含最多 12 位成人住客，以及孩童、婴儿、随行人员)',
    //     [I18N.EN]: '· Number of guests: up to 15 guests (including up to 12 adults, as well as children, infants, and accompanying personnel)',
    //     [I18N.JP]: '· ゲスト数：最大15名（大人12名、子供、幼児、付添人を含む）',
    // },
    'reserve.policy.desc4': {
        [I18N.ZH]: '· 入住人数必须为确认函所示人数，若未经协商超出约定人数，将额外收取人员费用 (超员费为＄300/晚/人，含早餐)',
        [I18N.EN]: '· The number of guests must be the exact number shown in the confirmation letter. If guests exceed the agreed number without prior consultation, extra fee will be charged ($300/night/person, breakfast included).',
        [I18N.JP]: '· 宿泊人数は確認書に記載された人数とし、事前のご相談なしに宿泊人数が合意人数を超えた場合は、追加費用（300ドル/泊/人、朝食付き）を申し受けます',
    },
    'reserve.policy.desc5': {
        [I18N.ZH]: '· 全屋室内禁止吸烟',
        [I18N.EN]: '· No smoking in the house',
        [I18N.JP]: '· 全室室内禁煙',
    },
    'reserve.policy.desc6': {
        [I18N.ZH]: '· 谢绝携带宠物入住',
        [I18N.EN]: '· No pets allowed',
        [I18N.JP]: '· ペット不可',
    },




    'reserve.form.date': {
        [I18N.ZH]: '入住日期',
        [I18N.EN]: 'Check-in Date',
        [I18N.JP]: 'チェックイン日',
    },
    'reserve.form.days': {
        [I18N.ZH]: '入住天数（6天5晚起订）',
        [I18N.EN]: 'Nights (5 nights minimum.)',
        [I18N.JP]: '宿泊日数（5泊から承ります）',
    },
    'reserve.form.adults': {
        [I18N.ZH]: '成人人数',
        [I18N.EN]: 'Adults',
        [I18N.JP]: '大人の人数',
    },
    'reserve.form.children': {
        [I18N.ZH]: '儿童人数（7岁以下）',
        [I18N.EN]: 'Children (under 7)',
        [I18N.JP]: 'お子様の人数（7歳未満）',
    },
    'reserve.form.entourage': {
        [I18N.ZH]: '随行人员',
        [I18N.EN]: 'Entourage',
        [I18N.JP]: '随行員',
    },
    'reserve.form.name': {
        [I18N.ZH]: '联系人',
        [I18N.EN]: 'Contact',
        [I18N.JP]: '連絡先',
    },
    'reserve.form.name.placeholder': {
        [I18N.ZH]: '请输入联系人姓名',
        [I18N.EN]: 'Please enter the contact name',
        [I18N.JP]: '連絡先のお名前を入力してください',
    },
    'reserve.form.phone': {
        [I18N.ZH]: '联系电话',
        [I18N.EN]: 'Contact number',
        [I18N.JP]: '連絡先電話番号',
    },
    'reserve.form.phone.placeholder': {
        [I18N.ZH]: '请填写国家码+电话号码',
        [I18N.EN]: 'Please enter country code + phone number',
        [I18N.JP]: '国番号＋電話番号を入力してください',
    },
    'reserve.form.email': {
        [I18N.ZH]: '电子邮箱',
        [I18N.EN]: 'E-mail',
        [I18N.JP]: 'Eメール',
    },
    'reserve.form.email.placeholder': {
        [I18N.ZH]: '请输入电子邮箱',
        [I18N.EN]: 'Please enter e-mail',
        [I18N.JP]: 'メールアドレスを入力してください',
    },
    'reserve.form.notes': {
        [I18N.ZH]: '其他',
        [I18N.EN]: 'Others',
        [I18N.JP]: 'その他',
    },
    'reserve.form.notes.placeholder': {
        [I18N.ZH]: '您的定制化需求',
        [I18N.EN]: 'Your personal preference',
        [I18N.JP]: 'カスタマイズのご要望',
    },


    'reserve.form.name.error': {
        [I18N.ZH]: '请输入联系人姓名',
        [I18N.EN]: 'Please enter the contact name',
        [I18N.JP]: '連絡先のお名前を入力してください',
    },
    'reserve.form.phone.error': {
        [I18N.ZH]: '请输入联系电话',
        [I18N.EN]: 'Please enter the contact number',
        [I18N.JP]: '電話番号を入力してください',
    },
    'reserve.form.email.error': {
        [I18N.ZH]: '请输入电子邮箱',
        [I18N.EN]: 'Please enter e-mail',
        [I18N.JP]: 'メールアドレスを入力してください',
    },
    'reserve.form.success.cpt': {
        [I18N.ZH]: '提交成功',
        [I18N.EN]: 'Submission Successful',
        [I18N.JP]: '送信完了',
    },
    'reserve.form.success.desc': {
        [I18N.ZH]: '我们的管家将在1个工作日内与您联系',
        [I18N.EN]: 'Our housekeeper will contact you in 1 working day',
        [I18N.JP]: 'コンシェルジュが1営業日以内にご連絡いたします',
    },
    'reserve.form.ok': {
        [I18N.ZH]: '确定',
        [I18N.EN]: 'Yes',
        [I18N.JP]: '確認',
    }
}
