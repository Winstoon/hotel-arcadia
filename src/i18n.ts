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
        [I18N.EN]: 'Reserve',
        [I18N.JP]: '予約',
    },

    'reserve2': {
        [I18N.ZH]: '立即预订',
        [I18N.EN]: 'Reserve',
        [I18N.JP]: '予約',
    },

    'explore': {
        [I18N.ZH]: '探索',
        [I18N.EN]: 'Exploration',
        [I18N.JP]: '探索',
    },

    'environment': {
        [I18N.ZH]: '境',
        [I18N.EN]: 'Environment',
        [I18N.JP]: '境',
    },

    'residence': {
        [I18N.ZH]: '居',
        [I18N.EN]: 'Residence',
        [I18N.JP]: '居',
    },

    'delicious': {
        [I18N.ZH]: '肴',
        [I18N.EN]: 'Delicious',
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
        [I18N.JP]: '提出する',
    },

    'wechat.desc': {
        [I18N.ZH]: '打开微信扫描二维码，关注我们',
        [I18N.EN]: 'Open WeChat to scan the QR code and follow us',
        [I18N.JP]: 'WeChatを開いてQRコードをスキャンしてフォローしてください',
    },

    'home.s2.title': {
        [I18N.ZH]: 'ARCADIA 二世古 雪屋',
        [I18N.EN]: 'ARCADIA NISEKO YUKIYA',
        [I18N.JP]: 'ARCADIA ニセコ 雪屋',
    },
    'home.s2.desc1': {
        [I18N.ZH]: '滑雪盛揽 银白之梦',
        [I18N.EN]: 'Skiing and snowboarding in the white world',
        [I18N.JP]: '白い世界でスキーやスノーボード',
    },
    'home.s2.desc2': {
        [I18N.ZH]: '绵延叠嶂中探寻羊蹄山麓',
        [I18N.EN]: 'Explore the foot of Mt. Yotei in the mountains',
        [I18N.JP]: '山の中で羊蹄山の麓を探索する',
    },

    'home.s3.desc1': {
        [I18N.ZH]: '登临旷美雪岭 穿梭山林',
        [I18N.EN]: 'Climb the beautiful snow ridge and shuttle through the mountains',
        [I18N.JP]: '美しい雪の尾根を登り、山をシャトルする',
    },
    'home.s3.desc2': {
        [I18N.ZH]: '探秘晶莹皎洁的非凡之旅',
        [I18N.EN]: 'Explore the extraordinary journey of crystal clear',
        [I18N.JP]: 'クリスタルクリアの非凡な旅を探索する',
    },

    'home.s4.desc1': {
        [I18N.ZH]: '建筑与人文的灵动交融',
        [I18N.EN]: 'The dynamic blend of architecture and culture',
        [I18N.JP]: '建築と文化の動的なブレンド',
    },
    'home.s4.desc2': {
        [I18N.ZH]: '尽享超然物外的无尽惬意',
        [I18N.EN]: 'Enjoy endless comfort beyond the world',
        [I18N.JP]: '世界を超えた無限の快適さをお楽しみください',
    },

    'home.s5.desc1': {
        [I18N.ZH]: '私享主厨的诠释',
        [I18N.EN]: 'The chef\'s interpretation',
        [I18N.JP]: 'シェフの解釈',
    },
    'home.s5.desc2': {
        [I18N.ZH]: '回响技艺与珍馐的高定赏味',
        [I18N.EN]: 'Echoing skills and high-quality taste of rare delicacies',
        [I18N.JP]: '希少な珍味のエコー技術と高品質の味',
    },

    'home.s6.title': {
        [I18N.ZH]: 'ARCADIA坐落于北海道二世古地区最富盛名的比罗夫镇',
        [I18N.EN]: 'ARCADIA is located in the most famous Hirafu Town in Niseko, Hokkaido',
        [I18N.JP]: 'ARCADIAは、北海道ニセコの最も有名な比羅夫町にあります',
    },
    'home.s6.desc1': {
        [I18N.ZH]: '距离札幌新千岁机场 (New Chitose Airport) 约2小时车程',
        [I18N.EN]: 'About 2 hours drive from New Chitose Airport in Sapporo',
        [I18N.JP]: '札幌の新千歳空港から約2時間のドライブ',
    },
    'home.s6.desc2': {
        [I18N.ZH]: '距离北海道札幌市 (Sapporo, Hokkaido) 约2小时车程',
        [I18N.EN]: 'About 2 hours drive from Sapporo, Hokkaido',
        [I18N.JP]: '北海道札幌から約2時間のドライブ',
    },
    'home.s6.desc3': {
        [I18N.ZH]: '距离比罗夫镇游客中心步行约5分钟',
        [I18N.EN]: 'About 5 minutes walk from Central Hirafu Village',
        [I18N.JP]: '比羅夫村の中心から徒歩約5分',
    },
    'home.s6.desc4': {
        [I18N.ZH]: '距离比罗夫镇缆车中心车程约5分钟',
        [I18N.EN]: 'About 5 minutes drive from Ace Family Chair Lift',
        [I18N.JP]: 'エースファミリーチェアリフトから車で約5分',
    },
    'home.s6.desc5': {
        [I18N.ZH]: '距离YUKORO温泉 (预计2025年开业) 20米 步行约1分钟',
        [I18N.EN]: 'About 1 minute walk from YUKORO Onsen (expected to open in 2025)',
        [I18N.JP]: 'YUKORO温泉から徒歩約1分（2025年にオープン予定）',
    },
    
    'home.s6.desc6': {
        [I18N.ZH]: '地址：〒044-0089 日本国北海道虻田郡俱知安町二世谷比罗夫镇2条2丁目7番地18号',
        [I18N.EN]: 'Address: 〒044-0089 2-2-7-18 Niseko Hirafu, Kutchan-cho, Abuta-gun, Hokkaido, Japan',
        [I18N.JP]: '住所：〒044-0089 北海道虻田郡倶知安町二世谷比羅夫2-2-7-18',
    },
    'home.s6.desc7': {
        [I18N.ZH]: '查看地图>',
        [I18N.EN]: 'View map>',
        [I18N.JP]: '地図を見る>',
    },
    
    'home.s6.desc8': {
        [I18N.ZH]: '电话：+81 0136 55 7559',
        [I18N.EN]: 'Phone: +81 0136 55 7559',
        [I18N.JP]: '電話：+81 0136 55 7559',
    },
    'home.s6.desc9': {
        [I18N.ZH]: '传真：+81 136 55 8927',
        [I18N.EN]: 'Fax: +81 136 55 8927',
        [I18N.JP]: 'FAX：+81 136 55 8927',
    },
    'home.s6.desc10': {
        [I18N.ZH]: '邮箱：info.arcadia@ryowhagroup.com',
        [I18N.EN]: 'Email: info.arcadia@ryowhagroup.com',
        [I18N.JP]: 'メール：info.arcadia@ryowhagroup.com'
    },

    // 环境

    'env.s1.desc1': {
        [I18N.ZH]: '登临旷美雪岭 穿梭山林',
        [I18N.EN]: 'Climb the beautiful snow ridge and shuttle through the mountains',
        [I18N.JP]: '美しい雪の尾根を登り、山をシャトルする',
    },
    'env.s1.desc2': {
        [I18N.ZH]: '探秘晶莹皎洁的非凡之旅',
        [I18N.EN]: 'Explore the extraordinary journey of crystal clear',
        [I18N.JP]: 'クリスタルクリアの非凡な旅を探索する',
    },

    'env.s2.title': {
        [I18N.ZH]: '追逐',
        [I18N.EN]: 'Chase',
        [I18N.JP]: '追う',
    },
    'env.s2.desc1': {
        [I18N.ZH]: '风雪让路 正当雪时',
        [I18N.EN]: 'The wind and snow make way for the snow',
        [I18N.JP]: '風雪讓路 正當雪時',
    },
    'env.s2.desc2': {
        [I18N.ZH]: '身随滑雪的激情与灵动',
        [I18N.EN]: 'Follow the passion and agility of skiing',
        [I18N.JP]: '身隨滑雪的激情與靈動',
    },
    'env.s2.desc3': {
        [I18N.ZH]: '体味内心的怦然与明朗',
        [I18N.EN]: 'Feel the heartbeat and clarity of the heart',
        [I18N.JP]: '體味內心的怦然與明朗',
    },
    'env.s2.desc4': {
        [I18N.ZH]: '飞驰于冬日的主场',
        [I18N.EN]: 'Flying in the home of winter',
        [I18N.JP]: '飛馳於冬日的主場',
    },
    'env.s2.desc5': {
        [I18N.ZH]: '尽兴施展雪道表现',
        [I18N.EN]: 'Enjoy the snow performance',
        [I18N.JP]: '盡興施展雪道表現',
    },
    'env.s2.desc6': {
        [I18N.ZH]: '向雪而去 乘雪飞扬',
        [I18N.EN]: 'Go to the snow and fly in the snow',
        [I18N.JP]: '向雪而去 乘雪飛揚',
    },

    'env.s3.title': {
        [I18N.ZH]: '沉浸',
        [I18N.EN]: 'Immerse',
        [I18N.JP]: '浸る',
    },
    'env.s3.desc1': {
        [I18N.ZH]: '佇立于羊蹄山麓的宅邸',
        [I18N.EN]: 'The mansion standing at the foot of Mt. Yotei',
        [I18N.JP]: '羊蹄山の麓に立つ邸宅',
    },
    'env.s3.desc2': {
        [I18N.ZH]: '勾勒一段雪的追风逐日',
        [I18N.EN]: 'Outline a wind and snow',
        [I18N.JP]: '風雪を描く',
    },
    'env.s3.desc3': {
        [I18N.ZH]: '目之所及',
        [I18N.EN]: 'As far as the eye can see',
        [I18N.JP]: '目に見えるところ',
    },
    'env.s3.desc4': {
        [I18N.ZH]: '银装素裹 比比皆是',
        [I18N.EN]: 'Silver wrapped all over',
        [I18N.JP]: '銀装素裹 比比皆是',
    },
    'env.s3.desc5': {
        [I18N.ZH]: '穿透无边窗景的光耀',
        [I18N.EN]: 'Penetrate the glory of the endless window view',
        [I18N.JP]: '無限の窓景の栄光を貫く',
    },
    'env.s3.desc6': {
        [I18N.ZH]: '在自然景致的簇拥下',
        [I18N.EN]: 'Under the natural scenery',
        [I18N.JP]: '自然の景色の下',
    },
    'env.s3.desc7': {
        [I18N.ZH]: '探秘晶莹皎洁的非凡之旅',
        [I18N.EN]: 'Explore the extraordinary journey of crystal clear',
        [I18N.JP]: 'クリスタルクリアの非凡な旅を探索する',
    },

    'env.s4.title': {
        [I18N.ZH]: '四季',
        [I18N.EN]: 'Seasons',
        [I18N.JP]: '四季',
    },
    'env.s4.desc1': {
        [I18N.ZH]: '四季皆宜的度假胜地',
        [I18N.EN]: 'A holiday destination for all seasons',
        [I18N.JP]: '四季を通じての休日の目的地',
    },
    'env.s4.desc2': {
        [I18N.ZH]: '毗邻羊蹄山无限风光',
        [I18N.EN]: 'Adjacent to the infinite scenery of Mt. Yotei',
        [I18N.JP]: '羊蹄山の無限の景色に隣接',
    },
    'env.s4.desc3': {
        [I18N.ZH]: '大地复苏的时节',
        [I18N.EN]: 'The season of the earth\'s recovery',
        [I18N.JP]: '大地の回復の季節',
    },
    'env.s4.desc4': {
        [I18N.ZH]: '一探茂盛幽深的森林',
        [I18N.EN]: 'Explore the lush and deep forest',
        [I18N.JP]: '豊かで深い森を探索する',
    },
    'env.s4.desc5': {
        [I18N.ZH]: '踏车纵览山顶花田',
        [I18N.EN]: 'Cycling to the top of the mountain',
        [I18N.JP]: '山の頂上までサイクリング',
    },
    'env.s4.desc6': {
        [I18N.ZH]: '挥杆畅享高尔夫乐趣',
        [I18N.EN]: 'Enjoy the fun of golf',
        [I18N.JP]: 'ゴルフの楽しみを味わう',
    },

    'env.s5.title': {
        [I18N.ZH]: "知·行",
        [I18N.EN]: 'Itinerary',
        [I18N.JP]: '知·行',
    },

    'env.s5.image1.cpt': {
        [I18N.ZH]: '私享专车',
        [I18N.EN]: 'Private car',
        [I18N.JP]: '専用車',
    },
    'env.s5.image1.desc1': {
        [I18N.ZH]: '专属商务车及司机',
        [I18N.EN]: 'Exclusive business car and driver',
        [I18N.JP]: '専用ビジネスカーとドライバー',
    },
    'env.s5.image1.desc2': {
        [I18N.ZH]: '往返机场 五大雪场专车 探索周边',
        [I18N.EN]: 'Round-trip airport five major ski resorts special car exploration around',
        [I18N.JP]: '往復空港5つの主要スキーリゾート専用車周辺の探索',
    },
    'env.s5.image1.desc3': {
        [I18N.ZH]: '行程无忧 出行尽在掌握',
        [I18N.EN]: 'Travel without worry',
        [I18N.JP]: '旅行の心配なし',
    },

    'env.s5.image2.cpt': {
        [I18N.ZH]: '一站预约',
        [I18N.EN]: 'One-stop reservation',
        [I18N.JP]: 'ワンストップ予約',
    },
    'env.s5.image2.desc1': {
        [I18N.ZH]: '滑雪私教 雪票 缆车 餐厅',
        [I18N.EN]: 'Skiing private teaching snow ticket cable car restaurant',
        [I18N.JP]: 'スキーの個人レッスン、スノーチケット、ケーブルカー、レストラン',
    },
    'env.s5.image2.desc2': {
        [I18N.ZH]: '一站式预约服务',
        [I18N.EN]: 'One-stop reservation service',
        [I18N.JP]: 'ワンストップ予約サービス',
    },
    'env.s5.image2.desc3': {
        [I18N.ZH]: '个性定制 尽享怡然舒心',
        [I18N.EN]: 'Personalized customization',
        [I18N.JP]: '個性的なカスタマイズ',
    },

    'env.s5.image3.cpt': {
        [I18N.ZH]: '专人陪同',
        [I18N.EN]: 'Accompanied by a special person',
        [I18N.JP]: '専任者に同行',
    },
    'env.s5.image3.desc1': {
        [I18N.ZH]: '专人陪同租购雪具',
        [I18N.EN]: 'Accompanied by a special person to rent and buy snow equipment',
        [I18N.JP]: '専任者に同行してスノー機器を購入する',
    },
    'env.s5.image3.desc2': {
        [I18N.ZH]: '当地出行的顾问或陪同',
        [I18N.EN]: 'Local travel consultant or companion',
        [I18N.JP]: '地元の旅行コンサルタントまたは同行者',
    },
    'env.s5.image3.desc3': {
        [I18N.ZH]: '至臻体慰 佐候不时之需',
        [I18N.EN]: 'The body is comforted',
        [I18N.JP]: '至臻体慰 佐候不时之需',
    },

    // 居所

    'res.s1.desc1': {
        [I18N.ZH]: '建筑与人文的灵动交融',
        [I18N.EN]: 'The dynamic blend of architecture and culture',
        [I18N.JP]: '建築と文化の動的なブレンド',
    },
    'res.s1.desc2': {
        [I18N.ZH]: '尽享超然物外的无尽惬意',
        [I18N.EN]: 'Enjoy endless comfort beyond the world',
        [I18N.JP]: '世界を超えた無限の快適さをお楽しみください',
    },

    'res.s2.desc1': {
        [I18N.ZH]: '意大利建筑巨匠',
        [I18N.EN]: 'Italian architectural master',
        [I18N.JP]: 'イタリアの建築の巨匠',
    },
    'res.s2.desc2': {
        [I18N.ZH]: 'RICCARDO RUBELLIA 倾心之作',
        [I18N.EN]: 'RICCARDO RUBELLIA\'s masterpiece',
        [I18N.JP]: 'RICCARDO RUBELLIAの傑作',
    },
    'res.s2.desc3': {
        [I18N.ZH]: '极简外廓与内里木石灵动交融',
        [I18N.EN]: 'The minimalist outline blends with the wood and stone inside',
        [I18N.JP]: 'ミニマリストの輪郭は内側の木と石と調和しています',
    },
    'res.s2.desc4': {
        [I18N.ZH]: '如临世外之境',
        [I18N.EN]: 'Like a world outside the world',
        [I18N.JP]: '世界の外の世界のように',
    },
    'res.s2.desc5': {
        [I18N.ZH]: '独立三层宅邸',
        [I18N.EN]: 'Independent three-story mansion',
        [I18N.JP]: '独立した3階建ての邸宅',
    },
    'res.s2.desc6': {
        [I18N.ZH]: '全屋6间全套房卧室',
        [I18N.EN]: '6 full suites',
        [I18N.JP]: '6つのフルスイート',
    },
    'res.s2.desc7': {
        [I18N.ZH]: '双层挑高客厅',
        [I18N.EN]: 'Double-height living room',
        [I18N.JP]: 'ダブルハイトリビングルーム',
    },
    'res.s2.desc8': {
        [I18N.ZH]: '双通道壁炉与专属酒窖',
        [I18N.EN]: 'Double channel fireplace and exclusive wine cellar',
        [I18N.JP]: 'ダブルチャンネル暖炉と専用ワインセラー',
    },
    'res.s2.desc9': {
        [I18N.ZH]: '独享整栋家外之家',
        [I18N.EN]: 'Enjoy the whole house',
        [I18N.JP]: '家全体を楽しむ',
    },

    'res.s3.title': {
        [I18N.ZH]: '会客起居',
        [I18N.EN]: 'Living room',
        [I18N.JP]: 'リビングルーム',
    },
    'res.s3.desc1': {
        [I18N.ZH]: '独立的三层宅邸',
        [I18N.EN]: 'Independent three-story mansion',
        [I18N.JP]: '独立した3階建ての邸宅',
    },
    'res.s3.desc2': {
        [I18N.ZH]: '生活区与休憩区和恰相融',
        [I18N.EN]: 'The living area blends in with the rest area',
        [I18N.JP]: '生活エリアは休憩エリアと調和しています',
    },
    'res.s3.desc3': {
        [I18N.ZH]: '诠释线性美学之韵',
        [I18N.EN]: 'Interpretation of the charm of linear aesthetics',
        [I18N.JP]: '線形美学の魅力の解釈',
    },
    'res.s3.desc4': {
        [I18N.ZH]: '开阔尺度 无边窗景',
        [I18N.EN]: 'Open scale',
        [I18N.JP]: 'オープンスケール',
    },
    'res.s3.desc5': {
        [I18N.ZH]: '壁炉渐燃 远眺羊蹄',
        [I18N.EN]: 'Fireplace burning',
        [I18N.JP]: '暖炉が燃える',
    },
    'res.s3.desc6': {
        [I18N.ZH]: '心随飞雪舞动远去',
        [I18N.EN]: 'The heart follows the flying snow',
        [I18N.JP]: '心は飛ぶ雪に従う',
    },
    'res.s3.tip': {
        [I18N.ZH]: '· 智能 APPLE TV 和 DEVIALET 音响 尽享无限娱乐',
        [I18N.EN]: '· Intelligent APPLE TV and DEVIALET speakers Enjoy endless entertainment',
        [I18N.JP]: '· インテリジェントAPPLE TVとDEVIALETスピーカー 無限のエンターテイメントをお楽しみください',
    },
    'res.s3.tip1': {
        [I18N.ZH]: '· 智能 APPLE TV 和 DEVIALET 音响',
        [I18N.EN]: 'Living room',
        [I18N.JP]: 'リビングルーム',
    },
    'res.s3.tip2': {
        [I18N.ZH]: '尽享无限娱乐',
        [I18N.EN]: 'Enjoy endless entertainment',
        [I18N.JP]: '無限のエンターテイメントをお楽しみください',
    },

    'res.s4.title': {
        [I18N.ZH]: '主人房',
        [I18N.EN]: 'Master bedroom',
        [I18N.JP]: 'マスターベッドルーム',
    },
    'res.s4.desc1': {
        [I18N.ZH]: 'MASTER ROOM I',
        [I18N.EN]: 'MASTER ROOM I',
        [I18N.JP]: 'MASTER ROOM I',
    },
    'res.s4.desc2': {
        [I18N.ZH]: '私享 65 平方米开阔空间',
        [I18N.EN]: 'Private 65 square meters of open space',
        [I18N.JP]: 'プライベート65平方メートルのオープンスペース',
    },
    'res.s4.desc3': {
        [I18N.ZH]: '独立阳台直面羊蹄山麓',
        [I18N.EN]: 'Independent balcony facing the foot of Mt. Yotei',
        [I18N.JP]: '羊蹄山の麓に面した独立したバルコニー',
    },
    'res.s4.desc4': {
        [I18N.ZH]: '举目皆为恢弘至美',
        [I18N.EN]: 'The eyes are magnificent',
        [I18N.JP]: '目は壮大です',
    },
    'res.s4.desc5': {
        [I18N.ZH]: 'MASTER ROOM II',
        [I18N.EN]: 'MASTER ROOM II',
        [I18N.JP]: 'MASTER ROOM II',
    },
    'res.s4.desc6': {
        [I18N.ZH]: '独享 55 平方米静谧空间',
        [I18N.EN]: 'Enjoy 55 square meters of quiet space',
        [I18N.JP]: '静かな空間を55平方メートル楽しむ',
    },
    'res.s4.desc7': {
        [I18N.ZH]: '雅致格局',
        [I18N.EN]: 'Elegant pattern',
        [I18N.JP]: 'エレガントなパターン',
    },
    'res.s4.desc8': {
        [I18N.ZH]: '尽享怡然私密',
        [I18N.EN]: 'Enjoy the privacy',
        [I18N.JP]: 'プライバシーをお楽しみください',
    },
    'res.s4.tip1': {
        [I18N.ZH]: '· 智能温控全屋地暖',
        [I18N.EN]: '· Intelligent temperature control',
        [I18N.JP]: '· インテリジェント温度制御',
    },
    'res.s4.tip2': {
        [I18N.ZH]: '· 步入式衣帽间',
        [I18N.EN]: '· Walk-in closet',
        [I18N.JP]: '· ウォークインクローゼット',
    },
    'res.s4.tip3': {
        [I18N.ZH]: '· 意大利进口家居',
        [I18N.EN]: '· Italian imported furniture',
        [I18N.JP]: '· イタリア製家具',
    },
    'res.s4.tip4': {
        [I18N.ZH]: '· 意大利顶奢品牌 AGAPE 浴缸',
        [I18N.EN]: '· Italian top luxury brand AGAPE bathtub',
        [I18N.JP]: '· イタリアのトップラグジュアリーブランドAGAPEバスタブ',
    },

    
    'res.s5.title': {
        [I18N.ZH]: '客房',
        [I18N.EN]: 'Guest Room',
        [I18N.JP]: 'ゲストルーム',
    },

    'res.s5.image1.cpt': {
        [I18N.ZH]: 'ROOM A',
        [I18N.EN]: 'ROOM A',
        [I18N.JP]: 'ROOM A',
    },
    'res.s5.image1.desc1': {
        [I18N.ZH]: '25平方米空间，榻榻米房',
        [I18N.EN]: '25 square meters of space, full house floor heating',
        [I18N.JP]: '25平方メートルのスペース、フルハウス床暖房',
    },
    // 'res.s5.image1.desc2': {
    //     [I18N.ZH]: 'VOLA 丹麦顶奢卫浴设施',
    //     [I18N.EN]: 'VOLA Danish top luxury bathroom facilities',
    //     [I18N.JP]: 'VOLAデンマークのトップラグジュアリーバスルーム設備',
    // },

    'res.s5.image2.cpt': {
        [I18N.ZH]: 'ROOM B',
        [I18N.EN]: 'ROOM B',
        [I18N.JP]: 'ROOM B',
    },
    'res.s5.image2.desc1': {
        [I18N.ZH]: '36平方米空间，KING SIZE 双人床房',
        [I18N.EN]: '36 square meters of space, KING SIZE double bed room',
        [I18N.JP]: '36平方メートルのスペース、KING SIZEダブルベッドルーム',
    },
    // 'res.s5.image2.desc2': {
    //     [I18N.ZH]: 'King Size 双人床，步入式衣帽间',
    //     [I18N.EN]: 'King Size double bed, walk-in closet',
    //     [I18N.JP]: 'キングサイズのダブルベッド、ウォークインクローゼット',
    // },

    'res.s5.image3.cpt': {
        [I18N.ZH]: 'ROOM C',
        [I18N.EN]: 'ROOM C',
        [I18N.JP]: 'ROOM C',
    },
    'res.s5.image3.desc1': {
        [I18N.ZH]: '36平方米空间，双拼床房',
        [I18N.EN]: '36 square meters of space, Double bed room',
        [I18N.JP]: '36平方メートルのスペース、ダブルベッドルーム'
    },
    // 'res.s5.image3.desc2': {
    //     [I18N.ZH]: 'King Size 双人床，步入式衣帽间',
    //     [I18N.EN]: 'King Size double bed, walk-in closet',
    //     [I18N.JP]: 'キングサイズのダブルベッド、ウォークインクローゼット',
    // },

    'res.s5.image4.cpt': {
        [I18N.ZH]: 'ROOM D',
        [I18N.EN]: 'ROOM D',
        [I18N.JP]: 'ROOM D',
    },
    'res.s5.image4.desc1': {
        [I18N.ZH]: '28平方米空间，KING SIZE 双人房',
        [I18N.EN]: '28 square meters of space, KING SIZE double bed room',
        [I18N.JP]: '28平方メートルのスペース、KING SIZEダブルベッドルーム',
    },
    // 'res.s5.image4.desc2': {
    //     [I18N.ZH]: 'King Size 双人床',
    //     [I18N.EN]: 'King Size double bed',
    //     [I18N.JP]: 'キングサイズのダブルベッド',
    // },

    'res.s5.image5.cpt': {
        [I18N.ZH]: '随行人员房',
        [I18N.EN]: 'Accompanying person room',
        [I18N.JP]: '同行者の部屋'
    },
    'res.s5.image5.desc1': {
        [I18N.ZH]: '位于地下一层，高低床房',
        [I18N.EN]: 'Located on the first floor, with high and low beds',
        [I18N.JP]: '地下1階に位置し、高低ベッドがあります',
    },
    // 'res.s5.image5.desc2': {
    //     [I18N.ZH]: '有序格局，与主人区私密分隔',
    //     [I18N.EN]: 'Ordered pattern, private separation from the master area',
    //     [I18N.JP]: '整然としたパターン、マスターエリアからのプライベートセパレーション',
    // },

    'res.s6.title': {
        [I18N.ZH]: '私享设施',
        [I18N.EN]: 'Private facilities',
        [I18N.JP]: 'プライベート施設',
    },
    'res.s6.desc1': {
        [I18N.ZH]: '酒窖',
        [I18N.EN]: 'Wine cellar',
        [I18N.JP]: 'ワインセラー',
    },
    'res.s6.desc2': {
        [I18N.ZH]: '专业级酒窖空间',
        [I18N.EN]: 'Professional wine cellar space',
        [I18N.JP]: 'プロのワインセラー空間',
    },
    'res.s6.desc3': {
        [I18N.ZH]: '为名酒佳酿提供卓越窖藏',
        [I18N.EN]: 'Provide excellent cellar for famous wine',
        [I18N.JP]: '有名なワインのための優れたセラーを提供する',
    },
    'res.s6.desc4': {
        [I18N.ZH]: '温泉 SPA 房',
        [I18N.EN]: 'Hot spring SPA room',
        [I18N.JP]: '温泉 SPA ルーム',
    },
    'res.s6.desc5': {
        [I18N.ZH]: '康体养生 平心疗愈',
        [I18N.EN]: 'Health care',
        [I18N.JP]: '健康ケア',
    },
    'res.s6.desc6': {
        [I18N.ZH]: '由身至心 开启舒缓之境',
        [I18N.EN]: 'Open the soothing environment from the body to the heart',
        [I18N.JP]: '体から心への癒しの環境を開く',
    },
    'res.s6.desc7': {
        [I18N.ZH]: '滑雪用具干燥室',
        [I18N.EN]: 'Ski equipment drying room',
        [I18N.JP]: 'スキー用具乾燥室',
    },
    'res.s6.desc8': {
        [I18N.ZH]: '全套法国自动加热烘干设备',
        [I18N.EN]: 'Full set of French automatic heating and drying equipment',
        [I18N.JP]: 'フランス製の完全な自動加熱乾燥機',
    },
    'res.s6.desc9': {
        [I18N.ZH]: '纵享至臻滑雪之旅',
        [I18N.EN]: 'Enjoy the ultimate skiing trip',
        [I18N.JP]: '究極のスキー旅行をお楽しみください',
    },
    'res.s6.desc10': {
        [I18N.ZH]: '健身房',
        [I18N.EN]: 'Gym',
        [I18N.JP]: 'ジム',
    },
    'res.s6.desc11': {
        [I18N.ZH]: '全套 TECHNOGYM 设备',
        [I18N.EN]: 'Full set of TECHNOGYM equipment',
        [I18N.JP]: 'TECHNOGYM 設備一式',
    },
    'res.s6.desc12': {
        [I18N.ZH]: '满足多样体调需求',
        [I18N.EN]: 'Meet the needs of various body adjustments',
        [I18N.JP]: 'さまざまな体の調整ニーズに対応',
    },
    'res.s6.tip': {
        [I18N.ZH]: '· 功能设施亦包含中西厨房、洗衣房，尽享便捷无缝的居住体验',
        [I18N.EN]: '· Functional facilities also include Chinese and Western kitchens, laundry rooms, and enjoy a convenient and seamless living experience',
        [I18N.JP]: '· 機能的な施設には、中国と西洋のキッチン、洗濯室も含まれており、便利でシームレスな生活体験をお楽しみいただけます',
    },


    'res.s7.title': {
        [I18N.ZH]: '宅邸详情',
        [I18N.EN]: 'Mansion details',
        [I18N.JP]: '邸宅の詳細',
    },

    'res.s7.cpt1': {
        [I18N.ZH]: '基本信息',
        [I18N.EN]: 'Basic information',
        [I18N.JP]: '基本情報',
    },
    'res.s7.cpt1.1': {
        [I18N.ZH]: '全屋三层，地面二层，地下一层，建筑总面积 740 平方米；',
        [I18N.EN]: 'The whole house has three floors, two floors on the ground, one floor underground, and a total construction area of 740 square meters;',
        [I18N.JP]: '家全体には地上2階、地下1階があり、総建築面積は740平方メートルです。',
    },

    'res.s7.cpt2': {
        [I18N.ZH]: '套房信息',
        [I18N.EN]: 'Suite information',
        [I18N.JP]: 'スイート情報',
    },


    'res.s7.cpt2.1': {
        [I18N.ZH]: 'MASTER ROOM I: 65平方米，KING SIZE 双人床',
        [I18N.EN]: 'MASTER ROOM I: 65 square meters, equipped with King Size double bed',
        [I18N.JP]: 'MASTER ROOM I: 65平方メートル、King Sizeダブルベッド付き',
    },
    'res.s7.cpt2.2': {
        [I18N.ZH]: 'MASTER ROOM II: 55平方米，KING SIZE 双人床',
        [I18N.EN]: 'MASTER ROOM II: 55 square meters, equipped with King Size double bed',
        [I18N.JP]: 'MASTER ROOM II: 55平方メートル、King Sizeダブルベッド付き',
    },
    'res.s7.cpt2.3': {
        [I18N.ZH]: 'ROOM A: 25平方米，榻榻米',
        [I18N.EN]: 'ROOM A: 25 square meters, tatami',
        [I18N.JP]: 'ROOM A: 25平方メートル、畳',
    },
    'res.s7.cpt2.4': {
        [I18N.ZH]: 'ROOM B: 36平方米，KING SIZE 双人床',
        [I18N.EN]: 'ROOM B: 36 square meters, equipped with King Size double bed',
        [I18N.JP]: 'ROOM B: 36平方メートル、King Sizeダブルベッド付き',
    },
    'res.s7.cpt2.5': {
        [I18N.ZH]: 'ROOM C: 36平方米，双拼床',
        [I18N.EN]: 'ROOM C: 36 square meters, double bed',
        [I18N.JP]: 'ROOM C: 36平方メートル、ダブルベッド',
    },
    'res.s7.cpt2.6': {
        [I18N.ZH]: 'ROOM D: 28平方米，KING SIZE 双人床',
        [I18N.EN]: 'ROOM D: 28 square meters, equipped with King Size double bed',
        [I18N.JP]: 'ROOM D: 28平方メートル、King Sizeダブルベッド付き',
    },
    'res.s7.cpt2.7': {
        [I18N.ZH]: '随行人员房: 位于地下一层，高低床',
        [I18N.EN]: 'Accompanying person room: located on the first floor, high and low bed',
        [I18N.JP]: '同行者の部屋：1階にあり、高低ベッド',
    },

    'res.s7.cpt3': {
        [I18N.ZH]: '设施信息',
        [I18N.EN]: 'Facility information',
        [I18N.JP]: '施設情報',
    },
    'res.s7.cpt3.1': {
        [I18N.ZH]: '全屋地暖',
        [I18N.EN]: 'Full house floor heating',
        [I18N.JP]: 'フルハウス床暖房',
    },
    'res.s7.cpt3.2': {
        [I18N.ZH]: '全屋卫浴',
        [I18N.EN]: 'Full house bathroom',
        [I18N.JP]: 'フルハウスバスルーム',
    },
    'res.s7.cpt3.2.hover': {
        [I18N.ZH]: '全屋卫浴 (VOLA)、全屋坐便 (卫洗丽 WASHLET)',
        [I18N.EN]: 'Full house bathroom (VOLA), full house toilet (WASHLET)',
        [I18N.JP]: 'フルハウスバスルーム（VOLA）、フルハウストイレ（ウォシュレット）',
    },
    'res.s7.cpt3.3': {
        [I18N.ZH]: '双通道壁炉',
        [I18N.EN]: 'Double channel fireplace',
        [I18N.JP]: 'ダブルチャンネル暖炉',
    },
    'res.s7.cpt3.3.hover': {
        [I18N.ZH]: '燃木壁炉、酒精壁炉',
        [I18N.EN]: 'Wood-burning fireplace, alcohol fireplace',
        [I18N.JP]: '薪ストーブ、アルコールストーブ',
    },
    'res.s7.cpt3.4': {
        [I18N.ZH]: '酒窖',
        [I18N.EN]: 'Wine cellar',
        [I18N.JP]: 'ワインセラー',
    },
    'res.s7.cpt3.5': {
        [I18N.ZH]: '滑雪用具干燥室',
        [I18N.EN]: 'Ski equipment drying room',
        [I18N.JP]: 'スキー用具乾燥室',
    },
    'res.s7.cpt3.6': {
        [I18N.ZH]: '温泉 SPA 房',
        [I18N.EN]: 'Hot spring SPA room',
        [I18N.JP]: '温泉 SPA ルーム',
    },
    'res.s7.cpt3.7': {
        [I18N.ZH]: '干蒸房',
        [I18N.EN]: 'Dry steam room',
        [I18N.JP]: 'ドライスチームルーム',
    },
    'res.s7.cpt3.8': {
        [I18N.ZH]: '健身房',
        [I18N.EN]: 'Gym',
        [I18N.JP]: 'ジム',
    },
    'res.s7.cpt3.8.hover': {
        [I18N.ZH]: '全套 TECHNOGYM 设备',
        [I18N.EN]: 'Full set of TECHNOGYM equipment',
        [I18N.JP]: 'テクノジムの完全なセット',
    },
    'res.s7.cpt3.9': {
        [I18N.ZH]: '娱乐室',
        [I18N.EN]: 'Entertainment room',
        [I18N.JP]: 'エンターテイメントルーム',
    },
    'res.s7.cpt3.10': {
        [I18N.ZH]: '中西厨房',
        [I18N.EN]: 'Chinese and Western kitchen',
        [I18N.JP]: '中国と西洋のキッチン',
    },
    'res.s7.cpt3.10.hover': {
        [I18N.ZH]: '洗碗机、内置式烤箱、蒸箱 (米勒 MIELE)、内置冰箱 (利勃海尔 LIEBHERR)、咖啡机 (SMEG)',
        [I18N.EN]: 'Dishwasher, built-in oven, steamer (MIELE), built-in refrigerator (LIEBHERR), coffee machine (SMEG)',
        [I18N.JP]: '食器洗い機、ビルトインオーブン、スチーマー（MIELE）、ビルトイン冷蔵庫（LIEBHERR）、コーヒーマシン（SMEG）',
    },
    'res.s7.cpt3.11': {
        [I18N.ZH]: '洗衣房',
        [I18N.EN]: 'Laundry room',
        [I18N.JP]: '洗濯室',
    },
    'res.s7.cpt3.11.hover': {
        [I18N.ZH]: '双洗衣机、双烘干机 (米勒 MIELE)',
        [I18N.EN]: 'Independent laundry room, dryer (MIELE)',
        [I18N.JP]: '独立した洗濯室、乾燥機（MIELE）',
    },
    'res.s7.cpt3.12': {
        [I18N.ZH]: '车库',
        [I18N.EN]: 'Garage',
        [I18N.JP]: 'ガレージ',
    },
    'res.s7.cpt3.12.hover': {
        [I18N.ZH]: '双车位',
        [I18N.EN]: 'Double parking space',
        [I18N.JP]: 'ダブルパーキングスペース',
    },
    'res.s7.cpt3.13': {
        [I18N.ZH]: 'Apple TV',
        [I18N.EN]: 'Apple TV',
        [I18N.JP]: 'Apple TV',
    },
    'res.s7.cpt3.14': {
        [I18N.ZH]: 'DEVIALET音响',
        [I18N.EN]: 'DEVIALET audio',
        [I18N.JP]: 'DEVIALETオーディオ',
    },
    'res.s7.cpt3.15': {
        [I18N.ZH]: '无障碍设施',
        [I18N.EN]: 'Barrier-free facilities',
        [I18N.JP]: 'バリアフリー施設',
    },
    

    'res.s7.cpt4': {
        [I18N.ZH]: '服务信息',
        [I18N.EN]: 'Service information',
        [I18N.JP]: 'サービス情報',
    },
    'res.s7.cpt4.1': {
        [I18N.ZH]: '专属管家',
        [I18N.EN]: 'Exclusive butler',
        [I18N.JP]: '専属執事',
    },
    'res.s7.cpt4.2': {
        [I18N.ZH]: '专车服务',
        [I18N.EN]: 'Car service',
        [I18N.JP]: 'カーサービス',
    },
    'res.s7.cpt4.2.hover': {
        [I18N.ZH]: '一辆 10 座或 7 座机场往返专车服务 (1次，仅限二世谷地区)',
        [I18N.EN]: 'A 10-seater or 7-seater airport round-trip car service (1 time, only in Niseko area)',
        [I18N.JP]: '10人乗りまたは7人乗りの空港往復車サービス（1回、ニセコ地域のみ）',
    },
    'res.s7.cpt4.3': {
        [I18N.ZH]: '欢迎礼遇',
        [I18N.EN]: 'Welcome courtesy',
        [I18N.JP]: '歓迎の礼儀',
    },
    'res.s7.cpt4.3.hover': {
        [I18N.ZH]: '含欢迎小食、香槟、软饮',
        [I18N.EN]: 'Including welcome snacks, champagne, soft drinks',
        [I18N.JP]: '歓迎スナック、シャンパン、ソフトドリンクを含む',
    },
    'res.s7.cpt4.4': {
        [I18N.ZH]: '私厨早餐',
        [I18N.EN]: 'Private chef breakfast',
        [I18N.JP]: 'プライベートシェフ朝食',
    },
    'res.s7.cpt4.4.hover': {
        [I18N.ZH]: '私人厨师免费早餐服务 (日式或西式)',
        [I18N.EN]: 'Free breakfast service with private chef (Japanese or Western style)',
        [I18N.JP]: 'プライベートシェフ（日本食または洋食）付きの無料朝食サービス',
    },
    'res.s7.cpt4.5': {
        [I18N.ZH]: '私厨晚宴',
        [I18N.EN]: 'Private chef dinner',
        [I18N.JP]: 'プライベートシェフディナー',
    },
    'res.s7.cpt4.5.hover': {
        [I18N.ZH]: '在您的入住方案中，含前三晚私厨定制晚餐；如需提供其他入住日的晚餐服务，将另行收取费用（需入住前提前预订）',
        [I18N.EN]: 'In your stay plan, it includes a private chef custom dinner for the first three nights; if you need to provide dinner service for other stay days, an additional fee will be charged (advance reservation is required before check-in)',
        [I18N.JP]: 'あなたの滞在計画では、最初の3泊のプライベートシェフカスタムディナーが含まれています。他の滞在日のディナーサービスを提供する必要がある場合は、追加料金が請求されます（チェックイン前に事前予約が必要です）',
    },
    'res.s7.cpt4.6': {
        [I18N.ZH]: '水吧畅饮',
        [I18N.EN]: 'Free drinks at the bar',
        [I18N.JP]: 'バーでの無料ドリンク',
    },
    'res.s7.cpt4.7': {
        [I18N.ZH]: '客房清洁',
        [I18N.EN]: 'Room cleaning',
        [I18N.JP]: 'ルームクリーニング',
    },
    'res.s7.cpt4.7.hover': {
        [I18N.ZH]: '每日提供客房清洁家政服务；床单与毛巾每隔三日将会更换一次',
        [I18N.EN]: 'Daily room cleaning housekeeping service; bed sheets and towels will be replaced every three days',
        [I18N.JP]: '毎日のルームクリーニングの家政サービス。ベッドシーツとタオルは3日ごとに交換されます',
    },
    'res.s7.cpt4.8': {
        [I18N.ZH]: '夜床服务',
        [I18N.EN]: 'Night bed service',
        [I18N.JP]: 'ナイトベッドサービス',
    },
    'res.s7.cpt4.9': {
        [I18N.ZH]: '多语言服务',
        [I18N.EN]: 'Multilingual service',
        [I18N.JP]: '多言語サービス',
    },
    'res.s7.cpt4.10': {
        [I18N.ZH]: 'WI-FI',
        [I18N.EN]: 'WI-FI',
        [I18N.JP]: 'WI-FI',
    },

    'dli.s1.desc1': {
        [I18N.ZH]: '私享主厨的诠释',
        [I18N.EN]: 'The interpretation of the private chef',
        [I18N.JP]: 'プライベートシェフの解釈'
    },
    'dli.s1.desc2': {
        [I18N.ZH]: '回响技艺与珍馐的高定赏味',
        [I18N.EN]: 'Echoing skills and high-end taste of delicacies',
        [I18N.JP]: 'スキルと珍味の高級味'
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
        [I18N.ZH]: '味增汤',
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
        [I18N.JP]: '品評'
    },
    'dli.s2.desc1': {
        [I18N.ZH]: '对佳馔的执着',
        [I18N.EN]: 'The persistence of delicacies',
        [I18N.JP]: '美味の執着'
    },
    'dli.s2.desc2': {
        [I18N.ZH]: '更精粹的技艺',
        [I18N.EN]: 'More refined skills',
        [I18N.JP]: 'より洗練されたスキル'
    },
    'dli.s2.desc3': {
        [I18N.ZH]: '更新鲜的食材',
        [I18N.EN]: 'Fresh ingredients',
        [I18N.JP]: '新鮮な食材'
    },
    'dli.s2.desc4': {
        [I18N.ZH]: '只为诠释独道的料理创作',
        [I18N.EN]: 'Only to interpret the unique cooking creation',
        [I18N.JP]: '唯一の料理の創造を解釈する'
    },
    'dli.s2.desc5': {
        [I18N.ZH]: '以 OMAKASE 形式',
        [I18N.EN]: 'In OMAKASE form',
        [I18N.JP]: 'OMAKASE形式で'
    },
    'dli.s2.desc6': {
        [I18N.ZH]: '融汇自然的至臻馈赠',
        [I18N.EN]: 'Integrate the natural gift',
        [I18N.JP]: '自然の贈り物を統合する'
    },
    'dli.s2.desc7': {
        [I18N.ZH]: '承载匠心的料理之魂',
        [I18N.EN]: 'Carrying the soul of the chef',
        [I18N.JP]: 'シェフの魂を運ぶ'
    },

    'dli.s3.cpt': {
        [I18N.ZH]: '甄选',
        [I18N.EN]: 'Selection',
        [I18N.JP]: '選択'
    },
    'dli.s3.desc1': {
        [I18N.ZH]: '探寻北海道在地珍馐',
        [I18N.EN]: 'Explore Hokkaido\'s local delicacies',
        [I18N.JP]: '北海道の珍味を探索する'
    },
    'dli.s3.desc2': {
        [I18N.ZH]: '尊重食材的四季休憩',
        [I18N.EN]: 'Respect the four seasons of ingredients',
        [I18N.JP]: '食材の四季を尊重する'
    },
    'dli.s3.desc3': {
        [I18N.ZH]: '捕捉自然之味',
        [I18N.EN]: 'Capture the taste of nature',
        [I18N.JP]: '自然の味を捕らえる'
    },
    'dli.s3.desc4': {
        [I18N.ZH]: '深思土壤 共鸣万物',
        [I18N.EN]: 'Think deeply about the soil and resonate with everything',
        [I18N.JP]: '土壌を深く考え、すべてと共鳴する'
    },
    'dli.s3.desc5': {
        [I18N.ZH]: '久炼技艺 潜心呈献',
        [I18N.EN]: 'Long-term training skills',
        [I18N.JP]: '長年の訓練スキル'
    },
    'dli.s3.desc6': {
        [I18N.ZH]: '终就无穷回味',
        [I18N.EN]: 'Finally, there is endless aftertaste',
        [I18N.JP]: '最後に、終わりのない余韻があります'
    },

    'dli.s4.desc1': {
        [I18N.ZH]: '悦享朝晨，赏味西式或日式私厨早餐',
        [I18N.EN]: 'Enjoy the morning and taste the Western or Japanese private chef breakfast',
        [I18N.JP]: '朝を楽しみ、西洋または日本のプライベートシェフの朝食を味わう'
    },
    'dli.s4.desc2': {
        [I18N.ZH]: '珍稀食材，品味私人高定晚宴',
        [I18N.EN]: 'Rare ingredients, taste private high-end dinner',
        [I18N.JP]: '珍しい食材、プライベートな高級ディナーを味わう'
    },
    'dli.s4.tip': {
        [I18N.ZH]: '在您的入住方案中，含前三晚私厨定制晚宴',
        [I18N.EN]: 'In your stay plan, it includes a private chef custom dinner for the first three nights',
        [I18N.JP]: 'あなたの滞在計画では、最初の3泊のプライベートシェフカスタムディナーが含まれています'
    },

    // 预订
    'reserve.cpt1': {
        [I18N.ZH]: '管家将于提交后1个工作日内，以邮件形式与您联系具体事宜',
        [I18N.EN]: 'The butler will contact you by email within 1 working day after submission',
        [I18N.JP]: '執事は提出後1営業日以内にメールでご連絡いたします',
    },
    'reserve.cpt2': {
        [I18N.ZH]: '您也可以拨打预订电话 +81 0136 55 7559',
        [I18N.EN]: 'You can also call the reservation phone +81 0136 55 7559',
        [I18N.JP]: '予約電話+81 0136 55 7559 もご利用いただけます',
    },
    'reserve.cpt3': {
        [I18N.ZH]: '或发送邮件至 info.arcadia@ryowhagroup.com 进行预订',
        [I18N.EN]: 'Or send an email to info.arcadia@ryowhagroup.com to make a reservation',
        [I18N.JP]: 'または、info.arcadia@ryowhagroup.com にメールを送信して予約してください',
    },

    'reserve.form.date': {
        [I18N.ZH]: '入住日期',
        [I18N.EN]: 'Check-in date',
        [I18N.JP]: 'チェックイン日',
    },
    'reserve.form.days': {
        [I18N.ZH]: '入住天数（8天7晚起订）',
        [I18N.EN]: 'Number of days (minimum 8 days 7 nights)',
        [I18N.JP]: '滞在日数（8日7泊以上）',
    },
    'reserve.form.adults': {
        [I18N.ZH]: '成人人数',
        [I18N.EN]: 'Number of adults',
        [I18N.JP]: '大人の数',
    },
    'reserve.form.children': {
        [I18N.ZH]: '儿童人数',
        [I18N.EN]: 'Number of children',
        [I18N.JP]: '子供の数',
    },
    'reserve.form.name': {
        [I18N.ZH]: '联系人',
        [I18N.EN]: 'Contact',
        [I18N.JP]: '連絡先',
    },
    'reserve.form.name.placeholder': {
        [I18N.ZH]: '请输入联系人姓名',
        [I18N.EN]: 'Please enter your contact name',
        [I18N.JP]: '連絡先の名前を入力してください',
    },
    'reserve.form.phone': {
        [I18N.ZH]: '联系电话',
        [I18N.EN]: 'Contact number',
        [I18N.JP]: '電話番号',
    },
    'reserve.form.phone.placeholder': {
        [I18N.ZH]: '请填写国家码+电话号码',
        [I18N.EN]: 'Please fill in the country code + phone number',
        [I18N.JP]: '国番号+電話番号を入力してください',
    },
    'reserve.form.email': {
        [I18N.ZH]: '电子邮箱',
        [I18N.EN]: 'Email',
        [I18N.JP]: 'メール',
    },
    'reserve.form.email.placeholder': {
        [I18N.ZH]: '请输入电子邮箱',
        [I18N.EN]: 'Please enter your email',
        [I18N.JP]: 'メールアドレスを入力してください',
    },
    'reserve.form.notes': {
        [I18N.ZH]: '其他',
        [I18N.EN]: 'Other',
        [I18N.JP]: 'その他',
    },
    'reserve.form.notes.placeholder': {
        [I18N.ZH]: '您的定制化需求',
        [I18N.EN]: 'Your customized needs',
        [I18N.JP]: 'カスタマイズされたニーズ',
    },

    'reserve.policy.title': {
        [I18N.ZH]: '入住政策：',
        [I18N.EN]: 'Check-in policy',
        [I18N.JP]: 'チェックインポリシー',
    },

    'reserve.policy.desc1': {
        [I18N.ZH]: '· 2023年12月1日起开放入住预订，8天7晚起订',
        [I18N.EN]: '· Check-in reservations will be opened from December 1, 2023, with a minimum of 8 days and 7 nights',
        [I18N.JP]: '· 2023年12月1日からチェックイン予約が開始され、最低8日7泊となります',
    },
    'reserve.policy.desc2': {
        [I18N.ZH]: '· 入住时间: 16点后；退房时间: 10点前',
        [I18N.EN]: '· Check-in time: after 16:00; Check-out time: before 10:00',
        [I18N.JP]: '· チェックイン時間：16:00以降；チェックアウト時間：10:00以前',
    },
    'reserve.policy.desc3': {
        [I18N.ZH]: '· 入住人数: 最多 15 位住客 (含最多 12 位成人住客，以及孩童、婴儿、随行人员)',
        [I18N.EN]: '· Number of guests: up to 15 guests (including up to 12 adults, as well as children, infants, and accompanying personnel)',
        [I18N.JP]: '· ゲスト数：最大15名（大人12名、子供、幼児、付添人を含む）',
    },
    'reserve.policy.desc4': {
        [I18N.ZH]: '· 入住人数必须为确认函所示人数，若未经协商超出约定人数，将额外收取人员费用 (超员费为＄300/晚/人，含早餐)',
        [I18N.EN]: '· The number of guests must be the number shown in the confirmation letter. If the number of guests exceeds the agreed number without consultation, an additional personnel fee will be charged (overcrowding fee is $300/night/person, including breakfast)',
        [I18N.JP]: '· ゲスト数は確認書に表示されている数でなければなりません。相談なしにゲスト数が合意数を超える場合は、追加の人員料金が請求されます（超過料金は＄300/泊/人、朝食付き）',
    },
    'reserve.policy.desc5': {
        [I18N.ZH]: '· 全屋室内禁止吸烟',
        [I18N.EN]: '· No smoking in the whole house',
        [I18N.JP]: '· 全館禁煙',
    },
    'reserve.policy.desc6': {
        [I18N.ZH]: '· 谢绝携带宠物入住',
        [I18N.EN]: '· No pets allowed',
        [I18N.JP]: '· ペット禁止',
    },

    'reserve.form.name.error': {
        [I18N.ZH]: '请输入联系人姓名',
        [I18N.EN]: 'Please enter your contact name',
        [I18N.JP]: '連絡先の名前を入力してください',
    },
    'reserve.form.phone.error': {
        [I18N.ZH]: '请输入联系电话',
        [I18N.EN]: 'Please enter your contact number',
        [I18N.JP]: '連絡先の電話番号を入力してください',
    },
    'reserve.form.email.error': {
        [I18N.ZH]: '请输入电子邮箱',
        [I18N.EN]: 'Please enter your email',
        [I18N.JP]: 'メールアドレスを入力してください',
    },
    'reserve.form.success.cpt': {
        [I18N.ZH]: '提交成功',
        [I18N.EN]: 'Submit successfully',
        [I18N.JP]: '正常に提出されました',
    },
    'reserve.form.success.desc': {
        [I18N.ZH]: '我们的管家将在1个工作日内与您联系',
        [I18N.EN]: 'Our butler will contact you within 1 working day',
        [I18N.JP]: '私たちの執事は1営業日以内にあなたに連絡します',
    }
}
