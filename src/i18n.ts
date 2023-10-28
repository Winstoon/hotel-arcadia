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

    'submit': {
        [I18N.ZH]: '提交',
        [I18N.EN]: 'Submit',
        [I18N.JP]: '提出する',
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
        [I18N.ZH]: '距离札幌新千岁机场（New Chitose Airport） 约2小时车程',
        [I18N.EN]: 'About 2 hours drive from New Chitose Airport in Sapporo',
        [I18N.JP]: '札幌の新千歳空港から約2時間のドライブ',
    },
    'home.s6.desc2': {
        [I18N.ZH]: '距离北海道札幌市(Sapporo, Hokkaido) 约2小时车程',
        [I18N.EN]: 'About 2 hours drive from Sapporo, Hokkaido',
        [I18N.JP]: '北海道札幌から約2時間のドライブ',
    },
    'home.s6.desc3': {
        [I18N.ZH]: '距离比罗夫村中心（Central Hirafu Village) 步行约5分钟',
        [I18N.EN]: 'About 5 minutes walk from Central Hirafu Village',
        [I18N.JP]: '比羅夫村の中心から徒歩約5分',
    },
    'home.s6.desc4': {
        [I18N.ZH]: '距离家庭滑雪缆车（Ace Family Chair Lift） 车程约5分钟',
        [I18N.EN]: 'About 5 minutes drive from the family ski lift (Ace Family Chair Lift)',
        [I18N.JP]: '家族スキーリフト（エースファミリーチェアリフト）から約5分のドライブ',
    },
    'home.s6.desc5': {
        [I18N.ZH]: '距离Yukoro温泉(2024年12月开业)20米 步行约1分钟',
        [I18N.EN]: 'About 20 meters from Yukoro Onsen (opening in December 2024), about 1 minute walk',
        [I18N.JP]: '湯コロ温泉（2024年12月オープン）から約20メートル、徒歩約1分',
    },
    
    'home.s6.desc6': {
        [I18N.ZH]: '地址：〒044-0036 日本国北海道虻田郡倶知安町南 6 条西 1 丁目 5 番地 1',
        [I18N.EN]: 'Address: 〒044-0036 1-5-1 Nishi 6-jo Minami, Kutchan-cho, Abuta-gun, Hokkaido, Japan',
        [I18N.JP]: '住所：〒044-0036 北海道虻田郡倶知安町南6条西1丁目5番地1',
    },
    'home.s6.desc7': {
        [I18N.ZH]: '查看地图>',
        [I18N.EN]: 'View map>',
        [I18N.JP]: '地図を見る>',
    },
    'home.s6.desc8': {
        [I18N.ZH]: '电话：+81 136 55 8917 （日本时间 周一至周五 9:00-18:00）',
        [I18N.EN]: 'Phone: +81 136 55 8917 (Monday to Friday 9:00-18:00 Japan time)',
        [I18N.JP]: '電話：+81 136 55 8917（月曜日から金曜日9:00〜18:00日本時間）',
    },
    'home.s6.desc9': {
        [I18N.ZH]: '传真：+81 136 55 8927',
        [I18N.EN]: 'Fax: +81 136 55 8927',
        [I18N.JP]: 'FAX：+81 136 55 8927',
    },
    'home.s6.desc10': {
        [I18N.ZH]: '邮箱：info@ryowhagroup.com',
        [I18N.EN]: 'Email: info@ryowhagroup.com',
        [I18N.JP]: 'メール：info@ryowhagroup.com'
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
        [I18N.ZH]: 'Riccardo Rubellia 倾心之作',
        [I18N.EN]: 'Riccardo Rubellia\'s masterpiece',
        [I18N.JP]: 'Riccardo Rubelliaの傑作',
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
        [I18N.ZH]: '独立双层宅邸',
        [I18N.EN]: 'Independent two-story mansion',
        [I18N.JP]: '独立した2階建ての邸宅',
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
        [I18N.ZH]: '独立的双层宅邸',
        [I18N.EN]: 'Independent two-story mansion',
        [I18N.JP]: '独立した2階建ての邸宅',
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
    'res.s3.tip1': {
        [I18N.ZH]: '· 智能 Apple TV 和 DEVIALET 音响',
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
        [I18N.ZH]: 'Master Room I',
        [I18N.EN]: 'Master Room I',
        [I18N.JP]: 'Master Room I',
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
        [I18N.ZH]: 'Master Room II',
        [I18N.EN]: 'Master Room II',
        [I18N.JP]: 'Master Room II',
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
        [I18N.ZH]: '· 意大利顶奢品牌 Agape 浴缸',
        [I18N.EN]: '· Italian top luxury brand Agape bathtub',
        [I18N.JP]: '· イタリアのトップラグジュアリーブランドAgapeバスタブ',
    },

    'res.s5.image1.cpt': {
        [I18N.ZH]: '客房 III',
        [I18N.EN]: 'Guest Room III',
        [I18N.JP]: 'ゲストルームIII',
    },
    'res.s5.image1.desc1': {
        [I18N.ZH]: '25平方米空间，全屋地暖',
        [I18N.EN]: '25 square meters of space, full house floor heating',
        [I18N.JP]: '25平方メートルのスペース、フルハウス床暖房',
    },
    'res.s5.image1.desc2': {
        [I18N.ZH]: 'VOLA 丹麦顶奢卫浴设施',
        [I18N.EN]: 'VOLA Danish top luxury bathroom facilities',
        [I18N.JP]: 'VOLAデンマークのトップラグジュアリーバスルーム設備',
    },

    'res.s5.image2.cpt': {
        [I18N.ZH]: '客房 IV',
        [I18N.EN]: 'Guest Room IV',
        [I18N.JP]: 'ゲストルームIV',
    },
    'res.s5.image2.desc1': {
        [I18N.ZH]: '36平方米空间，全屋地暖',
        [I18N.EN]: '36 square meters of space, full house floor heating',
        [I18N.JP]: '36平方メートルのスペース、フルハウス床暖房',
    },
    'res.s5.image2.desc2': {
        [I18N.ZH]: 'King Size 双人床，步入式衣帽间',
        [I18N.EN]: 'King Size double bed, walk-in closet',
        [I18N.JP]: 'キングサイズのダブルベッド、ウォークインクローゼット',
    },

    'res.s5.image3.cpt': {
        [I18N.ZH]: '客房 V',
        [I18N.EN]: 'Guest Room V',
        [I18N.JP]: 'ゲストルームV',
    },
    'res.s5.image3.desc1': {
        [I18N.ZH]: '36平方米空间，全屋地暖',
        [I18N.EN]: '36 square meters of space, full house floor heating',
        [I18N.JP]: '36平方メートルのスペース、フルハウス床暖房',
    },
    'res.s5.image3.desc2': {
        [I18N.ZH]: 'King Size 双人床，步入式衣帽间',
        [I18N.EN]: 'King Size double bed, walk-in closet',
        [I18N.JP]: 'キングサイズのダブルベッド、ウォークインクローゼット',
    },

    'res.s5.image4.cpt': {
        [I18N.ZH]: '客房 VI',
        [I18N.EN]: 'Guest Room VI',
        [I18N.JP]: 'ゲストルームVI',
    },
    'res.s5.image4.desc1': {
        [I18N.ZH]: '28平方米空间，全屋地暖',
        [I18N.EN]: '28 square meters of space, full house floor heating',
        [I18N.JP]: '28平方メートルのスペース、フルハウス床暖房',
    },
    'res.s5.image4.desc2': {
        [I18N.ZH]: 'King Size 双人床',
        [I18N.EN]: 'King Size double bed',
        [I18N.JP]: 'キングサイズのダブルベッド',
    },

    'res.s5.image5.cpt': {
        [I18N.ZH]: '高低床房',
        [I18N.EN]: 'High and low bed room',
        [I18N.JP]: '高低ベッドルーム',
    },
    'res.s5.image5.desc1': {
        [I18N.ZH]: '位于地下一层，设有高低床',
        [I18N.EN]: 'Located on the first floor, with high and low beds',
        [I18N.JP]: '地下1階に位置し、高低ベッドがあります',
    },
    'res.s5.image5.desc2': {
        [I18N.ZH]: '有序格局，与主人区私密分隔',
        [I18N.EN]: 'Ordered pattern, private separation from the master area',
        [I18N.JP]: '整然としたパターン、マスターエリアからのプライベートセパレーション',
    },

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
        [I18N.ZH]: '全套 Technogym 设备',
        [I18N.EN]: 'Full set of Technogym equipment',
        [I18N.JP]: 'テクノジムの完全なセット',
    },
    'res.s6.desc12': {
        [I18N.ZH]: '满足多样体调需求',
        [I18N.EN]: 'Meet the needs of various body adjustments',
        [I18N.JP]: 'さまざまな体の調整ニーズに対応',
    },
    'res.s6.tip': {
        [I18N.ZH]: '· 功能设施亦包含中西厨房、娱乐室、洗衣房，尽享便捷无缝的居住体验',
        [I18N.EN]: '· Functional facilities also include Chinese and Western kitchens, entertainment rooms, laundry rooms, and enjoy a convenient and seamless living experience',
        [I18N.JP]: '· 機能的な施設には、中国と西洋のキッチン、エンターテイメントルーム、洗濯室も含まれており、便利でシームレスな生活体験をお楽しみいただけます',
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
        [I18N.ZH]: 'Master Room I: 65 平方米，配备 King Size 双人床',
        [I18N.EN]: 'Master Room I: 65 square meters, equipped with King Size double bed',
        [I18N.JP]: 'Master Room I: 65平方メートル、King Sizeダブルベッド付き',
    },
    'res.s7.cpt2.2': {
        [I18N.ZH]: 'Master Room II: 55 平方米，配备 King Size 双人床',
        [I18N.EN]: 'Master Room II: 55 square meters, equipped with King Size double bed',
        [I18N.JP]: 'Master Room II: 55平方メートル、King Sizeダブルベッド付き',
    },
    'res.s7.cpt2.3': {
        [I18N.ZH]: '客房 III: 25 平方米，配备 King Size 双人床',
        [I18N.EN]: 'Guest Room III: 25 square meters, equipped with King Size double bed',
        [I18N.JP]: 'ゲストルームIII: 25平方メートル、King Sizeダブルベッド付き',
    },
    'res.s7.cpt2.4': {
        [I18N.ZH]: '客房 IV: 36 平方米，配备 King Size 双人床',
        [I18N.EN]: 'Guest Room IV: 36 square meters, equipped with King Size double bed',
        [I18N.JP]: 'ゲストルームIV: 36平方メートル、King Sizeダブルベッド付き',
    },
    'res.s7.cpt2.5': {
        [I18N.ZH]: '客房 V: 36 平方米，配备 King Size 双人床',
        [I18N.EN]: 'Guest Room V: 36 square meters, equipped with King Size double bed',
        [I18N.JP]: 'ゲストルームV: 36平方メートル、King Sizeダブルベッド付き',
    },
    'res.s7.cpt2.6': {
        [I18N.ZH]: '客房 VI: 28 平方米，配备 King Size 双人床',
        [I18N.EN]: 'Guest Room VI: 28 square meters, equipped with King Size double bed',
        [I18N.JP]: 'ゲストルームVI: 28平方メートル、King Sizeダブルベッド付き',
    },
    'res.s7.cpt2.7': {
        [I18N.ZH]: '高低床房: 位于地下一层，配备高低床',
        [I18N.EN]: 'High and low bed room: located on the first floor, with high and low beds',
        [I18N.JP]: '高低ベッドルーム：地下1階に位置し、高低ベッドがあります',
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
        [I18N.ZH]: '全屋卫浴 (VOLA)、全屋坐便 (卫洗丽 Washlet)',
        [I18N.EN]: 'Full house bathroom (VOLA), full house toilet (Washlet)',
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
        [I18N.ZH]: '全套 Technogym 设备',
        [I18N.EN]: 'Full set of Technogym equipment',
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
        [I18N.ZH]: '洗碗机 (嘉格纳 GAGGENAU)、内置式烤箱、蒸箱 (米勒 Miele)、内置冰箱 (利勃海尔 Liebherr)、咖啡机 (Smeg)',
        [I18N.EN]: 'Dishwasher (GAGGENAU), built-in oven, steamer (Miele), built-in refrigerator (Liebherr), coffee machine (Smeg)',
        [I18N.JP]: '食器洗い機（GAGGENAU）、ビルトインオーブン、スチーマー（Miele）、ビルトイン冷蔵庫（Liebherr）、コーヒーマシン（Smeg）',
    },
    'res.s7.cpt3.11': {
        [I18N.ZH]: '洗衣房',
        [I18N.EN]: 'Laundry room',
        [I18N.JP]: '洗濯室',
    },
    'res.s7.cpt3.11.hover': {
        [I18N.ZH]: '独立洗衣房、烘干机 (米勒 Miele)',
        [I18N.EN]: 'Independent laundry room, dryer (Miele)',
        [I18N.JP]: '独立した洗濯室、乾燥機（Miele）',
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
        [I18N.ZH]: 'DEVIALET 音响',
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
        [I18N.ZH]: '全天专属管家',
        [I18N.EN]: 'Exclusive butler all day',
        [I18N.JP]: '一日中専属の執事',
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
        [I18N.ZH]: '免费早餐',
        [I18N.EN]: 'Free breakfast',
        [I18N.JP]: '無料朝食',
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
        [I18N.ZH]: '在您的入住方案中，含前三晚私厨定制晚餐；如需提供其他入住日的晚餐服务，将另行收取费用（需入住前提前预定）',
        [I18N.EN]: 'In your stay plan, it includes a private chef custom dinner for the first three nights; if you need to provide dinner service for other stay days, an additional fee will be charged (advance reservation is required before check-in)',
        [I18N.JP]: 'あなたの滞在計画では、最初の3泊のプライベートシェフカスタムディナーが含まれています。他の滞在日のディナーサービスを提供する必要がある場合は、追加料金が請求されます（チェックイン前に事前予約が必要です）',
    },
    'res.s7.cpt4.6': {
        [I18N.ZH]: '水吧畅饮',
        [I18N.EN]: 'Free drinks at the bar',
        [I18N.JP]: 'バーでの無料ドリンク',
    },
    'res.s7.cpt4.7': {
        [I18N.ZH]: '客房清洁服务',
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
        [I18N.EN]: 'Night bed service',
        [I18N.JP]: 'ナイトベッドサービス',
    },
    'res.s7.cpt4.9': {
        [I18N.ZH]: '多语言服务',
        [I18N.EN]: 'Multilingual service',
        [I18N.JP]: '多言語サービス',
    },
    'res.s7.cpt4.10': {
        [I18N.ZH]: '免费 Wi-Fi',
        [I18N.EN]: 'Free Wi-Fi',
        [I18N.JP]: '無料Wi-Fi',
    },
    



    // 预订

    'reserve.cpt1': {
        [I18N.ZH]: '管家将于提交后1个工作日内，以邮件形式与您联系具体事宜（日本时间 周一至周五 9:00-18:00）',
        [I18N.EN]: 'The butler will contact you by email within 1 working day after submission (Monday to Friday 9:00-18:00 Japan time)',
        [I18N.JP]: '執事は提出後1営業日以内にメールでご連絡いたします（月曜日から金曜日9:00〜18:00日本時間）',
    },
    'reserve.cpt2': {
        [I18N.ZH]: '您也可以拨打预定电话 +81 136 55 8917（日本时间 周一至周五 9:00-18:00）',
        [I18N.EN]: 'You can also call the reservation phone +81 136 55 8917 (Monday to Friday 9:00-18:00 Japan time)',
        [I18N.JP]: '予約電話+81 136 55 8917（月曜日から金曜日9:00〜18:00日本時間）もご利用いただけます',
    },
    'reserve.cpt3': {
        [I18N.ZH]: '或发送邮件至 info@ryowhagroup.com 进行预订',
        [I18N.EN]: 'Or send an email to info@ryowhagroup.com to make a reservation',
        [I18N.JP]: 'または、info@ryowhagroup.com にメールを送信して予約してください',
    },

    'reserve.form.date': {
        [I18N.ZH]: '入住日期',
        [I18N.EN]: 'Check-in date',
        [I18N.JP]: 'チェックイン日',
    },
    'reserve.form.days': {
        [I18N.ZH]: '入住天数（5晚起订）',
        [I18N.EN]: 'Length of stay (5 nights minimum)',
        [I18N.JP]: '滞在期間（5泊以上）',
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
        [I18N.ZH]: '2023年12月1日起开放入住预定，5晚起订',
        [I18N.EN]: 'Open for reservation from December 1, 2023, minimum 5 nights',
        [I18N.JP]: '2023年12月1日から予約可能、最低5泊',
    },
    'reserve.policy.desc2': {
        [I18N.ZH]: '入住时间: 14点后；退房时间: 11点前',
        [I18N.EN]: 'Check-in time: after 14:00; Check-out time: before 11:00',
        [I18N.JP]: 'チェックイン時間：14:00以降；チェックアウト時間：11:00以前',
    },
    'reserve.policy.desc3': {
        [I18N.ZH]: '入住人数: 最多 15 位住客 (含最多 12 位成人住客，以及孩童、婴儿、随行人员)',
        [I18N.EN]: 'Number of guests: up to 15 guests (including up to 12 adults, as well as children, infants, and accompanying personnel)',
        [I18N.JP]: 'ゲスト数：最大15名（大人12名、子供、幼児、付添人を含む）',
    },
    'reserve.policy.desc4': {
        [I18N.ZH]: '入住人数必须为确认函所示人数，若未经协商超出约定人数，将额外收取人员费用 (超员费为＄300/晚/人，含早餐)',
        [I18N.EN]: 'The number of guests must be the number shown in the confirmation letter. If the number of guests exceeds the agreed number without consultation, an additional personnel fee will be charged (overcrowding fee is $300/night/person, including breakfast)',
        [I18N.JP]: 'ゲスト数は確認書に表示されている数でなければなりません。相談なしにゲスト数が合意数を超える場合は、追加の人員料金が請求されます（超過料金は＄300/泊/人、朝食付き）',
    },
    'reserve.policy.desc5': {
        [I18N.ZH]: '全屋室内禁止吸烟',
        [I18N.EN]: 'No smoking in the whole house',
        [I18N.JP]: '全館禁煙',
    },
    'reserve.policy.desc6': {
        [I18N.ZH]: '谢绝携带宠物入住',
        [I18N.EN]: 'No pets allowed',
        [I18N.JP]: 'ペット禁止',
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
